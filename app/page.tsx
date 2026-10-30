"use client";

import { useState } from "react";

type Panel = "create" | "join" | "practice" | null;

export default function Home() {
  const [panel, setPanel] = useState<Panel>(null);
  const [roomCode, setRoomCode] = useState("");
  const [nickname, setNickname] = useState("");
  const [notice, setNotice] = useState("");

  function submitPanel() {
    if (panel === "join" && roomCode.trim().length < 4) {
      setNotice("Enter a valid room code to continue.");
      return;
    }
    if (!nickname.trim()) {
      setNotice("Enter your player nickname to continue.");
      return;
    }
    setNotice("Your game setup is ready for the next development stage. Multiplayer services are not connected yet.");
  }

  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand"><div className="brand-mark">⚡</div> QUIZ <span style={{color:"#7e9cff",marginLeft:-8}}>BATTLE</span></div>
        <div className="pill">● Arena is getting ready</div>
      </header>

      <section className="hero">
        <div>
          <div className="eyebrow">Think fast. Play smart. Win together.</div>
          <h1>ENTER THE<br/><span>KNOWLEDGE ARENA.</span></h1>
          <p className="lead">Challenge your friends, sharpen your mind, and climb the leaderboard. Every question is a new battle. Every second counts.</p>
        </div>
        <div className="hero-art" aria-label="Quiz Battle arena illustration"><div className="orb">⚡</div></div>
      </section>

      <section>
        <div className="section-head"><h2>Choose your battle</h2><p>Pick a mode to get started</p></div>
        <div className="mode-grid">
          <button className="mode-card" onClick={() => {setPanel("create");setNotice("");}}>
            <div className="mode-icon">⚔️</div><h3>Create a room</h3><p>Set up a private arena and invite 1–7 friends to compete.</p>
          </button>
          <button className="mode-card" onClick={() => {setPanel("join");setNotice("");}}>
            <div className="mode-icon">🚀</div><h3>Join a battle</h3><p>Enter a room code and jump into a live multiplayer match.</p>
          </button>
          <button className="mode-card" onClick={() => {setPanel("practice");setNotice("");}}>
            <div className="mode-icon">🎯</div><h3>Solo practice</h3><p>Train at your own pace with 15 timed questions and track your best score.</p>
          </button>
        </div>
      </section>

      <section className="action-panel">
        <div><h3>Ready to prove what you know?</h3><p>Six categories · English + हिन्दी · 15 questions per match</p></div>
        <button className="primary" onClick={() => {setPanel("practice");setNotice("");}}>Enter the arena ↗</button>
      </section>

      <div className="stats">
        <div className="stat"><strong>2–8</strong><span>Players per room</span></div>
        <div className="stat"><strong>15</strong><span>Questions per match</span></div>
        <div className="stat"><strong>30 sec</strong><span>Per question</span></div>
      </div>

      <footer className="footer">QUIZ BATTLE · THE ARENA IS YOURS</footer>

      {panel && <div className="modal-backdrop" role="presentation" onClick={() => setPanel(null)}>
        <section className="modal" role="dialog" aria-modal="true" aria-labelledby="dialog-title" onClick={e => e.stopPropagation()}>
          <h2 id="dialog-title">{panel === "create" ? "Create your arena" : panel === "join" ? "Join a battle" : "Solo practice"}</h2>
          <p>{panel === "create" ? "Choose your player name. Room creation will be enabled when the live game backend is connected." : panel === "join" ? "Enter your room code and player name to get ready." : "Practice mode will use 15 questions, a 30-second timer, and progressive difficulty."}</p>
          {panel === "join" && <input aria-label="Room code" placeholder="Enter room code" value={roomCode} onChange={e => setRoomCode(e.target.value.toUpperCase())} maxLength={8}/>}
          <input aria-label="Nickname" placeholder="Your player nickname" value={nickname} onChange={e => setNickname(e.target.value)} maxLength={20}/>
          {notice && <p role="status" style={{color:"#7fdcff"}}>{notice}</p>}
          <div className="modal-actions">
            <button className="secondary" onClick={() => setPanel(null)}>Close</button>
            <button className="primary" onClick={submitPanel}>Continue</button>
          </div>
        </section>
      </div>}
    </main>
  );
}