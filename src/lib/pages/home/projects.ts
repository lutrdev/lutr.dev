export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  size: "small" | "medium" | "big";
  type: "game" | "website";
}

export const projects: Project[] = [
  {
    name: "Gravity Box",
    description:
      "Android game with 400.000+ downloads, 4.5 rating from 18.000 reviews.",
    imageUrl: "/images/gravity-box.png",
    size: "big",
    type: "game",
  },
  {
    name: "Crate Typist",
    description:
      "A simple, yet difficult typing game. Web game made in 72 hours. Really fun.",
    imageUrl: "/images/crate-typist.png",
    size: "small",
    type: "game",
  },
  {
    name: "Dodge Asteroids",
    description:
      "Be the spaceship that the asteroids fear! Web game made in 10th grade.",
    imageUrl: "/images/dodge-asteroids.png",
    size: "small",
    type: "game",
  },
];
