/**
 * @file TeamMemberCard Style Manager
 * @description Style management for TeamMemberCard component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 *
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles styling logic for TeamMemberCard
 */

/**
 * Style manager for TeamMemberCard component
 * Manages all class names and styling for the TeamMemberCard molecule
 */
export class TeamMemberCardStyleManager {
  /**
   * Gets the base classes for the TeamMemberCard component
   * @param variant - Visual variant of the team member card
   * @param className - Additional CSS classes to append
   * @returns Combined string of base and additional classes
   */
  static getBaseClasses(variant: 'default' | 'featured' = 'default', className?: string): string {
    const baseClasses = 'team-member-card bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700';

    const variantClasses = this.getVariantClasses(variant);

    const allClasses = `${baseClasses} ${variantClasses}`;
    return className ? `${allClasses} ${className}` : allClasses;
  }

  /**
   * Gets the variant-specific classes for the TeamMemberCard component
   * @param variant - Visual variant of the team member card
   * @returns Variant-specific classes
   */
  static getVariantClasses(variant: 'default' | 'featured'): string {
    switch (variant) {
      case 'featured':
        return 'ring-2 ring-blue-500 dark:ring-blue-400 transform scale-105';
      case 'default':
      default:
        return '';
    }
  }

  /**
   * Gets the header classes for the TeamMemberCard component
   * @returns Header classes
   */
  static getHeaderClasses(): string {
    return 'p-6 pb-4';
  }

  /**
   * Gets the avatar container classes for the TeamMemberCard component
   * @returns Avatar container classes
   */
  static getAvatarContainerClasses(): string {
    return 'flex items-center mb-4';
  }

  /**
   * Gets the avatar classes for the TeamMemberCard component
   * @returns Avatar classes
   */
  static getAvatarClasses(): string {
    return 'w-16 h-16 rounded-full mr-4 object-cover';
  }

  /**
   * Gets the info container classes for the TeamMemberCard component
   * @returns Info container classes
   */
  static getInfoContainerClasses(): string {
    return 'flex-1 min-w-0';
  }

  /**
   * Gets the name classes for the TeamMemberCard component
   * @returns Name classes
   */
  static getNameClasses(): string {
    return 'text-lg font-bold text-gray-900 dark:text-white truncate';
  }

  /**
   * Gets the role classes for the TeamMemberCard component
   * @returns Role classes
   */
  static getRoleClasses(): string {
    return 'text-sm text-gray-500 dark:text-gray-400 truncate';
  }

  /**
   * Gets the model classes for the TeamMemberCard component
   * @returns Model classes
   */
  static getModelClasses(): string {
    return 'text-xs text-gray-400 dark:text-gray-500 mt-1 truncate';
  }

  /**
   * Gets the badge container classes for the TeamMemberCard component
   * @returns Badge container classes
   */
  static getBadgeContainerClasses(): string {
    return 'mt-3 flex flex-wrap gap-2';
  }

  /**
   * Gets the description classes for the TeamMemberCard component
   * @returns Description classes
   */
  static getDescriptionClasses(): string {
    return 'px-6 pt-2 pb-4 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-700';
  }

  /**
   * Gets the achievements container classes for the TeamMemberCard component
   * @returns Achievements container classes
   */
  static getAchievementsContainerClasses(): string {
    return 'p-6 pt-4';
  }

  /**
   * Gets the achievements title classes for the TeamMemberCard component
   * @returns Achievements title classes
   */
  static getAchievementsTitleClasses(): string {
    return 'text-sm font-semibold text-gray-900 dark:text-white mb-2';
  }

  /**
   * Gets the achievement item classes for the TeamMemberCard component
   * @returns Achievement item classes
   */
  static getAchievementItemClasses(): string {
    return 'mb-2 last:mb-0';
  }

  /**
   * Gets the achievement title classes for the TeamMemberCard component
   * @returns Achievement title classes
   */
  static getAchievementTitleClasses(): string {
    return 'font-medium text-gray-900 dark:text-white text-sm';
  }

  /**
   * Gets the achievement description classes for the TeamMemberCard component
   * @returns Achievement description classes
   */
  static getAchievementDescriptionClasses(): string {
    return 'text-xs text-gray-500 dark:text-gray-400 mt-1';
  }
}