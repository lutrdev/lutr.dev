import type { Language, TechnologyDetails, ToolDetails } from "./tech";
import { technologies, tools } from "./tech";

// TODO: Maybe move all this data into a database, in the future.

export interface Project {
  name: string;
  shortDescription: string;
  moreDetailsDescription: string;
  year: number;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
  size: "small" | "medium" | "big";
  type: "game" | "website";
  languages: Language[];
  technologies: TechnologyDetails[];
  tools: ToolDetails[];
}

export const projects: Project[] = [
  {
    name: "Gravity Box",
    shortDescription:
      "Android game with 400.000+ downloads, 4.5 rating from 18.000 reviews.",
    moreDetailsDescription:
      "Initially created in 48h for the GMTK Game Jam 2018, where it turned out to " +
      "be a hit - 80.000+ plays for this early version.",
    year: 2019,
    imageUrl: "/images/gravity-box.png",
    projectUrl:
      "https://play.google.com/store/apps/details?id=ro.luca1152.gravitybox",
    githubUrl: "https://github.com/coIIector/gravity-box",
    size: "big",
    type: "game",
    languages: ["Kotlin"],
    technologies: [
      technologies.libGDX,
      technologies.Gradle,
      technologies.ProGuard,
      technologies.shadow,
      technologies.Ashley,
      technologies.libKTX,
      technologies["libKTX.inject"],
      technologies.Box2D,
      technologies["gdx-pay"],
      technologies["gdx-fireapp"],
      technologies["Firebase Ads"],
      technologies["Firebase Realtime Database"],
      technologies["Firebase Authentication"],
      technologies["Firebase Performance"],
      technologies["Firebase Crashlytics"],
    ],
    tools: [
      tools["Android Studio"],
      tools.Inkscape,
      tools.Figma,
      tools.TexturePacker,
      tools.Hiero,
      tools["gdx-liftoff"],
    ],
  },
  {
    name: "Crate Typist",
    shortDescription:
      "A simple, yet difficult typing game. Web game made in 72 hours. Really fun.",
    moreDetailsDescription:
      "The result of my first successful game jam. Developed as part of the Ludum Dare 42 contest.",
    year: 2018,
    imageUrl: "/images/crate-typist.png",
    projectUrl: "https://luca1152.itch.io/crate-typist",
    githubUrl: "https://github.com/Luca1152/crate-typist",
    size: "small",
    type: "game",
    languages: ["Java"],
    technologies: [technologies.libGDX, technologies.Feather],
    tools: [tools["IntelliJ IDEA"], tools.Inkscape],
  },
  {
    name: "Dodge Asteroids",
    shortDescription:
      "Be the spaceship that the asteroids fear! Web game made in 10th grade.",
    moreDetailsDescription:
      "The first Java game I ever made. Initially put together for a high school project, then completed in the following summer.",
    year: 2018,
    imageUrl: "/images/dodge-asteroids.png",
    projectUrl: "https://luca1152.itch.io/dodge-asteroids",
    githubUrl: "https://github.com/Luca1152/dodge-asteroids",
    size: "small",
    type: "game",
    languages: ["Java"],
    technologies: [technologies.libGDX],
    tools: [tools["IntelliJ IDEA"]],
  },
];
