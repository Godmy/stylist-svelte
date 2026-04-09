/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { CanvasChartRecipe } from '$stylist/chart/interface/recipe/canvas-chart';
import { CanvasChartStyleManager } from '$stylist/chart/class/style-manager/canvas-chart';

export function createCanvasChartState(props: CanvasChartRecipe) {
  const width = $derived(props.width ?? 800);
  const height = $derived(props.height ?? 600);
  const data = $derived(props.data ?? []);
  const type = $derived((props.type ?? 'line') as 'line' | 'bar' | 'scatter' | 'area');
  const title = $derived(props.title ?? '');
  const showGrid = $derived(props.showGrid ?? true);
  const colors = $derived(props.colors ?? ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']);

  const canvasClasses = $derived(CanvasChartStyleManager.getCanvasClasses(props.class));
  const containerClasses = $derived(CanvasChartStyleManager.getContainerClasses());

  const restProps = $derived.by(() => {
    const {
      class: _class,
      width: _width,
      height: _height,
      data: _data,
      type: _type,
      title: _title,
      showGrid: _showGrid,
      colors: _colors,
      children: _children,
      ...rest
    } = props;
    return rest;
  });

  return {
    get width() { return width; },
    get height() { return height; },
    get data() { return data; },
    get type() { return type; },
    get title() { return title; },
    get showGrid() { return showGrid; },
    get colors() { return colors; },
    get canvasClasses() { return canvasClasses; },
    get containerClasses() { return containerClasses; },
    get restProps() { return restProps; }
  };
}

export default createCanvasChartState;
