<script lang="ts">
  import GraphvizNode from './GraphvizNode.svelte';

  type NodeShape = 'box' | 'polygon' | 'ellipse' | 'circle' | 'point' | 'egg' | 'triangle' 
                  | 'plaintext' | 'diamond' | 'trapezium' | 'parallelogram' | 'house' 
                  | 'pentagon' | 'hexagon' | 'septagon' | 'octagon' | 'doublecircle' 
                  | 'doubleoctagon' | 'tripleoctagon' | 'invtriangle' | 'invtrapezium' 
                  | 'invhouse' | 'Mdiamond' | 'Msquare' | 'Mcircle' | 'rect' | 'rectangle' 
                  | 'square' | 'star' | 'none' | 'underline' | 'cylinder' | 'note' 
                  | 'tab' | 'folder' | 'box3d' | 'component' | 'promoter' | 'cds' 
                  | 'terminator' | 'utr' | 'primersite' | 'restrictionsite' 
                  | 'fivepoverhang' | 'threepoverhang' | 'noverhang' 
                  | 'assembly' | 'signature' | 'insulator' | 'ribosite' 
                  | 'rnastab' | 'proteasesite' | 'proteinstab' | 'rpromoter' 
                  | 'rarrow' | 'larrow' | 'lpromoter';

  type NodeStyle = 'solid' | 'dashed' | 'dotted' | 'bold' | 'filled' | 'invisible' | 'diagonals' | 'rounded';

  // Props
  let { 
    id,
    label = '',
    shape = 'ellipse',
    color = '#000000',
    fillColor = '#ffffff',
    style = 'solid',
    fontSize = 14,
    width = 100,
    height = 60,
    selected = false,
    highlight = false,
    onClick,
    onContextMenu
  }: {
    id: string;
    label: string;
    shape?: NodeShape;
    color?: string;
    fillColor?: string;
    style?: NodeStyle;
    fontSize?: number;
    width?: number;
    height?: number;
    selected?: boolean;
    highlight?: boolean;
    onClick?: (id: string) => void;
    onContextMenu?: (id: string, event: MouseEvent) => void;
  } = $props();

  // Local state
  let nodePosition = $state({ x: 0, y: 0 });

  // Handle position updates
  function updatePosition(x: number, y: number) {
    nodePosition = { x, y };
  }
</script>

<div class="node-with-label-container" style="position: relative;">
  <GraphvizNode 
    {id}
    {label}
    {shape}
    color={color}
    fillColor={fillColor}
    style={style}
    {fontSize}
    {width}
    {height}
    {selected}
    {highlight}
    onclick={(e: MouseEvent) => onClick?.(id)}
    oncontextmenu={(e: MouseEvent) => onContextMenu?.(id, e)}
  />
</div>