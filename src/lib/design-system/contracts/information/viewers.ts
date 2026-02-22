import type { HTMLAttributes } from 'svelte/elements';

/**
 * Response Viewer Status Types
 */
export type ResponseViewerStatus = 'success' | 'error' | 'loading' | 'info';

/**
 * Response Viewer Component Props
 * Used for displaying API responses with syntax highlighting and actions
 */
// Re-export from interaction-feedback to avoid duplicates
export type { ResponseViewerProps } from '../interaction/interaction-feedback';

/**
 * Document Preview Format Types
 */
export type DocumentPreviewFormat = 'json' | 'xml' | 'text' | 'html';

/**
 * Document Preview Component Props
 * Used for displaying and editing various document formats
 */
// Re-export from interaction-forms to avoid duplicates
export type { DocumentPreviewProps } from '../interaction/interaction-forms';
