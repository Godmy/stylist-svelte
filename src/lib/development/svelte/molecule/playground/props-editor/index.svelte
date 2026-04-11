<script lang="ts">
  import type { PropsEditorProps } from '$stylist/development/type/struct/props-editor';
  import { createPropsEditorState } from '$stylist/development/function/state/playground/props-editor';

  let {
    propDefinitions = [],
    propValues = {},
    onPropChange,
    class: className = '',
    ...restProps
  }: PropsEditorProps = $props();

  const state = createPropsEditorState({ propDefinitions, propValues, onPropChange, class: className, ...restProps });
</script>

<div class={state.containerClass} role="region" aria-label="Props editor">
  <div class="font-semibold mb-3">Props Editor</div>
  <div class="space-y-3">
    {#each propDefinitions as def}
      <div class="space-y-1">
        <label class="text-sm font-medium" for={`prop-${def.name}`}>{def.name} <span class="text-xs text-gray-500">({def.type})</span></label>
        {#if def.type === 'boolean'}
          <input id={`prop-${def.name}`} type="checkbox" checked={Boolean(state.internalPropValues[def.name] ?? def.defaultValue ?? false)} onchange={(e) => state.handlePropChange(def.name, (e.target as HTMLInputElement).checked)} />
        {:else if def.type === 'number'}
          <input id={`prop-${def.name}`} type="number" class="w-full border rounded p-2" value={Number(state.internalPropValues[def.name] ?? def.defaultValue ?? 0)} min={def.min} max={def.max} step={def.step} oninput={(e) => state.handlePropChange(def.name, Number((e.target as HTMLInputElement).value))} />
        {:else if def.type === 'enum'}
          <select id={`prop-${def.name}`} class="w-full border rounded p-2" value={String(state.internalPropValues[def.name] ?? def.defaultValue ?? '')} onchange={(e) => state.handlePropChange(def.name, (e.target as HTMLSelectElement).value)}>
            {#each def.options ?? [] as option}<option value={option}>{option}</option>{/each}
          </select>
        {:else}
          <input id={`prop-${def.name}`} type="text" class="w-full border rounded p-2" value={String(state.internalPropValues[def.name] ?? def.defaultValue ?? '')} oninput={(e) => state.handlePropChange(def.name, (e.target as HTMLInputElement).value)} />
        {/if}
        {#if def.description}<div class="text-xs text-gray-500">{def.description}</div>{/if}
      </div>
    {/each}
  </div>
</div>
