import { useEffect } from "react";
import { useState } from "react";
import "./styles/styles.css";
import treecko from "./assets/treecko.png";
import dragonite from "./assets/dragonite.webp";
import charizard from "./assets/charizard.png";
import charmander from "./assets/charmander.png";
import arceus from "./assets/arceus.png";
import gengar from "./assets/gengar.png";
import ditto from "./assets/ditto.png";
import blastoise from "./assets/blastoise.png";
import pikachu from "./assets/pikachu.png";
import snorlax from "./assets/snorlax.png";
import squirtle from "./assets/squirtle.png";
import turtwig from "./assets/turtwig.png";

export function MemoryApp() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [memoryCards, setMemoryCards] = useState([
    {
      id: crypto.randomUUID(),
      name: "Treecko",
      src: treecko,
      click: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Dragonite",
      src: dragonite,
      click: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Charizard",
      src: charizard,
      click: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Charmander",
      src: charmander,
      click: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Arceus",
      src: arceus,
      click: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Gengar",
      src: gengar,
      click: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Ditto",
      src: ditto,
      click: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Blastoise",
      src: blastoise,
      click: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Pikachu",
      src: pikachu,
      click: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Snorlax",
      src: snorlax,
      click: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Squirtle",
      src: squirtle,
      click: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Turtwig",
      src: turtwig,
      click: false,
    },
  ]);

  const selectCard = (id, click) => {
    if (click) {
      setScore(0);
      setMemoryCards((currentMemoryCards) => {
        return currentMemoryCards.map((memoryCard) => {
          return { ...memoryCard, click: false };
        });
      });
      resetMemoryCards();
    } else {
      setScore((currScore) => {
        const newScore = currScore + 1;
        if (bestScore < newScore) {
          setBestScore(newScore);
        }
        return newScore;
      });
      setMemoryCards((currentMemoryCards) => {
        return currentMemoryCards.map((memoryCard) => {
          if (memoryCard.id === id) {
            return { ...memoryCard, click: true };
          }
          return memoryCard;
        });
      });
      resetMemoryCards();
    }
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  function resetMemoryCards() {
    setMemoryCards((currentMemoryCards) => {
      return shuffleArray(currentMemoryCards);
    });
  }

  return (
    <>
      <div className="score-container">
        <div className="display-score current-score">Current Score: {score}</div>
        <h2 className = "heading">PokeMemory</h2>
        <div className="display-score best-score">Best Score: {bestScore}</div>
      </div>
      <div className="playing-grid">
        {memoryCards.map((memoryCard) => {
          return (
            <div
              onClick={() => selectCard(memoryCard.id, memoryCard.click)}
              className="memory-card-container"
              key={memoryCard.id}
            >
              <img className="memory-card" src={memoryCard.src} />
              <h3 className="memory-card-heading">{memoryCard.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}
