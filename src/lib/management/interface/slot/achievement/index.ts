import type { TierContent } from '$stylist/architecture/type/enum/tier';

/**
 * @file TeamMemberCard Types
 * @description Type definitions for TeamMemberCard component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 */

/**
 * Achievement interface for TeamMemberCard
 */
export interface SlotAchievement {
  /**
   * Title of the achievement
   */
  title: string;

  /**
   * Description of the achievement
   */
  description: string;
}
