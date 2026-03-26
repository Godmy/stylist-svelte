import type {
	Idef0BlackBoxProps,
	Idef0ConnectorProps,
	Idef0DiagramProps,
	Idef0FunctionBoxProps,
	Idef0InputsProps,
	Idef0OutputsProps,
	Idef0Port,
	Idef0PortLabelProps
} from '$stylist/information/interface/idef0';
import { Idef0StyleManager } from '$stylist/information/class/style-manager/idef0';
import type { Idef0PortPosition } from '$stylist/information/interface/idef0';


function calculatePortPositions(ports: Idef0Port[], top: number, height: number): Idef0PortPosition[] {
	if (ports.length === 0) {
		return [];
	}

	const step = height / (ports.length + 1);
	return ports.map((port, index) => ({
		port,
		y: top + step * (index + 1)
	}));
}

export function createIdef0FunctionBoxState(props: Idef0FunctionBoxProps) {
	const groupClasses = $derived(Idef0StyleManager.getFunctionBoxGroupClasses(props.class));
	const rectClasses = $derived(Idef0StyleManager.getFunctionBoxRectClasses());
	const titleClasses = $derived(Idef0StyleManager.getFunctionBoxTitleClasses());
	const subtitleClasses = $derived(Idef0StyleManager.getFunctionBoxSubtitleClasses());

	return {
		get groupClasses() {
			return groupClasses;
		},
		get rectClasses() {
			return rectClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get subtitleClasses() {
			return subtitleClasses;
		}
	};
}

export function createIdef0ConnectorState(props: Idef0ConnectorProps) {
	const groupClasses = $derived(Idef0StyleManager.getConnectorGroupClasses(props.class));
	const lineClasses = $derived(Idef0StyleManager.getConnectorLineClasses());
	const labelClasses = $derived(Idef0StyleManager.getConnectorLabelClasses());

	return {
		get groupClasses() {
			return groupClasses;
		},
		get lineClasses() {
			return lineClasses;
		},
		get labelClasses() {
			return labelClasses;
		}
	};
}

export function createIdef0PortLabelState(props: Idef0PortLabelProps) {
	const classes = $derived(Idef0StyleManager.getPortLabelClasses(props.class));

	return {
		get classes() {
			return classes;
		}
	};
}

export function createIdef0InputsState(props: Idef0InputsProps) {
	const positions = $derived(calculatePortPositions(props.ports, props.boxY, props.boxHeight));

	return {
		get positions() {
			return positions;
		}
	};
}

export function createIdef0OutputsState(props: Idef0OutputsProps) {
	const positions = $derived(calculatePortPositions(props.ports, props.boxY, props.boxHeight));

	return {
		get positions() {
			return positions;
		}
	};
}

export function createIdef0BlackBoxState(props: Idef0BlackBoxProps) {
	const width = $derived(props.width ?? 920);
	const height = $derived(props.height ?? 420);
	const boxWidth = $derived(props.boxWidth ?? 320);
	const boxHeight = $derived(props.boxHeight ?? 220);
	const boxX = $derived((width - boxWidth) / 2);
	const boxY = $derived((height - boxHeight) / 2);

	return {
		get width() {
			return width;
		},
		get height() {
			return height;
		},
		get boxWidth() {
			return boxWidth;
		},
		get boxHeight() {
			return boxHeight;
		},
		get boxX() {
			return boxX;
		},
		get boxY() {
			return boxY;
		}
	};
}

export function createIdef0DiagramState(props: Idef0DiagramProps) {
	const containerClasses = $derived(Idef0StyleManager.getDiagramContainerClasses(props.class));
	const svgClasses = $derived(Idef0StyleManager.getDiagramSvgClasses());
	const width = $derived(props.width ?? 960);
	const height = $derived(props.height ?? 460);

	return {
		get containerClasses() {
			return containerClasses;
		},
		get svgClasses() {
			return svgClasses;
		},
		get width() {
			return width;
		},
		get height() {
			return height;
		}
	};
}

export default createIdef0DiagramState;



