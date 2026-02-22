<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { TogglesStyleManager } from '$stylist/design-system/styles/interaction/toggles';
	import type { CompactSize } from '$stylist/design-system/tokens/architecture/sizes';

	type Props = {
		/** Размер переключателя */
		size?: CompactSize;
		/** Отключен ли переключатель */
		disabled?: boolean;
		/** Состояние checked (поддерживает two-way binding) */
		checked?: boolean;
		/** Дополнительные CSS классы */
		class?: string;
		/** Aria label */
		ariaLabel?: string;
	} & Omit<HTMLAttributes<HTMLInputElement>, 'size' | 'checked'>;

	let {
		size = 'md',
		disabled = false,
		checked = $bindable<boolean>(false),
		class: className = '',
		ariaLabel = 'Toggle',
		id,
		name,
		...restProps
	}: Props = $props();

	// Classes using style manager
	const containerClasses = $derived(TogglesStyleManager.getToggleContainerClasses(className));
	const inputClasses = $derived(TogglesStyleManager.getSwitchInputClasses(disabled));
	const trackClasses = $derived(TogglesStyleManager.getToggleTrackClasses(disabled, checked));
	const thumbClasses = $derived(TogglesStyleManager.getToggleThumbClasses(size, disabled, checked));
</script>

<div class={containerClasses}>
	<input
		{id}
		{name}
		type="checkbox"
		bind:checked
		disabled={disabled}
		class={inputClasses}
		aria-label={ariaLabel}
		role="switch"
		aria-checked={checked ? 'true' : 'false'}
		{...restProps}
	/>

	<span class={trackClasses}>
		<span class={thumbClasses}></span>
	</span>
</div>
