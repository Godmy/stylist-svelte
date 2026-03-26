<script lang="ts">
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
	import { Icon as BaseIcon } from '$stylist';
const Sun = 'sun';
const Moon = 'moon';
const Laptop = 'laptop';

	import type { DarkModeToggleProps } from '$stylist';

	type ThemeMode = 'light' | 'dark' | 'system';
	type Props = DarkModeToggleProps &
		InteractionHTMLAttributes<HTMLButtonElement> & {
			currentTheme?: ThemeMode;
			showLabels?: boolean;
			onThemeChange?: (theme: ThemeMode) => void;
		};

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
				currentTheme: _currentTheme,
				showLabels: _showLabels,
				onThemeChange: _onThemeChange,
				...rest
			} = props;
			return rest;
		})()
	);

	function resolveInitialTheme(): ThemeMode {
		if (props.currentTheme) return props.currentTheme;
		if (typeof props.darkMode === 'boolean') return props.darkMode ? 'dark' : 'light';
		return 'system';
	}

	let theme = $state<ThemeMode>(resolveInitialTheme());

	$effect(() => {
		if (props.currentTheme) {
			theme = props.currentTheme;
		} else if (typeof props.darkMode === 'boolean') {
			theme = props.darkMode ? 'dark' : 'light';
		}
	});

	function applyTheme(newTheme: ThemeMode) {
		const prefersDark =
			typeof window !== 'undefined' &&
			window.matchMedia('(prefers-color-scheme: dark)').matches;
		const effectiveTheme = newTheme === 'system' ? (prefersDark ? 'dark' : 'light') : newTheme;

		if (typeof document !== 'undefined') {
			document.documentElement.classList.remove('light', 'dark');
			document.documentElement.classList.add(effectiveTheme);
		}
		return effectiveTheme;
	}

	function setTheme(newTheme: ThemeMode) {
		theme = newTheme;
		props.onThemeChange?.(newTheme);
		const effectiveTheme = applyTheme(newTheme);
		props.onToggle?.({ darkMode: effectiveTheme === 'dark' });

		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('theme-mode', newTheme);
		}
	}

	function cycleTheme() {
		if (props.disabled) return;
		const modes: ThemeMode[] = ['light', 'dark', 'system'];
		const currentIndex = modes.indexOf(theme);
		const nextIndex = (currentIndex + 1) % modes.length;
		setTheme(modes[nextIndex]);
	}

	const iconName = $derived(theme === 'light' ? Sun : theme === 'dark' ? Moon : Laptop);
	const label = $derived(theme === 'light' ? 'Light' : theme === 'dark' ? 'Dark' : 'System');

	$effect(() => {
		applyTheme(theme);
	});
</script>

<button
	type="button"
	class={`c-dark-mode-toggle ${props.class ?? ''}`}
	onclick={cycleTheme}
	aria-label={`Theme mode: ${label}. Click to switch`}
	disabled={props.disabled}
	{...restProps}
>
	<BaseIcon name={iconName} size={16} />
</button>

<style>
	.c-dark-mode-toggle {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-2);
		padding: var(--spacing-2) var(--spacing-3);
		border-radius: var(--border-radius-lg);
		border: 1px solid var(--line, var(--color-border-primary));
		background: var(--surface, var(--color-background-primary));
		color: var(--text, var(--color-text-primary));
		cursor: pointer;
		transition: background-color var(--duration-120) var(--animation-ease), border-color var(--duration-120) var(--animation-ease);
	}

	.c-dark-mode-toggle:hover:not(:disabled) {
		background: color-mix(in srgb, var(--surface, var(--color-background-primary)) 88%, var(--accent, var(--color-primary-600)) 12%);
	}

	.c-dark-mode-toggle:disabled {
		opacity: var(--opacity-50);
		cursor: not-allowed;
	}
</style>




