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
      "https://images.unsplash.com/photo-1714715350295-5f00e902f0d7"
    ),
    description: "The Virtual Gallery 1",
  },
  {
    position: [0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: netlifyCDN(
      "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1"
    ),
    description: "The Virtual Gallery 2",
  },
  // Left
  {
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://images.unsplash.com/photo-1714676982703-0c51440c6c1a"
    ),
    description: "The Virtual Gallery 3",
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1"
    ),
    description: "The Virtual Gallery 4",
  },
  {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://images.unsplash.com/photo-1713107102323-00cd32c4b7df"
    ),
    description: "The Virtual Gallery 5",
  },
  // Right
  {
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: netlifyCDN(
      "https://images.unsplash.com/photo-1714030962958-0a0e06717ea5"
    ),
    description: "The Virtual Gallery 6",
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
