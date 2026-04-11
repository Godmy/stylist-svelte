export type ViewportSize = 'mobile' | 'tablet' | 'desktop' | 'fullscreen';

export type ColorScheme = {
  id: string;
  name: string;
  accent: string;
  accentStrong: string;
};

export type Props = {
  showComponentTree?: boolean;
  showAIPanel?: boolean;
  drawingMode?: boolean;
  drawColor?: string;
  currentViewport?: ViewportSize;
  showDeviceFrame?: boolean;
  showGrid?: boolean;
  zoom?: number;
  darkMode?: boolean;
  colorSchemes?: ColorScheme[];
  activeColorScheme?: ColorScheme;
  onToggleComponentTree?: () => void;
  onToggleAIPanel?: () => void;
  onToggleDrawingMode?: () => void;
  onTakeScreenshot?: () => void;
  onChangeDrawColor?: (color: string) => void;
  onSetViewport?: (id: ViewportSize) => void;
  onToggleDeviceFrame?: () => void;
  onZoomOut?: () => void;
  onZoomIn?: () => void;
  onToggleGrid?: () => void;
  onToggleDarkMode?: () => void;
  onSetColorScheme?: (id: string) => void;
  class?: string;
}
