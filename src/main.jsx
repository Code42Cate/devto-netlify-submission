import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
const netlifyCDN = (url) =>
  `https://the-virtual-gallery.netlify.app/.netlify/images?url=${url}&w=2520&h=1500&fit=fill`;

export const images = [
  // Back
  {
    imageId: 0,
    position: [-0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: netlifyCDN(
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Duchamp_Fountaine.jpg"
    ),
    title: "Fountain (Duchamp)",
    description:
      "Duchamp's 1917 creation, Fountain, marked a pivotal moment in modern art. Taking a urinal, turning it sideways, and signing it 'R. Mutt,' he challenged conventional notions of art. Though rejected from an exhibition, it sparked debates about art's essence. Fountain's significance lies in its ability to provoke thought and disagreement, pioneering Conceptual art and the Readymade movement.",
  },
  {
    imageId: 1,
    position: [0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: netlifyCDN("https://meine.rs/photography/img/Train%20Station.webp"),
    title: "Train Station",
    description:
      "This is a photo of a train station, taken by a good friend of mine. I spend a lot of time at train stations and for some reason this captures the experience of 5am train rides in the summer perfectly. It instantly brings back memories of many great trips and adventures. You can find more of his work at meine.rs!",
  },
  // Left
  {
    imageId: 2,
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://malteroemer.com/wp-content/uploads/2024/03/Sandkuchendeautomat-2024-Malte-Roemer-kinetische-Installation-Kunstakademie-Karlsruhe-Scheibenhardt-scaled.jpg"
    ),
    title: "Sandkuchendeautomat",
    description:
      "The so called 'Sandkuchendeautomat' is a kinetic installation by Malte Roemer. It was created in 2024 at the Kunstakademie Karlsruhe. The installation builds on the idea of a vending machine, but instead of dispensing snacks, it produces sand cakes that are instantly destroyed. The name is a play on words, combining the German words for 'sand cake', 'end', and 'vending machine'. You can find more of his work and the source of the image at malteroemer.com.",
  },
  {
    imageId: 3,
    position: [-2.4, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://www.moebelmuseumwien.at/fileadmin/_processed_/1/1/csm_Fauteuil_Galaxy_1_Walter_Pichler__Wien_1966-_c__BMobV_SKB__Foto_Lois_Lammerhuber_2a1f7e2e0f.jpg"
    ),
    title: "Furniture Museum Vienna",
    description:
      "This is a weird one and more a placeholder than anything else. In Vienne there is a museum for furniture with A LOT of chairs. It gave me an appreciation for the seamingly boring objects that we use every day. I think it's worth a visit if you're ever in the area! Picture is taken from their website at moebelmuseumwien.at",
  },
  {
    imageId: 4,
    position: [-3, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://www.moma.org/d/assets/W1siZiIsIjIwMTgvMTAvMzEvMXNkZHAzdDhoNV80MjU1Mi5qcGciXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgOTAgLXJlc2l6ZSAyMDAweDIwMDBcdTAwM2UiXV0/42552.jpg"
    ),
    title: "Rhythm 0 (Abramovic)",
    description:
      "Marina Abramovic, an early feminist performance artist, challenged societal norms and the endurance of the body to scrutinize women's social roles. In her 1974 piece, Rhythm 0, she stood motionless beside a table adorned with 72 objects, inviting spectators to interact freely with her for six hours. Initially tame, the audience's actions escalated into violence and even threats on her life. Abramovic's transformation into an object revealed stark truths about objectification, power dynamics, and societal boundaries.",
  },
  // Right
  {
    imageId: 5,
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://www.arttrav.com/wp-content/uploads/2021/10/jeff-koons-strozzi-phAlexandraKorey03.jpg"
    ),
    title: "Balloon Dog (Koons)",
    description:
      "Love him or hate him, Jeff Koons has undeniably made a significant impact on the art world, much like Marcel Duchamp did with The Fountain. Throughout his career, Koons has pushed boundaries, questioning the essence of art itself. He challenges whether art must be personally crafted or if it can be mass-produced by a workshop. This raises ethical dilemmas about the commodification of art and its relationship with marketing. Balloon Dog epitomizes these questions, as Koons has reproduced it in various forms, generating substantial profits and ubiquitous recognition across media platforms.",
  },
  {
    imageId: 6,
    position: [2.15, 0, 1.7],
    rotation: [0, -Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://images.unsplash.com/photo-1549490349-8643362247b5"
    ),
    title: "The Virtual Gallery 7",
    description: "The Virtual Gallery 7",
  },
  {
    imageId: 7,
    position: [2, 0, 3],
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
