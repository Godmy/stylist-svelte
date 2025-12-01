<script lang="ts">
    import { onMount } from 'svelte';
    import type { IDarkModeToggleProps } from './types';
    import { DarkModeToggleStyleManager } from './styles';

    let {
        darkMode = false,
        disabled = false,
        onToggle
    }: IDarkModeToggleProps = $props();

    const toggleClasses = DarkModeToggleStyleManager.getToggleClasses(darkMode, disabled);

    function toggleDarkMode() {
        if (!disabled) {
            darkMode = !darkMode;
            onToggle?.({ darkMode });
        }
    }

    $effect(() => {
        if (typeof window !== 'undefined') {
            if (darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    });
</script>

<button
    class={toggleClasses}
    onclick={toggleDarkMode}
    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
>
    {darkMode ? '🌙' : '☀️'}
</button>