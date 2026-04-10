import type { ILanguageSelectorProps } from '$stylist/localization/interface/component/language-selector/struct/props';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import { LanguageSelectorStyleManager } from '$stylist/localization/class/style-manager/language-selector';

function createLanguageSelectorState(props: ILanguageSelectorProps & InteractionHTMLAttributes<HTMLDivElement>) {
	let isOpen = $state(false);
	let searchQuery = $state('');

	const languages = $derived(props.languages ?? []);
	const currentLanguage = $derived(props.currentLanguage);

	const filteredLanguages = $derived.by(() => {
		if (!searchQuery) return languages;
		const query = searchQuery.toLowerCase();
		return languages.filter(
			(lang) =>
				lang.name.toLowerCase().includes(query) ||
				(lang.nativeName && lang.nativeName.toLowerCase().includes(query)) ||
				lang.code.toLowerCase().includes(query)
		);
	});

	const selectedLanguage = $derived(languages.find((lang) => lang.code === currentLanguage));

	const baseClasses = $derived(`${LanguageSelectorStyleManager.getBaseClasses()} ${props.class ?? ''}`);
	const buttonBaseClasses = $derived(
		`${LanguageSelectorStyleManager.getButtonBaseClasses()} ${LanguageSelectorStyleManager.getButtonVariantClasses(props.variant ?? 'default')} ${LanguageSelectorStyleManager.getButtonSizeClasses(props.size ?? 'md')} ${props.buttonClass ?? ''}`
	);
	const dropdownBaseClasses = $derived(
		`${LanguageSelectorStyleManager.getDropdownBaseClasses()} ${props.dropdownClass ?? ''} ${LanguageSelectorStyleManager.getDropdownPositionClasses(props.dropdownPlacement ?? 'bottom')}`
	);
	const searchInputClasses = $derived(LanguageSelectorStyleManager.getSearchInputClasses());
	const flagClasses = $derived(LanguageSelectorStyleManager.getFlagClasses());
	const checkIconClasses = $derived(LanguageSelectorStyleManager.getCheckIconClasses());

	const restProps = $derived.by(() => {
		const {
			languages: _languages,
			currentLanguage: _currentLanguage,
			onLanguageChange: _onLanguageChange,
			showFlags: _showFlags,
			showNativeName: _showNativeName,
			searchable: _searchable,
			dropdownPlacement: _dropdownPlacement,
			variant: _variant,
			size: _size,
			class: _class,
			buttonClass: _buttonClass,
			dropdownClass: _dropdownClass,
			languageClass: _languageClass,
			...rest
		} = props;
		return rest;
	});

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function selectLanguage(code: string) {
		props.onLanguageChange?.(code);
		isOpen = false;
		searchQuery = '';
	}

	return {
		get isOpen() {
			return isOpen;
		},
		set isOpen(value: boolean) {
			isOpen = value;
		},
		get searchQuery() {
			return searchQuery;
		},
		set searchQuery(value: string) {
			searchQuery = value;
		},
		get filteredLanguages() {
			return filteredLanguages;
		},
		get selectedLanguage() {
			return selectedLanguage;
		},
		get baseClasses() {
			return baseClasses;
		},
		get buttonBaseClasses() {
			return buttonBaseClasses;
		},
		get dropdownBaseClasses() {
			return dropdownBaseClasses;
		},
		get searchInputClasses() {
			return searchInputClasses;
		},
		get flagClasses() {
			return flagClasses;
		},
		get checkIconClasses() {
			return checkIconClasses;
		},
		get restProps() {
			return restProps;
		},
		get showFlags() {
			return props.showFlags ?? true;
		},
		get showNativeName() {
			return props.showNativeName ?? false;
		},
		get searchable() {
			return props.searchable ?? true;
		},
		get currentLanguage() {
			return currentLanguage;
		},
		get languageClass() {
			return props.languageClass ?? '';
		},
		toggleDropdown,
		selectLanguage
	};
}

export default createLanguageSelectorState;
