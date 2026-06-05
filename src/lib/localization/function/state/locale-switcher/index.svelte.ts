import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import {
	formatDate,
	formatTime,
	formatDateTime
} from '$stylist/localization/function/format-date-time';
import type { SlotLocaleSwitcherLocale as LocaleSwitcherLocale } from '$stylist/localization/interface/slot/locale-switcher-locale';
import type { LocaleSwitcherStateProps } from '$stylist/localization/interface/recipe/locale-switcher';

export function createLocaleSwitcherState(props: LocaleSwitcherStateProps) {
	const locales = props.locales ?? [];
	const currentLocale = props.currentLocale;
	const timezoneOptions = props.timezoneOptions ?? [];
	const currentTimezone = props.currentTimezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
	const showRegional = props.showRegional ?? true;
	const showDatePreview = props.showDatePreview ?? true;
	const showTimePreview = props.showTimePreview ?? true;

	const now = new Date();
	const currentLocaleObj =
		locales.find((loc: LocaleSwitcherLocale) => loc.code === currentLocale) ?? locales[0];

	const rootClass = $derived(mergeClassNames('c-locale-switcher', props.class));
	const headerClass = $derived(mergeClassNames('c-locale-switcher__header', props.headerClass));
	const contentClass = $derived(mergeClassNames('c-locale-switcher__content', props.contentClass));
	const timezoneSelectClass = $derived('c-locale-switcher__timezone-select');
	const footerClass = $derived(mergeClassNames('c-locale-switcher__footer', props.footerClass));

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

	function getLocaleButtonClass(isActive: boolean): string {
		return mergeClassNames(
			'c-locale-switcher__locale-btn',
			isActive && 'c-locale-switcher__locale-btn--active',
			props.localeClass
		);
	}

	return {
		get iconClock() {
			return 'clock';
		},
		get iconGlobe() {
			return 'globe';
		},
		get iconUser() {
			return 'user';
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
