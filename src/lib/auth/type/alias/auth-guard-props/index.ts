import type { RecipeAuthGuard } from '$stylist/auth/interface/recipe/auth-guard';
import type { Snippet } from 'svelte';

export type AuthGuardProps = RecipeAuthGuard & {
	class?: string;
	fallback?: Snippet;
	unauthorizedFallback?: Snippet;
	children?: Snippet;
	onAuthChange?: (isAuthorized: boolean) => void;
};

