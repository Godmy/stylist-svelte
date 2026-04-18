import type { SlotTimeSlot } from '$stylist/input/interface/slot/time-slot-time-slot';

/**
 * Props for the TimeSlot component
 */
export interface SlotTimeSlotProps extends SlotTimeSlot {
  /**
   * Canonical callback fired when the time slot receives value interaction
   */
  onValueInput?: (slot: SlotTimeSlot) => void;

  /**
   * Canonical callback fired when the time slot value is changed/selected
   */
  onValueChange?: (slot: SlotTimeSlot) => void;

  /**
   * Legacy callback fired when the time slot is clicked
   * @deprecated use onValueChange
   */
  onClick?: (slot: SlotTimeSlot) => void;

  /**
   * Callback fired when the time slot receives keyboard input
   */
  onKeyDown?: (e: KeyboardEvent) => void;
}
