<script lang="ts">
	import { Icon as BaseIcon } from '$stylist';
	import type { NodePropertyRecipe as NodePropertyProps } from '$stylist/science/interface/recipe/node-property';
	import { createNodePropertyControlState } from '$stylist/control/function/state/node-property';

	const Check = 'check';

	let props: NodePropertyProps = $props();
	const state = createNodePropertyControlState(props);
</script>

<div class={`${state.propertyState.classes} ${state.className}`} data-property-type={state.propertyState.type} {...state.restProps}>
	{#if state.propertyState.hasLabel || props.icon}
		<div class="node-property__header">
			{#if props.icon}
				<span class="node-property__icon">
					{#if typeof props.icon === 'string'}
						<BaseIcon name={props.icon} size={14} />
					{:else}
						{@render props.icon?.()}
					{/if}
				</span>
			{/if}
			{#if state.propertyState.hasLabel}
				<label class="node-property__label" for={props.id}>
					{state.label}
				</label>
			{/if}
		</div>
	{/if}

	<div class="node-property__content">
		{#if state.propertyState.hasDescription}
			<p class="node-property__description">{state.description}</p>
		{/if}

		<div class="node-property__control-container">
			{#if props.prefix}
				<span class="node-property__prefix">{props.prefix}</span>
			{/if}

			{#if state.isString}
				<input
					id={props.id}
					type="text"
					class="node-property__input node-property__input--string"
					value={String(state.currentValue ?? '')}
					placeholder={props.placeholder}
					disabled={!state.propertyState.editable}
					onfocus={state.handleFocus}
					onblur={state.handleBlur}
					onchange={(event) => state.emitChange((event.target as HTMLInputElement).value)}
				/>
			{:else if state.isNumber}
				<input
					id={props.id}
					type="number"
					class="node-property__input node-property__input--number"
					value={Number(state.currentValue ?? 0)}
					min={props.min}
					max={props.max}
					step={props.step}
					disabled={!state.propertyState.editable}
					onfocus={state.handleFocus}
					onblur={state.handleBlur}
					onchange={(event) => state.emitChange(Number((event.target as HTMLInputElement).value))}
				/>
			{:else if state.isBoolean}
				<button
					type="button"
					class={`node-property__toggle ${state.currentValue ? 'node-property__toggle--active' : ''}`}
					disabled={!state.propertyState.editable}
					onclick={() => state.emitChange(!state.currentValue)}
					onfocus={state.handleFocus}
					onblur={state.handleBlur}
					aria-pressed={Boolean(state.currentValue)}
				>
					<span class="node-property__toggle-track">
						<span class="node-property__toggle-thumb">
							{#if state.currentValue}
								<BaseIcon name={Check} size={12} />
							{/if}
						</span>
					</span>
				</button>
			{:else if state.isEnum}
				<select
					id={props.id}
					class="node-property__select"
					value={String(state.currentValue ?? '')}
					disabled={!state.propertyState.editable}
					onfocus={state.handleFocus}
					onblur={state.handleBlur}
					onchange={(event) => state.emitChange((event.target as HTMLSelectElement).value)}
				>
					{#each props.options ?? [] as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
			{:else if state.isColor}
				<div class="node-property__color-picker">
					<input
						id={props.id}
						type="color"
						class="node-property__input node-property__input--color"
						value={String(state.currentValue ?? 'var(--color-text-primary)')}
						disabled={!state.propertyState.editable}
						onfocus={props.onfocus}
						onblur={props.onblur}
						onchange={(event) => state.emitChange((event.target as HTMLInputElement).value)}
					/>
					<span class="node-property__color-value">{String(state.currentValue ?? '')}</span>
				</div>
			{:else if state.isVector}
				<div class="node-property__vector">
					{#each Array(state.vectorDimensions) as _, index}
						<div class="node-property__vector-input">
							<span class="node-property__vector-label">{state.vectorLabels[index]}</span>
							<input
								type="number"
								class="node-property__input node-property__input--number"
								value={Array.isArray(state.currentValue) ? Number(state.currentValue[index] ?? 0) : 0}
								step={props.step ?? 0.1}
						disabled={!state.propertyState.editable}
								onfocus={props.onfocus}
								onblur={props.onblur}
								onchange={(event) => state.handleVectorChange(index, (event.target as HTMLInputElement).value)}
							/>
						</div>
					{/each}
				</div>
			{:else}
				<div class="node-property__placeholder">
					<span class="node-property__placeholder-text">{state.propertyState.type} editor</span>
				</div>
			{/if}

			{#if props.suffix}
				<span class="node-property__suffix">{props.suffix}</span>
			{/if}
		</div>

		{#if state.propertyState.error && props.errorMessage}
			<p class="node-property__error">{props.errorMessage}</p>
		{/if}
	</div>

	{#if props.children}
		{@render props.children?.()}
	{/if}
</div>

<style>
	:global(.node-property) {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-2);
		padding: var(--spacing-2);
		background: color-mix(in srgb, var(--color-background-primary) 50%, transparent);
		border-radius: var(--border-radius-base);
		border: 1px solid transparent;
		transition: border-color var(--duration-120) var(--animation-ease), background-color var(--duration-120) var(--animation-ease);
	}

	:global(.node-property:hover) {
		background: color-mix(in srgb, var(--color-background-primary) 80%, transparent);
	}

	:global(.node-property--error) {
		border-color: var(--color-error-500);
	}

	:global(.node-property--readonly) {
		opacity: var(--opacity-70);
		pointer-events: none;
	}

	:global(.node-property__header) {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
	}

	:global(.node-property__label) {
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-medium);
		color: var(--color-text-primary);
		display: flex;
		align-items: center;
		gap: var(--spacing-1);
	}

	:global(.node-property__required) {
		color: var(--color-error-500);
	}

	:global(.node-property__icon) {
		display: inline-flex;
		color: var(--color-text-secondary);
	}

	:global(.node-property__description) {
		font-size: var(--font-size-3);
		color: var(--color-text-secondary);
		margin: 0;
	}

	:global(.node-property__control-container) {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
	}

	:global(.node-property__prefix),
	:global(.node-property__suffix) {
		font-size: var(--font-size-3);
		color: var(--color-text-secondary);
	}

	:global(.node-property__input) {
		flex: 1 1 auto;
		padding: var(--spacing-1) var(--spacing-2);
		font-size: var(--font-size-3);
		color: var(--color-text-primary);
		background: var(--color-background-primary);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-base);
		outline: none;
	}

	:global(.node-property__input--color) {
		width: var(--spacing-8);
		height: var(--spacing-8);
		padding: 0;
		border: none;
	}

	:global(.node-property__toggle) {
		position: relative;
		width: var(--spacing-10);
		height: var(--spacing-5);
		padding: 0;
		background: var(--color-border-primary);
		border: none;
		border-radius: var(--border-radius-full);
		cursor: pointer;
	}

	:global(.node-property__toggle--active) {
		background: var(--color-primary-500);
	}

	:global(.node-property__toggle-track) {
		position: absolute;
		top: var(--spacing-1);
		left: var(--spacing-1);
		display: flex;
		align-items: center;
		justify-content: center;
		width: calc(1.25rem - 4px);
		height: calc(1.25rem - 4px);
		background: var(--color-background-secondary);
		border-radius: var(--border-radius-full);
		transition: transform var(--duration-120) var(--animation-ease);
	}

	:global(.node-property__toggle--active .node-property__toggle-track) {
		transform: translateX(1.25rem);
	}

	:global(.node-property__toggle-thumb) {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-text-primary);
	}

	:global(.node-property__select) {
		flex: 1 1 auto;
		padding: var(--spacing-1) var(--spacing-2);
		font-size: var(--font-size-3);
		color: var(--color-text-primary);
		background: var(--color-background-primary);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-base);
	}

	:global(.node-property__color-picker) {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
	}

	:global(.node-property__color-value) {
		font-size: var(--font-size-3);
		color: var(--color-text-secondary);
		font-family: monospace;
	}

	:global(.node-property__vector) {
		display: flex;
		gap: var(--spacing-1);
	}

	:global(.node-property__vector-input) {
		display: flex;
		align-items: center;
		gap: var(--spacing-1);
		flex: 1 1 0;
		min-width: var(--size-0);
	}

	:global(.node-property__vector-label) {
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-semibold);
		color: var(--color-text-secondary);
		width: var(--spacing-4);
		text-align: center;
	}

	:global(.node-property__placeholder) {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--spacing-2);
		background: color-mix(in srgb, var(--color-background-secondary) 35%, transparent);
		border-radius: var(--border-radius-base);
		border: 1px dashed var(--color-border-secondary);
	}

	:global(.node-property__placeholder-text) {
		font-size: var(--font-size-3);
		color: var(--color-text-tertiary);
		font-style: italic;
	}

	:global(.node-property__error) {
		font-size: var(--font-size-3);
		color: var(--color-error-500);
		margin: 0;
	}
</style>


