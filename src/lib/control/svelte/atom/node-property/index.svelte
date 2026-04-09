<script lang="ts">
	import { Icon as BaseIcon } from '$stylist';
  import type { NodePropertyRecipe as NodePropertyProps } from '$stylist/science/interface/recipe/node-property';
	import { createNodePropertyState } from '$stylist/science/function/state/node-property';

	const Check = 'check';

	let props: NodePropertyProps = $props();

	const propertyState = createNodePropertyState(props);
	let currentValue = $state(props.value);
	const label = $derived(props.label ?? props.name);
	const description = $derived(props.description ?? '');
	const isBoolean = $derived(propertyState.type === 'boolean');
	const isEnum = $derived(propertyState.type === 'enum');
	const isColor = $derived(propertyState.type === 'color');
	const isVector = $derived(propertyState.type === 'vector2' || propertyState.type === 'vector3');
	const isNumber = $derived(propertyState.type === 'number');
	const isString = $derived(propertyState.type === 'string');
	const vectorDimensions = $derived(propertyState.type === 'vector3' ? 3 : 2);
	const vectorLabels = ['X', 'Y', 'Z'];

	function handleFocus(event: FocusEvent) {
		props.onfocus?.(event as never);
	}

	function handleBlur(event: FocusEvent) {
		props.onblur?.(event as never);
	}

	$effect(() => {
		currentValue = props.value;
	});

	const restProps = $derived.by(() => {
		const {
			class: _class,
			id: _id,
			name: _name,
			type: _type,
			value: _value,
			defaultValue: _defaultValue,
			size: _size,
			editable: _editable,
			typeEditable: _typeEditable,
			options: _options,
			min: _min,
			max: _max,
			step: _step,
			prefix: _prefix,
			suffix: _suffix,
			label: _label,
			description: _description,
			icon: _icon,
			error: _error,
			errorMessage: _errorMessage,
			onchange: _onchange,
			onfocus: _onfocus,
			onblur: _onblur,
			children: _children,
			...rest
		} = props;

		return rest;
	});

	function emitChange(nextValue: unknown) {
		currentValue = nextValue;
		props.onchange?.(props.name, nextValue);
	}

	function handleVectorChange(index: number, rawValue: string) {
		const base = Array.isArray(currentValue) ? [...currentValue] : [0, 0, 0];
		base[index] = Number(rawValue);
		emitChange(base.slice(0, vectorDimensions));
	}
</script>

<div class={`${propertyState.classes} ${props.class ?? ''}`} data-property-type={propertyState.type} {...restProps}>
	{#if propertyState.hasLabel || props.icon}
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
			{#if propertyState.hasLabel}
				<label class="node-property__label" for={props.id}>
					{label}
				</label>
			{/if}
		</div>
	{/if}

	<div class="node-property__content">
		{#if propertyState.hasDescription}
			<p class="node-property__description">{description}</p>
		{/if}

		<div class="node-property__control-container">
			{#if props.prefix}
				<span class="node-property__prefix">{props.prefix}</span>
			{/if}

			{#if isString}
				<input
					id={props.id}
					type="text"
					class="node-property__input node-property__input--string"
					value={String(currentValue ?? '')}
					placeholder={props.placeholder}
					disabled={!propertyState.editable}
					onfocus={handleFocus}
					onblur={handleBlur}
					onchange={(event) => emitChange((event.target as HTMLInputElement).value)}
				/>
			{:else if isNumber}
				<input
					id={props.id}
					type="number"
					class="node-property__input node-property__input--number"
					value={Number(currentValue ?? 0)}
					min={props.min}
					max={props.max}
					step={props.step}
					disabled={!propertyState.editable}
					onfocus={handleFocus}
					onblur={handleBlur}
					onchange={(event) => emitChange(Number((event.target as HTMLInputElement).value))}
				/>
			{:else if isBoolean}
				<button
					type="button"
					class={`node-property__toggle ${currentValue ? 'node-property__toggle--active' : ''}`}
					disabled={!propertyState.editable}
					onclick={() => emitChange(!currentValue)}
					onfocus={handleFocus}
					onblur={handleBlur}
					aria-pressed={Boolean(currentValue)}
				>
					<span class="node-property__toggle-track">
						<span class="node-property__toggle-thumb">
							{#if currentValue}
								<BaseIcon name={Check} size={12} />
							{/if}
						</span>
					</span>
				</button>
			{:else if isEnum}
				<select
					id={props.id}
					class="node-property__select"
					value={String(currentValue ?? '')}
					disabled={!propertyState.editable}
					onfocus={handleFocus}
					onblur={handleBlur}
					onchange={(event) => emitChange((event.target as HTMLSelectElement).value)}
				>
					{#each props.options ?? [] as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
			{:else if isColor}
				<div class="node-property__color-picker">
					<input
						id={props.id}
						type="color"
						class="node-property__input node-property__input--color"
						value={String(currentValue ?? 'var(--color-text-primary)')}
						disabled={!propertyState.editable}
						onfocus={props.onfocus}
						onblur={props.onblur}
						onchange={(event) => emitChange((event.target as HTMLInputElement).value)}
					/>
					<span class="node-property__color-value">{String(currentValue ?? '')}</span>
				</div>
			{:else if isVector}
				<div class="node-property__vector">
					{#each Array(vectorDimensions) as _, index}
						<div class="node-property__vector-input">
							<span class="node-property__vector-label">{vectorLabels[index]}</span>
							<input
								type="number"
								class="node-property__input node-property__input--number"
								value={Array.isArray(currentValue) ? Number(currentValue[index] ?? 0) : 0}
								step={props.step ?? 0.1}
						disabled={!propertyState.editable}
								onfocus={props.onfocus}
								onblur={props.onblur}
								onchange={(event) => handleVectorChange(index, (event.target as HTMLInputElement).value)}
							/>
						</div>
					{/each}
				</div>
			{:else}
				<div class="node-property__placeholder">
					<span class="node-property__placeholder-text">{propertyState.type} editor</span>
				</div>
			{/if}

			{#if props.suffix}
				<span class="node-property__suffix">{props.suffix}</span>
			{/if}
		</div>

		{#if propertyState.error && props.errorMessage}
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


