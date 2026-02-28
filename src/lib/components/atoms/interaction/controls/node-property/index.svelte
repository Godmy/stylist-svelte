<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/components/atoms';
	import type { NodePropertyProps } from '$stylist/design-system/contracts';
	import { createNodePropertyState } from '$stylist/design-system/models/architecture/node-property.svelte';

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
					onfocus={props.onfocus}
					onblur={props.onblur}
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
					onfocus={props.onfocus}
					onblur={props.onblur}
					onchange={(event) => emitChange(Number((event.target as HTMLInputElement).value))}
				/>
			{:else if isBoolean}
				<button
					type="button"
					class={`node-property__toggle ${currentValue ? 'node-property__toggle--active' : ''}`}
					disabled={!propertyState.editable}
					onclick={() => emitChange(!currentValue)}
					onfocus={props.onfocus}
					onblur={props.onblur}
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
					onfocus={props.onfocus}
					onblur={props.onblur}
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
						value={String(currentValue ?? '#000000')}
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
		gap: 0.375rem;
		padding: 0.5rem;
		background: rgb(30 30 30 / 0.5);
		border-radius: 4px;
		border: 1px solid transparent;
		transition: border-color 120ms ease, background-color 120ms ease;
	}

	:global(.node-property:hover) {
		background: rgb(30 30 30 / 0.8);
	}

	:global(.node-property--error) {
		border-color: #f44336;
	}

	:global(.node-property--readonly) {
		opacity: 0.7;
		pointer-events: none;
	}

	:global(.node-property__header) {
		display: flex;
		align-items: center;
		gap: 0.375rem;
	}

	:global(.node-property__label) {
		font-size: 0.75rem;
		font-weight: 500;
		color: #e5e7eb;
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	:global(.node-property__required) {
		color: #f44336;
	}

	:global(.node-property__icon) {
		display: inline-flex;
		color: #9ca3af;
	}

	:global(.node-property__description) {
		font-size: 0.6875rem;
		color: #9ca3af;
		margin: 0;
	}

	:global(.node-property__control-container) {
		display: flex;
		align-items: center;
		gap: 0.375rem;
	}

	:global(.node-property__prefix),
	:global(.node-property__suffix) {
		font-size: 0.75rem;
		color: #9ca3af;
	}

	:global(.node-property__input) {
		flex: 1 1 auto;
		padding: 0.375rem 0.5rem;
		font-size: 0.75rem;
		color: #f8fafc;
		background: #1e1e1e;
		border: 1px solid #374151;
		border-radius: 4px;
		outline: none;
	}

	:global(.node-property__input--color) {
		width: 2rem;
		height: 2rem;
		padding: 0;
		border: none;
	}

	:global(.node-property__toggle) {
		position: relative;
		width: 2.5rem;
		height: 1.25rem;
		padding: 0;
		background: #374151;
		border: none;
		border-radius: 999px;
		cursor: pointer;
	}

	:global(.node-property__toggle--active) {
		background: #3b82f6;
	}

	:global(.node-property__toggle-track) {
		position: absolute;
		top: 2px;
		left: 2px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: calc(1.25rem - 4px);
		height: calc(1.25rem - 4px);
		background: #f8fafc;
		border-radius: 999px;
		transition: transform 120ms ease;
	}

	:global(.node-property__toggle--active .node-property__toggle-track) {
		transform: translateX(1.25rem);
	}

	:global(.node-property__toggle-thumb) {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #1e1e1e;
	}

	:global(.node-property__select) {
		flex: 1 1 auto;
		padding: 0.375rem 0.5rem;
		font-size: 0.75rem;
		color: #f8fafc;
		background: #1e1e1e;
		border: 1px solid #374151;
		border-radius: 4px;
	}

	:global(.node-property__color-picker) {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	:global(.node-property__color-value) {
		font-size: 0.75rem;
		color: #9ca3af;
		font-family: monospace;
	}

	:global(.node-property__vector) {
		display: flex;
		gap: 0.25rem;
	}

	:global(.node-property__vector-input) {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		flex: 1 1 0;
		min-width: 0;
	}

	:global(.node-property__vector-label) {
		font-size: 0.625rem;
		font-weight: 600;
		color: #9ca3af;
		width: 1rem;
		text-align: center;
	}

	:global(.node-property__placeholder) {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		background: rgb(255 255 255 / 0.05);
		border-radius: 4px;
		border: 1px dashed #4b5563;
	}

	:global(.node-property__placeholder-text) {
		font-size: 0.6875rem;
		color: #6b7280;
		font-style: italic;
	}

	:global(.node-property__error) {
		font-size: 0.6875rem;
		color: #f44336;
		margin: 0;
	}
</style>
