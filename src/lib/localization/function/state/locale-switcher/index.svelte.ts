import { LocaleSwitcherStyleManager } from '$stylist/localization/class/style-manager/locale-switcher';
import { LOCALE_SWITCHER_ICON } from '$stylist/localization/const/enum/locale-switcher-icon';
import { formatDate, formatTime, formatDateTime } from '$stylist/localization/function/format-date-time';
import type { LocaleSwitcherProps, LocaleSwitcherLocale } from '$stylist/localization/interface/component/locale-switcher/other';

export interface LocaleSwitcherStateProps extends LocaleSwitcherProps {
	class?: string;
}

export function createLocaleSwitcherState(props: LocaleSwitcherStateProps) {
	// Props with defaults - extracted from props object
	const locales = props.locales ?? [];
	const currentLocale = props.currentLocale;
	const timezoneOptions = props.timezoneOptions ?? [];
	const currentTimezone = props.currentTimezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
	const showRegional = props.showRegional ?? true;
	const showDatePreview = props.showDatePreview ?? true;
	const showTimePreview = props.showTimePreview ?? true;
	const propClassName = props.class ?? '';
	const propHeaderClass = props.headerClass ?? '';
	const propContentClass = props.contentClass ?? '';
	const propLocaleClass = props.localeClass ?? '';
	const propFooterClass = props.footerClass ?? '';

	// Computed
	const now = new Date();
	const currentLocaleObj = locales.find((loc: LocaleSwitcherLocale) => loc.code === currentLocale) ?? locales[0];

	// Classes
	const rootClass = $derived(LocaleSwitcherStyleManager.getRootClass(propClassName));
	const headerClass = $derived(LocaleSwitcherStyleManager.getHeaderClass(propHeaderClass));
	const contentClass = $derived(LocaleSwitcherStyleManager.getContentClass(propContentClass));
	const getLocaleButtonClass = (isActive: boolean) => LocaleSwitcherStyleManager.getLocaleButtonClass(isActive, propLocaleClass);
	const timezoneSelectClass = $derived(LocaleSwitcherStyleManager.getTimezoneSelectClass());
	const footerClass = $derived(LocaleSwitcherStyleManager.getFooterClass(propFooterClass));

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
		// Icons
		get iconClock() {
			return LOCALE_SWITCHER_ICON.CLOCK;
		},
		get iconGlobe() {
			return LOCALE_SWITCHER_ICON.GLOBE;
		},
		get iconUser() {
			return LOCALE_SWITCHER_ICON.USER;
		},
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
