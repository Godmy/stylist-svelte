import type { PlaygroundCanvasShellProps } from '$stylist/playground/type/struct/playground-canvas-shell-props';
import type { PlaygroundCanvasShellViewportSize } from '$stylist/playground/type/struct/playground-canvas-shell-viewport-size';
import type { PlaygroundCanvasShellBackgroundType } from '$stylist/playground/type/struct/playground-canvas-shell-background-type';
export function createPlaygroundCanvasShellState(props: PlaygroundCanvasShellProps) {
  const component = $derived(props.component);
  const componentProps = $derived(props.props);
  const children = $derived(props.children);
  const viewport = $derived(props.viewport ?? 'desktop');
  const zoom = $derived(props.zoom ?? 1);
  const background = $derived(props.background ?? 'gray');
  const showGrid = $derived(props.showGrid ?? false);
  const showDeviceFrame = $derived(props.showDeviceFrame ?? false);
  const onZoomChange = $derived(props.onZoomChange);

  let panX = $state(0);
  let panY = $state(0);
  let isPanning = $state(false);
  let lastPointerX = $state(0);
  let lastPointerY = $state(0);
  let canvasContainer: HTMLDivElement;

  const viewportSizes: Record<PlaygroundCanvasShellViewportSize, string> = {
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
    fullscreen: '100%'
  };

  const backgroundClasses: Record<PlaygroundCanvasShellBackgroundType, string> = {
    white: 'bg-white',
    gray: 'bg-gray-50 dark:bg-gray-900',
    dark: 'bg-gray-900',
    transparent: 'bg-transparent'
  };

  const currentViewportWidth = $derived(viewportSizes[viewport]);
  const backgroundClass = $derived(backgroundClasses[background] ?? backgroundClasses.gray);

  function handlePointerDown(e: PointerEvent) {
    if (e.button === 1 || (e.button === 0 && e.shiftKey)) {
      e.preventDefault();
      isPanning = true;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      if (canvasContainer) {
        canvasContainer.setPointerCapture(e.pointerId);
        canvasContainer.style.cursor = 'grabbing';
      }
    }
  }

  function handlePointerMove(e: PointerEvent) {
    if (!isPanning) return;
    e.preventDefault();
    panX += e.clientX - lastPointerX;
    panY += e.clientY - lastPointerY;
    lastPointerX = e.clientX;
    lastPointerY = e.clientY;
  }

  function handlePointerUp(e: PointerEvent) {
    if (!isPanning) return;
    isPanning = false;
    if (canvasContainer) {
      canvasContainer.releasePointerCapture(e.pointerId);
      canvasContainer.style.cursor = '';
    }
  }

  function handleWheel(e: WheelEvent) {
    if (!onZoomChange || (!e.ctrlKey && !e.metaKey)) return;
    e.preventDefault();
    const delta = -e.deltaY * 0.001;
    const newZoom = Math.max(0.1, Math.min(5, zoom + delta));
    if (newZoom !== zoom) onZoomChange(newZoom);
  }

  return {
    get component() { return component; },
    get componentProps() { return componentProps; },
    get children() { return children; },
    get viewport() { return viewport; },
    get zoom() { return zoom; },
    get background() { return background; },
    get showGrid() { return showGrid; },
    get showDeviceFrame() { return showDeviceFrame; },
    get panX() { return panX; },
    get panY() { return panY; },
    get isPanning() { return isPanning; },
    get currentViewportWidth() { return currentViewportWidth; },
    get backgroundClass() { return backgroundClass; },
    get canvasContainer() { return canvasContainer; },
    set canvasContainer(value: HTMLDivElement) { canvasContainer = value; },
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleWheel
  };
}

export default createPlaygroundCanvasShellState;
