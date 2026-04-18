import type { PlaygroundShellHeaderViewportSize } from '$stylist/development/type/struct/playground-shell-header-viewport-size';
import type { PlaygroundShellHeaderColorScheme } from '$stylist/development/type/struct/playground-shell-header-color-scheme';

export type PlaygroundShellHeaderProps = {
  showComponentTree?: boolean;
  showAIPanel?: boolean;
  drawingMode?: boolean;
  drawColor?: string;
  currentViewport?: PlaygroundShellHeaderViewportSize;
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
  onSetViewport?: (id: PlaygroundShellHeaderViewportSize) => void;
  onToggleDeviceFrame?: () => void;
  onZoomOut?: () => void;
  onZoomIn?: () => void;
  onToggleGrid?: () => void;
  onToggleDarkMode?: () => void;
  onSetColorScheme?: (id: string) => void;
  class?: string;
}
