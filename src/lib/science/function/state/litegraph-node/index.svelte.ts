import type { LitegraphNodeProps } from '$stylist/science/type/struct/litegraph-node-props';
import type { LiteGraphPort } from '$stylist/science/type/struct/litegraph-port';
import type { TokenInteration } from '$stylist/interaction/type/record/interaction';
import type { TokenSeverity } from '$stylist/interaction/type/record/sevetity';
import type { TokenNodeType } from '$stylist/architecture/type/enum/node-type';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { SemanticZoomPresentation } from '$stylist/architecture/type/struct/semantic-zoom';
import { resolveSemanticZoomPresentation } from '$stylist/architecture/function/script/semantic-zoom/index';
import { LiteGraphNodeStyleManager } from '$stylist';

export function createLiteGraphNodeState(props: LitegraphNodeProps) {
	const id = $derived(props.id);
	const title = $derived(props.title ?? '');
	let isDragging = $state(false);
	let dragStartX = $state(0);
	let dragStartY = $state(0);
	const resolvedPresentation = $derived.by((): SemanticZoomPresentation => {
		const fallback = resolveSemanticZoomPresentation(
			props.worldDepth ?? 500,
			props.cameraDepth ?? props.worldDepth ?? 500
		);

		return props.presentation ? { ...fallback, ...props.presentation } as SemanticZoomPresentation : fallback;
	});
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
	const deletable = $derived(props.deletable ?? false);
	const duplicable = $derived(props.duplicable ?? false);
	const showActions = $derived(props.showActions ?? false);
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
		LiteGraphNodeStyleManager.getNodeClasses(type as any, mode, status, size, selected, resolvedPresentation)
	);
	const styles = $derived.by(() =>
		Object.entries(
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
		)
			.map(([key, value]) => `${key}: ${value}`)
			.join('; ')
	);
	const bodyClasses = $derived(LiteGraphNodeStyleManager.getBodyClasses());
	const portsClasses = $derived(LiteGraphNodeStyleManager.getPortsClasses());
	const propertiesClasses = $derived(LiteGraphNodeStyleManager.getPropertiesClasses());
	const contentClasses = $derived(LiteGraphNodeStyleManager.getContentClasses());
	const semanticShellClasses = $derived(LiteGraphNodeStyleManager.getSemanticShellClasses());
	const semanticIconClasses = $derived(LiteGraphNodeStyleManager.getSemanticIconClasses());
	const semanticTitleClasses = $derived(LiteGraphNodeStyleManager.getSemanticTitleClasses());
	const semanticDescriptionClasses = $derived(LiteGraphNodeStyleManager.getSemanticDescriptionClasses());
	const inputs = $derived(props.inputs ?? []);
	const outputs = $derived(props.outputs ?? []);
	const properties = $derived(props.properties ?? []);
	const hasInputs = $derived(inputs.length > 0);
	const hasOutputs = $derived(outputs.length > 0);
	const hasProperties = $derived(properties.length > 0);
	const restProps = $derived.by(() => {
		const {
			class: _class,
			id: _id,
			title: _title,
			type: _type,
			mode: _mode,
			status: _status,
			x: _x,
			y: _y,
			width: _width,
			minWidth: _minWidth,
			height: _height,
			color: _color,
			headerColor: _headerColor,
			size: _size,
			inputs: _inputs,
			outputs: _outputs,
			properties: _properties,
			selected: _selected,
			draggable: _draggable,
			selectable: _selectable,
			resizable: _resizable,
			deletable: _deletable,
			duplicable: _duplicable,
			hideHeader: _hideHeader,
			hidePorts: _hidePorts,
			hideProperties: _hideProperties,
			showActions: _showActions,
			onNodeSelect: _onNodeSelect,
			onNodeDrag: _onNodeDrag,
			onNodeResize: _onNodeResize,
			ondelete: _ondelete,
			onduplicate: _onduplicate,
			onConnectionStart: _onConnectionStart,
			onConnectionEnd: _onConnectionEnd,
			onPropertyChange: _onPropertyChange,
			children: _children,
			headerContent: _headerContent,
			bodyContent: _bodyContent,
			...rest
		} = props;

		return rest;
	});

	function handleSelect() {
		props.onNodeSelect?.(props.id);
	}

	function handleMouseDown(event: MouseEvent) {
		if (props.draggable === false) return;
		isDragging = true;
		dragStartX = event.clientX;
		dragStartY = event.clientY;
		handleSelect();
	}

	function handleMouseMove(event: MouseEvent) {
		if (!isDragging || props.x === undefined || props.y === undefined) return;
		props.onNodeDrag?.(props.id, {
			x: props.x + (event.clientX - dragStartX),
			y: props.y + (event.clientY - dragStartY)
		});
	}

	function handleMouseUp() {
		isDragging = false;
	}

	function handlePortConnectionStart(port: LiteGraphPort, event: MouseEvent) {
		props.onConnectionStart?.(port, event);
	}

	function handlePortConnectionEnd(port: LiteGraphPort, event: MouseEvent) {
		props.onConnectionEnd?.(port, event);
	}

	function handlePropertyChange(propertyId: string, value: unknown) {
		props.onPropertyChange?.(propertyId, value);
	}

	return {
		get id() {
			return id;
		},
		get title() {
			return title;
		},
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
		get deletable() {
			return deletable;
		},
		get duplicable() {
			return duplicable;
		},
		get showActions() {
			return showActions;
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
		},
		get bodyClasses() {
			return bodyClasses;
		},
		get portsClasses() {
			return portsClasses;
		},
		get propertiesClasses() {
			return propertiesClasses;
		},
		get contentClasses() {
			return contentClasses;
		},
		get semanticShellClasses() {
			return semanticShellClasses;
		},
		get semanticIconClasses() {
			return semanticIconClasses;
		},
		get semanticTitleClasses() {
			return semanticTitleClasses;
		},
		get semanticDescriptionClasses() {
			return semanticDescriptionClasses;
		},
		get inputs() {
			return inputs;
		},
		get outputs() {
			return outputs;
		},
		get properties() {
			return properties;
		},
		get hasInputs() {
			return hasInputs;
		},
		get hasOutputs() {
			return hasOutputs;
		},
		get hasProperties() {
			return hasProperties;
		},
		get restProps() {
			return restProps;
		},
		handleSelect,
		handleMouseDown,
		handleMouseMove,
		handleMouseUp,
		handlePortConnectionStart,
		handlePortConnectionEnd,
		handlePropertyChange
	};
}

export default createLiteGraphNodeState;






