import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import { Gamepad2, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, RotateCcw } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

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
    soundEngine.playClick();
    const nextBoard = [...board];
    nextBoard[index] = isXNext ? 'X' : 'O';
    setBoard(nextBoard);
    setIsXNext(!isXNext);

    const win = checkWinner(nextBoard);
    if (win) {
      soundEngine.playSuccess();
      setWinner(win);
    }
  };

  const handleReset = () => {
    soundEngine.playSwitch();
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const isDraw = !winner && board.every((cell) => cell !== null);

  return (
    <div className="w-full max-w-md mx-auto shadow-[0_0_50px_rgba(0,0,0,0.6)] border border-[#360866] bg-[#190230]/90 rounded-3xl p-7 text-center">
      <div className="text-center pb-5 border-b border-[#2a0453]">
        <h3 className="text-2xl font-black font-display text-white uppercase tracking-tight">
          TIC TAC TOE
        </h3>
        <div className="text-xs font-pixel mt-2 uppercase">
          {winner ? (
            <span className="text-[#c8ff00] font-bold">WINNER: PLAYER {winner}! 🏆</span>
          ) : isDraw ? (
            <span className="text-[#ffb800] font-bold">STALEMATE // DRAW 🤝</span>
          ) : (
            <span className="text-[#b8a9cf]">TURN: <strong className="text-[#c8ff00]">{isXNext ? 'X' : 'O'}</strong></span>
          )}
        </div>
      </div>
      <div className="space-y-6 pt-6">
        <div className="grid grid-cols-3 gap-3 max-w-[270px] mx-auto">
          {board.map((cell, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(idx)}
              disabled={!!cell || !!winner}
              className={`w-20 h-20 text-3xl font-black font-pixel rounded-2xl border-2 transition-all duration-200 flex items-center justify-center ${
                cell === 'X'
                  ? 'border-[#c8ff00] text-[#c8ff00] bg-[#c8ff00]/10 shadow-[0_0_15px_rgba(200,255,0,0.2)]'
                  : cell === 'O'
                  ? 'border-[#9860ff] text-[#9860ff] bg-[#9860ff]/10 shadow-[0_0_15px_rgba(152,96,255,0.2)]'
                  : 'border-[#360866] bg-[#140128] hover:border-[#c8ff00]/60'
              }`}
            >
              {cell}
            </button>
          ))}
        </div>
        <button 
          onClick={handleReset} 
          className="w-full btn-1minus1-outline text-xs py-3 justify-center"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          <span>Reset Grid</span>
        </button>
      </div>
    </div>
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
      nextPos = currentPos;
    }

    if (snakes[nextPos]) {
      const drop = snakes[nextPos];
      setLogs((prev) => [`Player ${currentPlayer} bit by a Snake! ${nextPos} ➔ ${drop} 🐍`, ...prev.slice(0, 4)]);
      nextPos = drop;
    } else if (ladders[nextPos]) {
      const climb = ladders[nextPos];
      setLogs((prev) => [`Player ${currentPlayer} climbed a Ladder! ${nextPos} ➔ ${climb} 🪜`, ...prev.slice(0, 4)]);
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
      setLogs((prev) => [`🏆 Player ${currentPlayer} claimed victory!`, ...prev]);
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
    if (num === p1 && num === p2 && num > 0) return 'bg-[#c8ff00] text-[#140128] font-black border-[#c8ff00] ring-2 ring-[#c8ff00]';
    if (num === p1 && num > 0) return 'bg-[#c8ff00] text-[#140128] font-black border-[#c8ff00] shadow-[0_0_10px_rgba(200,255,0,0.4)]';
    if (num === p2 && num > 0) return 'bg-[#9860ff] text-white font-black border-[#9860ff] shadow-[0_0_10px_rgba(152,96,255,0.4)]';
    if (snakes[num]) return 'bg-[#ff3366]/20 text-[#ff3366] border-[#ff3366]/40 font-bold';
    if (ladders[num]) return 'bg-[#c8ff00]/15 text-[#c8ff00] border-[#c8ff00]/40 font-bold';
    return 'bg-[#140128] text-[#b8a9cf] border-[#26024a]';
  };

  return (
    <div className="w-full max-w-2xl mx-auto shadow-[0_0_50px_rgba(0,0,0,0.6)] border border-[#360866] bg-[#190230]/90 rounded-3xl p-7 text-center">
      <div className="text-center pb-5 border-b border-[#2a0453]">
        <h3 className="text-2xl font-black font-display text-white uppercase tracking-tight">
          SNAKE & LADDER // CYBER ARENA
        </h3>
        <p className="text-xs font-mono text-[#b8a9cf] mt-1">
          First player to tile 100 wins. Watch out for red snakes!
        </p>
      </div>

      <div className="space-y-6 pt-6">
        {/* Controls and Scoreboard */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-between p-4 rounded-2xl bg-[#140128] border border-[#26024a]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#c8ff00]" />
              <span className="text-xs font-mono font-bold text-white">Player 1: <strong className="text-[#c8ff00]">{p1}/100</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#9860ff]" />
              <span className="text-xs font-mono font-bold text-white">Player 2: <strong className="text-[#9860ff]">{p2}/100</strong></span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#1c0336] px-3 py-1.5 rounded-xl border border-[#360866]">
              <span className="text-[10px] font-pixel text-[#9860ff] uppercase">Dice:</span>
              <DiceComponent className="w-6 h-6 text-[#c8ff00]" />
            </div>
            <button onClick={handleRoll} disabled={!!winner} className="btn-1minus1 text-xs py-2 px-5">
              Roll Dice
            </button>
            <button onClick={handleReset} className="p-2.5 rounded-xl border border-[#360866] bg-[#1c0336] hover:border-[#c8ff00] text-white" aria-label="Reset game">
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 10x10 Game Board */}
        <div className="grid grid-cols-10 gap-1 sm:gap-1.5 max-w-xl mx-auto p-3 bg-[#140128] border border-[#26024a] rounded-2xl shadow-inner">
          {Array.from({ length: 100 }, (_, i) => {
            const row = Math.floor(i / 10);
            const col = i % 10;
            const actualCol = row % 2 === 0 ? col : 9 - col;
            const tileNumber = 100 - (row * 10 + actualCol);

            return (
              <div
                key={i}
                className={`w-7 h-7 sm:w-11 sm:h-11 rounded-md sm:rounded-lg border flex items-center justify-center text-[10px] sm:text-xs font-mono transition-colors duration-200 ${getTileClass(tileNumber)}`}
                title={`Tile ${tileNumber}${snakes[tileNumber] ? ` (Snake to ${snakes[tileNumber]})` : ''}${ladders[tileNumber] ? ` (Ladder to ${ladders[tileNumber]})` : ''}`}
              >
                {tileNumber}
              </div>
            );
          })}
        </div>

        {/* Game Activity Logs */}
        {logs.length > 0 && (
          <div className="bg-[#140128] rounded-2xl p-4 border border-[#26024a] text-xs font-mono space-y-1.5 max-w-xl mx-auto text-left">
            {logs.map((log, idx) => (
              <div key={idx} className="text-[#b8a9cf] truncate">
                <span className="text-[#c8ff00] mr-2">❯</span>
                {log}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export const Games = () => {
  const [activeTab, setActiveTab] = useState('tictactoe');

  return (
    <section id="games" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Blueprint Crosshairs & Coordinate Tags */}
      <div className="tech-crosshair top-6 left-6">+ [SYS:05 // ARCADE_VAULT]</div>
      <div className="tech-crosshair top-6 right-6">+ [INTERACTIVE // EXPERIMENTS]</div>

      <div className="section-container relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-start mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1c0336] border border-[#c8ff00]/40 text-[#c8ff00] text-xs font-pixel mb-5 uppercase tracking-wider shadow-[0_0_15px_rgba(200,255,0,0.15)]">
            <Gamepad2 className="w-4 h-4 mr-1 text-[#c8ff00]" />
            <span>ARCADE VAULT // PLAYABLE BUILDS</span>
          </div>
          <h2 className="section-title text-white mb-4 uppercase">
            PLAYABLE <span className="text-[#c8ff00]">ARCADE</span>
          </h2>
          <p className="text-[#b8a9cf] text-base sm:text-lg max-w-2xl text-left font-normal">
            Built from scratch to demonstrate React state synchronization, algorithmic movement, and responsive UI components.
          </p>

          {/* Game Switcher Tabs */}
          <div className="inline-flex p-1.5 bg-[#1c0336] rounded-full mt-6 border border-[#360866]">
            <button
              onMouseEnter={() => soundEngine.playHover()}
              onClick={() => {
                soundEngine.playSwitch();
                setActiveTab('tictactoe');
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === 'tictactoe'
                  ? 'bg-[#c8ff00] text-[#140128] shadow-[0_0_15px_rgba(200,255,0,0.3)] font-black'
                  : 'text-[#b8a9cf] hover:text-white'
              }`}
            >
              Tic Tac Toe
            </button>
            <button
              onMouseEnter={() => soundEngine.playHover()}
              onClick={() => {
                soundEngine.playSwitch();
                setActiveTab('snakeandladder');
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === 'snakeandladder'
                  ? 'bg-[#c8ff00] text-[#140128] shadow-[0_0_15px_rgba(200,255,0,0.3)] font-black'
                  : 'text-[#b8a9cf] hover:text-white'
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
