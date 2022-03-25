export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  size: "small" | "medium" | "big";
  type: "game" | "website";
}

export const projects: [Project] = [
  {
    name: "Gravity Box",
    description:
      "A minimalist Android game - 400.000+ downloads, 4.5 rating from 18.000 reviews",
    imageUrl: "/images/gravity-box.jpeg",
    size: "big",
    type: "game",
  },
];
