import type { TierContent } from '$stylist/architecture/type/enum/tier';
import type { SlotAchievement } from '$stylist/management/interface/slot/achievement';

/**
 * Variant options for TeamMemberCard
 */
/**
 * Props interface for TeamMemberCard component
 * Single Responsibility: Define the contract for TeamMemberCard component
 */
export interface SlotTeamMemberCard {
  /**
   * Name of the team member
   */
  name: string;

  /**
   * Role of the team member
   */
  role: string;

  /**
   * AI model information (e.g. "Claude Sonnet 4.5")
   */
  model: string;

  /**
   * URL for the team member's avatar
   */
  avatar: string;

  /**
   * Array of badge labels to display
   */
  badges: string[];

  /**
   * Description of the team member's expertise
   */
  description: string;

  /**
   * Array of achievements
   */
  achievements: SlotAchievement[];

  /**
   * Visual variant of the team member card
   * @default 'default'
   */
  variant?: TierContent;

  /**
   * Additional CSS classes to apply to the component
   */
  class?: string;
}
