export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
  size: "small" | "medium" | "big";
  type: "game" | "website";
}

export const projects: Project[] = [
  {
    name: "Gravity Box",
    description:
      "Android game with 400.000+ downloads, 4.5 rating from 18.000 reviews.",
    imageUrl: "/images/gravity-box.png",
    projectUrl:
      "https://play.google.com/store/apps/details?id=ro.luca1152.gravitybox",
    githubUrl: "https://github.com/coIIector/gravity-box",
    size: "big",
    type: "game",
  },
  {
    name: "Crate Typist",
    description:
      "A simple, yet difficult typing game. Web game made in 72 hours. Really fun.",
    imageUrl: "/images/crate-typist.png",
    projectUrl: "https://luca1152.itch.io/crate-typist",
    githubUrl: "https://github.com/Luca1152/crate-typist",
    size: "small",
    type: "game",
  },
  {
    name: "Dodge Asteroids",
    description:
      "Be the spaceship that the asteroids fear! Web game made in 10th grade.",
    imageUrl: "/images/dodge-asteroids.png",
    projectUrl: "https://luca1152.itch.io/dodge-asteroids",
    githubUrl: "https://github.com/Luca1152/dodge-asteroids",
    size: "small",
    type: "game",
  },
];
