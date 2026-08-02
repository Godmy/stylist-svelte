<script lang="ts">
	import createWbdFinalReportBuilderState from '$stylist/wbd/function/state/final-report-builder/index.svelte';
	import type { RecipeWbdFinalReportBuilder } from '$stylist/wbd/interface/recipe/final-report-builder';

	let props: RecipeWbdFinalReportBuilder = $props();
	const state = createWbdFinalReportBuilderState(props);
</script>

<section class="wbd-report-builder {state.className}">
	<header>
		<span>{state.enabledCount}/{state.sections.length} sections enabled</span>
		<button type="button" onclick={state.publishReport}>Publish report</button>
	</header>
	<div class="wbd-report-builder__sections">
		{#each state.sections as section (section.id)}
			<article>
				<label>
					<input
						type="checkbox"
						checked={section.enabled !== false}
						onchange={(event) => state.updateSection({ ...section, enabled: event.currentTarget.checked })}
					/>
					<span>{section.title}</span>
				</label>
				<textarea
					rows="4"
					value={section.content}
					oninput={(event) => state.updateSection({ ...section, content: event.currentTarget.value })}
				></textarea>
			</article>
		{/each}
	</div>
</section>

<style>
	.wbd-report-builder {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.wbd-report-builder header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}
	.wbd-report-builder header span {
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-report-builder button {
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--color-primary-500, #3b82f6);
		border-radius: 0.375rem;
		background: var(--color-primary-500, #3b82f6);
		font-size: 0.8125rem;
		font-weight: 700;
		color: var(--color-text-inverse, #fff);
		cursor: pointer;
	}
	.wbd-report-builder__sections {
		display: grid;
		gap: 0.75rem;
	}
	.wbd-report-builder article {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.75rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
	}
	.wbd-report-builder label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		font-weight: 700;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-report-builder textarea {
		box-sizing: border-box;
		width: 100%;
		padding: 0.5rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font: inherit;
		color: var(--color-text-primary, #0f172a);
	}
</style>
