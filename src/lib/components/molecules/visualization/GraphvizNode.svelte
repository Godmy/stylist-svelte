<script lang="ts">
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

  type Props = {
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
    class?: string;
  };

  let {
    id,
    label,
    shape = 'ellipse',
    color = '#000000',
    fillColor = '#ffffff',
    style = 'solid',
    fontSize = 14,
    width = 100,
    height = 60,
    selected = false,
    highlight = false,
    class: className = ''
  }: Props = $props();
</script>

<div class="graphviz-node {className}">
  <svg class="w-full h-full">
    {#if shape === 'ellipse'}
      <ellipse cx="50" cy="30" rx="45" ry="25" fill={backgroundColor} stroke={color} />
    {:else if shape === 'box'}
      <rect x="5" y="5" width="90" height="50" rx="5" ry="5" fill={backgroundColor} stroke={color} />
    {/if}
    <text x="50" y="35" text-anchor="middle" fill={color} font-size="12">
      {label}
    </text>
  </svg>
</div>

<style>
  .graphviz-node {
    position: absolute;
  }
  
  .graphviz-node svg {
    width: 100px;
    height: 60px;
  }
</style>