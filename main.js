function createGame(player1, hora, player2) {
  return `
  <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}">
      <strong>${hora}</strong>
      <img src="./assets//icon-${player2}.svg" alt="Bandeira ${player2}">
  </li>
  `
}

function createCard(dia, semana, jogos) {
  return (`
  <div class="card">
      <h2>${dia} <span>${semana}</span></h2>
      <ul>
          ${jogos}
      </ul>
  </div>
  `)
}

document.querySelector("#app").innerHTML = `
  <header>
      <img src="./assets/logo.svg" alt="Logo principal">
  </header>
  <main id="cards">
      ${createCard("24/11", "quinta", createGame("switzerland", "07:00", "cameroon") + createGame("portugal", "13:00", "ghana") + createGame("brazil", "16:00", "serbia"))}
      ${createCard("28/11", "segunda", createGame("southKorea", "10:00", "ghana") + createGame("brazil", "13:00", "switzerland") + createGame("portugal", "16:00", "uruguay"))}
      ${createCard("02/12", "sexta", createGame("brazil", "16:00", "camaron"))}
  </main>
`