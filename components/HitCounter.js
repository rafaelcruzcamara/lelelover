"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const SESSION_FLAG = "fclube-counted";

export default function HitCounter() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      let alreadyCounted = false;
      try {
        alreadyCounted = sessionStorage.getItem(SESSION_FLAG) === "1";
      } catch {
        // sem sessionStorage, segue sem lembrar entre navegações
      }

      if (alreadyCounted) {
        const { data } = await supabase
          .from("site_stats")
          .select("value")
          .eq("id", "visits")
          .single();
        if (!cancelled && data) setValue(data.value);
        return;
      }

      const { data, error } = await supabase.rpc("increment_stat", {
        p_id: "visits",
      });
      if (!cancelled && !error) {
        setValue(data);
        try {
          sessionStorage.setItem(SESSION_FLAG, "1");
        } catch {
          // sem sessionStorage disponível, tudo bem
        }
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const digits = String(value ?? 0).padStart(6, "0").split("");

  return (
    <div className="flex items-center justify-center gap-3 py-3">
      <span className="font-pixel text-[8px] text-chalk/60 uppercase">
        Visitante Nº
      </span>
      <div className="flex bg-ink border-2 border-ink shadow-hard-sm">
        {digits.map((d, i) => (
          <span
            key={i}
            className="font-pixel text-sun text-xs w-5 h-7 flex items-center justify-center border-r border-chalk/10 last:border-r-0"
          >
            {value === null ? "-" : d}
          </span>
        ))}
      </div>
    </div>
  );
}
