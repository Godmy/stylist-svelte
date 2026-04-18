import type { SlotTimeSlot as ITimeSlot } from '$stylist/input/interface/slot/time-slot-time-slot';
import type { SlotCalendarEvent as RecipeCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';

/**
 * Converts a calendar TimeSlot (molecular) to an atomic TimeSlot
 */
export function molecularTimeSlotToAtomic(molecularSlot: {
  start: Date;
  end: Date;
  time: string;
  available: boolean;
  events: RecipeCalendarEvent[];
  event?: RecipeCalendarEvent;
  hour: number;
  minute: number;
}): ITimeSlot {
  return {
    start: molecularSlot.start,
    end: molecularSlot.end,
    timeLabel: molecularSlot.time,
    available: molecularSlot.available,
    events: molecularSlot.events,
    selected: false,
    active: false,
    class: ''
  };
}
