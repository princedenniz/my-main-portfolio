import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles"; // import Engine from tsparticles
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
// import { loadFull } from "tsparticles"; // loads tsparticles

interface ParticlesComponentProps {
  id: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = ({ id }) => {
  // Using useMemo to memoize the options for the particles
  const options = useMemo(() => {
    return {
      background: {
        color: "#000", // This sets a background color for the canvas
      },
      fullScreen: {
        enable: true, // Enabling this will make the canvas fill the entire screen
        zIndex: -1, // This is the z-index value used when fullScreen is enabled
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, // Enables the click event
            mode: "push", // Adds particles on click
          },
          onHover: {
            enable: true, // Enables the hover event
            mode: "repulse", // Makes the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 10, // Number of particles to add on click
          },
          repulse: {
            distance: 100, // Distance of the particles from the cursor
          },
        },
      },
      particles: {
        links: {
          enable: true, // Enabling this will make particles linked together
          distance: 200, // Maximum distance for linking the particles
        },
        move: {
          enable: true, // Enabling this will make particles move in the canvas
          speed: { min: 1, max: 5 }, // Random speed for particles
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // Different opacity values
        },
        size: {
          value: { min: 1, max: 3 }, // Randomizing the particle size
        },
      },
    };
  }, []);

  // Using useCallback to memoize the particles initialization function
  const particlesInit = useCallback((engine: Engine) => {
    loadSlim(engine);
    // loadFull(engine); // Uncomment if you want to use the full version
  }, []);

  // Returning the Particles component with the provided options and id
  return <Particles id={id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
