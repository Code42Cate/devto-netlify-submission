import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
const netlifyCDN = (url) =>
  `https://the-virtual-gallery.netlify.app/.netlify/images?url=${url}&w=2520&h=1500&fit=fill`;

const images = [
  // Back
  {
    position: [-0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: netlifyCDN(
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Duchamp_Fountaine.jpg"
    ),
    description: "Fountain (Duchamp)",
  },
  {
    position: [0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: netlifyCDN(
      "https://upload.wikimedia.org/wikipedia/commons/6/64/P1050763_Louvre_code_Hammurabi_face_rwk.JPG"
    ),
    description: "Codex Hammurapi",
  },
  // Left
  {
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://de.artsdot.com/ADC/Art-ImgScreen-3.nsf/O/A-8XYPCB/$FILE/Pablo-picasso-guernica.Jpg"
    ),
    description: "Guernica (Picasso)",
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://www.ackroydandharvey.com/wp-content/uploads/2021/08/02.-7000-Oaks-1982.jpg"
    ),
    description: "7000 Oak Trees (Beuys)",
  },
  {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://www.moma.org/d/assets/W1siZiIsIjIwMTgvMTAvMzEvMXNkZHAzdDhoNV80MjU1Mi5qcGciXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgOTAgLXJlc2l6ZSAyMDAweDIwMDBcdTAwM2UiXV0/42552.jpg"
    ),
    description: "Rhythm 0 (Abramovic)",
  },
  // Right
  {
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://www.arttrav.com/wp-content/uploads/2021/10/jeff-koons-strozzi-phAlexandraKorey03.jpg"
    ),
    description: "Balloon Dog (Koons)",
  },
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://images.unsplash.com/photo-1549490349-8643362247b5"
    ),
    description: "The Virtual Gallery 7",
  },
  {
    position: [2, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://images.unsplash.com/photo-1569091791842-7cfb64e04797"
    ),
    description: "The Virtual Gallery 8",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App images={images} />
  </React.StrictMode>
);
