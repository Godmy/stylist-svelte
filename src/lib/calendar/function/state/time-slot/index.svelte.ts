import type { TimeSlotEvent } from '$stylist/calendar/interface/record/calendar';
import { TimeSlotStyleManager } from '$stylist/input/class/style-manager/time-slot';
import type { HTMLAttributes } from 'svelte/elements';

export interface TimeSlotProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
	start: Date;
	end: Date;
	timeLabel?: string;
	available?: boolean;
	selected?: boolean;
	active?: boolean;
	events?: TimeSlotEvent[];
	class?: string;
	onValueInput?: (slot: { start: Date; end: Date; timeLabel?: string; available?: boolean; selected?: boolean; active?: boolean; events?: TimeSlotEvent[] }) => void;
	onValueChange?: (slot: { start: Date; end: Date; timeLabel?: string; available?: boolean; selected?: boolean; active?: boolean; events?: TimeSlotEvent[] }) => void;
	onClick?: (slot: { start: Date; end: Date; timeLabel?: string; available?: boolean; selected?: boolean; active?: boolean; events?: TimeSlotEvent[] }) => void;
	onKeyDown?: (event: KeyboardEvent) => void;
}

export function createTimeSlotState(props: TimeSlotProps) {
	const safeStart = $derived(
		props.start instanceof Date
			? props.start
			: props.start
				? new Date(props.start as unknown as string | number | Date)
				: new Date(0)
	);
	const safeEnd = $derived(
		props.end instanceof Date
			? props.end
			: props.end
				? new Date(props.end as unknown as string | number | Date)
				: new Date(0)
	);
	const startTimeText = $derived(
		Number.isNaN(safeStart.getTime()) ? 'unknown start time' : safeStart.toLocaleTimeString()
	);
	const endTimeText = $derived(
		Number.isNaN(safeEnd.getTime()) ? 'unknown end time' : safeEnd.toLocaleTimeString()
	);
	const displayTimeLabel = $derived(props.timeLabel ?? `${startTimeText} - ${endTimeText}`);
	const wrapperClasses = $derived(
		TimeSlotStyleManager.getTimeSlotClasses(
			props.available ?? true,
			props.selected ?? false,
			props.active ?? false,
			props.class ?? ''
		)
	);
	const ariaLabel = $derived(
		`Time slot from ${startTimeText} to ${endTimeText}, ${(props.available ?? true) ? 'available' : 'not available'}`
	);
	const events = $derived(props.events ?? []);

	const restProps = $derived.by(() => {
		const {
			start: _start,
			end: _end,
			timeLabel: _timeLabel,
			available: _available,
			selected: _selected,
			active: _active,
			events: _events,
			class: _class,
			onValueInput: _onValueInput,
			onValueChange: _onValueChange,
			onClick: _onClick,
			onKeyDown: _onKeyDown,
			...rest
		} = props;

		return rest;
	});

	function handleClick() {
		const slot = {
			start: safeStart,
			end: safeEnd,
			timeLabel: displayTimeLabel,
			available: props.available ?? true,
			selected: props.selected ?? false,
			active: props.active ?? false,
			events: props.events ?? []
		};
		props.onValueInput?.(slot);
		props.onValueChange?.(slot);
		props.onClick?.(slot);
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			handleClick();
		}
		props.onKeyDown?.(e);
	}

	return {
		get wrapperClasses() {
			return wrapperClasses;
		},
		get displayTimeLabel() {
			return displayTimeLabel;
		},
		get startTimeText() {
			return startTimeText;
		},
		get endTimeText() {
			return endTimeText;
		},
		get ariaLabel() {
			return ariaLabel;
		},
		get events() {
			return events;
		},
		get restProps() {
			return restProps;
		},
		handleClick,
		handleKeyDown
	};
}

export default createTimeSlotState;
