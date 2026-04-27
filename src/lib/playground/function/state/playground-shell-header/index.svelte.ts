import type { PlaygroundShellHeaderProps } from '$stylist/playground/type/struct/playground-shell-header-props';
import type { PlaygroundShellHeaderViewportSize } from '$stylist/playground/type/struct/playground-shell-header-viewport-size';
import type { PlaygroundShellHeaderColorScheme } from '$stylist/playground/type/struct/playground-shell-header-color-scheme';
const ZoomIn = 'zoom-in';
const ZoomOut = 'zoom-out';
const Smartphone = 'smartphone';
const Tablet = 'tablet';
const Monitor = 'monitor';
const ChevronDown = 'chevron-down';
const Camera = 'camera';
const Sparkles = 'sparkles';
const Pencil = 'pencil';
const X = 'x';

export function createPlaygroundShellHeaderState(props: PlaygroundShellHeaderProps) {
  const showComponentTree = $derived(props.showComponentTree ?? false);
  const showAIPanel = $derived(props.showAIPanel ?? false);
  const drawingMode = $derived(props.drawingMode ?? false);
  const drawColor = $derived(props.drawColor ?? 'var(--color-error-500)');
  const currentViewport = $derived(props.currentViewport ?? 'desktop');
  const showDeviceFrame = $derived(props.showDeviceFrame ?? false);
  const showGrid = $derived(props.showGrid ?? false);
  const zoom = $derived(props.zoom ?? 1);
  const darkMode = $derived(props.darkMode ?? false);
  const colorSchemes = $derived(props.colorSchemes ?? []);
  const activeColorScheme = $derived(props.activeColorScheme);
  const onToggleComponentTree = $derived(props.onToggleComponentTree);
  const onToggleAIPanel = $derived(props.onToggleAIPanel);
  const onToggleDrawingMode = $derived(props.onToggleDrawingMode);
  const onTakeScreenshot = $derived(props.onTakeScreenshot);
  const onChangeDrawColor = $derived(props.onChangeDrawColor);
  const onSetViewport = $derived(props.onSetViewport);
  const onToggleDeviceFrame = $derived(props.onToggleDeviceFrame);
  const onZoomOut = $derived(props.onZoomOut);
  const onZoomIn = $derived(props.onZoomIn);
  const onToggleGrid = $derived(props.onToggleGrid);
  const onToggleDarkMode = $derived(props.onToggleDarkMode);
  const onSetColorScheme = $derived(props.onSetColorScheme);
  const className = $derived(props.class ?? '');

  const deviceOptions: Array<{ id: PlaygroundShellHeaderViewportSize; label: string; description: string; icon: string }> = [
    { id: 'mobile', label: 'Mobile (375px)', description: 'iPhone SE breakpoint', icon: Smartphone },
    { id: 'tablet', label: 'Tablet (768px)', description: 'iPad breakpoint', icon: Tablet },
    { id: 'desktop', label: 'Desktop (1440px)', description: 'Large screen layout', icon: Monitor }
  ];

  const drawColors = [
    { name: 'Red', value: 'var(--color-error-500)' },
    { name: 'Orange', value: 'var(--color-warning-500)' },
    { name: 'Yellow', value: 'var(--color-warning-500)' },
    { name: 'Green', value: 'var(--color-success-500)' },
    { name: 'Blue', value: 'var(--color-primary-500)' },
    { name: 'Purple', value: 'var(--color-secondary-500)' },
    { name: 'Pink', value: 'var(--color-danger-500)' },
    { name: 'White', value: 'var(--color-background-primary)' },
    { name: 'Black', value: 'var(--color-text-primary)' }
  ];

  let deviceMenuOpen = $state(false);
  let colorMenuOpen = $state(false);
  let drawColorMenuOpen = $state(false);

  const selectedDevice = $derived(deviceOptions.find((device) => device.id === currentViewport) ?? deviceOptions[0]);
  const selectedColorScheme = $derived(activeColorScheme ?? colorSchemes[0]);

  function selectDevice(id: PlaygroundShellHeaderViewportSize) {
    onSetViewport?.(id);
    deviceMenuOpen = false;
  }

  function selectColorScheme(id: string) {
    onSetColorScheme?.(id);
    colorMenuOpen = false;
  }

  function closeAllMenus() {
    deviceMenuOpen = false;
    colorMenuOpen = false;
    drawColorMenuOpen = false;
  }

  function toggleButtonClasses(isActive: boolean) {
    return [
      'flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border shadow-sm transition-all h-9',
      isActive
        ? 'bg-gradient-to-r from-[var(--playground-accent)] to-[var(--playground-accent-strong)] border-[var(--playground-accent)] text-[var(--playground-accent-contrast)] shadow-[0_12px_30px_var(--playground-accent-shadow)]'
        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
    ].join(' ');
  }

  return {
    get showComponentTree() { return showComponentTree; },
    get showAIPanel() { return showAIPanel; },
    get drawingMode() { return drawingMode; },
    get drawColor() { return drawColor; },
    get currentViewport() { return currentViewport; },
    get showDeviceFrame() { return showDeviceFrame; },
    get showGrid() { return showGrid; },
    get zoom() { return zoom; },
    get darkMode() { return darkMode; },
    get colorSchemes() { return colorSchemes; },
    get activeColorScheme() { return activeColorScheme; },
    get className() { return className; },
    get deviceMenuOpen() { return deviceMenuOpen; },
    get colorMenuOpen() { return colorMenuOpen; },
    get drawColorMenuOpen() { return drawColorMenuOpen; },
    get selectedDevice() { return selectedDevice; },
    get selectedColorScheme() { return selectedColorScheme; },
    get deviceOptions() { return deviceOptions; },
    get drawColors() { return drawColors; },
    set deviceMenuOpen(value: boolean) { deviceMenuOpen = value; },
    set colorMenuOpen(value: boolean) { colorMenuOpen = value; },
    set drawColorMenuOpen(value: boolean) { drawColorMenuOpen = value; },
    selectDevice,
    selectColorScheme,
    closeAllMenus,
    toggleButtonClasses,
    get onToggleComponentTree() { return onToggleComponentTree; },
    get onToggleAIPanel() { return onToggleAIPanel; },
    get onToggleDrawingMode() { return onToggleDrawingMode; },
    get onTakeScreenshot() { return onTakeScreenshot; },
    get onChangeDrawColor() { return onChangeDrawColor; },
    get onSetViewport() { return onSetViewport; },
    get onToggleDeviceFrame() { return onToggleDeviceFrame; },
    get onZoomOut() { return onZoomOut; },
    get onZoomIn() { return onZoomIn; },
    get onToggleGrid() { return onToggleGrid; },
    get onToggleDarkMode() { return onToggleDarkMode; },
    get onSetColorScheme() { return onSetColorScheme; }
  };
}

export default createPlaygroundShellHeaderState;
