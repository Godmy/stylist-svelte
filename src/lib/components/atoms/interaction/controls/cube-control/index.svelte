<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Atom = 'atom';
const Biohazard = 'biohazard';
const Hand = 'hand';
const House = 'house';
const Info = 'info';
const Radiation = 'radiation';

  import type { HTMLAttributes } from 'svelte/elements';

  const FACE_TITLES = ['Atomic Design', 'Contracts', 'Tokens', 'Styles Managers', 'Classes', 'Models'] as const;
  const FACE_NAMES = ['front', 'back', 'right', 'left', 'top', 'bottom'] as const;
  const FACE_THEMES = [
    { accent: '#2563eb', tint: 'rgba(191, 219, 254, 0.6)' },
    { accent: '#4f46e5', tint: 'rgba(199, 210, 254, 0.62)' },
    { accent: '#0d9488', tint: 'rgba(153, 246, 228, 0.58)' },
    { accent: '#ea580c', tint: 'rgba(254, 215, 170, 0.62)' },
    { accent: '#7c3aed', tint: 'rgba(221, 214, 254, 0.64)' },
    { accent: '#be123c', tint: 'rgba(254, 205, 211, 0.62)' }
  ] as const;
  const VERTICAL_ICONS = [
    { type: 'atom', label: 'Atom', tone: 'radial-gradient(circle at 30% 25%, #dbeafe 0%, #60a5fa 55%, #1d4ed8 100%)' },
    { type: 'molecule', label: 'Molecule', tone: 'radial-gradient(circle at 30% 25%, #dcfce7 0%, #4ade80 55%, #166534 100%)' },
    { type: 'organism', label: 'Organism', tone: 'radial-gradient(circle at 30% 25%, #f5d0fe 0%, #c084fc 55%, #7e22ce 100%)' }
  ] as const;
  const HORIZONTAL_ICONS = [
    { type: 'architecture', label: 'Architecture', tone: 'linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%)' },
    { type: 'information', label: 'Information', tone: 'linear-gradient(135deg, #0284c7 0%, #22d3ee 100%)' },
    { type: 'interaction', label: 'Interaction', tone: 'linear-gradient(135deg, #7c2d12 0%, #f97316 100%)' }
  ] as const;
  const FACE_NUMBERS_SNAPSHOT: number[][] = [
    // Atomic Design: rows=Atom/Molecule/Organism, cols=Architecture/Information/Interaction.
    [11, 75, 97, 18, 62, 57, 14, 58, 75],
    // Contracts: row1=raw, row2=share %, row3=density per 100 components.
    [19, 65, 65, 13, 43, 43, 44, 33, 28],
    // Tokens
    [16, 7, 6, 53, 23, 20, 37, 4, 3],
    // Styles Managers
    [15, 101, 55, 9, 59, 32, 35, 52, 24],
    // Classes
    [7, 25, 10, 16, 58, 23, 16, 13, 4],
    // Models
    [11, 47, 60, 9, 39, 50, 26, 24, 26]
  ];

  export type CubeRotation = {
    x: number;
    y: number;
  };

  export type CubeSelectionState = {
    selectedIconId: string | null;
    selectedTitleFace: number | null;
    selectedCellByFace: number[];
  };

  export type CubeDebugLogEntry = {
    ts: number;
    source: 'stage' | 'icon' | 'title' | 'cell';
    action: string;
    id?: string;
    faceIndex?: number;
    cellIndex?: number;
    pointerType?: string;
    x?: number;
    y?: number;
  };

  type Props = {
    size?: number;
    perspective?: number;
    autoRotate?: boolean;
    rotationDuration?: number;
    interactive?: boolean;
    inertiaEnabled?: boolean;
    inertiaFriction?: number;
    inertiaSensitivity?: number;
    faceLabels?: boolean;
    class?: string;
    onRotate?: (rotation: CubeRotation) => void;
    onSelectionChange?: (selection: CubeSelectionState) => void;
    onDebugLog?: (entry: CubeDebugLogEntry) => void;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    size = 380,
    perspective = 700,
    autoRotate = true,
    rotationDuration = 24,
    interactive = true,
    inertiaEnabled = true,
    inertiaFriction = 0.94,
    inertiaSensitivity = 1,
    faceLabels = true,
    class: className = '',
    onRotate,
    onSelectionChange,
    onDebugLog,
    ...restProps
  }: Props = $props();

  let rotationX = $state(-22);
  let rotationY = $state(32);
  let isDragging = $state(false);
  let isInertiaSpinning = $state(false);
  let lastPointerX = $state(0);
  let lastPointerY = $state(0);
  let lastMoveTime = $state(0);
  let pointerTravel = $state(0);
  let velocityX = $state(0);
  let velocityY = $state(0);
  let inertiaFrame = $state<number | null>(null);
  let autoRotateFrame = $state<number | null>(null);
  let autoRotatePauseUntil = $state(0);
  let autoRotateRampStart = $state(0);
  let vectorShiftInterval = $state<number | null>(null);
  let autoDriftX = $state(0);
  let autoDriftY = $state(0);
  let targetDriftX = $state(0);
  let targetDriftY = $state(0);
  let faceNumbers = $state(FACE_NUMBERS_SNAPSHOT.map((grid) => [...grid]));
  let activeCells = $state(FACE_TITLES.map(() => -1));
  let selectedIconId = $state<string | null>(null);
  let selectedTitleFace = $state<number | null>(null);
  let selectedCellByFace = $state(FACE_TITLES.map(() => -1));
  let lastSelectionSignature = '';
  let isHoveringSelectable = $state(false);

  const cubeSize = $derived(Math.max(40, size));
  const perspectiveValue = $derived(Math.max(200, perspective));
  const durationValue = $derived(Math.max(1, rotationDuration));
  const inertiaFrictionValue = $derived(clamp(inertiaFriction, 0.82, 0.99));
  const inertiaSensitivityValue = $derived(clamp(inertiaSensitivity, 0.2, 3));
  const orbitTransform = $derived(`rotateX(${rotationX}deg) rotateY(${rotationY}deg)`);

  function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value));
  }

  function handlePointerDown(event: PointerEvent) {
    if (!interactive) return;
    let selectable: HTMLElement | null = null;
    if (typeof document !== 'undefined') {
      const stack = document.elementsFromPoint(event.clientX, event.clientY);
      selectable =
        (stack.find((el) => el instanceof HTMLElement && el.hasAttribute('data-select-type')) as HTMLElement | undefined) ??
        null;
    }

    if (!selectable) {
      const rawTarget = event.target as EventTarget | null;
      const targetElement =
        rawTarget instanceof Element
          ? rawTarget
          : rawTarget instanceof Node
            ? rawTarget.parentElement
            : null;
      selectable = targetElement?.closest<HTMLElement>('[data-select-type]') ?? null;
    }

    if (selectable) {
      event.preventDefault();
      const selectType = selectable.dataset.selectType;
      const selectId = selectable.dataset.selectId;
      const faceIndexRaw = selectable.dataset.faceIndex;
      const cellIndexRaw = selectable.dataset.cellIndex;
      const faceIndex = faceIndexRaw ? Number(faceIndexRaw) : null;
      const cellIndex = cellIndexRaw ? Number(cellIndexRaw) : null;

      if (selectType === 'icon' && selectId) {
        selectIcon(selectId);
        pushDebugLog({
          ts: Date.now(),
          source: 'icon',
          action: 'select',
          id: selectId,
          pointerType: event.pointerType,
          x: event.clientX,
          y: event.clientY
        });
      } else if (selectType === 'title' && faceIndex !== null && Number.isFinite(faceIndex)) {
        selectedTitleFace = faceIndex;
        scheduleAutoRotateResume();
        emitSelectionChange();
        pushDebugLog({
          ts: Date.now(),
          source: 'title',
          action: 'select',
          faceIndex,
          id: FACE_TITLES[faceIndex],
          pointerType: event.pointerType,
          x: event.clientX,
          y: event.clientY
        });
      } else if (
        selectType === 'cell' &&
        faceIndex !== null &&
        cellIndex !== null &&
        Number.isFinite(faceIndex) &&
        Number.isFinite(cellIndex)
      ) {
        const next = [...selectedCellByFace];
        next[faceIndex] = cellIndex;
        selectedCellByFace = next;
        scheduleAutoRotateResume();
        emitSelectionChange();
        pushDebugLog({
          ts: Date.now(),
          source: 'cell',
          action: 'select',
          faceIndex,
          cellIndex,
          id: `${faceIndex}:${cellIndex}`,
          pointerType: event.pointerType,
          x: event.clientX,
          y: event.clientY
        });
      }
      return;
    }

    pushDebugLog({
      ts: Date.now(),
      source: 'stage',
      action: 'pointerdown',
      pointerType: event.pointerType,
      x: event.clientX,
      y: event.clientY
    });
    stopInertia();
    isDragging = true;
    isInertiaSpinning = false;
    pointerTravel = 0;
    lastPointerX = event.clientX;
    lastPointerY = event.clientY;
    lastMoveTime = performance.now();
  }

  function stopInertia() {
    if (typeof window === 'undefined') return;
    if (inertiaFrame !== null) {
      window.cancelAnimationFrame(inertiaFrame);
      inertiaFrame = null;
    }
    velocityX = 0;
    velocityY = 0;
    isInertiaSpinning = false;
  }

  function startInertia() {
    if (typeof window === 'undefined') return;
    if (!inertiaEnabled) return;

    const minVelocity = 0.05;
    if (Math.abs(velocityX) < minVelocity && Math.abs(velocityY) < minVelocity) {
      stopInertia();
      return;
    }

    isInertiaSpinning = true;

    const step = () => {
      rotationY += velocityY;
      rotationX = clamp(rotationX + velocityX, -88, 88);
      velocityX *= inertiaFrictionValue;
      velocityY *= inertiaFrictionValue;

      if (Math.abs(velocityX) < minVelocity && Math.abs(velocityY) < minVelocity) {
        stopInertia();
        return;
      }

      inertiaFrame = window.requestAnimationFrame(step);
    };

    inertiaFrame = window.requestAnimationFrame(step);
  }

  function resetRotation() {
    stopInertia();
    rotationX = -22;
    rotationY = 32;
  }

  function selectIcon(iconId: string) {
    selectedIconId = iconId;
    scheduleAutoRotateResume();
    emitSelectionChange();
  }

  function emitSelectionChange() {
    const signature = `${selectedIconId ?? ''}|${selectedTitleFace ?? ''}|${selectedCellByFace.join(',')}`;
    if (signature === lastSelectionSignature) return;
    lastSelectionSignature = signature;
    onSelectionChange?.({
      selectedIconId,
      selectedTitleFace,
      selectedCellByFace: [...selectedCellByFace]
    });
  }

  function pushDebugLog(entry: CubeDebugLogEntry) {
    if (typeof window !== 'undefined') {
      const w = window as Window & { __cubeControlLog?: CubeDebugLogEntry[] };
      if (!w.__cubeControlLog) w.__cubeControlLog = [];
      w.__cubeControlLog.push(entry);
      if (w.__cubeControlLog.length > 400) {
        w.__cubeControlLog.splice(0, w.__cubeControlLog.length - 400);
      }
    }
    onDebugLog?.(entry);
  }

  function scheduleAutoRotateResume() {
    if (typeof window === 'undefined') return;
    const now = performance.now();
    autoRotatePauseUntil = now + 4000;
    autoRotateRampStart = autoRotatePauseUntil;
  }

  function randomBetween(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  $effect(() => {
    if (typeof window === 'undefined') return;

    const handlePointerMove = (event: PointerEvent) => {
      if (!isDragging) return;

      const deltaX = event.clientX - lastPointerX;
      const deltaY = event.clientY - lastPointerY;
      pointerTravel += Math.abs(deltaX) + Math.abs(deltaY);
      const now = performance.now();
      const elapsed = Math.max(8, now - lastMoveTime);
      const timeScale = 16.67 / elapsed;

      rotationY += deltaX * 0.6;
      rotationX = clamp(rotationX - deltaY * 0.6, -88, 88);
      velocityY = deltaX * 0.6 * timeScale * inertiaSensitivityValue;
      velocityX = -deltaY * 0.6 * timeScale * inertiaSensitivityValue;

      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      lastMoveTime = now;
    };

    const stopDragging = () => {
      if (isDragging) {
        isDragging = false;
        if (pointerTravel < 8) {
          stopInertia();
          scheduleAutoRotateResume();
        } else {
          startInertia();
        }
        return;
      }
      isDragging = false;
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', stopDragging);
    window.addEventListener('pointercancel', stopDragging);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', stopDragging);
      window.removeEventListener('pointercancel', stopDragging);
    };
  });

  $effect(() => {
    return () => {
      stopInertia();
    };
  });

  $effect(() => {
    if (typeof window === 'undefined') return;

    let lastTime = performance.now();
    const rampDurationMs = 2600;

    const tick = (now: number) => {
      const deltaSeconds = (now - lastTime) / 1000;
      lastTime = now;

      if (autoRotate && !isDragging && !isInertiaSpinning && !isHoveringSelectable) {
        // Smooth drift interpolation to avoid sudden direction jumps.
        autoDriftX += (targetDriftX - autoDriftX) * 0.04;
        autoDriftY += (targetDriftY - autoDriftY) * 0.04;

        let speedFactor = 0;
        if (now >= autoRotatePauseUntil) {
          const rampProgress = (now - autoRotateRampStart) / rampDurationMs;
          speedFactor = clamp(rampProgress, 0, 1);
        }

        const baseDegreesPerSecond = 360 / durationValue;
        rotationY += (baseDegreesPerSecond + autoDriftY) * speedFactor * deltaSeconds;
        rotationX = clamp(rotationX + autoDriftX * speedFactor * deltaSeconds, -88, 88);
      }

      autoRotateFrame = window.requestAnimationFrame(tick);
    };

    autoRotateFrame = window.requestAnimationFrame(tick);

    return () => {
      if (autoRotateFrame !== null) {
        window.cancelAnimationFrame(autoRotateFrame);
        autoRotateFrame = null;
      }
    };
  });

  $effect(() => {
    if (typeof window === 'undefined') return;

    const chooseNextVectorShift = () => {
      // Small vector drift: gentle wobble around the base Y rotation.
      targetDriftX = clamp(targetDriftX + randomBetween(-0.45, 0.45), -1.2, 1.2);
      targetDriftY = clamp(targetDriftY + randomBetween(-0.7, 0.7), -1.8, 1.8);
    };

    chooseNextVectorShift();
    vectorShiftInterval = window.setInterval(() => {
      chooseNextVectorShift();
    }, 7000);

    return () => {
      if (vectorShiftInterval !== null) {
        window.clearInterval(vectorShiftInterval);
        vectorShiftInterval = null;
      }
    };
  });

  $effect(() => {
    if (typeof window === 'undefined') return;
    const intervalId = window.setInterval(() => {
      const nextActiveCells = [...activeCells];
      faceNumbers.forEach((grid, faceIndex) => {
        const previous = nextActiveCells[faceIndex];
        const next = (previous + 1 + grid.length) % grid.length;
        nextActiveCells[faceIndex] = next;
      });
      activeCells = nextActiveCells;
    }, 850);

    return () => {
      window.clearInterval(intervalId);
    };
  });

  $effect(() => {
    onRotate?.({ x: rotationX, y: rotationY });
  });

</script>

<div class={`c-cube-control ${className}`.trim()} {...restProps}>
  <div class="cube-stage" style={`--perspective:${perspectiveValue}px; --cube-size:${cubeSize}px;`} onpointerdown={handlePointerDown} role="img" aria-label="3D cube control">
    <div class="cube-orbit" style={`transform:${orbitTransform};`}>
      <div class="cube">
        {#each FACE_NAMES as faceName, faceIndex}
          <div class={`cube-face cube-face-${faceName}`}>
            {#if faceLabels}
              <div class="face-template" style={`--face-accent:${FACE_THEMES[faceIndex].accent}; --face-tint:${FACE_THEMES[faceIndex].tint};`}>
                <button
                  type="button"
                  class={`face-title ${selectedTitleFace === faceIndex ? 'face-title-selected' : ''}`}
                  data-select-type="title"
                  data-face-index={faceIndex}
                  onpointerenter={() => (isHoveringSelectable = true)}
                  onpointerleave={() => (isHoveringSelectable = false)}
                  onpointerdown={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    selectedTitleFace = faceIndex;
                    scheduleAutoRotateResume();
                    emitSelectionChange();
                    pushDebugLog({
                      ts: Date.now(),
                      source: 'title',
                      action: 'select',
                      faceIndex,
                      id: FACE_TITLES[faceIndex],
                      pointerType: event.pointerType,
                      x: event.clientX,
                      y: event.clientY
                    });
                  }}
                >
                  {FACE_TITLES[faceIndex]}
                </button>
                <div class="face-content">
                  <div class="face-matrix">
                    {#each HORIZONTAL_ICONS as icon, iconIndex}
                      <button
                        type="button"
                        class={`template-icon template-axis-icon template-axis-icon-horizontal ${selectedIconId === `${faceIndex}-h-${icon.type}` ? 'template-icon-selected' : ''}`}
                        title={icon.label}
                        style={`--icon-tone:${icon.tone}; grid-column:${iconIndex + 2}; grid-row:1;`}
                        aria-label={icon.label}
                        aria-pressed={selectedIconId === `${faceIndex}-h-${icon.type}`}
                        data-select-type="icon"
                        data-select-id={`${faceIndex}-h-${icon.type}`}
                        data-face-index={faceIndex}
                        onpointerenter={() => (isHoveringSelectable = true)}
                        onpointerleave={() => (isHoveringSelectable = false)}
                        onpointerdown={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          const id = `${faceIndex}-h-${icon.type}`;
                          selectIcon(id);
                          pushDebugLog({
                            ts: Date.now(),
                            source: 'icon',
                            action: 'select',
                            id,
                            faceIndex,
                            pointerType: event.pointerType,
                            x: event.clientX,
                            y: event.clientY
                          });
                        }}
                      >
                        {#if icon.type === 'architecture'}
                          <BaseIcon name={House} class="template-icon-lucide" strokeWidth={2.2} />
                        {:else if icon.type === 'information'}
                          <BaseIcon name={Info} class="template-icon-lucide" strokeWidth={2.6} />
                        {:else}
                          <BaseIcon name={Hand} class="template-icon-lucide" strokeWidth={2.1} />
                        {/if}
                      </button>
                    {/each}

                    {#each VERTICAL_ICONS as icon, iconIndex}
                      <button
                        type="button"
                        class={`template-icon template-axis-icon template-axis-icon-vertical ${selectedIconId === `${faceIndex}-v-${icon.type}` ? 'template-icon-selected' : ''}`}
                        title={icon.label}
                        style={`--icon-tone:${icon.tone}; grid-column:1; grid-row:${iconIndex + 2};`}
                        aria-label={icon.label}
                        aria-pressed={selectedIconId === `${faceIndex}-v-${icon.type}`}
                        data-select-type="icon"
                        data-select-id={`${faceIndex}-v-${icon.type}`}
                        data-face-index={faceIndex}
                        onpointerenter={() => (isHoveringSelectable = true)}
                        onpointerleave={() => (isHoveringSelectable = false)}
                        onpointerdown={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          const id = `${faceIndex}-v-${icon.type}`;
                          selectIcon(id);
                          pushDebugLog({
                            ts: Date.now(),
                            source: 'icon',
                            action: 'select',
                            id,
                            faceIndex,
                            pointerType: event.pointerType,
                            x: event.clientX,
                            y: event.clientY
                          });
                        }}
                      >
                        {#if icon.type === 'atom'}
                          <BaseIcon name={Radiation} class="template-icon-lucide" strokeWidth={2.1} />
                        {:else if icon.type === 'molecule'}
                          <BaseIcon name={Atom} class="template-icon-lucide" strokeWidth={2.1} />
                        {:else}
                          <BaseIcon name={Biohazard} class="template-icon-lucide" strokeWidth={2.1} />
                        {/if}
                      </button>
                    {/each}

                    {#each faceNumbers[faceIndex] as value, cellIndex}
                      <button
                        type="button"
                        class={`number-cell ${activeCells[faceIndex] === cellIndex ? 'number-cell-active' : ''} ${selectedCellByFace[faceIndex] === cellIndex ? 'number-cell-selected' : ''}`}
                        style={`--cell-delay:${cellIndex * 45}ms; grid-column:${(cellIndex % 3) + 2}; grid-row:${Math.floor(cellIndex / 3) + 2};`}
                        data-select-type="cell"
                        data-face-index={faceIndex}
                        data-cell-index={cellIndex}
                        onpointerenter={() => (isHoveringSelectable = true)}
                        onpointerleave={() => (isHoveringSelectable = false)}
                        onpointerdown={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          const next = [...selectedCellByFace];
                          next[faceIndex] = cellIndex;
                          selectedCellByFace = next;
                          scheduleAutoRotateResume();
                          emitSelectionChange();
                          pushDebugLog({
                            ts: Date.now(),
                            source: 'cell',
                            action: 'select',
                            faceIndex,
                            cellIndex,
                            id: `${faceIndex}:${cellIndex}`,
                            pointerType: event.pointerType,
                            x: event.clientX,
                            y: event.clientY
                          });
                        }}
                      >
                        {String(value).padStart(3, '0')}
                      </button>
                    {/each}
                  </div>
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="cube-actions">
    <button type="button" class="cube-button" onclick={() => (rotationY -= 15)} aria-label="Rotate left">Left</button>
    <button type="button" class="cube-button" onclick={() => (rotationY += 15)} aria-label="Rotate right">Right</button>
    <button type="button" class="cube-button" onclick={() => (rotationX = clamp(rotationX - 15, -88, 88))} aria-label="Rotate up">Up</button>
    <button type="button" class="cube-button" onclick={() => (rotationX = clamp(rotationX + 15, -88, 88))} aria-label="Rotate down">Down</button>
    <button type="button" class="cube-button cube-button-reset" onclick={resetRotation} aria-label="Reset cube rotation">Reset</button>
  </div>
</div>

<style>
  .c-cube-control {
    display: inline-flex;
    flex-direction: column;
    gap: 0.75rem;
    user-select: none;
    touch-action: none;
  }

  .cube-stage {
    display: grid;
    place-items: center;
    width: calc(var(--cube-size) + 140px);
    height: calc(var(--cube-size) + 140px);
    perspective: var(--perspective);
    border-radius: 0.9rem;
    background: radial-gradient(circle at 50% 30%, rgb(241 245 249) 0%, rgb(226 232 240) 55%, rgb(203 213 225) 100%);
    border: 1px solid rgb(148 163 184 / 0.45);
    cursor: grab;
  }

  .cube-stage:active {
    cursor: grabbing;
  }

  .cube-orbit {
    transform-style: preserve-3d;
    transform-origin: center center;
  }

  .cube {
    position: relative;
    width: var(--cube-size);
    height: var(--cube-size);
    transform-style: preserve-3d;
    transform-origin: center center;
  }

  .cube-face {
    position: absolute;
    inset: 0;
    display: block;
    color: rgb(15 23 42);
    border: 1px solid rgb(15 23 42 / 0.12);
    box-shadow: inset 0 0 18px rgb(255 255 255 / 0.25);
    backface-visibility: hidden;
    overflow: hidden;
    padding: 0.45rem;
    pointer-events: auto;
  }

  .cube-face-front { transform: translateZ(calc(var(--cube-size) / 2)); background: rgb(147 197 253 / 0.85); }
  .cube-face-back { transform: rotateY(180deg) translateZ(calc(var(--cube-size) / 2)); background: rgb(253 186 116 / 0.85); }
  .cube-face-right { transform: rotateY(90deg) translateZ(calc(var(--cube-size) / 2)); background: rgb(134 239 172 / 0.85); }
  .cube-face-left { transform: rotateY(-90deg) translateZ(calc(var(--cube-size) / 2)); background: rgb(251 146 60 / 0.8); }
  .cube-face-top { transform: rotateX(90deg) translateZ(calc(var(--cube-size) / 2)); background: rgb(196 181 253 / 0.85); }
  .cube-face-bottom { transform: rotateX(-90deg) translateZ(calc(var(--cube-size) / 2)); background: rgb(244 114 182 / 0.78); }

  .face-template {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 0.35rem;
    height: 100%;
    position: relative;
    border-radius: 0.5rem;
    padding: 0.38rem;
    border: 1px solid color-mix(in srgb, var(--face-accent) 35%, transparent);
    background:
      radial-gradient(circle at 18% 15%, color-mix(in srgb, var(--face-tint) 90%, white 10%) 0%, transparent 38%),
      linear-gradient(155deg, color-mix(in srgb, white 70%, var(--face-tint) 30%) 0%, color-mix(in srgb, white 35%, var(--face-tint) 65%) 100%);
  }

  .face-template::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.45), inset 0 -18px 24px rgb(15 23 42 / 0.08);
  }

  .face-title {
    margin: 0;
    border: none;
    background: transparent;
    text-align: left;
    cursor: pointer;
    font-size: clamp(1.12rem, calc(var(--cube-size) / 101), 1.88rem);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: 0.015em;
    color: color-mix(in srgb, #0f172a 82%, var(--face-accent) 18%);
    text-shadow: 0 1px 0 rgb(255 255 255 / 0.4);
    border-radius: 0.5rem;
    padding: 0.08rem 0.24rem;
    width: fit-content;
  }

  .face-title:hover {
    background: color-mix(in srgb, white 72%, var(--face-tint) 28%);
  }

  .face-title-selected {
    background: color-mix(in srgb, white 56%, var(--face-tint) 44%);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--face-accent) 40%, transparent);
    color: color-mix(in srgb, #0f172a 8%, var(--face-accent) 92%);
  }

  .face-content {
    display: block;
    min-height: 0;
  }

  .face-matrix {
    display: grid;
    grid-template-columns: auto repeat(3, minmax(0, 1fr));
    grid-template-rows: auto repeat(3, auto);
    gap: 0.3rem;
    align-items: start;
    min-height: 0;
    width: 100%;
    transform: translate(0.32rem, 0.04rem) scale(0.87);
    transform-origin: top left;
  }

  .template-icon {
    display: grid;
    place-items: center;
    background: transparent;
    color: color-mix(in srgb, var(--face-accent) 78%, #0f172a 22%);
    border: none;
    padding: 0;
    cursor: pointer;
    border-radius: 0.45rem;
    transition: transform 140ms ease, color 140ms ease, filter 140ms ease;
    pointer-events: auto;
    touch-action: manipulation;
    position: relative;
    z-index: 3;
  }

  .template-icon:hover {
    transform: translateY(-1px);
    color: color-mix(in srgb, var(--face-accent) 88%, #0f172a 12%);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--face-accent) 46%, transparent);
    border-radius: 999px;
    background: color-mix(in srgb, white 72%, var(--face-tint) 28%);
  }

  .template-icon-selected {
    color: color-mix(in srgb, #0f172a 5%, var(--face-accent) 95%);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--face-accent) 55%, transparent), 0 0 11px color-mix(in srgb, var(--face-accent) 35%, transparent);
    border-radius: 999px;
    background: radial-gradient(circle at 50% 45%, color-mix(in srgb, white 30%, var(--face-tint) 70%) 0%, color-mix(in srgb, var(--face-accent) 26%, transparent) 78%);
    z-index: 5;
  }

  .template-icon-selected .template-icon-lucide {
    color: color-mix(in srgb, #ffffff 78%, var(--face-accent) 22%);
    stroke: color-mix(in srgb, #ffffff 78%, var(--face-accent) 22%);
    fill: color-mix(in srgb, #ffffff 78%, var(--face-accent) 22%);
    filter: drop-shadow(0 0 2px rgb(15 23 42 / 0.45));
  }

  .template-icon:focus-visible {
    outline: 2px solid color-mix(in srgb, var(--face-accent) 55%, white 45%);
    outline-offset: 2px;
  }

  .template-icon-svg {
    width: clamp(1.75rem, calc(var(--cube-size) / 96), 2.4rem);
    height: clamp(1.75rem, calc(var(--cube-size) / 96), 2.4rem);
    filter: drop-shadow(0 1px 2px rgb(15 23 42 / 0.26));
  }

  .template-icon-lucide {
    width: clamp(2.1rem, calc(var(--cube-size) / 82), 2.9rem);
    height: clamp(2.1rem, calc(var(--cube-size) / 82), 2.9rem);
    filter: drop-shadow(0 1px 2px rgb(15 23 42 / 0.26));
    color: currentColor;
    fill: currentColor;
    stroke: currentColor;
    position: relative;
    z-index: 1;
  }

  .template-axis-icon {
    width: clamp(2.3rem, calc(var(--cube-size) / 70), 3.2rem);
    height: clamp(2.3rem, calc(var(--cube-size) / 70), 3.2rem);
    justify-self: center;
    align-self: center;
    position: relative;
  }

  .template-axis-icon-horizontal {
    margin-bottom: 0.02rem;
    transform: translateY(-0.08rem);
  }

  .template-axis-icon-vertical {
    margin-right: 0.02rem;
    transform: translateX(-0.08rem);
  }

  .number-cell {
    display: grid;
    place-items: center;
    aspect-ratio: 1 / 1;
    width: 100%;
    border: 1px solid rgb(15 23 42 / 0.2);
    cursor: pointer;
    padding: 0;
    border-radius: 0.32rem;
    background: linear-gradient(145deg, rgb(255 255 255 / 0.56) 0%, rgb(248 250 252 / 0.32) 100%);
    font-size: clamp(1.08rem, calc(var(--cube-size) / 140), 1.49rem);
    font-weight: 800;
    line-height: 1;
    color: color-mix(in srgb, #0f172a 86%, var(--face-accent) 14%);
    animation: number-pulse 1.2s ease-in-out infinite;
    animation-delay: var(--cell-delay);
    transition: transform 280ms ease, box-shadow 280ms ease, background-color 280ms ease, border-color 280ms ease;
  }

  .number-cell:hover {
    border-color: color-mix(in srgb, var(--face-accent) 45%, transparent);
    background: linear-gradient(145deg, color-mix(in srgb, white 72%, var(--face-tint) 28%) 0%, color-mix(in srgb, white 60%, var(--face-tint) 40%) 100%);
  }

  .number-cell-active {
    transform: scale(1.09);
    border-color: color-mix(in srgb, var(--face-accent) 55%, transparent);
    background: linear-gradient(145deg, color-mix(in srgb, var(--face-tint) 75%, white 25%) 0%, color-mix(in srgb, var(--face-accent) 20%, white 80%) 100%);
    box-shadow: 0 0 0 1px color-mix(in srgb, var(--face-accent) 24%, transparent), 0 0 10px color-mix(in srgb, var(--face-accent) 33%, transparent);
  }

  .number-cell-selected {
    border-color: color-mix(in srgb, var(--face-accent) 68%, transparent);
    background: linear-gradient(145deg, color-mix(in srgb, white 40%, var(--face-tint) 60%) 0%, color-mix(in srgb, white 24%, var(--face-accent) 76%) 100%);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--face-accent) 42%, transparent), 0 0 14px color-mix(in srgb, var(--face-accent) 38%, transparent);
    color: color-mix(in srgb, #0f172a 8%, white 92%);
    transform: scale(1.04);
  }

  .cube-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .cube-button {
    border: 1px solid rgb(148 163 184 / 0.55);
    background: rgb(248 250 252);
    color: rgb(30 41 59);
    border-radius: 0.55rem;
    padding: 0.34rem 0.7rem;
    font-size: 0.78rem;
    line-height: 1;
    transition: background-color 150ms ease, border-color 150ms ease, transform 120ms ease;
  }

  .cube-button:hover {
    background: rgb(226 232 240);
    border-color: rgb(100 116 139 / 0.7);
  }

  .cube-button:active {
    transform: translateY(1px);
  }

  .cube-button-reset {
    background: rgb(15 23 42);
    color: rgb(241 245 249);
    border-color: rgb(15 23 42);
  }

  .cube-button-reset:hover {
    background: rgb(30 41 59);
    border-color: rgb(30 41 59);
  }

  @keyframes number-pulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 0 0 rgb(255 255 255 / 0);
    }
    50% {
      transform: scale(1.06);
      box-shadow: 0 0 8px rgb(255 255 255 / 0.45);
    }
  }
</style>

