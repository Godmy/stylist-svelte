<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type NodeType = 'ellipse' | 'box' | 'polygon' | 'diamond' | 'triangle' 
                | 'trapezium' | 'parallelogram' | 'house' | 'pentagon' 
                | 'hexagon' | 'septagon' | 'octagon' | 'doublecircle' 
                | 'invtriangle' | 'invtrapezium' | 'Mdiamond' | 'Msquare' | 'Mcircle';

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
    children,
    onClick,
    onContextMenu,
    ...restProps
  }: {
    id: string;
    label?: string;
    shape?: NodeShape;
    color?: string;
    fillColor?: string;
    style?: NodeStyle;
    fontSize?: number;
    width?: number;
    height?: number;
    selected?: boolean;
    highlight?: boolean;
    children?: Snippet;
    onClick?: (id: string) => void;
    onContextMenu?: (id: string, event: MouseEvent) => void;
  } & HTMLAttributes<HTMLElement> = $props();

  // Local state
  let isHovered = $state(false);

  // Handle mouse events
  function handleClick(e: MouseEvent) {
    onClick?.(id);
  }

  function handleRightClick(e: MouseEvent) {
    e.preventDefault();
    onContextMenu?.(id, e);
  }

  // Compute node classes
  let nodeClasses = $derived([
    'graphviz-node',
    `shape-${shape}`,
    selected ? 'selected' : '',
    highlight ? 'highlighted' : '',
    isHovered ? 'hovered' : ''
  ].filter(Boolean).join(' '));
</script>

<style>
  .graphviz-node {
    position: absolute;
    border: 2px solid;
    border-radius: 4px;
    padding: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    font-weight: normal;
    overflow: hidden;
  }

  .graphviz-node:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .graphviz-node.selected {
    border-color: #3b82f6 !important;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }

  .graphviz-node.highlighted {
    border-color: #f59e0b !important;
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.3);
  }

  /* Shape-specific styles */
  .shape-ellipse {
    border-radius: 50%;
    min-width: 60px;
    min-height: 40px;
  }

  .shape-circle {
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }

  .shape-box, .shape-rect, .shape-rectangle {
    border-radius: 4px;
  }

  .shape-diamond {
    transform: rotate(45deg);
    min-width: 60px;
    min-height: 60px;
  }

  .shape-diamond span {
    transform: rotate(-45deg);
    display: block;
    padding: 4px;
  }

  .shape-triangle {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }

  .shape-trapezium {
    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
  }

  .shape-hexagon {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  }

  .shape-pentagon {
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  }

  /* Style-specific classes */
  .graphviz-node.style-solid { border-style: solid; }
  .graphviz-node.style-dashed { border-style: dashed; }
  .graphviz-node.style-dotted { border-style: dotted; }
  .graphviz-node.style-bold { border-width: 4px; }
  .graphviz-node.style-invisible { border: none; }

  /* Filled style uses background color */
  .graphviz-node.style-filled {
    background-color: var(--fill-color);
  }

  .graphviz-node.style-rounded {
    border-radius: 10px;
  }
</style>

<div
  class={nodeClasses}
  style="left: {0}px; top: {0}px; width: {width}px; height: {height}px; color: {color}; --fill-color: {fillColor};"
  onclick={handleClick}
  oncontextmenu={handleRightClick}
  onmouseenter={() => isHovered = true}
  onmouseleave={() => isHovered = false}
  role="button"
  tabindex="0"
  onkeydown={(e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const mouseEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });
      handleClick(mouseEvent);
    }
  }}
  {...restProps}
>
  {#if children}
    {@render children()}
  {:else}
    <span>{label}</span>
  {/if}
</div>