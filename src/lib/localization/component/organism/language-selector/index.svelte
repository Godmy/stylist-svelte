<script lang="ts">
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
	import type { SlotLanguageSelector as ILanguageSelectorProps } from '$stylist/localization/interface/slot/language-selector';
	import { Icon as BaseIcon } from '$stylist/media';
	import { LanguageSelectorStyleManager } from '$stylist/localization/class/style-manager/language-selector';
	import { createLanguageSelectorState } from '$stylist/localization/function/state/language-selector';

	const Globe = 'globe';
	const Check = 'check';

	let props: ILanguageSelectorProps & InteractionHTMLAttributes<HTMLDivElement> = $props();
	const state = createLanguageSelectorState(props);
</script>

<div class={state.baseClasses} {...state.restProps}>
	<div>
		<button
			type="button"
			class={state.buttonBaseClasses}
			id="language-selector-button"
			aria-haspopup="true"
			aria-expanded={state.isOpen}
			onclick={() => state.toggleDropdown()}
		>
			{#if state.selectedLanguage}
				{#if state.showFlags && state.selectedLanguage.flag}
					<span class={state.flagClasses}>{state.selectedLanguage.flag}</span>
				{/if}
				<span>
					{state.selectedLanguage.name}
					{#if state.showNativeName && state.selectedLanguage.nativeName && state.selectedLanguage.nativeName !== state.selectedLanguage.name}
						<span class="ml-1 text-[--color-text-secondary]">
							({state.selectedLanguage.nativeName})
						</span>
					{/if}
				</span>
			{:else}
				<span class="flex items-center">
					<BaseIcon name={Globe} class="h-4 w-4 mr-2" />
					Select Language
				</span>
			{/if}
			<svg
				class="-mr-1 ml-2 h-5 w-5"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>

	{#if state.isOpen}
		<div class={state.dropdownBaseClasses}>
			{#if state.searchable}
				<div class="p-2 border-b border-[--color-border-primary]">
					<div class="relative">
						<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<svg
								class="h-5 w-5 text-[--color-text-secondary]"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<input
							type="text"
							class={state.searchInputClasses}
							placeholder="Search languages..."
							bind:value={state.searchQuery}
						/>
					</div>
				</div>
			{/if}

			<div class="py-1 max-h-60 overflow-y-auto">
				{#if state.filteredLanguages.length === 0}
					<div class="px-4 py-2 text-sm text-[--color-text-secondary]">No languages found</div>
				{:else}
					{#each state.filteredLanguages as language}
						<button
							type="button"
							class={`${LanguageSelectorStyleManager.getLanguageItemBaseClasses(language.code === state.currentLanguage)} ${state.languageClass}`}
							onclick={() => state.selectLanguage(language.code)}
						>
							{#if state.showFlags && language.flag}
								<span class={state.flagClasses}>{language.flag}</span>
							{/if}
							<span class="flex-1">
								{language.name}
								{#if state.showNativeName && language.nativeName && language.name !== language.nativeName}
									<span class="ml-2 text-[--color-text-secondary] text-xs">
										({language.nativeName})
									</span>
								{/if}
							</span>
							{#if language.code === state.currentLanguage}
								<BaseIcon name={Check} class={state.checkIconClasses} />
							{/if}
						</button>
					{/each}
				{/if}
			</div>

			<div class="py-1 border-t border-[--color-border-primary]">
				<div class="px-4 py-2 text-xs text-[--color-text-secondary]">
					{state.filteredLanguages.length} language{state.filteredLanguages.length !== 1 ? 's' : ''} available
				</div>
			</div>
		</div>
	{/if}
</div>
