export function getCountryFlagEmoji(countryCode?: string): string {
	if (!countryCode || countryCode.length !== 2) return '';

	return countryCode
		.toUpperCase()
		.split('')
		.map((char) =>
			char.match(/[A-Z]/) ? String.fromCodePoint(127397 + char.charCodeAt(0) - 65) : char
		)
		.join('');
}
