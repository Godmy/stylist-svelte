<script lang="ts">
  import type { PropsEditorProps } from '$stylist/design-system/props/information/molecules-migration';
  import { PropsEditorStyleManager } from '$stylist/design-system/styles/information/molecules-migration';

  let {
    propDefinitions = [],
    propValues = {},
    onPropChange,
    class: className = '',
    ...restProps
  }: PropsEditorProps = $props();

  let internalPropValues = $state<Record<string, unknown>>({ ...propValues });
  $effect(() => {
    internalPropValues = { ...propValues };
  });

  function handlePropChange(name: string, value: unknown) {
    internalPropValues = { ...internalPropValues, [name]: value };
    onPropChange?.(name, value);
  }
</script>

<div class={PropsEditorStyleManager.root(className)} role="region" aria-label="Props editor" {...restProps}>
  <div class="font-semibold mb-3">Props Editor</div>
  <div class="space-y-3">
    {#each propDefinitions as def}
      <div class="space-y-1">
        <label class="text-sm font-medium" for={`prop-${def.name}`}>{def.name} <span class="text-xs text-gray-500">({def.type})</span></label>
        {#if def.type === 'boolean'}
          <input id={`prop-${def.name}`} type="checkbox" checked={Boolean(internalPropValues[def.name] ?? def.defaultValue ?? false)} onchange={(e) => handlePropChange(def.name, (e.target as HTMLInputElement).checked)} />
        {:else if def.type === 'number'}
          <input id={`prop-${def.name}`} type="number" class="w-full border rounded p-2" value={Number(internalPropValues[def.name] ?? def.defaultValue ?? 0)} min={def.min} max={def.max} step={def.step} oninput={(e) => handlePropChange(def.name, Number((e.target as HTMLInputElement).value))} />
        {:else if def.type === 'enum'}
          <select id={`prop-${def.name}`} class="w-full border rounded p-2" value={String(internalPropValues[def.name] ?? def.defaultValue ?? '')} onchange={(e) => handlePropChange(def.name, (e.target as HTMLSelectElement).value)}>
            {#each def.options ?? [] as option}<option value={option}>{option}</option>{/each}
          </select>
        {:else}
          <input id={`prop-${def.name}`} type="text" class="w-full border rounded p-2" value={String(internalPropValues[def.name] ?? def.defaultValue ?? '')} oninput={(e) => handlePropChange(def.name, (e.target as HTMLInputElement).value)} />
        {/if}
        {#if def.description}<div class="text-xs text-gray-500">{def.description}</div>{/if}
      </div>
    {/each}
  </div>
</div>
