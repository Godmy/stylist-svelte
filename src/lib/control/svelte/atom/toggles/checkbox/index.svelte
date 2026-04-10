<script lang="ts">
	import type { CheckboxProps } from '$stylist/control/interface/component/toggles';
	import { createCheckboxState } from '$stylist/control/function/state/checkbox';

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

	const inputProps = $derived.by(() => {
		const {
			id: _id,
			label: _label,
			description: _description,
			errors: _errors,
			class: _class,
			disabled: _disabled,
			required: _required,
			checked: _checked,
			size: _size,
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
		return filteredProps;
	});

	const state = createCheckboxState({
		id,
		label,
		description,
		checked,
		errors,
		required,
		disabled,
		class: className
	});

</script>

<div class={state.containerClasses}>
	<div class={state.wrapperClasses}>
		<div class={state.checkboxWrapperClasses}>
			<input
				{id}
				type="checkbox"
				bind:checked
				class={state.checkboxClasses}
				disabled={state.disabled}
				required={state.required}
				aria-describedby={state.hasError ? state.errorId : undefined}
				{...inputProps}
			/>
		</div>
		<div class={state.labelWrapperClasses}>
			<label for={id} class={state.labelClasses}>
				{label}
				{#if state.required}
					<span class="text-[--color-danger-500]">*</span>
				{/if}
			</label>
			{#if description}
				<p class={state.descriptionClasses}>{description}</p>
			{/if}
		</div>
	</div>

	{#if state.hasError}
		<p id={state.errorId} class={state.errorClasses}>
			{#each state.errors as error, i}
				{error}{i < state.errors.length - 1 ? ' ' : ''}
			{/each}
		</p>
	{/if}
</div>






