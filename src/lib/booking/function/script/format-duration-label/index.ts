import { DURATION_OPTIONS } from '$stylist/booking/const/preset/duration-options';

export function formatDurationLabel(selected?: number[]): string {
	if (!selected || selected.length === 0) return 'Не выбрано';

	const labels = DURATION_OPTIONS.filter((option) => selected.includes(option.value)).map(
		(option) => option.label
	);

	return labels.length > 0 ? labels.join(', ') : 'Не выбрано';
}

export default formatDurationLabel;
