<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  
</head>
<body>
  <h1>🎮 Gerenciador de Contas de Jogos com Favoritos e Histórico</h1>
  <p>Este projeto é uma aplicação web simples e intuitiva que permite ao usuário gerenciar links de acesso rápido para jogos online, salvar seus favoritos e registrar o histórico de acessos.</p>

  <h2>📦 Estrutura do Projeto</h2>
  <table>
    <tr>
      <th>Página</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td><code>front_end.html</code></td>
      <td>Página principal com cards dos jogos, botões de acesso, favoritos e tema</td>
    </tr>
    <tr>
      <td><code>favoritos.html</code></td>
      <td>Lista dos jogos favoritados com botões para jogar e remover</td>
    </tr>
    <tr>
      <td><code>historico.html</code></td>
      <td>Lista dos jogos acessados recentemente com opção de limpar histórico</td>
    </tr>
  </table>

  <h2>🧠 Funcionalidades</h2>
  <h3>✅ Página principal (<code>index.html</code>)</h3>
  <ul>
    <li>Exibe cards com imagem, nome e botões de ação para cada jogo</li>
    <li>Botão "Abrir" abre o jogo em nova aba e salva no histórico</li>
    <li>Botão "Favoritar" salva o jogo nos favoritos</li>
    <li>Campo de pesquisa filtra os jogos dinamicamente</li>
    <li>Botão de alternância de tema (claro/escuro)</li>
  </ul>

  <h3>⭐ Página de favoritos (<code>favoritos.html</code>)</h3>
  <ul>
    <li>Lista os jogos salvos como favoritos</li>
    <li>Botão "Jogar" abre o jogo correspondente</li>
    <li>Botão "Remover" exclui o jogo dos favoritos</li>
  </ul>

  <h3>📜 Página de histórico (<code>historico.html</code>)</h3>
  <ul>
    <li>Lista os jogos acessados via botão "Abrir"</li>
    <li>Botão "Jogar" abre o jogo novamente</li>
    <li>Botão "Limpar histórico" remove todos os registros</li>
  </ul>

  <h2>🛠️ Tecnologias Utilizadas</h2>
  <ul>
    <li><strong>HTML5</strong>: Estrutura das páginas</li>
    <li><strong>CSS3</strong>: Estilização responsiva e temas</li>
    <li><strong>JavaScript (Vanilla)</strong>: Manipulação de DOM, localStorage e interações</li>
  </ul>

  <h2>📂 Organização dos Dados</h2>
  <p>Os dados são armazenados localmente no navegador usando <code>localStorage</code>:</p>
  <ul>
    <li><code>favorites</code>: array de nomes dos jogos favoritados</li>
    <li><code>history</code>: array de nomes dos jogos acessados</li>
  </ul>

  <h2>🚀 Como Usar</h2>
  <ol>
    <li>Abra o <code>index.html</code> em seu navegador</li>
    <li>Clique em "Abrir" para acessar um jogo e salvar no histórico</li>
    <li>Clique em "Favoritar" para salvar nos favoritos</li>
    <li>Use os botões de navegação para acessar <code>favoritos.html</code> ou <code>historico.html</code></li>
    <li>Na página de favoritos, clique em "Jogar" ou "Remover"</li>
    <li>Na página de histórico, clique em "Jogar" ou "Limpar histórico"</li>
  </ol>

  <h2>🎨 Alternância de Tema</h2>
  <p>O botão 🌙/☀️ alterna entre tema escuro e claro. A classe <code>dark</code> é aplicada dinamicamente ao <code>body</code>.</p>

  <h2>🔍 Pesquisa de Jogos</h2>
  <p>O campo de pesquisa filtra os cards conforme o usuário digita. A busca é feita por nome do jogo (<code>h2</code> de cada card).</p>

  <h2>📌 Observações</h2>
  <ul>
    <li>O projeto não requer backend ou banco de dados</li>
    <li>Funciona totalmente offline após carregado</li>
    <li>Os dados são armazenados apenas no navegador do usuário</li>
  </ul>

  <h2>📁 Extensões Futuras</h2>
  <ul>
    <li>Adicionar login para sincronizar favoritos entre dispositivos</li>
    <li>Permitir personalização dos cards (cores, ícones, tags)</li>
    <li>Adicionar categorias ou filtros por plataforma (Steam, Riot, etc.)</li>
  </ul>
</body>
</html>
