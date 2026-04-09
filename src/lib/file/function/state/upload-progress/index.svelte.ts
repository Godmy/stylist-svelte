export interface UploadProgressStateProps {
  variant?: string;
  class?: string;
}

export function createUploadProgressState(props: UploadProgressStateProps) {
  const variant = props.variant ?? 'default';
  const classes = [
    'c-upload-progress',
    typeof props.class === 'string' ? props.class : '',
  ].filter(Boolean).join(' ');

  return {
    variant,
    classes,
  };
}

export default createUploadProgressState;
