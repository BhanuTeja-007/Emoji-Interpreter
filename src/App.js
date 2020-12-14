import React, { useState } from "react";
import "./styles.css";
import { emojiDictionary } from "./emojiDictionary.js";
import heroimage from "../images/emojihero.svg";

const emojisweKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (userInput in emojiDictionary) {
      setMeaning(meaning);
    } else {
      setMeaning("We dont have this in our database");
    }
  }

  function emojiclickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Know Emojis </h1>

      <img src={heroimage} className="image"></img>

      <h3 className="heading"> Search or Choose an Emoji</h3>

      <input className="inp" onChange={inputChangeHandler} />

      <h2> {meaning} </h2>

      <h3 className="res"> </h3>
      {emojisweKnow.map(function (emoji) {
        return (
          <span
            style={{
              fontSize: "1.8rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
            onClick={() => emojiclickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
