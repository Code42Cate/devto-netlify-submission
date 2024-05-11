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
      "This is a weird one and more a placeholder than anything else. In Vienna there is a museum for furniture with A LOT of chairs. It gave me an appreciation for the seamingly boring objects that we use every day. I think it's worth a visit if you're ever in the area! Picture is taken from their website at moebelmuseumwien.at",
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
      "Marina Abramovic, an early feminist performance artist, challenged societal norms and the endurance of the body to scrutinize women's social roles. In 1974 she stood motionless beside a table adorned with 72 objects, inviting spectators to interact freely with her for six hours. Initially tame, the audience's actions escalated into violence and even threats on her life. This was the first thing I have ever seen about performance art and it has stuck with me ever since. The image is from the MoMA website.",
  },
  // Right
  {
    imageId: 5,
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://images.e-flux-systems.com/508559_0a4e9502bc3b13db79040e849697e5a8.jpg,1400"
    ),
    title: "Blackness, White, and Light (Adam Pendleton)",
    description:
      "While most of the pieces are picked because I like them, this one is here because I don't understand it. I've seen an entire collection of Pendleton's work and I still don't get it. I think that's okay though. It's a reminder that not everything has to be to your taste or that you have to understand everything. The image is from the e-flux website.",
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
