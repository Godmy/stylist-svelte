<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import LanguageSelector from './index.svelte';
	import type { SlotLanguageSelector } from '$stylist/localization/interface/slot/language-selector';

	const languages: SlotLanguageSelector['languages'] = [
		{ code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
		{ code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
		{ code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
		{ code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
		{ code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
		{ code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
		{ code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
		{ code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
		{ code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' }
	];

	let currentLanguage = $state('en');

	function handleLanguageChange(newLanguage: string) {
		currentLanguage = newLanguage;
		console.log('Language changed to:', newLanguage);
	}

	const controls: InterfaceControllerSettings[] = [
		{ name: 'showFlags', type: 'boolean', defaultValue: true },
		{ name: 'showNativeName', type: 'boolean', defaultValue: false },
		{ name: 'searchable', type: 'boolean', defaultValue: true },
		{
			name: 'dropdownPlacement',
			type: 'select',
			options: ['top', 'bottom'],
			defaultValue: 'bottom'
		},
		{
			name: 'variant',
			type: 'select',
			options: ['default', 'ghost', 'subtle'],
			defaultValue: 'default'
		},
		{ name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' }
	];
</script>

<Story
	id="organisms-language-selector"
	title="Organisms / Interaction / Controls / LanguageSelector"
	component={LanguageSelector}
	category="Organisms/Interaction/Controls"
	description="Language selector component with search, flags, and native language names."
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-language-selector p-4">
			<h1 class="mb-4 text-lg font-semibold">LanguageSelector Component</h1>
			<div class="mb-6 rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">Interactive LanguageSelector</h2>
				<LanguageSelector
					{languages}
					{currentLanguage}
					onLanguageChange={handleLanguageChange}
					showFlags={values.showFlags}
					showNativeName={values.showNativeName}
					searchable={values.searchable}
					dropdownPlacement={values.dropdownPlacement}
					variant={values.variant}
					size={values.size}
				/>
			</div>
			<div class="rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">LanguageSelector Variants</h2>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div>
						<h3 class="mb-2 text-sm font-medium">Subtle Variant</h3>
						<LanguageSelector
							{languages}
							{currentLanguage}
							onLanguageChange={handleLanguageChange}
							variant="subtle"
							size="sm"
						/>
					</div>
					<div>
						<h3 class="mb-2 text-sm font-medium">Ghost Variant (No Flags)</h3>
						<LanguageSelector
							{languages}
							{currentLanguage}
							onLanguageChange={handleLanguageChange}
							showFlags={false}
							variant="ghost"
						/>
					</div>
				</div>
			</div>
		</div>
	{/snippet}
</Story>
