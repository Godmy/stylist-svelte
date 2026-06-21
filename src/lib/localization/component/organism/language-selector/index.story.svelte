<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import LanguageSelector from './index.svelte';
	import type { RecipeLanguageSelector as SlotLanguageSelector } from '$stylist/localization/interface/recipe/language-selector';

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
		<div class="sb-organisms-language-selector _c1">
			<h1 class="_c2">LanguageSelector Component</h1>
			<div class="_c3">
				<h2 class="_c4">Interactive LanguageSelector</h2>
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
			<div class="_c5">
				<h2 class="_c4">LanguageSelector Variants</h2>
				<div class="_c6">
					<div>
						<h3 class="_c7">Subtle Variant</h3>
						<LanguageSelector
							{languages}
							{currentLanguage}
							onLanguageChange={handleLanguageChange}
							variant="subtle"
							size="sm"
						/>
					</div>
					<div>
						<h3 class="_c7">Ghost Variant (No Flags)</h3>
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

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		margin-bottom: 1.5rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c4 {
		font-size: 1rem;
		line-height: 1.5rem;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	._c5 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c6 {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1rem;
	}
	@media (min-width: 768px) {
		._c6 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	._c7 {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
	}
</style>
