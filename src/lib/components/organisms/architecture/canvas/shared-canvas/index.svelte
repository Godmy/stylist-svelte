<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { MousePointer2, Square, Circle, Type, Trash2, Download, Redo, Undo, Palette } from 'lucide-svelte';
  import { SharedCanvasStyleManager } from '$stylist/design-system/styles';
  import type { SharedCanvasProps, CanvasObject, CanvasUser } from '$stylist/design-system/props';

  export type Tool = 'select' | 'rectangle' | 'circle' | 'text' | 'pen' | 'eraser';

  let {
    width = 800,
    height = 600,
    objects = [],
    users = [],
    currentUserId,
    currentUser,
    onObjectAdd,
    onObjectUpdate,
    onObjectDelete,
    showUsers = true,
    showToolbar = true,
    class: className = '',
    toolbarClass = '',
    canvasClass = '',
    variant = 'default',
    size = 'md',
    ...restProps
  }: SharedCanvasProps & HTMLAttributes<HTMLDivElement> = $props();

  let selectedTool: Tool = $state('select');
  let selectedColor = $state('#3b82f6'); // Default blue
  let isDrawing = $state(false);
  let startX = $state(0);
  let startY = $state(0);
  let currentObject: CanvasObject | null = $state(null);
  let canvasRef: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let undoStack: CanvasObject[] = $state([]);
  let redoStack: CanvasObject[] = $state([]);

  // Initialize canvas
  $effect(() => {
    if (canvasRef) {
      ctx = canvasRef.getContext('2d')!;
      redrawCanvas();
    }
  });

  // Redraw canvas when objects change
  $effect(() => {
    redrawCanvas();
  });

  function redrawCanvas() {
    if (!ctx || !canvasRef) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);

    // Draw all objects
    objects.forEach(obj => {
      ctx.strokeStyle = obj.color || '#000000';
      ctx.lineWidth = 2;
      ctx.fillStyle = obj.color || '#000000';

      switch (obj.type) {
        case 'rectangle':
          if (obj.width && obj.height) {
            ctx.strokeRect(obj.x, obj.y, obj.width, obj.height);
          }
          break;
        case 'circle':
          if (obj.radius) {
            ctx.beginPath();
            ctx.arc(obj.x, obj.y, obj.radius, 0, 2 * Math.PI);
            ctx.stroke();
          }
          break;
        case 'text':
          ctx.font = '16px Arial';
          ctx.fillText(obj.text || '', obj.x, obj.y);
          break;
        case 'path':
          if (obj.points && obj.points.length > 0) {
            ctx.beginPath();
            ctx.moveTo(obj.points[0].x, obj.points[0].y);
            for (let i = 1; i < obj.points.length; i++) {
              ctx.lineTo(obj.points[i].x, obj.points[i].y);
            }
            ctx.stroke();
          }
          break;
      }
    });
  }

  function handleMouseDown(e: MouseEvent) {
    if (!canvasRef) return;

    const rect = canvasRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    startX = x;
    startY = y;
    isDrawing = true;

    if (selectedTool === 'pen') {
      currentObject = {
        id: `obj_${Date.now()}`,
        type: 'path',
        x: 0, // Not used for paths
        y: 0, // Not used for paths
        points: [{ x, y }],
        color: selectedColor,
        userId: currentUserId
      };
    } else if (selectedTool !== 'select') {
      currentObject = {
        id: `obj_${Date.now()}`,
        type: selectedTool === 'rectangle' ? 'rectangle' :
              selectedTool === 'circle' ? 'circle' :
              'text',
        x,
        y,
        color: selectedColor,
        userId: currentUserId
      };
    }
  }

  function handleMouseMove(e: MouseEvent) {
    if (!isDrawing || !canvasRef || !currentObject) return;

    const rect = canvasRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (selectedTool === 'pen' && currentObject.points) {
      currentObject.points.push({ x, y });
      redrawCanvas();
      // Draw the updated path
      ctx.strokeStyle = currentObject.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(currentObject.points[currentObject.points.length - 2].x, currentObject.points[currentObject.points.length - 2].y);
      ctx.lineTo(x, y);
      ctx.stroke();
    } else if (selectedTool === 'rectangle') {
      redrawCanvas();
      ctx.strokeStyle = currentObject.color;
      ctx.lineWidth = 2;
      ctx.strokeRect(
        currentObject.x,
        currentObject.y,
        x - currentObject.x,
        y - currentObject.y
      );
    } else if (selectedTool === 'circle') {
      redrawCanvas();
      const radius = Math.sqrt(Math.pow(x - currentObject.x, 2) + Math.pow(y - currentObject.y, 2));
      currentObject.radius = radius;
      ctx.beginPath();
      ctx.arc(currentObject.x, currentObject.y, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = currentObject.color;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  function handleMouseUp() {
    if (!isDrawing || !currentObject) return;

    isDrawing = false;

    if (selectedTool === 'rectangle') {
      currentObject.width = Math.abs(startX - (currentObject.points ? currentObject.points[currentObject.points.length - 1].x : 0));
      currentObject.height = Math.abs(startY - (currentObject.points ? currentObject.points[currentObject.points.length - 1].y : 0));
      currentObject.x = Math.min(startX, currentObject.x);
      currentObject.y = Math.min(startY, currentObject.y);
    } else if (selectedTool === 'circle') {
      // Radius is already set in mousemove
    }

    if (onObjectAdd && currentObject) {
      onObjectAdd(currentObject);
    }

    currentObject = null;
  }

  function deleteSelected() {
    // This would need to be enhanced to handle selection logic
    if (objects.length > 0) {
      const lastObject = objects[objects.length - 1];
      if (onObjectDelete) {
        onObjectDelete(lastObject.id);
      }
    }
  }

  function exportCanvas() {
    if (canvasRef) {
      const link = document.createElement('a');
      link.download = 'shared-canvas.png';
      link.href = canvasRef.toDataURL();
      link.click();
    }
  }

  function undo() {
    if (objects.length > 0) {
      const lastObject = objects[objects.length - 1];
      if (onObjectDelete) {
        onObjectDelete(lastObject.id);
        redoStack.push(lastObject);
      }
    }
  }

  function redo() {
    if (redoStack.length > 0) {
      const lastUndone = redoStack.pop();
      if (lastUndone && onObjectAdd) {
        onObjectAdd(lastUndone);
      }
    }
  }

  // Generate CSS classes using the style manager
  const containerClass = $derived(SharedCanvasStyleManager.getContainerClass(variant, size, className));
  const toolbarClassComputed = $derived(SharedCanvasStyleManager.getToolbarClass(toolbarClass));
  const canvasClassComputed = $derived(SharedCanvasStyleManager.getCanvasClass(canvasClass));
  const userPanelClass = $derived(SharedCanvasStyleManager.getUserPanelClass());
  const userItemClass = $derived(SharedCanvasStyleManager.getUserItemClass());
</script>

<div class={containerClass} {...restProps}>
  <!-- Toolbar -->
  {#if showToolbar}
    <div class={toolbarClassComputed}>
      <div class="flex space-x-1">
        <button
          type="button"
          class={SharedCanvasStyleManager.getToolButtonClass(selectedTool === 'select')}
          onclick={() => selectedTool = 'select'}
          title="Select Tool"
          aria-label="Select Tool"
        >
          <MousePointer2 class="h-4 w-4" />
        </button>
        <button
          type="button"
          class={SharedCanvasStyleManager.getToolButtonClass(selectedTool === 'rectangle')}
          onclick={() => selectedTool = 'rectangle'}
          title="Rectangle Tool"
          aria-label="Rectangle Tool"
        >
          <Square class="h-4 w-4" />
        </button>
        <button
          type="button"
          class={SharedCanvasStyleManager.getToolButtonClass(selectedTool === 'circle')}
          onclick={() => selectedTool = 'circle'}
          title="Circle Tool"
          aria-label="Circle Tool"
        >
          <Circle class="h-4 w-4" />
        </button>
        <button
          type="button"
          class={SharedCanvasStyleManager.getToolButtonClass(selectedTool === 'text')}
          onclick={() => selectedTool = 'text'}
          title="Text Tool"
          aria-label="Text Tool"
        >
          <Type class="h-4 w-4" />
        </button>
      </div>

      <div class="h-5 border-l border-[--color-border-default] mx-2"></div>

      <div class="flex items-center space-x-2">
        <label class="flex items-center text-sm">
          <Palette class="h-4 w-4 mr-1" />
          Color:
          <input
            type="color"
            class="ml-1 w-8 h-8 p-1 border border-[--color-border-default] rounded cursor-pointer"
            bind:value={selectedColor}
            aria-label="Select color"
          />
        </label>
      </div>

      <div class="h-5 border-l border-[--color-border-default] mx-2"></div>

      <div class="flex space-x-1">
        <button
          type="button"
          class={SharedCanvasStyleManager.getActionButtonClass()}
          onclick={undo}
          title="Undo"
          aria-label="Undo"
        >
          <Undo class="h-4 w-4" />
        </button>
        <button
          type="button"
          class={SharedCanvasStyleManager.getActionButtonClass()}
          onclick={redo}
          title="Redo"
          aria-label="Redo"
        >
          <Redo class="h-4 w-4" />
        </button>
        <button
          type="button"
          class={SharedCanvasStyleManager.getActionButtonClass()}
          onclick={deleteSelected}
          title="Delete Selected"
          aria-label="Delete Selected"
        >
          <Trash2 class="h-4 w-4" />
        </button>
        <button
          type="button"
          class={SharedCanvasStyleManager.getActionButtonClass()}
          onclick={exportCanvas}
          title="Export Canvas"
          aria-label="Export Canvas"
        >
          <Download class="h-4 w-4" />
        </button>
      </div>
    </div>
  {/if}

  <div class="flex">
    <!-- Canvas -->
    <div class="flex-1 relative">
      <canvas
        bind:this={canvasRef}
        width={width}
        height={height}
        class={canvasClassComputed}
        onmousedown={handleMouseDown}
        onmousemove={handleMouseMove}
        onmouseup={handleMouseUp}
        onmouseleave={handleMouseUp}
      ></canvas>

      <!-- Display other users' cursors -->
      {#if showUsers && users.length > 0}
        {#each users as user}
          {#if user.cursorPosition && user.id !== currentUserId}
            <div
              class="absolute w-2 h-2 rounded-full"
              style={`left: ${user.cursorPosition.x}px; top: ${user.cursorPosition.y}px; background-color: ${user.color};`}
              title={user.name}
              aria-label={`Cursor of ${user.name}`}
            ></div>
          {/if}
        {/each}
      {/if}
    </div>

    <!-- User list -->
    {#if showUsers}
      <div class={userPanelClass}>
        <h4 class="text-sm font-medium text-[--color-text-secondary] mb-2">Collaborators</h4>
        <div class="space-y-2">
          {#each users as user}
            <div class={userItemClass}>
              <div
                class="w-4 h-4 rounded-full mr-2"
                style={`background-color: ${user.color}`}
                title={user.name}
                aria-label={user.name}
              ></div>
              <span class="text-sm text-[--color-text-primary]">{user.name}</span>
              {#if user.id === currentUserId}
                <span class="ml-1 text-xs text-[--color-text-tertiary]">(You)</span>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>
