<script lang="ts">
	import type { Props } from '$stylist/development/type/struct/stylist';
	import { Icon as BaseIcon } from '$stylist';
	import Tooltip from '$stylist/control/svelte/atom/tooltip/index.svelte';
	import { createStylistState, categories } from '$stylist/development/function/state/stylist/index.svelte';
	import { panelId } from '$stylist/development/const/stylist/panel-id';

	const Sparkles = 'sparkles';
	const X = 'x';

	let props: Props = $props();
	const state = createStylistState(props);
  let rootElement: HTMLElement;

	$effect(() => {
		state.onSelectionChange?.({
			category: state.selectedCategoryId,
			option: state.activeOption.id,
			selections: { ...state.selections }
		});
	});

	function handleWindowClick(event: MouseEvent) {
		state.handleWindowClick(event, rootElement);
	}

	function handleWindowKeydown(event: KeyboardEvent) {
		state.handleWindowKeydown(event);
	}
</script>

<svelte:window onclick={handleWindowClick} onkeydown={handleWindowKeydown} />

<div class="stylist {state.className}" bind:this={rootElement}>
	<button
		type="button"
		class:is-open={state.isOpen}
		class="stylist-trigger"
		aria-label="Открыть Stylist"
		aria-haspopup="dialog"
		aria-expanded={state.isOpen}
		aria-controls={panelId}
		onclick={state.toggleOpen}
	>
		<span class="trigger-ring"></span>
		<span class="trigger-core">
			<BaseIcon name={Sparkles} class="trigger-icon" />
		</span>
		<span class="trigger-ping"></span>
	</button>

	{#if state.isOpen}
		<div class="stylist-panel" id={panelId} role="dialog" aria-label="Stylist popover">
			<div class="panel-header">
				<div>
					<p class="eyebrow">Stylist</p>
					<h3>Группа дополнительных настроек</h3>
				</div>
				<button
					type="button"
					class="close-button"
					aria-label="Закрыть Stylist"
					onclick={state.closePanel}
				>
					<BaseIcon name={X} class="close-icon" />
				</button>
			</div>

			<p class="panel-copy">
				Выберите категорию свойств, затем уточняющую иконку. Компонент хранит выбор по
				каждой группе отдельно.
			</p>

			<div class="category-list" role="tablist" aria-label="Категории Stylist">
				{#each categories as category}
					<button
						type="button"
						class:selected={category.id === state.selectedCategoryId}
						class="category-button"
						style={`--category-accent: ${category.accent};`}
						role="tab"
						aria-selected={category.id === state.selectedCategoryId}
						onclick={() => state.handleCategorySelect(category.id)}
					>
						<span class="category-icon">
							<BaseIcon name={category.icon} class="mini-icon" />
						</span>
						<span class="category-text">
							<strong>{category.label}</strong>
							<span>{category.description}</span>
						</span>
					</button>
				{/each}
			</div>

			<section class="option-section" style={`--option-accent: ${state.activeCategory.accent};`}>
				<div class="section-heading">
					<div>
						<p class="eyebrow">Активная группа</p>
						<h4>{state.activeCategory.label}</h4>
					</div>
					<span class="section-pill">{state.activeOption.label}</span>
				</div>

				<div class="option-grid">
					{#each state.activeCategory.options as option}
						<Tooltip content={option.hint} placement="top" variant="arrow">
							{#snippet children()}
								<button
									type="button"
									class:selected={state.selections[state.selectedCategoryId] === option.id}
									class="option-button"
									style={`--option-card-accent: ${option.accent};`}
									onclick={() => state.handleOptionSelect(option.id)}
								>
									<span class="option-icon">
										<BaseIcon name={option.icon} class="mini-icon" />
									</span>
									<span class="option-meta">
										<strong>{option.label}</strong>
										<span>{option.description}</span>
									</span>
								</button>
							{/snippet}
						</Tooltip>
					{/each}
				</div>
			</section>

			<section class="selection-summary">
				<div class="section-heading compact">
					<div>
						<p class="eyebrow">Текущие решения</p>
						<h4>Снимок выбора</h4>
					</div>
				</div>

				<div class="summary-list">
					{#each categories as category}
						{@const selectedOption = category.options.find((option) => option.id === state.selections[category.id])}
						<div class="summary-item" style={`--summary-accent: ${category.accent};`}>
							<span class="summary-icon">
								<BaseIcon name={category.icon} class="mini-icon" />
							</span>
							<div class="summary-copy">
								<strong>{category.label}</strong>
								<span>{selectedOption?.label}</span>
							</div>
						</div>
					{/each}
				</div>
			</section>
		</div>
	{/if}
</div>

<style>
	.stylist {
		position: relative;
		display: inline-flex;
	}

	.stylist-trigger {
		position: relative;
		display: grid;
		place-items: center;
		width: var(--size-4_5rem);
		height: var(--size-4_5rem);
		padding: 0;
		border: 0;
		border-radius: var(--border-radius-full);
		background: var(--gradient-custom192);
		box-shadow: var(--shadow-custom25);
		cursor: pointer;
		transition:
			transform 180ms ease,
			box-shadow 180ms ease;
	}

	.stylist-trigger:hover,
	.stylist-trigger.is-open {
		transform: translateY(-1px) scale(1.02);
		box-shadow: var(--shadow-custom32);
	}

	.stylist-trigger:focus-visible,
	.category-button:focus-visible,
	.option-button:focus-visible,
	.close-button:focus-visible {
		outline: 2px solid var(--color-primary-600);
		outline-offset: 3px;
	}

	.trigger-ring,
	.trigger-ping,
	.trigger-core {
		position: absolute;
		inset: 0;
		border-radius: inherit;
	}

	.trigger-ring {
		inset: 0.34rem;
		border: 1px solid color-mix(in srgb, var(--color-background-primary) 22%, transparent);
	}

	.trigger-core {
		display: grid;
		place-items: center;
		inset: 0.7rem;
		background: color-mix(in srgb, var(--color-background-primary) 10%, transparent);
		backdrop-filter: blur(10px);
	}

	.trigger-ping {
		inset: auto 0.46rem 0.46rem auto;
		width: var(--size-0_72rem);
		height: var(--size-0_72rem);
		background: var(--color-success-400);
		box-shadow: var(--shadow-custom02);
		animation: pulse var(--duration-2200) infinite;
	}

	.trigger-icon,
	.close-icon,
	.mini-icon {
		width: var(--size-1_2rem);
		height: var(--size-1_2rem);
	}

	.trigger-icon {
		color: white;
	}

	.stylist-panel {
		position: absolute;
		top: calc(100% + 1rem);
		right: 0;
		z-index: var(--z-index-layer30);
		width: min(26rem, calc(100vw - 2rem));
		padding: var(--spacing-4);
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 28%, transparent);
		border-radius: var(--border-radius-xxxl);
		background: var(--gradient-custom232);
		box-shadow: var(--shadow-custom33);
		backdrop-filter: blur(16px);
	}

	.panel-header,
	.section-heading {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: var(--spacing-4);
	}

	.section-heading.compact {
		align-items: center;
	}

	.eyebrow {
		margin: 0 0 var(--spacing-1);
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-expanded);
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	h3,
	h4 {
		margin: 0;
		color: var(--color-text-primary);
	}

	h3 {
		font-size: var(--font-size-4);
	}

	h4 {
		font-size: var(--font-size-4);
	}

	.panel-copy {
		margin: var(--spacing-3) 0 var(--spacing-4);
		font-size: var(--font-size-4);
		line-height: var(--line-height-normal);
		color: var(--color-text-secondary);
	}

	.close-button {
		display: grid;
		place-items: center;
		width: var(--spacing-8);
		height: var(--spacing-8);
		padding: 0;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 30%, transparent);
		border-radius: var(--border-radius-full);
		background: color-mix(in srgb, var(--color-background-primary) 82%, transparent);
		color: var(--color-text-primary);
		cursor: pointer;
	}

	.category-list,
	.option-grid,
	.summary-list {
		display: grid;
		gap: var(--spacing-3);
	}

	.category-button,
	.option-button {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: var(--spacing-3);
		width: 100%;
		padding: var(--spacing-3) var(--spacing-4);
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 24%, transparent);
		border-radius: var(--border-radius-xxl);
		background: color-mix(in srgb, var(--color-background-primary) 72%, transparent);
		text-align: left;
		cursor: pointer;
		transition:
			transform 160ms ease,
			border-color 160ms ease,
			background 160ms ease,
			box-shadow 160ms ease;
	}

	.category-button:hover,
	.option-button:hover {
		transform: translateY(-1px);
		border-color: color-mix(in srgb, var(--color-primary-600) 28%, transparent);
		box-shadow: var(--shadow-custom22);
	}

	.category-button.selected,
	.option-button.selected {
		border-color: color-mix(in srgb, var(--category-accent, var(--color-primary-600)) 58%, white);
		background: color-mix(in srgb, var(--category-accent, var(--color-primary-600)) 10%, white);
	}

	.option-button.selected {
		border-color: color-mix(in srgb, var(--option-card-accent, var(--color-primary-600)) 58%, white);
		background: color-mix(in srgb, var(--option-card-accent, var(--color-primary-600)) 10%, white);
	}

	.category-icon,
	.option-icon,
	.summary-icon,
	.section-pill {
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.category-icon,
	.option-icon,
	.summary-icon {
		width: var(--spacing-10);
		height: var(--spacing-10);
		border-radius: var(--border-radius-xxl);
		background: color-mix(in srgb, var(--category-accent, var(--option-card-accent, var(--color-primary-600))) 14%, white);
		color: var(--category-accent, var(--option-card-accent, var(--color-primary-600)));
	}

	.category-text,
	.option-meta,
	.summary-copy {
		display: grid;
		gap: var(--spacing-1);
	}

	.category-text strong,
	.option-meta strong,
	.summary-copy strong {
		font-size: var(--font-size-4);
		color: var(--color-text-primary);
	}

	.category-text span,
	.option-meta span,
	.summary-copy span {
		font-size: var(--font-size-3);
		line-height: 1.45;
		color: var(--color-text-secondary);
	}

	.option-section,
	.selection-summary {
		margin-top: var(--spacing-4);
		padding: var(--spacing-4);
		border-radius: var(--border-radius-xxl);
		background: color-mix(in srgb, var(--color-background-primary) 50%, transparent);
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
	}

	.section-pill {
		padding: var(--spacing-2) var(--spacing-3);
		border-radius: var(--border-radius-full);
		background: color-mix(in srgb, var(--option-accent, var(--color-primary-600)) 12%, white);
		color: var(--color-text-primary);
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-bold);
	}

	.option-grid {
		margin-top: 0.9rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.summary-list {
		margin-top: 0.85rem;
	}

	.summary-item {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: var(--spacing-3);
		padding: var(--spacing-3) var(--spacing-3);
		border-radius: var(--border-radius-xxl);
		background: color-mix(in srgb, var(--summary-accent, var(--color-primary-600)) 8%, white);
	}

	.summary-item .summary-icon {
		background: color-mix(in srgb, var(--summary-accent, var(--color-primary-600)) 14%, white);
		color: var(--summary-accent, var(--color-primary-600));
	}

	@keyframes pulse {
		0% {
			box-shadow: var(--shadow-custom02);
		}

		70% {
			box-shadow: var(--shadow-custom03);
		}

		100% {
			box-shadow: var(--shadow-custom01);
		}
	}

	@media (max-width: 640px) {
		.stylist-panel {
			right: auto;
			left: 50%;
			transform: translateX(-50%);
			width: min(24rem, calc(100vw - 1.5rem));
		}

		.option-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

<story name="default">
	<!-- Stylist organism component -->
</story>
