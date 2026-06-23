import type { PlaygroundCanvasShellViewportSize } from '$stylist/playground/type/struct/playground-canvas-shell-viewport-size';
import type { PlaygroundShellHeaderColorScheme } from '$stylist/playground/type/struct/playground-shell-header-color-scheme';

export type PlaygroundShellHeaderProps = {
	showComponentTree?: boolean;
	showAIPanel?: boolean;
	drawingMode?: boolean;
	drawColor?: string;
	currentViewport?: PlaygroundCanvasShellViewportSize;
	showDeviceFrame?: boolean;
	showGrid?: boolean;
	zoom?: number;
	darkMode?: boolean;
	colorSchemes?: PlaygroundShellHeaderColorScheme[];
	activeColorScheme?: PlaygroundShellHeaderColorScheme;
	onToggleComponentTree?: () => void;
	onToggleAIPanel?: () => void;
	onToggleDrawingMode?: () => void;
	onTakeScreenshot?: () => void;
	onChangeDrawColor?: (color: string) => void;
	onSetViewport?: (id: PlaygroundCanvasShellViewportSize) => void;
	onToggleDeviceFrame?: () => void;
	onZoomOut?: () => void;
	onZoomIn?: () => void;
	onToggleGrid?: () => void;
	onToggleDarkMode?: () => void;
	onSetColorScheme?: (id: string) => void;
	class?: string;
};
