/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { LitegraphNodeRecipe } from '$stylist/science/interface/recipe/litegraph-node';
import { LiteGraphNodeStyleManager } from '$stylist/science/class/style-manager/litegraph-node';

export function createLiteGraphNodeState(props: LitegraphNodeRecipe) {
  const id = $derived(props.id ?? `node-${Date.now()}`);
  const title = $derived(props.title ?? 'Untitled');
  const type = $derived(props.type ?? 'default');
  const mode = $derived(props.mode ?? 'default');
  const status = $derived(props.status ?? 'default');
  const x = $derived(props.x ?? 0);
  const y = $derived(props.y ?? 0);
  const width = $derived(props.width ?? 200);
  const minWidth = $derived(props.minWidth ?? 150);
  const height = $derived(props.height ?? 'auto');
  const color = $derived(props.color ?? 'var(--color-primary-500)');
  const headerColor = $derived(props.headerColor ?? color);
  const size = $derived((props.size ?? 'md') as 'sm' | 'md' | 'lg');
  const selected = $derived(props.selected ?? false);
  const draggable = $derived(props.draggable ?? true);
  const selectable = $derived(props.selectable ?? true);
  const resizable = $derived(props.resizable ?? true);
  const deletable = $derived(props.deletable ?? true);
  const duplicable = $derived(props.duplicable ?? true);
  const hideHeader = $derived(props.hideHeader ?? false);
  const hidePorts = $derived(props.hidePorts ?? false);
  const hideProperties = $derived(props.hideProperties ?? false);
  const showActions = $derived(props.showActions ?? true);
  const useSemanticShell = $derived(false);
  const presentation = $derived({
    stage: 'production',
    size: size,
    showIcon: false,
    showLabel: true,
    showDescription: false
  });

  const renderHeader = $derived(!hideHeader);
  const renderPorts = $derived(!hidePorts);
  const renderProperties = $derived(!hideProperties);

  const classes = $derived(LiteGraphNodeStyleManager.getNodeClasses(props.class));
  const headerClasses = $derived(LiteGraphNodeStyleManager.getHeaderClasses());
  const bodyClasses = $derived(LiteGraphNodeStyleManager.getBodyClasses());
  const portsClasses = $derived(LiteGraphNodeStyleManager.getPortsClasses());
  const propertiesClasses = $derived(LiteGraphNodeStyleManager.getPropertiesClasses());
  const contentClasses = $derived(LiteGraphNodeStyleManager.getContentClasses());
  const semanticShellClasses = $derived(LiteGraphNodeStyleManager.getSemanticShellClasses());
  const semanticIconClasses = $derived(LiteGraphNodeStyleManager.getSemanticIconClasses());
  const semanticTitleClasses = $derived(LiteGraphNodeStyleManager.getSemanticTitleClasses());
  const semanticDescriptionClasses = $derived(LiteGraphNodeStyleManager.getSemanticDescriptionClasses());

  const styles = $derived(
    `left: ${x}px; top: ${y}px; width: ${width}px; min-width: ${minWidth}px; --node-color: ${color}; --node-header-color: ${headerColor};`
  );

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
      children: _children,
      headerContent: _headerContent,
      bodyContent: _bodyContent,
      ...rest
    } = props;
    return rest;
  });

  return {
    get id() { return id; },
    get title() { return title; },
    get type() { return type; },
    get mode() { return mode; },
    get status() { return status; },
    get x() { return x; },
    get y() { return y; },
    get width() { return width; },
    get minWidth() { return minWidth; },
    get height() { return height; },
    get color() { return color; },
    get headerColor() { return headerColor; },
    get size() { return size; },
    get selected() { return selected; },
    get draggable() { return draggable; },
    get selectable() { return selectable; },
    get resizable() { return resizable; },
    get deletable() { return deletable; },
    get duplicable() { return duplicable; },
    get hideHeader() { return hideHeader; },
    get hidePorts() { return hidePorts; },
    get hideProperties() { return hideProperties; },
    get showActions() { return showActions; },
    get useSemanticShell() { return useSemanticShell; },
    get presentation() { return presentation; },
    get renderHeader() { return renderHeader; },
    get renderPorts() { return renderPorts; },
    get renderProperties() { return renderProperties; },
    get classes() { return classes; },
    get headerClasses() { return headerClasses; },
    get bodyClasses() { return bodyClasses; },
    get portsClasses() { return portsClasses; },
    get propertiesClasses() { return propertiesClasses; },
    get contentClasses() { return contentClasses; },
    get semanticShellClasses() { return semanticShellClasses; },
    get semanticIconClasses() { return semanticIconClasses; },
    get semanticTitleClasses() { return semanticTitleClasses; },
    get semanticDescriptionClasses() { return semanticDescriptionClasses; },
    get styles() { return styles; },
    get restProps() { return restProps; }
  };
}

export default createLiteGraphNodeState;
