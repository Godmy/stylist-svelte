export class GeoManager {
	static getCountryFlagEmoji(countryCode?: string): string {
		if (!countryCode || countryCode.length !== 2) return '';

		return countryCode
			.toUpperCase()
			.split('')
			.map((char) =>
				char.match(/[A-Z]/) ? String.fromCodePoint(127397 + char.charCodeAt(0) - 65) : char
			)
			.join('');
	}

	static handleKeyDown(event: KeyboardEvent, callback: () => void): void {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			callback();
		}
	}

	static handleKeyDownForLocation<TLocation extends { id?: string; name: string }>(
		event: KeyboardEvent,
		location: TLocation,
		onSelect: (location: TLocation) => void
	): void {
		GeoManager.handleKeyDown(event, () => onSelect(location));
	}
}
