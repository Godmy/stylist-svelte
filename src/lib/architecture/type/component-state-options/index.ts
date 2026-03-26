export interface ComponentStateOptions<V extends string, S extends string> {
	variant?: V;
	size?: S;
	disabled?: boolean;
	loading?: boolean;
	error?: boolean;
	block?: boolean;
	class?: string;
	ariaLabel?: string;
}
