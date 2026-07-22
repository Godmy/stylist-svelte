<script lang="ts">
	import Button from '$stylist/button/component/atom/button/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { RecipeTranscriber } from '$stylist/audio/interface/recipe/transcriber';
	import { createTranscriberState } from '$stylist/audio/function/state/transcriber/index.svelte';

	let props: RecipeTranscriber = $props();
	const state = createTranscriberState(props);
</script>

<section class={`c-transcriber ${state.className}`} {...state.restProps}>
	<div class="c-transcriber__toolbar">
		<Button
			variant={state.isRecording ? 'danger' : 'primary'}
			size="sm"
			disabled={!state.canRecord}
			onclick={state.toggleRecording}
			aria-pressed={state.isRecording}
		>
			<BaseIcon
				name={state.isRecording ? 'square' : 'mic'}
				style="width:1rem;height:1rem"
				aria-hidden="true"
			/>
			<span>{state.actionLabel}</span>
		</Button>

		<Button
			variant="outline"
			size="sm"
			disabled={!state.canCopy}
			onclick={() => void state.copyTranscript()}
		>
			<BaseIcon name="copy" style="width:1rem;height:1rem" aria-hidden="true" />
			<span>{state.copyLabel}</span>
		</Button>
	</div>

	<div class="c-transcriber__status">
		<span>{state.statusLabel}</span>
		<span>{state.progress}%</span>
	</div>
	<div class="c-transcriber__progress" aria-label="Transcription progress">
		<span style={`width:${state.progress}%`}></span>
	</div>

	{#if state.recording}
		<audio class="c-transcriber__audio" src={state.recording.url} controls></audio>
	{/if}

	<div class="c-transcriber__result">
		{#if state.transcription?.text}
			<p>{state.transcription.text}</p>
		{:else if state.errorMessage}
			<p class="c-transcriber__error">{state.errorMessage}</p>
		{:else}
			<p class="c-transcriber__empty">Transcript will appear here.</p>
		{/if}
	</div>
</section>

<style>
	.c-transcriber {
		display: grid;
		gap: 0.85rem;
		width: 100%;
		min-width: 0;
		padding: 1rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
	}

	.c-transcriber__toolbar,
	.c-transcriber__status {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		min-width: 0;
	}

	.c-transcriber__status {
		font-size: 0.8125rem;
		color: var(--color-text-secondary);
	}

	.c-transcriber__progress {
		overflow: hidden;
		height: 0.45rem;
		border-radius: 999px;
		background: var(--color-background-secondary);
	}

	.c-transcriber__progress span {
		display: block;
		height: 100%;
		border-radius: inherit;
		background: var(--color-primary-600);
		transition: width 180ms ease;
	}

	.c-transcriber__audio {
		width: 100%;
		min-width: 0;
	}

	.c-transcriber__result {
		min-height: 7rem;
		padding: 0.85rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		background: var(--color-background-secondary);
		color: var(--color-text-primary);
	}

	.c-transcriber__result p {
		margin: 0;
		white-space: pre-wrap;
		overflow-wrap: anywhere;
		line-height: 1.5;
	}

	.c-transcriber__empty {
		color: var(--color-text-secondary);
	}

	.c-transcriber__error {
		color: var(--color-danger-600);
	}

	@media (max-width: 520px) {
		.c-transcriber__toolbar {
			align-items: stretch;
			flex-direction: column;
		}
	}
</style>
