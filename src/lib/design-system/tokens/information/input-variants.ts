export const INPUT_VARIANTS = (() => {
	const appearance = ['solid', 'outline', 'ghost', 'link', 'subtle'] as const;
	const semantic = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'] as const;
	const state = ['error', 'valid', 'disabled', 'readonly', 'loading'] as const;
	const neutral = ['default', 'neutral', 'dark', 'light'] as const;
	const all = [...neutral, ...semantic, 'gray', ...appearance] as const;
	const input = [...appearance, 'filled', 'outlined', ...semantic, ...state, ...all] as const;

	return {
		appearance,
		semantic,
		state,
		neutral,
		all,
		input
	} as const;
})();

export type AppearanceStyle = (typeof INPUT_VARIANTS.appearance)[number];
export type SemanticVariant = (typeof INPUT_VARIANTS.semantic)[number];
export type StateVariant = (typeof INPUT_VARIANTS.state)[number];
export type NeutralVariant = (typeof INPUT_VARIANTS.neutral)[number];
export type DefaultVariants = (typeof INPUT_VARIANTS.all)[number];
export type InputVariant = (typeof INPUT_VARIANTS.input)[number];

export type NotificationBadgeVariant = DefaultVariants | 'number' | 'dot';
