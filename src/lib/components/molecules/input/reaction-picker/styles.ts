import type { IReactionPickerStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing ReactionPicker styling logic
 * Uses CSS variables from the theme system
 */
export class ReactionPickerStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'reaction-picker-base flex space-x-2 p-2 border rounded-lg';

    return `${baseClasses} ${className}`;
  }

  static getReactionClasses(): string {
    return 'reaction-item text-xl cursor-pointer hover:bg-gray-100 rounded-full p-2 transition-colors';
  }

  static getSelectedClass(isSelected: boolean): string {
    return isSelected ? 'reaction-selected bg-blue-100 border border-blue-300' : '';
  }

  static getAllClasses(className: string, isSelected: boolean): string {
    const baseClasses = this.getBaseClasses(className);
    const reactionClasses = this.getReactionClasses();
    const selectedClass = this.getSelectedClass(isSelected);

    return `${baseClasses} ${reactionClasses} ${selectedClass}`;
  }
}