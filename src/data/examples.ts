export const EXAMPLES = {
    flappy: {
        name: "Flappy",
        path: "flappy",
        width: 288,
        height: 512,
        githubLink: "https://github.com/moteurjs/flappy",
    },
    planet: {
        name: "Planet",
        path: "planet",
        width: 800,
        height: 600,
        githubLink:
            "https://github.com/moteurjs/moteur/tree/main/examples/planet",
    },
} as const;

export type Example = (typeof EXAMPLES)[keyof typeof EXAMPLES];
