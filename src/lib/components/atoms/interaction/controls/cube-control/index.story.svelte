<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import CubeControl from './index.svelte';
  import type { CubeDebugLogEntry, CubeRotation, CubeSelectionState } from './index.svelte';

  let currentRotation = $state<CubeRotation>({ x: -22, y: 32 });
  let selectionState = $state<CubeSelectionState>({
    selectedIconId: null,
    selectedTitleFace: null,
    selectedCellByFace: [-1, -1, -1, -1, -1, -1]
  });
  let debugLogs = $state<CubeDebugLogEntry[]>([]);

  const controls: ControlConfig[] = [
    { name: 'size', type: 'number', defaultValue: 380, min: 80, max: 520, step: 10 },
    { name: 'perspective', type: 'number', defaultValue: 700, min: 300, max: 1400, step: 50 },
    { name: 'rotationDuration', type: 'number', defaultValue: 24, min: 2, max: 40, step: 1 },
    { name: 'autoRotate', type: 'boolean', defaultValue: true },
    { name: 'interactive', type: 'boolean', defaultValue: true },
    { name: 'inertiaEnabled', type: 'boolean', defaultValue: true },
    { name: 'inertiaFriction', type: 'number', defaultValue: 0.94, min: 0.82, max: 0.99, step: 0.01 },
    { name: 'inertiaSensitivity', type: 'number', defaultValue: 1, min: 0.2, max: 3, step: 0.1 },
    { name: 'faceLabels', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="atoms-cube-control"
  title="CubeControl"
  category="Atoms/Interaction/Controls"
  component={CubeControl}
  description="Interactive CSS 3D cube control with drag rotation, auto-rotate mode, and directional actions."
  tags={['cube', '3d', 'control', 'interaction', 'css-3d']}
  {controls}
>
  {#snippet children(values: any)}
    <div class="rounded-xl border border-[--color-border-primary] bg-[--color-background-primary] p-5">
      <CubeControl
        size={values.size}
        perspective={values.perspective}
        rotationDuration={values.rotationDuration}
        autoRotate={values.autoRotate}
        interactive={values.interactive}
        inertiaEnabled={values.inertiaEnabled}
        inertiaFriction={values.inertiaFriction}
        inertiaSensitivity={values.inertiaSensitivity}
        faceLabels={values.faceLabels}
        onRotate={(rotation) => (currentRotation = rotation)}
        onSelectionChange={(selection) => (selectionState = selection)}
        onDebugLog={(entry) => {
          debugLogs = [...debugLogs.slice(-19), entry];
        }}
      />

      <p class="mt-3 text-sm text-[--color-text-secondary]">
        Rotation X: {currentRotation.x.toFixed(1)}deg, Rotation Y: {currentRotation.y.toFixed(1)}deg
      </p>
      <p class="text-sm text-[--color-text-tertiary]">
        Tip: hold and drag inside the cube area to rotate manually.
      </p>
      <p class="mt-2 text-xs text-[--color-text-secondary]">
        Selected icon: {selectionState.selectedIconId ?? 'none'} | Selected title face: {selectionState.selectedTitleFace ?? 'none'}
      </p>
      <div class="mt-3 rounded-md border border-[--color-border-primary] bg-white/50 p-2 text-xs text-[--color-text-secondary]">
        <p class="font-semibold mb-1">Click Log (last {debugLogs.length})</p>
        <div class="max-h-40 overflow-auto space-y-1">
          {#each debugLogs as log}
            <div class="font-mono">
              {new Date(log.ts).toLocaleTimeString()} | {log.source}:{log.action}
              {#if log.id} | {log.id}{/if}
              {#if log.faceIndex !== undefined} | f={log.faceIndex}{/if}
              {#if log.cellIndex !== undefined} | c={log.cellIndex}{/if}
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/snippet}
</Story>
