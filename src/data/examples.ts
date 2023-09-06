export const EXAMPLES = {
    flappy: {
        name: "Flappy",
        path: "flappy",
        width: 288,
        height: 512,
    },
    planet: {
        name: "Planet",
        path: "planet",
        width: 800,
        height: 600,
    },
} as const;

export type Example = (typeof EXAMPLES)[keyof typeof EXAMPLES];
