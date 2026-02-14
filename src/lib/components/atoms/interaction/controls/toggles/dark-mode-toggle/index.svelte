<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { DarkModeToggleProps } from '$stylist/design-system/props';
	import { createDarkModeToggleState } from '$stylist/design-system/models/dark-mode-toggle.svelte';

	type Props = DarkModeToggleProps & HTMLAttributes<HTMLButtonElement>;
	let props: Props = $props();
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				disabled: _disabled,
				size: _size,
				checked: _checked,
				darkMode: _darkMode,
				onToggle: _onToggle,
				...rest
			} = props;
			return rest;
		})()
	);

	const darkModeState = createDarkModeToggleState(props);

	let localDarkMode = $state(darkModeState.darkMode);

	$effect(() => {
		localDarkMode = darkModeState.darkMode;
	});

	function toggleDarkMode() {
		if (!darkModeState.disabled) {
			localDarkMode = !localDarkMode;
			props.onToggle?.({ darkMode: localDarkMode });
		}
	}

	$effect(() => {
		if (typeof window !== 'undefined') {
			if (localDarkMode) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	});
</script>

<button
	class={darkModeState.classes}
	onclick={toggleDarkMode}
	aria-label={localDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
	{...restProps}
>
	{localDarkMode ? 'Moon' : 'Sun'}
</button>



