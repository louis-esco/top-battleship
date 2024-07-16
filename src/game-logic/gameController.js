import { Player } from "./player";

export class GameController {
  constructor(playerOneName, playerOneType, playerTwoName, playerTwoType) {
    this.players = [
      new Player("Player", "real"),
      new Player("Computer", "computer"),
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

  makeComputerPlay() {
    let attack = false;
    while (!attack) {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      attack = this.playRound(x, y);
    }
  }

  playRound(x, y) {
    return this.getOpponentPlayer().gameboard.receiveAttack(x, y);
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
