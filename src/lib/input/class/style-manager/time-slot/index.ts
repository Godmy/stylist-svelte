import { TIME_SLOT_DEFAULT_CONFIG as defaultConfig } from '$stylist/input/const/map/time-slot-default-config';
import type { ITimeSlotStyleConfig } from '$stylist/input/type/interface/time-slot-style-config';







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




