import React from "react";

export default function Dashboard() {
  const links = [
    { nome: "Valorant", url: "https://playvalorant.com/pt-br/" },
    { nome: "League of Legends", url: "https://www.leagueoflegends.com/pt-br/" },
    { nome: "Minecraft", url: "https://www.minecraft.net/pt-br/login" },
    { nome: "Counter-Strike 2", url: "https://store.steampowered.com/app/730/CounterStrike_2/" },
    { nome: "Roblox", url: "https://www.roblox.com/pt/login/" },
    { nome: "Overwatch 2", url: "https://overwatch.blizzard.com/pt-br/" },
    { nome: "Call of Duty Warzone", url: "https://www.callofduty.com/br/pt/playnow/warzone" },
    { nome: "World of Warcraft", url: "https://worldofwarcraft.blizzard.com/pt-br/" },
    { nome: "Free Fire", url: "https://ff.garena.com/pt/" }
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 30, background: "#0f172a", color: "#e2e8f0" }}>
      <h1>Dashboard de Jogos</h1>
      <p>Clique em qualquer jogo para abrir o site oficial.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
        {links.map(link => (
          <button
            key={link.url}
            onClick={() => window.open(link.url, "_blank")}
            style={{ background: "#3b82f6", color: "#fff", border: "none", borderRadius: 8, padding: "10px 15px", fontWeight: "bold", cursor: "pointer" }}
          >
            {link.nome}
          </button>
        ))}
      </div>
    </div>
  );
}
