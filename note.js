// server.js
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const users = [];

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: "Campos obrigatórios" });
  const exists = users.find(u => u.username === username);
  if (exists) return res.status(409).json({ error: "Usuário já existe" });

  const hashed = await bcrypt.hash(password, 10);
  users.push({ username, password: hashed });
  res.json({ message: "Usuário registrado com sucesso!" });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ error: "Usuário não encontrado" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ error: "Senha incorreta" });

  const token = jwt.sign({ username }, "segredo-super-seguro", { expiresIn: "1h" });
  res.json({ message: "Login realizado!", token });
});

function auth(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const [, token] = authHeader.split(" ");
  if (!token) return res.status(401).json({ error: "Token ausente" });
  try {
    jwt.verify(token, "segredo-super-seguro");
    next();
  } catch {
    res.status(401).json({ error: "Token inválido/expirado" });
  }
}

app.get("/dashboard", auth, (req, res) => {
  res.json({
    jogos: [
      { nome: "Valorant", link: "https://playvalorant.com/pt-br/" },
      { nome: "League of Legends", link: "https://www.leagueoflegends.com/pt-br/" },
      { nome: "Minecraft", link: "https://www.minecraft.net/pt-br/login" },
      { nome: "Counter-Strike 2", link: "https://store.steampowered.com/app/730/CounterStrike_2/" },
      { nome: "Roblox", link: "https://www.roblox.com/pt/login/" },
      { nome: "Overwatch 2", link: "https://overwatch.blizzard.com/pt-br/" },
      { nome: "Call of Duty Warzone", link: "https://www.callofduty.com/br/pt/playnow/warzone" },
      { nome: "World of Warcraft", link: "https://worldofwarcraft.blizzard.com/pt-br/" },
      { nome: "Free Fire", link: "https://ff.garena.com/pt/" }
    ]
  });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
