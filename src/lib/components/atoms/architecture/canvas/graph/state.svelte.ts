import type { GraphEdgeProps, GraphEdgeType, GraphNodeProps, GraphNodeSize } from '$stylist/design-system/graph';
import { getGraphEdgeClasses, getGraphEdgeStyles, getGraphNodePositionStyle, getGraphNodeSizeClasses } from '$stylist/design-system/graph';

export function createGraphEdgeState(props: GraphEdgeProps) {
  const directed = $derived(props.directed ?? true);
  const type = $derived((props.type ?? 'line') as GraphEdgeType);
  const style = $derived(props.style ?? {});

  const classes = $derived(getGraphEdgeClasses(directed, type));
  const styles = $derived(getGraphEdgeStyles(style));

  return {
    get directed() {
      return directed;
    },
    get type() {
      return type;
    },
    get classes() {
      return classes;
    },
    get styles() {
      return styles;
    }
  };
}

export function createGraphNodeState(props: GraphNodeProps) {
  const size = $derived((props.size ?? 'md') as GraphNodeSize);
  const color = $derived(props.color ?? '#3b82f6');
  const positionStyle = $derived(getGraphNodePositionStyle(props.x, props.y));
  const sizeClasses = $derived(getGraphNodeSizeClasses(size));
  const style = $derived(`${positionStyle}; --color: ${color};`);

  return {
    get size() {
      return size;
    },
    get sizeClasses() {
      return sizeClasses;
    },
    get style() {
      return style;
    }
  };
}
