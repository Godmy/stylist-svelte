import type { RecipeGraphPort as GraphPortProps } from '$stylist/workspace/interface/recipe/graph-port';
import type { TokenSize } from '$stylist/theme/type/alias/size';

const PORT_SIZE_MAP: Record<string, string> = {
	xs: 'graph-port--xs',
	sm: 'graph-port--sm',
	md: 'graph-port--md',
	lg: 'graph-port--lg',
	xl: 'graph-port--xl',
	'2xl': 'graph-port--2xl',
	'1/4': 'graph-port--xs',
	'1/3': 'graph-port--sm',
	'2/5': 'graph-port--sm',
	'1/2': 'graph-port--md',
	'3/5': 'graph-port--md',
	'2/3': 'graph-port--lg',
	'3/4': 'graph-port--xl',
	full: 'graph-port--2xl'
};

export function createGraphPortState(props: GraphPortProps) {
	const direction = $derived(props.direction === 'input' ? 'input' : 'output');
	const size = $derived((props.size ?? 'md') as TokenSize);
	const dataType = $derived(props.dataType ?? 'any');
	const connected = $derived(Boolean(props.connected));
	const active = $derived(Boolean(props.active));
	const color = $derived(
		props.color ?? `var(--color-graph-port-type-${dataType}, var(--color-graph-port-type-any))`
	);

	const sizeClasses = $derived(PORT_SIZE_MAP[size] ?? 'graph-port--md');
	const stateClasses = $derived(
		`graph-port${connected ? ' graph-port--connected' : ''}${active ? ' graph-port--active' : ''}`
	);
	const styles = $derived(
		direction === 'input'
			? `--graph-port-color: ${color}; left: -6px; transform: translateX(-100%);`
			: `--graph-port-color: ${color}; right: -6px; transform: translateX(100%);`
	);

	return {
		get direction() {
			return direction;
		},
		get size() {
			return size;
		},
		get dataType() {
			return dataType;
		},
		get connected() {
			return connected;
		},
		get active() {
			return active;
		},
		get color() {
			return color;
		},
		get sizeClasses() {
			return sizeClasses;
		},
		get stateClasses() {
			return stateClasses;
		},
		get styles() {
			return styles;
		}
	};
}

export default createGraphPortState;
