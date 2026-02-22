/**
 * @file TeamMemberCard Types
 * @description Type definitions for TeamMemberCard component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 */

/**
 * Achievement interface for TeamMemberCard
 */
export interface IAchievement {
  /**
   * Title of the achievement
   */
  title: string;

  /**
   * Description of the achievement
   */
  description: string;
}

/**
 * Variant options for TeamMemberCard
 */
export type TeamMemberCardVariant = 'default' | 'featured';

/**
 * Props interface for TeamMemberCard component
 * Single Responsibility: Define the contract for TeamMemberCard component
 */
export interface ITeamMemberCardProps {
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
  achievements: IAchievement[];

  /**
   * Visual variant of the team member card
   * @default 'default'
   */
  variant?: TeamMemberCardVariant;

  /**
   * Additional CSS classes to apply to the component
   */
  class?: string;
}