import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import { Gamepad2, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, RotateCcw } from 'lucide-react';

const diceIcons = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

export const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const nextBoard = [...board];
    nextBoard[index] = isXNext ? 'X' : 'O';
    setBoard(nextBoard);
    setIsXNext(!isXNext);

    const win = checkWinner(nextBoard);
    if (win) setWinner(win);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const isDraw = !winner && board.every((cell) => cell !== null);

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl border-border/80">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold font-display text-foreground">
          Tic Tac Toe
        </CardTitle>
        <div className="text-base font-medium mt-1">
          {winner ? (
            <span className="text-emerald-500 font-bold">Winner: Player {winner}! 🎉</span>
          ) : isDraw ? (
            <span className="text-amber-500 font-bold">It's a draw! 🤝</span>
          ) : (
            <span className="text-muted-foreground">Next turn: <strong className="text-primary">{isXNext ? 'X' : 'O'}</strong></span>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-3 gap-2.5 max-w-[260px] mx-auto">
          {board.map((cell, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(idx)}
              disabled={!!cell || !!winner}
              className={`w-20 h-20 text-3xl font-bold font-mono rounded-xl border-2 transition-all duration-200 flex items-center justify-center ${
                cell === 'X'
                  ? 'border-blue-500 text-blue-500 bg-blue-500/10'
                  : cell === 'O'
                  ? 'border-orange-500 text-orange-500 bg-orange-500/10'
                  : 'border-border bg-card hover:bg-accent hover:border-primary/50'
              }`}
            >
              {cell}
            </button>
          ))}
        </div>
        <Button onClick={handleReset} variant="outline" className="w-full">
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset Game
        </Button>
      </CardContent>
    </Card>
  );
};

export const SnakeAndLadder = () => {
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [dice, setDice] = useState(1);
  const [winner, setWinner] = useState(null);
  const [logs, setLogs] = useState([]);

  const snakes = { 16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78 };
  const ladders = { 1: 38, 4: 14, 9: 21, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100 };

  const DiceComponent = diceIcons[dice - 1] || Dice1;

  const handleRoll = () => {
    if (winner) return;
    const rolled = Math.floor(Math.random() * 6) + 1;
    setDice(rolled);

    const currentPos = currentPlayer === 1 ? p1 : p2;
    let nextPos = currentPos + rolled;

    if (nextPos > 100) {
      nextPos = currentPos; // Must land exactly on 100
    }

    if (snakes[nextPos]) {
      const drop = snakes[nextPos];
      setLogs((prev) => [`Player ${currentPlayer} bit by a Snake! ${nextPos} ➔ ${drop}`, ...prev.slice(0, 4)]);
      nextPos = drop;
    } else if (ladders[nextPos]) {
      const climb = ladders[nextPos];
      setLogs((prev) => [`Player ${currentPlayer} climbed a Ladder! ${nextPos} ➔ ${climb} 🚀`, ...prev.slice(0, 4)]);
      nextPos = climb;
    } else {
      setLogs((prev) => [`Player ${currentPlayer} rolled ${rolled} ➔ tile ${nextPos}`, ...prev.slice(0, 4)]);
    }

    if (currentPlayer === 1) {
      setP1(nextPos);
    } else {
      setP2(nextPos);
    }

    if (nextPos === 100) {
      setWinner(currentPlayer);
      setLogs((prev) => [`🎉 Player ${currentPlayer} wins the game!`, ...prev]);
    } else {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  const handleReset = () => {
    setP1(0);
    setP2(0);
    setCurrentPlayer(1);
    setDice(1);
    setWinner(null);
    setLogs([]);
  };

  const getTileClass = (num) => {
    if (num === p1 && num === p2 && num > 0) return 'bg-purple-600 text-white font-bold ring-2 ring-purple-300';
    if (num === p1 && num > 0) return 'bg-blue-600 text-white font-bold ring-2 ring-blue-300';
    if (num === p2 && num > 0) return 'bg-red-600 text-white font-bold ring-2 ring-red-300';
    if (snakes[num]) return 'bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 font-semibold';
    if (ladders[num]) return 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 font-semibold';
    return 'bg-card text-foreground hover:bg-accent/40';
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl border-border/80">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold font-display text-foreground">
          Snake & Ladder
        </CardTitle>
        <div className="text-base font-medium mt-1">
          {winner ? (
            <span className="text-emerald-500 font-bold">Player {winner} Wins! 🏆</span>
          ) : (
            <span className="text-muted-foreground">
              Current Turn: <strong className={currentPlayer === 1 ? 'text-blue-500 font-bold' : 'text-red-500 font-bold'}>Player {currentPlayer}</strong>
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        
        {/* Controls and Scoreboard */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-blue-500" />
              <span className="text-sm font-semibold">Player 1: <strong className="font-mono text-primary">{p1}/100</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500" />
              <span className="text-sm font-semibold">Player 2: <strong className="font-mono text-primary">{p2}/100</strong></span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-card px-3 py-1.5 rounded-xl border border-border">
              <span className="text-xs font-semibold text-muted-foreground uppercase">Dice:</span>
              <DiceComponent className="w-7 h-7 text-primary animate-pulse" />
            </div>
            <Button onClick={handleRoll} disabled={!!winner} className="px-6 shadow-md">
              Roll Dice
            </Button>
            <Button onClick={handleReset} variant="outline" size="icon" aria-label="Reset game">
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* 10x10 Game Board (Boustrophedon Grid) */}
        <div className="grid grid-cols-10 gap-1 sm:gap-1.5 max-w-xl mx-auto p-2 bg-muted/20 border border-border rounded-2xl shadow-inner">
          {Array.from({ length: 100 }, (_, i) => {
            const row = Math.floor(i / 10);
            const col = i % 10;
            const actualCol = row % 2 === 0 ? col : 9 - col;
            const tileNumber = 100 - (row * 10 + actualCol);

            return (
              <div
                key={i}
                className={`w-7 h-7 sm:w-11 sm:h-11 rounded-md sm:rounded-lg border border-border/60 flex items-center justify-center text-[10px] sm:text-xs font-mono transition-colors duration-200 ${getTileClass(tileNumber)}`}
                title={`Tile ${tileNumber}${snakes[tileNumber] ? ` (Snake to ${snakes[tileNumber]})` : ''}${ladders[tileNumber] ? ` (Ladder to ${ladders[tileNumber]})` : ''}`}
              >
                {tileNumber}
              </div>
            );
          })}
        </div>

        {/* Game Activity Logs */}
        {logs.length > 0 && (
          <div className="bg-muted/30 rounded-xl p-3 border border-border/60 text-xs font-mono space-y-1 max-w-xl mx-auto">
            {logs.map((log, idx) => (
              <div key={idx} className="text-muted-foreground truncate">
                {log}
              </div>
            ))}
          </div>
        )}

      </CardContent>
    </Card>
  );
};

export const Games = () => {
  const [activeTab, setActiveTab] = useState('tictactoe');

  return (
    <section id="games" className="py-16 sm:py-24 relative">
      <div className="section-container">
        
        {/* Title */}
        <div className="flex flex-col items-start mb-10 sm:mb-14">
          <div className="pulse-chip mb-4">
            <Gamepad2 className="w-4 h-4 mr-2" />
            <span>Interactive Arcade</span>
          </div>
          <h2 className="section-title text-foreground mb-4">
            Playable Mini-Games
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl text-left">
            Built from scratch to demonstrate React state synchronization, algorithms, and responsive UI components.
          </p>

          {/* Game Switcher Tabs */}
          <div className="inline-flex p-1 bg-muted rounded-xl mt-6 border border-border">
            <button
              onClick={() => setActiveTab('tictactoe')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'tictactoe'
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Tic Tac Toe
            </button>
            <button
              onClick={() => setActiveTab('snakeandladder')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'snakeandladder'
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Snake & Ladder
            </button>
          </div>
        </div>

        {/* Render Selected Game */}
        <div className="animate-fade-in">
          {activeTab === 'tictactoe' ? <TicTacToe /> : <SnakeAndLadder />}
        </div>

      </div>
    </section>
  );
};
