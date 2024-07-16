import { Player } from "./player";

export class GameController {
  constructor(playerOneName, playerOneType, playerTwoName, playerTwoType) {
    this.players = [
      new Player("Player One", "real"),
      new Player("Player Two", "real"),
    ];
    this.activePlayer = this.players[0];
    this.opponentPlayer = this.players[1];
  }

  getActivePlayer() {
    return this.activePlayer;
  }

  getOpponentPlayer() {
    return this.opponentPlayer;
  }

  switchPlayerTurn() {
    if (this.activePlayer === this.players[0]) {
      this.activePlayer = this.players[1];
      this.opponentPlayer = this.players[0];
    } else {
      this.activePlayer = this.players[0];
      this.opponentPlayer = this.players[1];
    }
  }

  playRound(x, y) {
    this.getOpponentPlayer().gameboard.receiveAttack(x, y);
    if (!this.checkWinner()) this.switchPlayerTurn();
  }

  checkWinner() {
    if (this.getOpponentPlayer().gameboard.checkAllShipsSunk()) return true;
    return false;
  }

  getPlayerBoard(player) {
    return player.gameboard.board;
  }

  placeShipsRandomly(player) {
    player.gameboard.placeShipsRandom();
  }
}
