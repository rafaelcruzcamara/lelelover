"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

function formatWhen(iso) {
  const date = new Date(iso);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadEntries() {
      const { data, error } = await supabase
        .from("guestbook_entries")
        .select("id, name, message, created_at")
        .order("created_at", { ascending: false })
        .limit(50);

      if (!cancelled) {
        if (!error && data) setEntries(data);
        setLoading(false);
      }
    }

    loadEntries();
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !message.trim() || sending) return;

    setSending(true);
    setError("");

    const { data, error } = await supabase
      .from("guestbook_entries")
      .insert({ name: name.trim(), message: message.trim() })
      .select("id, name, message, created_at")
      .single();

    if (error) {
      setError("Não rolou mandar o recado — tenta de novo daqui a pouco.");
    } else {
      setEntries((prev) => [data, ...prev]);
      setName("");
      setMessage("");
    }
    setSending(false);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-chalk text-ink border-[3px] border-ink shadow-hard p-5 mb-8 rotate-[-0.5deg]"
      >
        <h2 className="font-display text-lg mb-4">Deixa seu recado</h2>

        <label className="block font-pixel text-[8px] uppercase text-ink/60 mb-1.5">
          Seu nome
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={40}
          required
          placeholder="Como quer assinar?"
          className="w-full border-2 border-ink bg-white px-3 py-2 text-sm mb-4 focus:outline-none focus:border-magenta"
        />

        <label className="block font-pixel text-[8px] uppercase text-ink/60 mb-1.5">
          Recado
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={280}
          required
          rows={3}
          placeholder="Manda uma mensagem pro mural..."
          className="w-full border-2 border-ink bg-white px-3 py-2 text-sm mb-2 resize-none focus:outline-none focus:border-magenta"
        />
        <div className="font-pixel text-[8px] text-ink/40 text-right mb-4">
          {message.length}/280
        </div>

        {error && (
          <p className="font-pixel text-[8px] text-magenta mb-3">{error}</p>
        )}

        <button
          type="submit"
          disabled={sending}
          className="w-full bg-magenta text-chalk font-display text-sm border-[3px] border-ink shadow-hard-sm py-2.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all disabled:opacity-60"
        >
          {sending ? "Mandando..." : "Deixar recado"}
        </button>
      </form>

      {loading ? (
        <p className="font-pixel text-[9px] text-chalk/50 uppercase">
          carregando recados...
        </p>
      ) : entries.length === 0 ? (
        <p className="font-pixel text-[9px] text-chalk/50 uppercase">
          ninguém deixou recado ainda — seja o primeiro
        </p>
      ) : (
        <div className="space-y-4">
          {entries.map((entry, i) => (
            <div
              key={entry.id}
              className={`bg-chalk text-ink border-[3px] border-ink shadow-hard-sm p-4 ${
                i % 2 === 0 ? "rotate-1" : "-rotate-1"
              }`}
            >
              <div className="flex justify-between items-baseline gap-3 mb-1.5">
                <span className="font-display text-sm break-words min-w-0">
                  {entry.name}
                </span>
                <span className="font-pixel text-[7px] text-ink/40 shrink-0">
                  {formatWhen(entry.created_at)}
                </span>
              </div>
              <p className="text-sm text-ink/80 leading-relaxed break-words">
                {entry.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
