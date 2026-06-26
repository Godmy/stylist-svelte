<script lang="ts">
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { RecipeAudioRecordButton } from '$stylist/audio/interface/recipe/audio-record-button';
	import { createAudioRecordButtonState } from '$stylist/audio/function/state/audio-record-button/index.svelte';

	let props: RecipeAudioRecordButton = $props();
	const state = createAudioRecordButtonState(props);
</script>

<div class={`c-audio-record-button ${state.className}`} aria-live="polite">
	<Button
		{...state.restProps}
		variant={state.isRecording ? 'danger' : 'primary'}
		size="sm"
		disabled={state.isDisabled}
		onclick={state.toggleRecording}
		aria-pressed={state.isRecording}
		aria-label={state.buttonLabel}
	>
		<BaseIcon name={state.iconName} style="width:1rem;height:1rem" aria-hidden="true" />
		<span>{state.buttonLabel}</span>
	</Button>
	{#if state.statusLabel}
		<span class="c-audio-record-button__status">{state.statusLabel}</span>
	{/if}
	{#if state.errorMessage}
		<span class="c-audio-record-button__error">{state.errorMessage}</span>
	{/if}
</div>

<style>
	.c-audio-record-button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		min-width: 0;
	}

	.c-audio-record-button__status,
	.c-audio-record-button__error {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.8125rem;
	}

	.c-audio-record-button__status {
		color: var(--color-text-secondary);
	}

	.c-audio-record-button__error {
		color: var(--color-danger-600);
	}
</style>
