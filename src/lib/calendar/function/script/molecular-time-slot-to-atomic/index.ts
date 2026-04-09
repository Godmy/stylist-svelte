import type { ITimeSlot } from '$stylist/input/interface/component/time-slot/other';
import type { CalendarEvent } from '$stylist/calendar/interface/component/event-calendar/other';

/**
 * Converts a calendar TimeSlot (molecular) to an atomic TimeSlot
 */
export function molecularTimeSlotToAtomic(molecularSlot: {
  start: Date;
  end: Date;
  time: string;
  available: boolean;
  events: CalendarEvent[];
  event?: CalendarEvent;
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
