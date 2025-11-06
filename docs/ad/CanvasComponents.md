# Canvas Components Documentation

This document describes the canvas drawing components added to the stylist-svelte library.

## Overview

The canvas drawing component suite includes a main canvas board component, drawing tools, and a toolbar to manage the drawing experience. These components are built using Svelte 5 and follow the Atomic Design principles.

## Components

### CanvasBoard

The main drawing surface component that uses HTML5 Canvas API to enable drawing functionality.

#### Props

- `width` (number, default: 800) - Width of the canvas in pixels
- `height` (number, default: 600) - Height of the canvas in pixels
- `lineWidth` (number, default: 2) - Thickness of drawing lines
- `strokeColor` (string, default: '#000000') - Color of the drawing lines
- `drawingTool` (DrawingTool, default: 'pen') - Current drawing tool

#### Methods

- `clearCanvas()` - Clears all content from the canvas
- `saveAsImage(format?: 'png' | 'jpeg' | 'webp')` - Returns a data URL of the canvas content
- `loadImage(src: string)` - Loads an image onto the canvas

#### Exposed Properties

- `canvas` - Reference to the HTMLCanvasElement
- `ctx` - Reference to the CanvasRenderingContext2D

### PenTool

A component that allows users to configure pen drawing options.

#### Props

- `options` (DrawingOptions) - Current drawing options

#### Events

- `change` - Emitted when options change

### EraserTool

A component that allows users to configure eraser tool options.

#### Props

- `options` (DrawingOptions) - Current drawing options

#### Events

- `change` - Emitted when options change

### CanvasToolbar

A composite component that provides a toolbar with different drawing tools.

#### Props

- `selectedTool` (DrawingTool) - Currently selected drawing tool
- `drawingOptions` (DrawingOptions) - Current drawing options

#### Events

- `tool-change` - Emitted when the tool or options change
- `clear-canvas` - Emitted when clear button is pressed
- `save` - Emitted when save button is pressed
- `undo` - Emitted when undo button is pressed
- `redo` - Emitted when redo button is pressed

## Types

### DrawingTool

```ts
type DrawingTool = 'pen' | 'eraser' | 'line' | 'rectangle' | 'circle' | 'text';
```

### DrawingOptions

```ts
interface DrawingOptions {
  lineWidth: number;
  strokeColor: string;
  fillColor?: string;
  tool: DrawingTool;
  mode: DrawingMode;
  fontSize?: number;
  fontFamily?: string;
}
```

### DrawingMode

```ts
type DrawingMode = 'draw' | 'select' | 'erase';
```

## Usage

### Basic Drawing Board

```svelte
<script>
  import { CanvasBoard } from 'stylist-svelte';
  
  let canvasRef;
</script>

<CanvasBoard 
  bind:this={canvasRef}
  width={800}
  height={600}
  lineWidth={3}
  strokeColor={'#ff0000'}
  on:draw={handleDraw}
/>
```

### Complete Drawing Interface

```svelte
<script>
  import { CanvasBoard, CanvasToolbar } from 'stylist-svelte';
  import type { DrawingTool, DrawingOptions } from 'stylist-svelte';
  
  let selectedTool: DrawingTool = 'pen';
  let drawingOptions: DrawingOptions = {
    lineWidth: 2,
    strokeColor: '#000000',
    tool: 'pen',
    mode: 'draw'
  };
  
  function handleToolChange(e: CustomEvent<{ tool: DrawingTool, options: DrawingOptions }>) {
    selectedTool = e.detail.tool;
    drawingOptions = e.detail.options;
  }
</script>

<div style="display: flex; gap: 20px;">
  <CanvasToolbar 
    {selectedTool}
    {drawingOptions}
    on:tool-change={handleToolChange}
  />
  
  <CanvasBoard 
    {width}
    {height}
    {lineWidth}
    {strokeColor}
    {drawingTool}
  />
</div>
```

## Features

- **Drawing Tools**: Pen and eraser tools with customizable options
- **Interactive Canvas**: Responsive drawing surface with mouse/touch support
- **Flexible Configuration**: Adjustable brush size, colors, and tool types
- **Export Capabilities**: Save canvas content as image files
- **Modular Design**: Each tool is a separate component for easy customization

## Roadmap

Future enhancements might include:
- Additional drawing tools (rectangle, circle, line, text)
- Shape drawing capabilities
- Drawing history with undo/redo functionality
- Image import/export options
- Touch/multi-touch support for mobile devices