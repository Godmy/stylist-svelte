<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import type { SlotTagInput as TagInputProps } from '$stylist/input/interface/slot/tag-input';
	import createTagInputState from '$stylist/input/function/state/tag-input/index.svelte';
	import { InteractionInputStyleManager } from '$stylist/input/class/style-manager/interaction-input';
	const X = 'x';

	let props: TagInputProps = $props();
	const state = createTagInputState(props);
</script>

<div
	class={InteractionInputStyleManager.root(
		'c-tag-input flex flex-wrap items-center gap-2',
		state.className
	)}
	{...props}
>
	{#each state.currentTags as tag, index}
		<span
			class={`inline-flex items-center rounded-full bg-[var(--color-primary-100)] px-3 py-1 text-sm text-[var(--color-primary-800)] ${state.tagClass}`}
		>
			{tag}
			<button
				type="button"
				class={`ml-2 ${state.removeButtonClass}`}
				onclick={() => state.removeTag(index)}><BaseIcon name={X} class="h-4 w-4" /></button
			>
		</span>
	{/each}

	<input
		class={InteractionInputStyleManager.input(`min-w-[180px] px-3 py-2 ${state.inputClass}`)}
		placeholder={state.placeholder}
		value={state.inputText}
		disabled={state.disabled}
		oninput={state.handleInput}
		onkeydown={state.handleKeyDown}
	/>
</div>
