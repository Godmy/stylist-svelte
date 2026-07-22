<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { RecipeLanguageSelector as ILanguageSelectorProps } from '$stylist/localization/interface/recipe/language-selector';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import createLanguageSelectorState from '$stylist/localization/function/state/language-selector/index.svelte';

	const Globe = 'globe';
	const Check = 'check';

	let props: ILanguageSelectorProps & HTMLAttributes<HTMLDivElement> = $props();
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
						<span class="c-language-selector__native-name">
							({state.selectedLanguage.nativeName})
						</span>
					{/if}
				</span>
			{:else}
				<span class="c-language-selector__no-lang">
					<BaseIcon name={Globe} class="_c1" />
					Select Language
				</span>
			{/if}
			<svg
				class="c-language-selector__chevron"
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
				<div class="c-language-selector__search-wrapper">
					<div class="c-language-selector__search-inner">
						<div class="c-language-selector__search-icon">
							<svg
								class="c-language-selector__search-svg"
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

			<div class="c-language-selector__list">
				{#if state.filteredLanguages.length === 0}
					<div class="c-language-selector__empty">No languages found</div>
				{:else}
					{#each state.filteredLanguages as language}
						<button
							type="button"
							class={state.getLanguageItemClasses(language.code === state.currentLanguage)}
							onclick={() => state.selectLanguage(language.code)}
						>
							{#if state.showFlags && language.flag}
								<span class={state.flagClasses}>{language.flag}</span>
							{/if}
							<span class="c-language-selector__lang-name">
								{language.name}
								{#if state.showNativeName && language.nativeName && language.name !== language.nativeName}
									<span class="c-language-selector__item-native">
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

			<div class="c-language-selector__footer">
				<div class="c-language-selector__count">
					{state.filteredLanguages.length} language{state.filteredLanguages.length !== 1 ? 's' : ''}
					available
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.c-language-selector {
		position: relative;
		display: inline-block;
	}

	.c-language-selector__trigger {
		display: inline-flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
		font-weight: 500;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		cursor: pointer;
	}

	.c-language-selector__trigger:hover {
		background: var(--color-background-secondary);
	}

	.c-language-selector__trigger:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-primary-500);
	}

	.c-language-selector__trigger--minimal {
		border: none;
		background: transparent;
		box-shadow: none;
	}

	.c-language-selector__trigger--minimal:hover {
		background: transparent;
	}

	.c-language-selector__trigger--compact,
	.c-language-selector__trigger--sm {
		padding: 0.25rem 0.5rem;
		font-size: 0.75rem;
	}

	.c-language-selector__trigger--lg {
		padding: 0.75rem 1rem;
		font-size: 1rem;
	}

	.c-language-selector__chevron {
		margin-left: 0.5rem;
		margin-right: -0.25rem;
		width: 1.25rem;
		height: 1.25rem;
		flex-shrink: 0;
	}

	.c-language-selector__native-name {
		margin-left: 0.25rem;
		color: var(--color-text-secondary);
	}

	.c-language-selector__no-lang {
		display: flex;
		align-items: center;
	}

	.c-language-selector__dropdown {
		position: absolute;
		top: 100%;
		left: 0;
		z-index: var(--z-index-docked, 10);
		margin-top: 0.25rem;
		width: 12rem;
		border-radius: 0.375rem;
		background: var(--color-background-primary);
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
		border: 1px solid rgb(0 0 0 / 0.05);
	}

	.c-language-selector__dropdown--top {
		top: auto;
		bottom: 100%;
		margin-top: 0;
		margin-bottom: 0.25rem;
	}

	.c-language-selector__search-wrapper {
		border-bottom: 1px solid var(--color-border-primary);
		padding: 0.5rem;
	}

	.c-language-selector__search-inner {
		position: relative;
	}

	.c-language-selector__search-icon {
		pointer-events: none;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		padding-left: 0.75rem;
	}

	.c-language-selector__search-svg {
		width: 1.25rem;
		height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.c-language-selector__search {
		display: block;
		width: 100%;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
		padding: 0.5rem 0.75rem 0.5rem 2.5rem;
		font-size: 0.875rem;
	}

	.c-language-selector__search:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-primary-500);
		border-color: var(--color-primary-500);
	}

	.c-language-selector__list {
		max-height: 15rem;
		overflow-y: auto;
		padding-block: 0.25rem;
	}

	.c-language-selector__empty {
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.c-language-selector__item {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		cursor: pointer;
		background: none;
		border: none;
		text-align: left;
	}

	.c-language-selector__item:hover {
		background: var(--color-background-secondary);
	}

	.c-language-selector__item--active {
		background: var(--color-background-selected, var(--color-background-secondary));
		font-weight: 500;
	}

	.c-language-selector__flag {
		margin-right: 0.5rem;
		flex-shrink: 0;
	}

	.c-language-selector__lang-name {
		flex: 1;
		text-align: left;
	}

	.c-language-selector__item-native {
		margin-left: 0.5rem;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}

	.c-language-selector__footer {
		border-top: 1px solid var(--color-border-primary);
		padding-block: 0.25rem;
	}

	.c-language-selector__count {
		padding: 0.5rem 1rem;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}

	._c1 {
		margin-right: 0.5rem;
		height: 1rem;
		width: 1rem;
	}
</style>
