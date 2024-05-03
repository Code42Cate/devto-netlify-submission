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
    title: "Fountain (Duchamp)",
    description: "Duchamp's 1917 creation, Fountain, marked a pivotal moment in modern art. Taking a urinal, turning it sideways, and signing it 'R. Mutt,' he challenged conventional notions of art. Though rejected from an exhibition, it sparked debates about art's essence. Fountain's significance lies in its ability to provoke thought and disagreement, pioneering Conceptual art and the Readymade movement.",
  },
  {
    position: [0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: netlifyCDN(
      "https://upload.wikimedia.org/wikipedia/commons/6/64/P1050763_Louvre_code_Hammurabi_face_rwk.JPG"
    ),
    title: "Codex Hammurapi",
    description: "The Code of Hammurabi, dating back to 1792-1750 BC, stands as the earliest known set of written laws. Carved into a stele, it showcases Babylonian legal codes under King Hammurabi's reign. The stele's summit portrays Hammurabi receiving authority from the god of justice, Shamash. Despite its harsh laws by today's standards, it introduced the concept of innocence until proven guilty. Crafted from dionite, a challenging material, the stele demonstrates Babylon's advanced skills in art, trade, and law.",
  },
  // Left
  {
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://de.artsdot.com/ADC/Art-ImgScreen-3.nsf/O/A-8XYPCB/$FILE/Pablo-picasso-guernica.Jpg"
    ),
    title: "Guernica (Picasso)",
    description: "Picasso's Guernica stands as a powerful symbol of the horrors of war and a potent tool for political activism. Depicting the bombing of Guernica, it evokes the brutality of conflict through stark monochrome imagery. Created to support the antifascist cause in Spain, Picasso withheld its display until Franco's regime fell. Guernica remains a cherished emblem of justice and accountability, especially for Spain and the Basque people.",
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://www.ackroydandharvey.com/wp-content/uploads/2021/08/02.-7000-Oaks-1982.jpg"
    ),
    title: "7000 Oak Trees (Beuys)",
    description: "Joseph Beuys's 7,000 Oak Trees project marked a pivotal moment in environmentally-focused art, heralding a movement of conceptual earthworks addressing ecological concerns. Responding to urbanization and habitat destruction in Kassel, Germany, Beuys, with volunteers, planted 7,000 oaks, each marked by a basalt stone. Beyond ecological intervention, it symbolized the start of Germany's environmental movement, fostering awareness of human impact on ecosystems as the trees matured.",
  },
  {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://www.moma.org/d/assets/W1siZiIsIjIwMTgvMTAvMzEvMXNkZHAzdDhoNV80MjU1Mi5qcGciXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgOTAgLXJlc2l6ZSAyMDAweDIwMDBcdTAwM2UiXV0/42552.jpg"
    ),
    title: "Rhythm 0 (Abramovic)",
    description: "Marina Abramovic, an early feminist performance artist, challenged societal norms and the endurance of the body to scrutinize women's social roles. In her 1974 piece, Rhythm 0, she stood motionless beside a table adorned with 72 objects, inviting spectators to interact freely with her for six hours. Initially tame, the audience's actions escalated into violence and even threats on her life. Abramovic's transformation into an object revealed stark truths about objectification, power dynamics, and societal boundaries.",
  },
  // Right
  {
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://www.arttrav.com/wp-content/uploads/2021/10/jeff-koons-strozzi-phAlexandraKorey03.jpg"
    ),
    title: "Balloon Dog (Koons)",
    description: "Love him or hate him, Jeff Koons has undeniably made a significant impact on the art world, much like Marcel Duchamp did with The Fountain. Throughout his career, Koons has pushed boundaries, questioning the essence of art itself. He challenges whether art must be personally crafted or if it can be mass-produced by a workshop. This raises ethical dilemmas about the commodification of art and its relationship with marketing. Balloon Dog epitomizes these questions, as Koons has reproduced it in various forms, generating substantial profits and ubiquitous recognition across media platforms.",
  },
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://images.unsplash.com/photo-1549490349-8643362247b5"
    ),
    title: "The Virtual Gallery 7",
    description: "The Virtual Gallery 7",
  },
  {
    position: [2, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://images.unsplash.com/photo-1569091791842-7cfb64e04797"
    ),
    title: "The Virtual Gallery 8",
    description: "The Virtual Gallery 8",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App images={images} />
  </React.StrictMode>
);
