import type { ConnectionLineProps, ConnectionLineType, ConnectionLineStyle, Point } from '$stylist/design-system/contracts';
import { ConnectionLineStyleManager, type ConnectionPathResult } from '$stylist/design-system/styles';

export function createConnectionLineState(props: ConnectionLineProps) {
	const type = $derived((props.type ?? 'bezier') as ConnectionLineType);
	const lineStyle = $derived((props.lineStyle ?? 'solid') as ConnectionLineStyle);
	const strokeWidth = $derived(props.strokeWidth ?? 2);
	const color = $derived(props.color ?? '#64748b');
	const activeColor = $derived(props.activeColor ?? '#3b82f6');
	const hoverColor = $derived(props.hoverColor ?? '#60a5fa');
	const active = $derived(Boolean(props.active));
	const animated = $derived(props.animated ?? false);
	const showArrow = $derived(props.showArrow ?? true);
	const arrowSize = $derived(props.arrowSize ?? 8);
	const hasLabel = $derived(Boolean(props.label));
	const labelPosition = $derived(props.labelPosition ?? 'middle');

	const pathData = $derived.by((): ConnectionPathResult => {
		switch (type) {
			case 'bezier':
				return ConnectionLineStyleManager.calculateBezierPath(
					{ x: props.startX, y: props.startY },
					{ x: props.endX, y: props.endY }
				);
			case 'straight':
				return ConnectionLineStyleManager.calculateStraightPath(
					{ x: props.startX, y: props.startY },
					{ x: props.endX, y: props.endY }
				);
			case 'step':
				return ConnectionLineStyleManager.calculateStepPath(
					{ x: props.startX, y: props.startY },
					{ x: props.endX, y: props.endY }
				);
			case 'arc':
				return ConnectionLineStyleManager.calculateArcPath(
					{ x: props.startX, y: props.startY },
					{ x: props.endX, y: props.endY }
				);
			default:
				return ConnectionLineStyleManager.calculateBezierPath(
					{ x: props.startX, y: props.startY },
					{ x: props.endX, y: props.endY }
				);
		}
	});

	const classes = $derived(
		ConnectionLineStyleManager.getLineClasses(type, lineStyle, active, animated)
	);
	const styles = $derived(
		ConnectionLineStyleManager.getLineStyles(
			color,
			activeColor,
			strokeWidth,
			active
		)
	);

	return {
		get type() {
			return type;
		},
		get lineStyle() {
			return lineStyle;
		},
		get strokeWidth() {
			return strokeWidth;
		},
		get color() {
			return color;
		},
		get activeColor() {
			return activeColor;
		},
		get hoverColor() {
			return hoverColor;
		},
		get active() {
			return active;
		},
		get animated() {
			return animated;
		},
		get showArrow() {
			return showArrow;
		},
		get arrowSize() {
			return arrowSize;
		},
		get hasLabel() {
			return hasLabel;
		},
		get labelPosition() {
			return labelPosition;
		},
		get pathData() {
			return pathData;
		},
		get classes() {
			return classes;
		},
		get styles() {
			return styles;
		}
	};
}

export default createConnectionLineState;
