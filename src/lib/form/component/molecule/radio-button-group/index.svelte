<script lang="ts">
	import type { RecipeRadioButtonGroupProps as RecipeRadioButtonGroupProps } from '$stylist/form/interface/recipe/radio-button-group-props';
	import createRadioButtonGroupState from '$stylist/form/function/state/radio-button-group/index.svelte';

	let props: RecipeRadioButtonGroupProps = $props();

	const state = createRadioButtonGroupState(props);

	// Extract only HTML-compatible props for the container div
	// Create a new object with only the safe properties by picking them explicitly
	const htmlProps = $derived.by(() => {
		const result = {} as Record<string, any>;

		// Manually copy only the properties that are safe to use on a div element
		for (const [key, value] of Object.entries(props)) {
			// Skip properties that are specific to input elements or that cause type conflicts
			if (
				![
					'options',
					'value',
					'name',
					'disabled',
					'required',
					'orientation',
					'class',
					'optionClass',
					'labelClass',
					'radioClass',
					'onValueInput',
					'onValueChange',
					'accept',
					'alt',
					'autocomplete',
					'autofocus',
					'capture',
					'checked',
					'crossOrigin',
					'files',
					'form',
					'formAction',
					'formEncType',
					'formMethod',
					'formNoValidate',
					'formTarget',
					'height',
					'inputMode',
					'list',
					'max',
					'maxLength',
					'min',
					'minLength',
					'multiple',
					'pattern',
					'placeholder',
					'readOnly',
					'selectionDirection',
					'selectionEnd',
					'selectionStart',
					'size',
					'src',
					'step',
					'type',
					'useMap',
					'width',
					'wrap'
				].includes(key)
			) {
				result[key] = value;
			}
		}

		return result;
	});
</script>

<div class={state.containerClass} {...htmlProps}>
	{#each state.options as option}
		<label
			class="c-radio-group__option"
			data-disabled={option.disabled || state.disabled || undefined}
		>
			<input
				type="radio"
				name={state.name}
				class="c-radio-group__input"
				checked={state.value === option.value}
				value={option.value}
				oninput={() => state.handleInput(option.value)}
				onchange={() => state.handleChange(option.value)}
				disabled={option.disabled || state.disabled}
				required={state.required}
			/>
			<span class="c-radio-group__label">{option.label}</span>
		</label>
	{/each}
</div>

<style>
	.c-radio-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.c-radio-group__option {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
	}

	.c-radio-group__option[data-disabled] {
		opacity: var(--opacity-50, 0.5);
		cursor: not-allowed;
	}

	.c-radio-group__input {
		width: 1rem;
		height: 1rem;
		border-color: var(--color-border-primary);
		color: var(--color-primary-600);
		accent-color: var(--color-primary-600);
		cursor: pointer;
	}

	.c-radio-group__option[data-disabled] .c-radio-group__input {
		cursor: not-allowed;
	}

	.c-radio-group__label {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.c-radio-group__option[data-disabled] .c-radio-group__label {
		opacity: var(--opacity-50, 0.5);
	}
</style>
