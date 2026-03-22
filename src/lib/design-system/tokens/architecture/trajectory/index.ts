export const TOKEN_TRAJECTORY = ['straight', 'curve', 'polyline', 'bezier', 'arc', 'loop', 'elbow', 'step', 'smooth-step'] as const;

export type TokenTrajectory = (typeof TOKEN_TRAJECTORY)[number];
