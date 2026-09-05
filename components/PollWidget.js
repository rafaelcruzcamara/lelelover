"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

function emptyVotes(options) {
  return Object.fromEntries(options.map((o) => [o.id, 0]));
}

export default function PollWidget({ id, question, options }) {
  const storageKey = `fclube-poll-${id}`;
  const [votes, setVotes] = useState(() => emptyVotes(options));
  const [votedFor, setVotedFor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [voting, setVoting] = useState(false);

  useEffect(() => {
    let cancelled = false;

    try {
      setVotedFor(localStorage.getItem(storageKey));
    } catch {
      // sem localStorage disponível, segue sem marcar voto anterior
    }

    async function loadVotes() {
      const { data, error } = await supabase
        .from("poll_options")
        .select("option_id, votes")
        .eq("poll_id", id);

      if (!cancelled && !error && data) {
        const tally = emptyVotes(options);
        for (const row of data) tally[row.option_id] = row.votes;
        setVotes(tally);
      }
      if (!cancelled) setLoading(false);
    }

    loadVotes();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function vote(optionId) {
    if (votedFor || voting) return;
    setVoting(true);

    setVotes((prev) => ({ ...prev, [optionId]: prev[optionId] + 1 }));
    setVotedFor(optionId);
    try {
      localStorage.setItem(storageKey, optionId);
    } catch {
      // sem localStorage disponível, tudo bem, só não vai lembrar o voto
    }

    const { error } = await supabase.rpc("cast_vote", {
      p_poll_id: id,
      p_option_id: optionId,
    });

    if (!error) {
      const { data } = await supabase
        .from("poll_options")
        .select("option_id, votes")
        .eq("poll_id", id);
      if (data) {
        const tally = emptyVotes(options);
        for (const row of data) tally[row.option_id] = row.votes;
        setVotes(tally);
      }
    }
    setVoting(false);
  }

  const total = Object.values(votes).reduce((a, b) => a + b, 0) || 1;

  return (
    <div className="bg-chalk text-ink border-[3px] border-ink shadow-hard-cyan p-5 mb-7 rotate-[0.6deg]">
      <span className="inline-block font-pixel text-[8px] uppercase bg-cyan text-ink border-2 border-ink px-2 py-1 mb-3 -rotate-1">
        Enquete da semana
      </span>
      <h3 className="font-display text-base mb-4 leading-snug">{question}</h3>
      <div className="space-y-3">
        {options.map((opt) => {
          const pct = Math.round((votes[opt.id] / total) * 100);
          const isPick = votedFor === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => vote(opt.id)}
              disabled={!!votedFor || loading}
              className="w-full text-left disabled:cursor-default"
            >
              <div className="flex items-start justify-between text-xs mb-1 gap-2">
                <span className={`break-words ${isPick ? "font-bold text-magenta" : ""}`}>
                  {opt.label}
                  {isPick ? " ✓" : ""}
                </span>
                {votedFor && (
                  <span className="font-pixel text-[9px] shrink-0">{pct}%</span>
                )}
              </div>
              <div className="h-4 border-2 border-ink bg-white overflow-hidden">
                <div
                  className="h-full bg-magenta transition-all duration-500"
                  style={{ width: votedFor ? `${pct}%` : "0%" }}
                />
              </div>
            </button>
          );
        })}
      </div>
      <p className="font-pixel text-[8px] text-ink/50 mt-4">
        {loading
          ? "carregando votos..."
          : votedFor
          ? `valeu pelo voto — ${total} voto${total === 1 ? "" : "s"} de todos os LeleLovers`
          : `${total} voto${total === 1 ? "" : "s"} até agora — escolhe uma opção`}
      </p>
    </div>
  );
}
