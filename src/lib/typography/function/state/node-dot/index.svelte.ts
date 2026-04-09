export interface NodeDotProps {
	accent?: string;
	size?: number;
	opacity?: number;
}

export function createNodeDotState(props: NodeDotProps) {
	const accent = $derived(props.accent ?? 'var(--color-accent, #3498db)');
	const size = $derived(props.size ?? 16);
	const opacity = $derived(props.opacity ?? 0.8);

	const style = $derived(
		`width: ${size}px; height: ${size}px; background: ${accent}; opacity: ${opacity}; box-shadow: 0 0 8px color-mix(in srgb, ${accent} 60%, transparent);`
	);

	return {
		get accent() {
			return accent;
		},
		get size() {
			return size;
		},
		get opacity() {
			return opacity;
		},
		get style() {
			return style;
		}
	};
}

export default createNodeDotState;
