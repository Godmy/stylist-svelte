<script lang="ts">
	import type { RecipeMessageStatusProps as RecipeMessageStatusProps } from '$stylist/chat/interface/recipe/message-status-props';
	import createMessageStatusState from './state.svelte';

	let props: RecipeMessageStatusProps = $props();

	const state = createMessageStatusState({
		status: props.status ?? 'sent',
		size: props.size ?? 'sm',
		class: props.class
	});
</script>

<span class={state.containerClasses}>
	<svg
		class={state.iconClasses}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
	>
		{#if state.isDoubleCheck}
			<path d="M1 13l5 5L17 7" />
			<path d="M7 13l5 5L23 7" />
		{:else}
			<path d="M4 12l6 6L20 6" />
		{/if}
	</svg>
</span>

<style>
	.message-status {
		display: inline-flex;
		align-items: center;
	}

	.message-status--sent {
		color: var(--color-text-tertiary);
	}
	.message-status--delivered {
		color: var(--color-text-secondary);
	}
	.message-status--read {
		color: var(--color-primary-500);
	}
	.message-status--failed {
		color: var(--color-danger-500);
	}

	.message-status__icon {
		flex-shrink: 0;
	}
	.message-status__icon--xs {
		width: 0.75rem;
		height: 0.75rem;
	}
	.message-status__icon--sm {
		width: 1rem;
		height: 1rem;
	}
	.message-status__icon--md {
		width: 1.25rem;
		height: 1.25rem;
	}
	.message-status__icon--lg {
		width: 1.5rem;
		height: 1.5rem;
	}
</style>
