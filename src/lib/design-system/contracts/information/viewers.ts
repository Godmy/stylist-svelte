import type { HTMLAttributes } from 'svelte/elements';
import type { ResponseViewerStatus, DocumentPreviewFormat } from '$stylist/design-system/tokens/architecture/response-viewers';

/**
 * Response Viewer Status Types
 */
/**
 * Response Viewer Component Props
 * Used for displaying API responses with syntax highlighting and actions
 */
// Re-export from interaction-feedback to avoid duplicates
export type { ResponseViewerProps } from '../interaction/interaction-feedback';

/**
 * Document Preview Format Types
 */
/**
 * Document Preview Component Props
 * Used for displaying and editing various document formats
 */
// Re-export from interaction-forms to avoid duplicates
export type { DocumentPreviewProps } from '../interaction/interaction-forms';

