export const COUNTRY_FLAG_BASE_CLASSES = 'inline-flex items-center justify-center';
export const COUNTRY_FLAG_FALLBACK_BASE_CLASSES =
	'inline-flex items-center justify-center rounded bg-gray-100 text-gray-700';

export const resolveCountryFlagEmoji = (code = '') => {
	const value = code.trim().toUpperCase();
	if (!/^[A-Z]{2}$/.test(value)) return '';
	return String.fromCodePoint(...value.split('').map((c) => 127397 + c.charCodeAt(0)));
};
