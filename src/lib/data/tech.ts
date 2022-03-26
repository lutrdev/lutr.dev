// TODO: Maybe move all this data into a database, in the future.

// Languages
export type Language = "Java" | "Kotlin" | "Python";

// Technology
type Technology =
  | "libGDX"
  | "Feather"
  | "Gradle"
  | "ProGuard"
  | "shadow"
  | "Ashley"
  | "libKTX"
  | "libKTX.inject"
  | "Box2D"
  | "gdx-pay"
  | "gdx-fireapp"
  | "Firebase Ads"
  | "Firebase Realtime Database"
  | "Firebase Authentication"
  | "Firebase Performance"
  | "Firebase Crashylitics";

export interface TechnologyDetails {
  name: Technology;
  description: string;
}

export const technologies: Record<Technology, TechnologyDetails> = {
  libGDX: { name: "libGDX", description: "Game framework" },
  Feather: { name: "Feather", description: "Dependency injection for Java" },
  Gradle: { name: "Gradle", description: "Build automation system" },
  ProGuard: { name: "ProGuard", description: "Android app size optimizer" },
  shadow: { name: "shadow", description: "Gradle plugin for creating JARs" },
  Ashley: { name: "Ashley", description: "Entity-Component-System library" },
  libKTX: { name: "libKTX", description: "Kotlin extensions for libGDX" },
  "libKTX.inject": {
    name: "libKTX.inject",
    description: "Dependency injection library",
  },
  Box2D: { name: "Box2D", description: "2D physics library" },
  "gdx-pay": {
    name: "gdx-pay",
    description: "Cross-platform in-app purchases API",
  },
  "gdx-fireapp": {
    name: "gdx-fireapp",
    description: "Cross-platform Firebase API",
  },
  "Firebase Ads": {
    name: "Firebase Ads",
    description: "Mobile advertising API",
  },
  "Firebase Realtime Database": {
    name: "Firebase Realtime Database",
    description: "NoSQL cloud database API",
  },
  "Firebase Authentication": {
    name: "Firebase Authentication",
    description: "Authentication API",
  },
  "Firebase Performance": {
    name: "Firebase Performance",
    description: "Performance monitoring API",
  },
  "Firebase Crashylitics": {
    name: "Firebase Crashylitics",
    description: "Crash reporting API",
  },
};

// Tools
type Tool =
  | "IntelliJ IDEA"
  | "Android Studio"
  | "Inkscape"
  | "TexturePacker"
  | "Hiero"
  | "gdx-liftoff"
  | "Figma";

export interface ToolDetails {
  name: Tool;
  description: string;
}

export const tools: Record<Tool, ToolDetails> = {
  "IntelliJ IDEA": { name: "IntelliJ IDEA", description: "IDE" },
  "Android Studio": { name: "Android Studio", description: "IDE" },
  Inkscape: { name: "Inkscape", description: "Vector graphics editor" },
  Figma: { name: "Figma", description: "Web-based vector graphics editor" },
  TexturePacker: {
    name: "TexturePacker",
    description: "Texture atlas packing tool",
  },
  Hiero: { name: "Hiero", description: "Bitmap font packing tool" },
  "gdx-liftoff": {
    name: "gdx-liftoff",
    description: "Setup tool for libGDX projects\n",
  },
};
