/**
 * TimeSlot Style Manager
 * 
 * Handles all styling logic for the TimeSlot component following SAMO design principles
 */

/**
 * Style configuration interface for TimeSlot
 */
interface ITimeSlotStyleConfig {
  /**
   * Base CSS classes for the time slot
   */
  base: string;
  
  /**
   * CSS classes when the time slot is available
   */
  available: string;
  
  /**
   * CSS classes when the time slot is not available
   */
  unavailable: string;
  
  /**
   * CSS classes when the time slot is selected
   */
  selected: string;
  
  /**
   * CSS classes when the time slot is active
   */
  active: string;
  
  /**
   * Base CSS classes for the time label
   */
  timeLabelBase: string;
  
  /**
   * Base CSS classes for the event count
   */
  eventCountBase: string;
}

/**
 * Default style configuration for TimeSlot
 */
const defaultConfig: ITimeSlotStyleConfig = {
  base: 'time-slot flex flex-col p-[--spacing-sm] border rounded cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]',
  available: 'bg-[--color-surface-primary] border-[--color-border-default] hover:bg-[--color-surface-secondary] hover:border-[--color-border-hover]',
  unavailable: 'bg-[--color-surface-disabled] border-[--color-border-disabled] text-[--color-text-disabled] cursor-not-allowed',
  selected: 'ring-2 ring-[--color-primary-500] bg-[--color-primary-50] border-[--color-primary-300]',
  active: 'border-[--color-accent-500] bg-[--color-accent-50]',
  timeLabelBase: 'text-[--text-size-sm] font-[--font-weight-medium] text-[--color-text-primary]',
  eventCountBase: 'text-[--text-size-xs] text-[--color-text-secondary] mt-[--spacing-xs]'
};

/**
 * Style manager for TimeSlot component
 */
export class TimeSlotStyleManager {
  /**
   * Get the CSS classes for the time slot container based on its state
   */
  static getTimeSlotClasses(
    available: boolean,
    selected: boolean,
    active: boolean,
    additionalClass: string = ''
  ): string {
    const classes = [
      defaultConfig.base,
      available ? defaultConfig.available : defaultConfig.unavailable,
      selected ? defaultConfig.selected : '',
      active ? defaultConfig.active : '',
      additionalClass
    ];
    
    return classes.filter(Boolean).join(' ');
  }
  
  /**
   * Get the CSS classes for the time label element
   */
  static getTimeLabelClasses(): string {
    return defaultConfig.timeLabelBase;
  }
  
  /**
   * Get the CSS classes for the event count element
   */
  static getEventCountClasses(): string {
    return defaultConfig.eventCountBase;
  }
}