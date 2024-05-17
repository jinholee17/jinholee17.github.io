import { useState } from "react";
import Home from "./home";

enum Section {
  HOME = "HOME",
  ABOUTME = "ABOUTME",
  COSMIC = "COSMIC",
}

interface pageProps {
  setSection: React.Dispatch<React.SetStateAction<Section>>;
}

export default function AboutMe(props: pageProps) {
  return (
    <div className="aboutme-page">
      <button
        className="back-home-button"
        aria-label="Home Button"
        onClick={() => props.setSection(Section.HOME)}
      >
        -Back to home
      </button>
      <div className="aboutme-text">
        <h1 className="aboutme-title">About me</h1>
        <p className="aboutme-paragraph">
          Hi! I was born in South Korea, but moved to Cambridge, MA when I was 6
          months old. I grew up in the Port neighborhood, and currently reside
          in Providence.
        </p>
        <p className="aboutme-paragraph">
          I’m a rising junior at Brown University where I am immersed in
          computer science, literary arts, theatre, and community organizing. I
          enjoy running, making lattes, reading poetry, and playing connections!
        </p>
        <p className="aboutme-paragraph">
          Ask me about my favorite restaurants in Cambridge or Taylor Swift’s
          discography!
        </p>
        <iframe
          src="https://open.spotify.com/embed/playlist/6tS9viY0xw6ccuppOcB2bX?utm_source=generator"
          width="60%"
          height="175"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className="aboutme-pics">
        <img className="gates-image" src="/src/assets/images/gates.jpg"></img>
        <img
          className="colorado-image"
          src="/src/assets/images/colorado.jpg"
        ></img>
      </div>
      <div className="aboutme-pics">
        <img
          className="colorado-smiling-image"
          src="/src/assets/images/face-reveal2.jpg"
        ></img>
        <img
          className="andy-image"
          src="/src/assets/images/andyhouse.jpg"
        ></img>
        <img
          className="sunflower-image"
          src="/src/assets/images/sunflowers.jpg"
        ></img>
      </div>
    </div>
  );
}
