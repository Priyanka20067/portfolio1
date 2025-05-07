import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function StarryBackground() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="particles-2-css"
      options={{
        background: {
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
          color: "#000", // Dark background for stars
        },
        fullScreen: {
          enable: false,
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              quantity: 4
            }
          }
        },
        particles: {
          color: {
            value: "#ffffff", // White stars
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out"
            },
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 100 // More particles for stars
          },
          opacity: {
            value: {
              min: 0.1,
              max: 1
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false
            }
          },
          shape: {
            type: "circle" // Use circles for stars instead of images
          },
          size: {
            value: {
              min: 1,
              max: 3 // Varying sizes for stars
            },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
              sync: false
            }
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1
            }
          }
        },
        detectRetina: true
      }}
    />
  );
}