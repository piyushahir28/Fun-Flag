import React, { useState } from "react";
import "./styles.css";

const flagDictionary = {
  "🇮🇳": "India",
  "🇮🇷": "Iran",
  "🇮🇸": "Iceland",
  "🇮🇹": "Italy",
  "🇯🇪": "Jersey",
  "🇯🇲": "Jamaica",
  "🇯🇴": "Jordan",
  "🇯🇵": "Japan",
  "🇰🇪": "Kenya",
  "🇰🇬": "Kyrgyzstan",
  "🇰🇭": "Cambodia",
  "🇰🇮": "Kiribati",
  "🇰🇲": "Comoros",
  "🇰🇳": "St.Kitts & Nevis",
  "🇰🇵": "North Korea",
  "🇰🇷": "South Korea",
  "🇰🇼": "Kuwait",
  "🇰🇾": "Cayman Islands",
  "🇦🇺": "Australia",
  "🇦🇼": "Aruba"
};

var flagObject = Object.keys(flagDictionary);

export default function App() {
  const [showFlag, setShowFlag] = useState("Country Name will be shown here");

  function flagChangeHandler(event) {
    var countryName = flagDictionary[event.target.value];
    if (countryName === undefined) {
      countryName = "Oops! This Flag is not present in our database.";
    }
    setShowFlag(countryName);
  }

  function clickHandler(flag) {
    setShowFlag(flagDictionary[flag]);
  }

  return (
    <div className="App">
      <h1>Flag Interpreter</h1>
      <input
        className="inputField"
        placeholder="Search your flag..."
        onChange={flagChangeHandler}
      ></input>
      <p> {showFlag} </p>
      <ul className="unoderedList">
        {flagObject.map((flag) => {
          return (
            <li className="list" onClick={() => clickHandler(flag)} key={flag}>
              <a href="#output"> {flag} </a>
            </li>
          );
        })}
      </ul>
      <footer class="footer">
        <div class="footer-div">
          <p>
            Made with &lt;&#47;&gt; by{" "}
            <a
              href="https://piyushahir28.netlify.app"
              target="_blank"
              class="with-para"
            >
              Piyush
            </a>
            <br></br>
            <a href="https://github.com/piyushahir28" target="_blank">
              <i class="fa fa-github"></i>
            </a>
            <a href="https://twitter.com/piyushahir28" target="_blank">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="https://linkedin.com/in/piyushahir28" target="_blank">
              <i class="fa fa-linkedin"></i>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
