export type PlaygroundCodeViewerProps = {
  code?: string;
  componentName?: string;
  props?: Record<string, any>;
  language?: string;
  theme?: 'light' | 'dark' | 'github-light' | 'github-dark';
  onCopySuccess?: () => void;
  onCopyError?: (error: unknown) => void;
  onDownloadSuccess?: () => void;
  onDownloadError?: (error: unknown) => void;
};
