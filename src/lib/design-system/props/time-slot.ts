/**
 * TimeSlot Atom Types
 *
 * Base types for time slot components across the application
 */

/**
 * Base interface for a time slot
 */
export interface ITimeSlot {
  /**
   * Start time of the slot
   */
  start: Date;

  /**
   * End time of the slot
   */
  end: Date;

  /**
   * Time display string for the slot (e.g., "9:00 AM - 10:00 AM")
   */
  timeLabel: string;

  /**
   * Whether this slot is available
   */
  available: boolean;

  /**
   * Whether this slot is currently selected
   */
  selected?: boolean;

  /**
   * Whether this slot is currently active (e.g., current time)
   */
  active?: boolean;

  /**
   * Optional event or events in this slot
   */
  events?: any[];

  /**
   * Additional CSS classes for customization
   */
  class?: string;
}

/**
 * Props for the TimeSlot component
 */
export interface ITimeSlotProps extends ITimeSlot {
  /**
   * Canonical callback fired when the time slot receives value interaction
   */
  onValueInput?: (slot: ITimeSlot) => void;

  /**
   * Canonical callback fired when the time slot value is changed/selected
   */
  onValueChange?: (slot: ITimeSlot) => void;

  /**
   * Legacy callback fired when the time slot is clicked
   * @deprecated use onValueChange
   */
  onClick?: (slot: ITimeSlot) => void;

  /**
   * Callback fired when the time slot receives keyboard input
   */
  onKeyDown?: (e: KeyboardEvent) => void;
}
