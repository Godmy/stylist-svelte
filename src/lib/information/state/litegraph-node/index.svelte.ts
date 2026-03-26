import type { LiteGraphNodeProps } from '$stylist/information/interface/litegraph-node';
import type { TokenInteration } from '$stylist/interaction/type/token/interaction';
import type { TokenSeverity } from '$stylist/interaction/type/token/sevetity';
import type { TokenNodeType } from '$stylist/architecture/type/token/node-type';
import type { TokenSize } from '$stylist/architecture';
import { resolveSemanticZoomPresentation } from '$stylist/architecture/function/semantic-zoom/index';
import { LiteGraphNodeStyleManager } from '$stylist';

export function createLiteGraphNodeState(props: LiteGraphNodeProps) {
	const resolvedPresentation = $derived(
		props.presentation ??
			resolveSemanticZoomPresentation(props.worldDepth ?? 500, props.cameraDepth ?? props.worldDepth ?? 500)
	);
	const type = $derived((props.type ?? 'default') as TokenNodeType);
	const mode = $derived((props.mode ?? 'default') as TokenSeverity);
	const status = $derived((props.status ?? 'enabled') as TokenInteration);
	const size = $derived((props.size ?? resolvedPresentation.size ?? 'md') as TokenSize);
	const selected = $derived(Boolean(props.selected));
	const draggable = $derived(props.draggable ?? true);
	const width = $derived(props.width ?? resolvedPresentation.width ?? 200);
	const minWidth = $derived(props.minWidth ?? 150);
	const height = $derived(props.height ?? resolvedPresentation.height ?? 'auto');
	const color = $derived(props.color ?? '#3b82f6');
	const headerColor = $derived(props.headerColor ?? props.color ?? '#2563eb');
	const renderHeader = $derived(!props.hideHeader && (resolvedPresentation.stage === 'detailed' || resolvedPresentation.stage === 'screen'));
	const renderPorts = $derived(
		!props.hidePorts &&
			resolvedPresentation.showChildren &&
			resolvedPresentation.stage !== 'screen'
	);
	const renderProperties = $derived(!props.hideProperties && resolvedPresentation.stage === 'screen');
	const useSemanticShell = $derived(
		resolvedPresentation.stage === 'dot' ||
			resolvedPresentation.stage === 'icon' ||
			resolvedPresentation.stage === 'pill' ||
			resolvedPresentation.stage === 'minimal' ||
			resolvedPresentation.stage === 'compact'
	);

	const classes = $derived(
		LiteGraphNodeStyleManager.getNodeClasses(type, mode, status, size, selected, resolvedPresentation)
	);
	const styles = $derived(
		LiteGraphNodeStyleManager.getNodeStyles({
			x: props.x,
			y: props.y,
			width,
			minWidth,
			height,
			color,
			headerColor,
			presentation: resolvedPresentation
		})
	);

	return {
		get type() {
			return type;
		},
		get mode() {
			return mode;
		},
		get status() {
			return status;
		},
		get size() {
			return size;
		},
		get selected() {
			return selected;
		},
		get draggable() {
			return draggable;
		},
		get width() {
			return width;
		},
		get minWidth() {
			return minWidth;
		},
		get height() {
			return height;
		},
		get color() {
			return color;
		},
		get headerColor() {
			return headerColor;
		},
		get presentation() {
			return resolvedPresentation;
		},
		get renderHeader() {
			return renderHeader;
		},
		get renderPorts() {
			return renderPorts;
		},
		get renderProperties() {
			return renderProperties;
		},
		get useSemanticShell() {
			return useSemanticShell;
		},
		get classes() {
			return classes;
		},
		get styles() {
			return styles;
		}
	};
}

export default createLiteGraphNodeState;






