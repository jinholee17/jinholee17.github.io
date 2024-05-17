import { useState } from "react";
import Popup from "reactjs-popup";

enum Section {
  HOME = "HOME",
  ABOUTME = "ABOUTME",
}

export default function Portfolio() {
  return (
    <div className="lighter-purple-bg" id="lighter-purple-bg">
      <h1 aria-label="Portfolio Header" className="portfolio-text">
        My featured works!
      </h1>
      <div className="project">
        <button
          className="square-button"
          aria-label="square button"
          // onClick={() => }
        >
          <div className="image-container">
            <img
              className="square-image"
              src="/src/assets/images/gray-square.png"
              id="square-image"
            />
            <div className="text-overlay">
              <p className="square-text" id="square-text">
                lock in at brown
              </p>
            </div>
          </div>
        </button>
        <button
          className="project-button"
          aria-label="lock in at brown button"
          onClick={() =>
            window.open(
              "https://devpost.com/software/cosmic-connection",
              "_blank"
            )
          }
        >
          <div className="image-container">
            <img
              className="project-image"
              src="/src/assets/images/lockedin.png"
            />
          </div>
        </button>
      </div>
      <div className="project">
        <button
          className="square-button"
          aria-label="square button"
          onClick={() => window.open("https://ignite-cs.vercel.app/", "_blank")}
        >
          <div className="image-container">
            <img
              className="square-image"
              src="/src/assets/images/gray-square.png"
              id="square-image"
            />
            <div className="text-overlay">
              <p className="square-text" id="square-text">
                IgniteCS
              </p>
            </div>
          </div>
        </button>
        <button
          className="project-button"
          aria-label="ignitecs button"
          onClick={() =>
            window.open(
              "https://devpost.com/software/cosmic-connection",
              "_blank"
            )
          }
        >
          <div className="image-container">
            <img
              className="project-image"
              src="/src/assets/images/ignitecs.png"
            />
          </div>
        </button>
      </div>
      <div className="project">
        <button
          className="square-button"
          aria-label="square button"
          onClick={() =>
            window.open(
              "https://devpost.com/software/cosmic-connection",
              "_blank"
            )
          }
        >
          <div className="image-container">
            <img
              className="square-image"
              src="/src/assets/images/gray-square.png"
              id="square-image"
            />
            <div className="text-overlay">
              <p className="square-text" id="square-text">
                Cosmic Connection
              </p>
            </div>
          </div>
        </button>
        <div>
          <button
            className="project-button"
            aria-label="cosmic connections button"
            onClick={() =>
              window.open(
                "https://devpost.com/software/cosmic-connection",
                "_blank"
              )
            }
          >
            <div className="image-container">
              <img
                className="project-image"
                src="/src/assets/images/cosmic.png"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
