/**
 * Indicator-related types and constants
 * Comprehensive set of indicators used across the design system
 */

import type { ColorVariant, NeutralVariant, DefaultVariants } from './variants';

/**
 * Counter variants - for numeric counters and badges
 */
export type CounterVariant = DefaultVariants | 'gray';

/**
 * Status indicators for online presence and availability
 */
export const PRESENCE_STATUSES = [
	'online',   // Active and available
	'offline',  // Not available
	'away',     // Temporarily unavailable
	'busy'      // Do not disturb
] as const;

export type PresenceStatus = (typeof PRESENCE_STATUSES)[number];

/**
 * Status indicators for status indicators (used for status dots and similar elements)
 */
export type IndicatorStatus = PresenceStatus;

/**
 * Message delivery status indicators
 */
export const MESSAGE_STATUSES = [
	'sent',      // Message sent successfully
	'delivered', // Message delivered to recipient
	'read'       // Message read by recipient
] as const;

export type MessageStatusType = (typeof MESSAGE_STATUSES)[number];

/**
 * Status indicator label statuses - for status indicators with labels
 */
export type StatusIndicatorLabelStatus = DefaultVariants | 'custom';

/**
 * Marker types for list items and navigation elements
 */
export const MARKER_TYPES = [
	'dot',    // Simple dot marker
	'number', // Numeric marker
	'letter', // Alphabetic marker
	'check',  // Checkmark indicator
	'x',      // Cross/error indicator
	'arrow',  // Arrow direction indicator
	'star'    // Star rating indicator
] as const;

export type MarkerType = (typeof MARKER_TYPES)[number];

/**
 * Activity status indicators for system and user activity
 */
export const ACTIVITY_STATUSES = [
	'active',    // Currently active
	'inactive',  // Not currently active
	'pending',   // Waiting for action
	'paused',    // Temporarily stopped
	'complete'   // Finished/completed
] as const;

export type ActivityStatus = (typeof ACTIVITY_STATUSES)[number];

/**
 * Loading status indicators
 */
export const LOADING_STATUSES = [
	'idle',      // Not loading
	'loading',   // Currently loading
	'success',   // Load successful
	'error'      // Load failed
] as const;

export type LoadingStatus = (typeof LOADING_STATUSES)[number];

/**
 * Progress indicator types
 */
export const PROGRESS_TYPES = [
	'determinate', // Progress with known percentage
	'indeterminate' // Progress without known percentage
] as const;

export type ProgressType = (typeof PROGRESS_TYPES)[number];

/**
 * Notification indicator types
 */
export const NOTIFICATION_TYPES = [
	'default', // Standard notification
	'success', // Success notification
	'warning', // Warning notification
	'error',   // Error notification
	'info'     // Informational notification
] as const;

export type NotificationType = (typeof NOTIFICATION_TYPES)[number];

/**
 * Severity levels for status indicators
 */
export const SEVERITY_LEVELS = [
	'low',     // Low severity
	'medium',  // Medium severity
	'high',    // High severity
	'critical' // Critical severity
] as const;

export type SeverityLevel = (typeof SEVERITY_LEVELS)[number];