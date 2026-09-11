export const imagesDir = "/images/avikrat";

export type AvikratImageDef = {
  src: string;
  alt: string;
  aspect?: string;
  priority?: boolean;
};

export const HOME_IMAGES = {
  hero: {
    src: `${imagesDir}/avikrat-hero.webp`,
    alt: "A vast stream of information entering an advanced computational system and condensing into a small, luminous, persistent core state.",
    aspect: "4 / 5",
    priority: true,
  },
  problem: {
    src: `${imagesDir}/avikrat-long-context.webp`,
    alt: "A growing, expanding stream of information becoming increasingly dense and heavy inside an advanced computing environment.",
    aspect: "4 / 3",
  },
  architecture: {
    src: `${imagesDir}/avikrat-compression.webp`,
    alt: "A field of information being compressed and transformed into a compact, highly structured luminous object.",
    aspect: "4 / 3",
  },
  scaling: {
    src: `${imagesDir}/avikrat-state.webp`,
    alt: "A small, stable, luminous computational state at rest inside a dark computational environment.",
    aspect: "3 / 4",
  },
} satisfies Record<string, AvikratImageDef>;

export const PROBLEM_IMAGES = {
  hero: {
    src: `${imagesDir}/avikrat-long-context.webp`,
    alt: "A huge expanding stream of information becoming increasingly dense and heavy inside an advanced computing environment.",
    aspect: "16 / 9",
    priority: true,
  },
  memory: {
    src: `${imagesDir}/avikrat-memory.webp`,
    alt: "An advanced GPU data-center memory architecture under increasing information load.",
    aspect: "4 / 3",
  },
  decoding: {
    src: `${imagesDir}/avikrat-traditional-decode.webp`,
    alt: "An abstract cinematic visualization of a system repeatedly reaching backward through enormous layers of stored information.",
    aspect: "16 / 9",
  },
} satisfies Record<string, AvikratImageDef>;

export const TECH_IMAGES = {
  hero: {
    src: `${imagesDir}/avikrat-hero.webp`,
    alt: "A vast field of information entering a computational transformation and condensing into a compact, highly structured luminous state.",
    aspect: "16 / 9",
    priority: true,
  },
  prefill: {
    src: `${imagesDir}/avikrat-global-prefill.webp`,
    alt: "Massive historical information being processed by an advanced computational system.",
    aspect: "4 / 3",
  },
  state: {
    src: `${imagesDir}/avikrat-compact-state.webp`,
    alt: "Dense information compressed into a small, structured, luminous computational core.",
    aspect: "4 / 3",
  },
  decode: {
    src: `${imagesDir}/avikrat-local-decode.webp`,
    alt: "A small, recent information stream interacting with a persistent computational state.",
    aspect: "4 / 3",
  },
  nextToken: {
    src: `${imagesDir}/avikrat-next-token.webp`,
    alt: "A single output token emerging from a compact computational state.",
    aspect: "4 / 3",
  },
} satisfies Record<string, AvikratImageDef>;

export const APPS_IMAGES = {
  hero: {
    src: `${imagesDir}/avikrat-apps.webp`,
    alt: "A premium futuristic workspace with massive documents and conversation streams feeding into an intelligent computational memory system.",
    aspect: "16 / 9",
    priority: true,
  },
  enterprise: {
    src: `${imagesDir}/avikrat-enterprise.webp`,
    alt: "A premium futuristic workspace with massive documents and conversation streams feeding into an intelligent computational memory system.",
    aspect: "4 / 3",
  },
  edge: {
    src: `${imagesDir}/avikrat-edge-ai.webp`,
    alt: "A compact AI computing system operating locally with a small, persistent computational core.",
    aspect: "4 / 3",
  },
  agent: {
    src: `${imagesDir}/avikrat-agent-infrastructure.webp`,
    alt: "Complex autonomous software workflows represented as connected computational processes in a cinematic dark environment.",
    aspect: "4 / 3",
  },
  realtime: {
    src: `${imagesDir}/avikrat-realtime.webp`,
    alt: "Continuous streams of information entering a real-time advanced computational system.",
    aspect: "4 / 3",
  },
} satisfies Record<string, AvikratImageDef>;

export const BENCH_IMAGES = {
  hero: {
    src: `${imagesDir}/avikrat-benchmark.webp`,
    alt: "A futuristic AI research laboratory with a computational benchmarking environment.",
    aspect: "16 / 9",
    priority: true,
  },
  perplexity: {
    src: `${imagesDir}/avikrat-perplexity.webp`,
    alt: "An abstract representation of comparing the quality of two computational model structures.",
    aspect: "4 / 3",
  },
  latency: {
    src: `${imagesDir}/avikrat-latency.webp`,
    alt: "A visual metaphor of computational speed and the flow of information through a system.",
    aspect: "4 / 3",
  },
  memory: {
    src: `${imagesDir}/avikrat-memory.webp`,
    alt: "Advanced GPU memory infrastructure under increasing data load.",
    aspect: "4 / 3",
  },
  contextScaling: {
    src: `${imagesDir}/avikrat-context-scaling.webp`,
    alt: "A large-scale computational environment with an expanding volume of information.",
    aspect: "4 / 3",
  },
} satisfies Record<string, AvikratImageDef>;

export const RESEARCH_IMAGES = {
  hero: {
    src: `${imagesDir}/avikrat-research.webp`,
    alt: "A cinematic AI research laboratory containing an abstract computational state representation.",
    aspect: "16 / 9",
    priority: true,
  },
  truePredicted: {
    src: `${imagesDir}/avikrat-true-vs-predicted.webp`,
    alt: "Two similar but subtly different computational structures compared side by side in a dark laboratory environment.",
    aspect: "4 / 3",
  },
  error: {
    src: `${imagesDir}/avikrat-error.webp`,
    alt: "The subtle deviation between two abstract computational structures, visualized as a divergence of luminous forms.",
    aspect: "4 / 3",
  },
  cosine: {
    src: `${imagesDir}/avikrat-cosine.webp`,
    alt: "An abstract visualization of two directional, vector-like computational fields.",
    aspect: "4 / 3",
  },
  checkpoint: {
    src: `${imagesDir}/avikrat-checkpoint.webp`,
    alt: "A sequence of computational states evolving over time in a cinematic research environment.",
    aspect: "16 / 9",
  },
} satisfies Record<string, AvikratImageDef>;

export const ABOUT_IMAGES = {
  hero: {
    src: `${imagesDir}/avikrat-about-hero.webp`,
    alt: "Multiple streams of luminous information converging into a single point of light deep in black space, representing a vast history being compressed into one compact, persistent state.",
    aspect: "16 / 9",
    priority: true,
  },
  why: {
    src: `${imagesDir}/avikrat-about-why.webp`,
    alt: "A vast, rapidly expanding field of rushing luminous streaks, evoking an unbounded and ever-growing body of history.",
    aspect: "16 / 9",
  },
  build: {
    src: `${imagesDir}/avikrat-about-build.webp`,
    alt: "An intricate, layered structure of light lines suggesting a complex computational architecture folded into a single coherent system.",
    aspect: "16 / 9",
  },
  poc: {
    src: `${imagesDir}/avikrat-error.webp`,
    alt: "A subtle deviation between two abstract computational structures, representing a simulator comparing a predicted hidden state against a reference.",
    aspect: "16 / 9",
  },
  progress: {
    src: `${imagesDir}/avikrat-long-context.webp`,
    alt: "Ordered rows of computing infrastructure receding into depth, symbolizing the path from a working simulator toward production infrastructure.",
    aspect: "16 / 9",
  },
  vision: {
    src: `${imagesDir}/avikrat-about-vision.webp`,
    alt: "A continuous tunnel of light moving forward through darkness, representing long-running AI processing without interruption.",
    aspect: "4 / 3",
  },
  final: {
    src: `${imagesDir}/avikrat-about-final.webp`,
    alt: "A steady diagonal stream of light crossing a near-black field, evoking constant-memory inference that does not restart the full context.",
    aspect: "21 / 9",
  },
} satisfies Record<string, AvikratImageDef>;

export const ALL_IMAGES: Record<string, AvikratImageDef> = {
  ...HOME_IMAGES,
  ...PROBLEM_IMAGES,
  ...TECH_IMAGES,
  ...APPS_IMAGES,
  ...BENCH_IMAGES,
  ...RESEARCH_IMAGES,
  ...ABOUT_IMAGES,
};
