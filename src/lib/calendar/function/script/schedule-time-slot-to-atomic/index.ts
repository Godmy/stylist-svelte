import type { ITimeSlot } from '$stylist/input/interface/component/time-slot/other';

/**
 * Converts a schedule TimeSlot (molecular) to an atomic TimeSlot
 */
export function scheduleTimeSlotToAtomic(molecularSlot: {
  time: string;
  hour: number;
  events: any[];
}): ITimeSlot {
  const date = new Date();
  date.setHours(molecularSlot.hour, 0, 0, 0);
  const endDate = new Date(date);
  endDate.setHours(date.getHours() + 1);

  return {
    start: date,
    end: endDate,
    timeLabel: molecularSlot.time,
    available: true,
    events: molecularSlot.events,
    selected: false,
    active: false,
    class: ''
  };
}
