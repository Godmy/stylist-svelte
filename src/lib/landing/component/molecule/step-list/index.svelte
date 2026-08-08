<script lang="ts">
	let {
		steps,
		class: className = ''
	}: {
		steps: string[];
		class?: string;
	} = $props();
</script>

<ol class="step-list {className}">
	{#each steps as step}
		<li>{step}</li>
	{/each}
</ol>

<style>
	.step-list {
		display: grid;
		gap: 0.75rem;
		margin: 0;
		padding: 0;
		list-style: none;
		counter-reset: step-list;
	}

	.step-list li {
		counter-increment: step-list;
		position: relative;
		min-height: 3rem;
		padding-left: 3rem;
		color: var(--step-list-text, currentColor);
		font-size: 1rem;
		line-height: 1.7;
	}

	.step-list li::before {
		content: counter(step-list, decimal-leading-zero);
		position: absolute;
		left: 0;
		top: 0.15rem;
		width: 2rem;
		height: 2rem;
		display: inline-grid;
		place-items: center;
		border: 1px solid var(--step-list-marker-border, currentColor);
		border-radius: 0.375rem;
		color: var(--step-list-marker-color, currentColor);
		font-size: 0.72rem;
		font-weight: 800;
	}
</style>
