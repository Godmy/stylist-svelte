<script lang="ts">
	import type { CheckboxProps } from '$stylist/design-system/props';
	import { createCheckboxState } from '$stylist/design-system/models/checkbox.svelte';

	let {
		id,
		label,
		description,
		checked = $bindable<boolean>(),
		errors = [],
		required = false,
		disabled = false,
		class: className = '',
		...restProps
	}: CheckboxProps = $props();

	// Extract only HTML-compatible props for the input element
	let htmlProps = $state({});
	$effect(() => {
		const {
			id: _id,
			label: _label,
			description: _description,
			errors: _errors,
			class: _class,
			disabled: _disabled,
			required: _required,
			checked: _checked,
			size: _size, // Exclude custom size prop to avoid conflict with HTML size attribute
			...filteredProps
		} = {
			id,
			label,
			description,
			checked,
			errors,
			required,
			disabled,
			class: className,
			...restProps
		};
		htmlProps = filteredProps;
	});

	const checkboxState = createCheckboxState({
		id,
		label,
		description,
		checked,
		errors,
		required,
		disabled,
		class: className
	});

	let checkboxClasses = $derived(checkboxState.checkboxClasses);
</script>

<div class={checkboxState.containerClasses}>
	<div class={checkboxState.wrapperClasses}>
		<div class={checkboxState.checkboxWrapperClasses}>
			<input
				{id}
				type="checkbox"
				bind:checked
				class={checkboxClasses}
				disabled={checkboxState.disabled}
				required={checkboxState.required}
				aria-describedby={checkboxState.hasError ? checkboxState.errorId : undefined}
				{...htmlProps}
			/>
		</div>
		<div class={checkboxState.labelWrapperClasses}>
			<label for={id} class={checkboxState.labelClasses}>
				{label}
				{#if checkboxState.required}
					<span class="text-[--color-danger-500]">*</span>
				{/if}
			</label>
			{#if description}
				<p class={checkboxState.descriptionClasses}>{description}</p>
			{/if}
		</div>
	</div>

	{#if checkboxState.hasError}
		<p id={checkboxState.errorId} class={checkboxState.errorClasses}>
			{#each checkboxState.errors as error, i}
				{error}{i < checkboxState.errors.length - 1 ? ' ' : ''}
			{/each}
		</p>
	{/if}
</div>




