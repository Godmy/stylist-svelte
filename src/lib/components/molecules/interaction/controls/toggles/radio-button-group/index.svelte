<script lang="ts">
	import type { RadioButtonGroupProps } from '$stylist/design-system/props';
	import { createRadioButtonGroupState } from './state.svelte';

	let props: RadioButtonGroupProps = $props();

	const radioGroupState = createRadioButtonGroupState(props);

	let selectedValue = $state(radioGroupState.value);

	$effect(() => {
		if (selectedValue !== radioGroupState.value) {
			selectedValue = radioGroupState.value;
		}
	});

	function handleInput(optionValue: string) {
		selectedValue = optionValue;
		props.onInput?.(optionValue);
	}

	function handleChange(optionValue: string) {
		selectedValue = optionValue;
		props.onChange?.(optionValue);
	}

	// Extract only HTML-compatible props for the container div
	const htmlProps = $derived((() => {
		const {
			// Component-specific props (exclude from HTML element)
			options: _options,
			value: _value,
			name: _name,
			disabled: _disabled,
			required: _required,
			orientation: _orientation,
			class: _class,
			optionClass: _optionClass,
			labelClass: _labelClass,
			radioClass: _radioClass,
			oninput: _oninput,
			onchange: _onchange,
			// Svelte-specific attributes that shouldn't go on div
			color: _color,
			hidden: _hidden,
			children: _children,
			accesskey: _accesskey,
			autocapitalize: _autocapitalize,
			autocomplete: _autocomplete,
			autofocus: _autofocus,
			disable: _disable,  // Note: this might be a typo for disabled
			form: _form,
			// Add other props that shouldn't be spread to div
			// Input-specific attributes
			accept: _accept,
			alt: _alt,
			checked: _checked,
			dirname: _dirname,
			for: _for,
			height: _height,
			lang: _lang,
			list: _list,
			max: _max,
			maxlength: _maxlength,
			min: _min,
			minlength: _minlength,
			multiple: _multiple,
			pattern: _pattern,
			placeholder: _placeholder,
			readonly: _readonly,
			rel: _rel,
			src: _src,
			step: _step,
			tabindex: _tabindex,
			title: _title,
			width: _width,
			// Event handlers that don't apply to div
			onblur: _onblur,
			onfocus: _onfocus,
			onchange: _onchange2,
			oninput: _oninput2,
			onkeydown: _onkeydown,
			onkeypress: _onkeypress,
			onkeyup: _onkeyup,
			onmousedown: _onmousedown,
			onmouseenter: _onmouseenter,
			onmouseleave: _onmouseleave,
			onmousemove: _onmousemove,
			onmouseout: _onmouseout,
			onmouseover: _onmouseover,
			onmouseup: _onmouseup,
			// More attributes that don't belong on div
			...filteredProps
		} = {
			// Include all props from the original object
			...props
		};
		return filteredProps;
	})());
</script>

<div class={radioGroupState.containerClass} {...htmlProps}>
	{#each radioGroupState.options as option}
		<label class={radioGroupState.getOptionClass(!!option.disabled)}>
			<input
				type="radio"
				name={radioGroupState.name}
				class={radioGroupState.radioInputClass}
				bind:group={selectedValue}
				value={option.value}
				oninput={() => handleInput(option.value)}
				onchange={() => handleChange(option.value)}
				disabled={option.disabled || radioGroupState.disabled}
				required={radioGroupState.required}
			/>
			<span class={radioGroupState.optionLabelClass}>{option.label}</span>
		</label>
	{/each}
</div>

