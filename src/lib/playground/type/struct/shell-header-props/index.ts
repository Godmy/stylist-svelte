import type { PlaygroundCanvasShellViewportSize as ShellCanvasViewportSize } from '$stylist/playground/type/alias/playground-canvas-shell-viewport-size';
import type { ShellHeaderColorScheme } from '$stylist/playground/type/struct/shell-header-color-scheme';

export type ShellHeaderProps = {
	showComponentTree?: boolean;
	showAIPanel?: boolean;
	drawingMode?: boolean;
	drawColor?: string;
	currentViewport?: ShellCanvasViewportSize;
	showDeviceFrame?: boolean;
	showGrid?: boolean;
	zoom?: number;
	darkMode?: boolean;
	colorSchemes?: ShellHeaderColorScheme[];
	activeColorScheme?: ShellHeaderColorScheme;
	onToggleComponentTree?: () => void;
	onToggleAIPanel?: () => void;
	onToggleDrawingMode?: () => void;
	onTakeScreenshot?: () => void;
	onChangeDrawColor?: (color: string) => void;
	onSetViewport?: (id: ShellCanvasViewportSize) => void;
	onToggleDeviceFrame?: () => void;
	onZoomOut?: () => void;
	onZoomIn?: () => void;
	onToggleGrid?: () => void;
	onToggleDarkMode?: () => void;
	onSetColorScheme?: (id: string) => void;
	class?: string;
};

