import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import { ObjectManagerThemeModeToggle } from '$stylist/theme/class/object-manager/theme-mode-toggle';
import { ObjectManagerThemeSettings } from '$stylist/theme/class/object-manager/theme-settings';
import { ObjectManagerThemeSwitcher } from '$stylist/theme/class/object-manager/theme-switcher';
import { THEME_STORAGE_CONTRACT } from '$stylist/theme/const/record/theme-storage-contract';
import ThemeModeToggleHarness from './theme-mode-toggle-harness.svelte';
import ThemeSwitcherHarness from './theme-switcher-harness.svelte';

describe('theme component integration', () => {
	it('applies theme mode side effects once per click', async () => {
		render(ThemeModeToggleHarness);

		const button = screen.getByRole('button');
		const beforeThemeChanges = Number(screen.getByTestId('theme-change-count').textContent);
		const beforeToggles = Number(screen.getByTestId('toggle-count').textContent);

		await fireEvent.click(button);

		expect(screen.getByTestId('theme-mode-value').textContent).toBe('light');
		expect(Number(screen.getByTestId('theme-change-count').textContent)).toBe(
			beforeThemeChanges + 1
		);
		expect(Number(screen.getByTestId('toggle-count').textContent)).toBe(beforeToggles + 1);
		expect(localStorage.getItem(THEME_STORAGE_CONTRACT.modeStorageKey)).toBe('light');
		expect(document.documentElement.classList.contains('light')).toBe(true);
	});

	it('toggles only between light and dark after the first click', async () => {
		render(ThemeModeToggleHarness);

		const button = screen.getByRole('button');

		await fireEvent.click(button);
		expect(screen.getByTestId('theme-mode-value').textContent).toBe('light');

		await fireEvent.click(button);
		expect(screen.getByTestId('theme-mode-value').textContent).toBe('dark');

		await fireEvent.click(button);
		expect(screen.getByTestId('theme-mode-value').textContent).toBe('light');
	});

	it('applies UI scheme side effects once per click', async () => {
		render(ThemeSwitcherHarness);

		const forestButton = screen.getByRole('button', { name: /forest/i });
		const beforeChanges = Number(screen.getByTestId('theme-switcher-count').textContent);

		await fireEvent.click(forestButton);

		expect(screen.getByTestId('theme-switcher-value').textContent).toBe('forest');
		expect(Number(screen.getByTestId('theme-switcher-count').textContent)).toBe(beforeChanges + 1);
		expect(localStorage.getItem(THEME_STORAGE_CONTRACT.schemeStorageKey)).toBe('forest');
		expect(document.documentElement.getAttribute('data-ui-theme')).toBe('forest');
		expect(document.documentElement.getAttribute('data-theme')).toBe('light');
	});

	it('publishes the theme settings defaults', () => {
		const contract = ObjectManagerThemeSettings.createContract();

		expect(contract.themeMode).toBe('default');
		expect(contract.themeScheme).toBe('minimal');
		expect(contract.onThemeModeChange).toBeUndefined();
		expect(contract.onThemeSchemeChange).toBeUndefined();
	});

	it('keeps the storage keys aligned with the object managers', () => {
		expect(ObjectManagerThemeModeToggle.storageKey).toBe(THEME_STORAGE_CONTRACT.modeStorageKey);
		expect(ObjectManagerThemeSwitcher.storageKey).toBe(THEME_STORAGE_CONTRACT.schemeStorageKey);
	});
});
