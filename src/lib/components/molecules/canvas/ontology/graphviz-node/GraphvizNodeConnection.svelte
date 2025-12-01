<script lang="ts">
  import GraphvizNode from './GraphvizNode.svelte';
  import GraphvizEdge from './GraphvizEdge.svelte';

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

  type EdgeArrowType = 'normal' | 'dot' | 'odot' | 'none' | 'tee' | 'crow' 
                     | 'box' | 'obox' | 'diamond' | 'odiamond' | 'open' 
                     | 'inv' | 'oinv' | 'invdot' | 'oinvdot' | 'vee' | 'halfopen';

  type EdgeStyle = 'solid' | 'dashed' | 'dotted' | 'bold' | 'tapered' | 'invisible';

  // Props
  let { 
    sourceId,
    sourceLabel = '',
    sourceShape = 'ellipse',
    sourceColor = '#000000',
    sourceFillColor = '#ffffff',
    sourceStyle = 'solid',
    sourceFontSize = 14,
    sourceWidth = 100,
    sourceHeight = 60,
    
    targetId,
    targetLabel = '',
    targetShape = 'ellipse',
    targetColor = '#000000',
    targetFillColor = '#ffffff',
    targetStyle = 'solid',
    targetFontSize = 14,
    targetWidth = 100,
    targetHeight = 60,
    
    edgeId,
    edgeLabel = '',
    edgeColor = '#000000',
    edgeWidth = 2,
    edgeStyle = 'solid',
    sourceArrow = 'none',
    targetArrow = 'normal',
    
    spacing = 150,
    selected = false,
    highlight = false,
    
    onNodeClick,
    onEdgeClick
  }: {
    sourceId: string;
    sourceLabel: string;
    sourceShape?: NodeShape;
    sourceColor?: string;
    sourceFillColor?: string;
    sourceStyle?: NodeStyle;
    sourceFontSize?: number;
    sourceWidth?: number;
    sourceHeight?: number;
    
    targetId: string;
    targetLabel: string;
    targetShape?: NodeShape;
    targetColor?: string;
    targetFillColor?: string;
    targetStyle?: NodeStyle;
    targetFontSize?: number;
    targetWidth?: number;
    targetHeight?: number;
    
    edgeId: string;
    edgeLabel?: string;
    edgeColor?: string;
    edgeWidth?: number;
    edgeStyle?: EdgeStyle;
    sourceArrow?: EdgeArrowType;
    targetArrow?: EdgeArrowType;
    
    spacing?: number;
    selected?: boolean;
    highlight?: boolean;
    
    onNodeClick?: (id: string) => void;
    onEdgeClick?: (id: string) => void;
  } = $props();
</script>

<div class="node-connection-container" style="display: flex; align-items: center; justify-content: center;">
  <GraphvizNode 
    id={sourceId}
    label={sourceLabel}
    shape={sourceShape}
    color={sourceColor}
    fillColor={sourceFillColor}
    style={sourceStyle}
    fontSize={sourceFontSize}
    width={sourceWidth}
    height={sourceHeight}
    selected={selected}
    highlight={highlight}
    onclick={(e: MouseEvent) => onNodeClick?.(sourceId)}
  />
  
  <GraphvizEdge 
    id={edgeId}
    source={sourceId}
    target={targetId}
    sourceX={sourceWidth + 20}
    sourceY={sourceHeight / 2}
    targetX={-20}
    targetY={targetHeight / 2}
    label={edgeLabel}
    color={edgeColor}
    width={edgeWidth}
    style={edgeStyle}
    sourceArrow={sourceArrow}
    targetArrow={targetArrow}
    selected={selected}
    highlight={highlight}
    onclick={(e: MouseEvent) => onEdgeClick?.(edgeId)}
  />
  
  <GraphvizNode 
    id={targetId}
    label={targetLabel}
    shape={targetShape}
    color={targetColor}
    fillColor={targetFillColor}
    style={targetStyle}
    fontSize={targetFontSize}
    width={targetWidth}
    height={targetHeight}
    selected={selected}
    highlight={highlight}
    onclick={(e: MouseEvent) => onNodeClick?.(targetId)}
  />
</div>