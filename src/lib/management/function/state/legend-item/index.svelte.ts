import { LegendItemStyleManager } from '$stylist/management/class/style-manager/legend-item';
import { Icon } from '$stylist';

export type LegendItemType = 'object' | 'interface' | 'union' | 'enum' | 'scalar' | 'input';

export type LegendItemVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface LegendItemStateProps {
	label: string;
	type: LegendItemType;
	count?: number;
	variant?: LegendItemVariant;
	active?: boolean;
	onClick?: () => void;
}

export function createLegendItemState(props: LegendItemStateProps) {
	const label = $derived(props.label);
	const type = $derived(props.type);
	const count = $derived(props.count ?? 0);
	const variant = $derived(props.variant ?? 'default');
	const active = $derived(props.active ?? false);

	const itemClasses = $derived(`${LegendItemStyleManager.getBaseClasses()} ${LegendItemStyleManager.getVariantClasses(variant, active, !!props.onClick)}`);
	const iconClasses = $derived(LegendItemStyleManager.getIconClasses());
	const labelClasses = $derived(LegendItemStyleManager.getLabelClasses());
	const countClasses = $derived(LegendItemStyleManager.getCountClasses());

	function getIconName(type: string): string {
		switch (type) {
			case 'object': return 'object';
			case 'interface': return 'interface';
			case 'union': return 'union';
			case 'enum': return 'enum';
			case 'scalar': return 'scalar';
			case 'input': return 'input';
			default: return 'default';
		}
	}

	function handleClick(): void {
		props.onClick?.();
	}

	function handleKeyDown(e: KeyboardEvent): void {
		if (props.onClick && (e.key === 'Enter' || e.key === ' ')) {
			e.preventDefault();
			props.onClick();
		}
	}

	return {
		get label() { return label; },
		get type() { return type; },
		get count() { return count; },
		get variant() { return variant; },
		get active() { return active; },
		get itemClasses() { return itemClasses; },
		get iconClasses() { return iconClasses; },
		get labelClasses() { return labelClasses; },
		get countClasses() { return countClasses; },
		getIconName,
		handleClick,
		handleKeyDown
	};
}

export default createLegendItemState;
