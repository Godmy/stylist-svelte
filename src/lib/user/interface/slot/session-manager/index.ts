import type { HTMLAttributes } from 'svelte/elements';

export interface SlotSessionManager extends HTMLAttributes<HTMLDivElement> {
	activeSessions?: number;
	expiresAt?: string;
	class?: string;
}
