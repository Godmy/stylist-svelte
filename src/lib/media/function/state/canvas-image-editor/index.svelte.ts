/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { CanvasImageEditorRecipe } from '$stylist/media/interface/recipe/canvas-image-editor';
import { CanvasImageEditorStyleManager } from '$stylist/media/class/style-manager/canvas-image-editor';

export function createCanvasImageEditorState(props: CanvasImageEditorRecipe) {
  const width = $derived(props.width ?? 800);
  const height = $derived(props.height ?? 600);
  const src = $derived(props.src);
  const cropEnabled = $derived(props.cropEnabled ?? false);
  const filter = $derived((props.filter ?? 'none') as string);
  const brightness = $derived(props.brightness ?? 100);
  const contrast = $derived(props.contrast ?? 100);
  const saturation = $derived(props.saturation ?? 100);
  const hue = $derived(props.hue ?? 0);

  const canvasClasses = $derived(CanvasImageEditorStyleManager.getCanvasClasses(props.class));
  const containerClasses = $derived(CanvasImageEditorStyleManager.getContainerClasses());
  const toolbarClasses = $derived(CanvasImageEditorStyleManager.getToolbarClasses());
  const toolButtonClasses = $derived(CanvasImageEditorStyleManager.getToolButtonClasses());

  const restProps = $derived.by(() => {
    const {
      class: _class,
      width: _width,
      height: _height,
      src: _src,
      cropEnabled: _cropEnabled,
      filter: _filter,
      brightness: _brightness,
      contrast: _contrast,
      saturation: _saturation,
      hue: _hue,
      children: _children,
      ...rest
    } = props;
    return rest;
  });

  return {
    get width() { return width; },
    get height() { return height; },
    get src() { return src; },
    get cropEnabled() { return cropEnabled; },
    get filter() { return filter; },
    get brightness() { return brightness; },
    get contrast() { return contrast; },
    get saturation() { return saturation; },
    get hue() { return hue; },
    get canvasClasses() { return canvasClasses; },
    get containerClasses() { return containerClasses; },
    get toolbarClasses() { return toolbarClasses; },
    get toolButtonClasses() { return toolButtonClasses; },
    get restProps() { return restProps; }
  };
}

export default createCanvasImageEditorState;
