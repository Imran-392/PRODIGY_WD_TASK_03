import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-blue-600 p-4 overflow-hidden fixed top-0 left-0">
      <div className="flex flex-col items-center justify-center w-full max-w-xs p-4 mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-2">Tic-Tac-Toe</h1>
        <p className="text-lg text-white text-center mb-4">Try to get three in a row to win!</p>
        <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-lg shadow-lg w-full aspect-square max-w-xs mx-auto">
          {board.map((value, index) => (
            <button
              key={index}
              className="w-full h-full text-4xl font-bold flex items-center justify-center bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 transition p-2"
              onClick={() => handleClick(index)}
            >
              {value}
            </button>
          ))}
        </div>
        <p className="mt-4 text-lg font-semibold text-white text-center">
          {winner ? `🎉 Winner: ${winner}! 🎉` : board.includes(null) ? `Next Player: ${isXNext ? "X" : "O"}` : "It's a Draw!"}
        </p>
        <button 
          onClick={resetGame} 
          className="mt-4 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
