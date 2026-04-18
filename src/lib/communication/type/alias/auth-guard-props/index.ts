import type { AuthGuardRecipe } from '$stylist/management/interface/recipe/auth-guard';
import type { Snippet } from 'svelte';

export type AuthGuardProps = AuthGuardRecipe & {
	class?: string;
	fallback?: Snippet;
	unauthorizedFallback?: Snippet;
	children?: Snippet;
	onAuthChange?: (isAuthorized: boolean) => void;
};
