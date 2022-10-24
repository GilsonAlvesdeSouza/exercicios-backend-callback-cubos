const players = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];
const roundTime = 10;
const timeForPlayer = (roundTime / players.length) * 1000;

let i = 0;
const roundPlay = (players) => {
  console.log(players[i]);
  i++;
  if (i >= players.length) {
    clearInterval(playerSetInterval);
    console.log("A rodada terminou!");
  }
};

const playerSetInterval = setInterval(roundPlay, timeForPlayer, players);
