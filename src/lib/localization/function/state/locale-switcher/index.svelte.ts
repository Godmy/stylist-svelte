import { LocaleSwitcherStyleManager } from '$stylist/localization/class/style-manager/locale-switcher';
import type { LocaleSwitcherProps, LocaleSwitcherLocale } from '$stylist/localization/interface/component/locale-switcher/other';

export interface LocaleSwitcherStateProps extends LocaleSwitcherProps {
	class?: string;
}

export function createLocaleSwitcherState(props: LocaleSwitcherStateProps) {
	// Props with defaults
	const locales = $derived(props.locales ?? []);
	const currentLocale = $derived(props.currentLocale);
	const timezoneOptions = $derived(props.timezoneOptions ?? []);
	const currentTimezone = $derived(props.currentTimezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone);
	const showRegional = $derived(props.showRegional ?? true);
	const showDatePreview = $derived(props.showDatePreview ?? true);
	const showTimePreview = $derived(props.showTimePreview ?? true);

	// Computed
	const now = new Date();
	const currentLocaleObj = $derived(locales.find((loc: LocaleSwitcherLocale) => loc.code === currentLocale) ?? locales[0]);

	function formatDate(date: Date, localeCode: string | undefined, timeZone: string | undefined): string {
		return new Intl.DateTimeFormat(localeCode ?? 'en-US', { dateStyle: 'full', timeZone }).format(date);
	}

	function formatTime(date: Date, localeCode: string | undefined, timeZone: string | undefined): string {
		return new Intl.DateTimeFormat(localeCode ?? 'en-US', { timeStyle: 'medium', timeZone }).format(date);
	}

	function formatDateTime(date: Date, localeCode: string | undefined, timeZone: string | undefined): string {
		return new Intl.DateTimeFormat(localeCode ?? 'en-US', { dateStyle: 'long', timeStyle: 'short', timeZone }).format(date);
	}

	// Classes
	const rootClass = $derived(LocaleSwitcherStyleManager.getRootClass(props.class));
	const headerClass = $derived(LocaleSwitcherStyleManager.getHeaderClass(props.headerClass));
	const contentClass = $derived(LocaleSwitcherStyleManager.getContentClass(props.contentClass));
	const getLocaleButtonClass = (isActive: boolean) => LocaleSwitcherStyleManager.getLocaleButtonClass(isActive, props.localeClass);
	const timezoneSelectClass = $derived(LocaleSwitcherStyleManager.getTimezoneSelectClass());
	const footerClass = $derived(LocaleSwitcherStyleManager.getFooterClass(props.footerClass));

	// Rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			locales: _locales,
			currentLocale: _currentLocale,
			timezoneOptions: _timezoneOptions,
			currentTimezone: _currentTimezone,
			showRegional: _showRegional,
			showDatePreview: _showDatePreview,
			showTimePreview: _showTimePreview,
			headerClass: _headerClass,
			contentClass: _contentClass,
			localeClass: _localeClass,
			footerClass: _footerClass,
			...rest
		} = props;
		return rest;
	});

	return {
		get locales() {
			return locales;
		},
		get currentLocale() {
			return currentLocale;
		},
		get currentLocaleObj() {
			return currentLocaleObj;
		},
		get timezoneOptions() {
			return timezoneOptions;
		},
		get currentTimezone() {
			return currentTimezone;
		},
		get showRegional() {
			return showRegional;
		},
		get showDatePreview() {
			return showDatePreview;
		},
		get showTimePreview() {
			return showTimePreview;
		},
		get now() {
			return now;
		},
		get rootClass() {
			return rootClass;
		},
		get headerClass() {
			return headerClass;
		},
		get contentClass() {
			return contentClass;
		},
		get timezoneSelectClass() {
			return timezoneSelectClass;
		},
		get footerClass() {
			return footerClass;
		},
		get restProps() {
			return restProps;
		},
		formatDate,
		formatTime,
		formatDateTime,
		getLocaleButtonClass
	};
}

export default createLocaleSwitcherState;
