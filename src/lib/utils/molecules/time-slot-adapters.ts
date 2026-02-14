import type { ITimeSlot } from '$stylist/design-system/props/time-slot';
import type { CalendarEvent } from '$stylist/design-system/props/calendar';

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

/**
 * Converts a schedule TimeSlot (molecular) to an atomic TimeSlot
 */
export function scheduleTimeSlotToAtomic(molecularSlot: {
  time: string;
  hour: number;
  events: any[];
}): ITimeSlot {
  // Create a default date with the hour from the schedule slot
  const date = new Date();
  date.setHours(molecularSlot.hour, 0, 0, 0);
  const endDate = new Date(date);
  endDate.setHours(date.getHours() + 1); // 1 hour duration

  return {
    start: date,
    end: endDate,
    timeLabel: molecularSlot.time,
    available: true, // Default to available for schedule slots
    events: molecularSlot.events,
    selected: false,
    active: false,
    class: ''
  };
}
