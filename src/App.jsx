import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

import { PLAYERS } from "./constants";
import { deriveActivePlayer, deriveGameBoard, deriveWinner } from "./helpers";

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayerSymbol = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          playerSymbol: activePlayerSymbol,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  const handleRestart = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [symbol]: newName,
    }));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={players.X}
            handlePlayerNameChange={handlePlayerNameChange}
            symbol="X"
            isActive={activePlayerSymbol === "X"}
          />
          <Player
            name={players.O}
            handlePlayerNameChange={handlePlayerNameChange}
            symbol="O"
            isActive={activePlayerSymbol === "O"}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} handleRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} players={players} />
    </main>
  );
}

export default App;
