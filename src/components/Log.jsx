export default function Log({ turns, players }) {
  const logs = turns.map(({ square, playerSymbol }) => {
    const { row, col } = square;
    return (
      <li key={`${row}${col}`}>
        {players[playerSymbol]} selected {row},{col}
      </li>
    );
  });

  return <ol id="log">{logs}</ol>;
}
