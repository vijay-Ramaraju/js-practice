import "./TrafficLight.css";
import { useState, useEffect } from "react";

const viewConfigure = {
  red: {
    color: "yellow",
    duriation: 4000,
  },
  yellow: {
    color: "green",
    duriation: 5000,
  },
  green: {
    color: "red",
    duriation: 3000,
  },
};

export default function TrafficLight() {
  const [light, setLight] = useState("red");

  useEffect(() => {
    setTimeout(() => {
      console.log(viewConfigure[light].color);
      setLight(viewConfigure[light].color);
    }, viewConfigure[light].duriation);
  }, [light]);
  return (
    <div className="main">
      <div className="main-contianer">
        <div className={`lights red ${light === "red" ? "active" : ""}`}> </div>
        <div className={`lights yellow ${light === "yellow" ? "active" : ""}`}>
          {" "}
        </div>
        <div
          className={`lights green ${light === "green" ? "active" : ""}`}
        ></div>
      </div>
    </div>
  );
}
