import "./styles.css";
import { GameController } from "./game-logic/gameController";

function screenController() {
  const game = new GameController();
  game.placeShipsRandomly(game.getActivePlayer());
  game.placeShipsRandomly(game.getOpponentPlayer());

  const gameStatusDiv = document.querySelector(".game-status");
  const p1NameDiv = document.querySelector(".player-name.p1");
  const p2NameDiv = document.querySelector(".player-name.p2");
  const p1BoardDiv = document.querySelector(".grid-cells.p1");
  const p2BoardDiv = document.querySelector(".grid-cells.p2");
  const boardArr = [p1BoardDiv, p2BoardDiv];

  p1NameDiv.textContent = game.players[0].name;
  p2NameDiv.textContent = game.players[1].name;

  function updateScreen() {
    gameStatusDiv.textContent = game.checkWinner()
      ? `${game.getActivePlayer().name} has won the game !`
      : `It's ${game.getActivePlayer().name}'s turn`;

    for (let [index, player] of game.players.entries()) {
      const gameboard = game.getPlayerBoard(player);
      const boardDiv = boardArr[index];
      let cellIndex = 0;

      boardDiv.textContent = "";

      for (let row of gameboard) {
        for (let cell of row) {
          const cellBtn = document.createElement("button");
          cellBtn.classList.add("cell-btn");
          if (cell.hasShip() && cell.isHit)
            cellBtn.classList.add("ship-cell-hit");
          if (cell.hasShip() && cell.isHit && cell.ship.isSunk())
            cellBtn.textContent = "KO";

          if (cell.isHit) cellBtn.classList.add("empty-cell-hit");
          if (
            player === game.getActivePlayer() ||
            game.checkWinner() ||
            cell.isHit ||
            game.getActivePlayer().type === "computer"
          )
            cellBtn.disabled = true;

          const x = cellIndex % 10;
          const y = Math.floor(cellIndex / 10);

          cellBtn.addEventListener("click", () => {
            game.playRound(x, y);
            if (!game.checkWinner()) game.switchPlayerTurn();
            updateScreen();

            if (game.getActivePlayer().type === "computer") {
              setTimeout(() => {
                game.makeComputerPlay();
                if (!game.checkWinner()) game.switchPlayerTurn();
                updateScreen();
              }, 0);
            }
          });

          boardDiv.appendChild(cellBtn);
          cellIndex++;
        }
      }
    }
  }
  updateScreen();
}

screenController();
