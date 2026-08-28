"use client";

import { Star } from "lucide-react";

const StarBackground = () => {
  const numStars = 60; // Adjust the number of stars as needed

  const animations = ["pulse", "spin", "ping", "bounce"];

  const stars = Array.from({ length: numStars }).map((_, index) => {
    const randomTop = (index * 47.3) % 100;
    const randomLeft = (index * 73.7) % 100;
    const randomAnimate = animations[index % animations.length];

    return (
      <div key={index}>
        <Star
          color="#f3fa3462"
          size={16} // Adjust the size of the stars as needed
          style={{
            position: "fixed",
            top: `${randomTop}vh`,
            left: `${randomLeft}vw`,
          }}
          className={`animate-${randomAnimate}`}
        />
      </div>
    );
  });

  return <div className="-z-10 ">{stars}</div>;
};

export default StarBackground;
