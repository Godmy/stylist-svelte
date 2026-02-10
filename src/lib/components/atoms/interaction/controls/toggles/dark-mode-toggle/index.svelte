<script lang="ts">
	import type { DarkModeToggleProps } from '$stylist/design-system/attributes';
	import { createDarkModeToggleState } from './state.svelte.ts';

	let props: DarkModeToggleProps = $props();

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
>
	{localDarkMode ? 'Moon' : 'Sun'}
</button>
