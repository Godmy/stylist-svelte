<script lang="ts">
	import Calendar from '$stylist/calendar/component/organism/calendar/index.svelte';

	type Props = {
		value?: string;
		onChange?: (value: string) => void;
	};

	let { value = '', onChange }: Props = $props();

	function toIsoDate(date: Date): string {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	}

	function startOfDay(date: Date): Date {
		return new Date(date.getFullYear(), date.getMonth(), date.getDate());
	}

	const today = startOfDay(new Date());
	const selectedDate = $derived.by(() => {
		if (!value) return null;
		const parsed = new Date(`${value}T00:00:00`);
		return Number.isNaN(parsed.getTime()) ? null : parsed;
	});

	function isPast(date: Date): boolean {
		return startOfDay(date) < today;
	}
</script>

<div class="tc-booking-calendar-shell">
	<Calendar value={selectedDate} isDateDisabled={isPast} onChange={(date) => onChange?.(toIsoDate(date))} />
</div>

<style>
	.tc-booking-calendar-shell {
		--color-text-primary: #17231f;
		--color-text-secondary: rgba(23, 35, 31, 0.5);
		--color-text-tertiary: rgba(23, 35, 31, 0.32);
		--color-text-inverse: white;
		--color-background-secondary: rgba(23, 35, 31, 0.06);
		--color-primary-500: #17231f;
		--color-border-primary: rgba(23, 35, 31, 0.28);
		--border-radius-base: 10px;
		--font-weight-medium: 650;
		width: 100%;
	}
</style>
