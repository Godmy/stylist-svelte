import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export function createDownloadCardState(
  props: {
    variant?: TokenAppearance;
    class?: string;
    downloadUrl?: string;
  } & Record<string, unknown>
) {
  const variant = $derived(props.variant ?? 'primary');
  const cls = $derived([props.class || ''].filter(Boolean).join(' '));
  const downloadUrl = $derived(props.downloadUrl);

  return {
    get variant() {
      return variant;
    },
    get class() {
      return cls;
    },
    get downloadUrl() {
      return downloadUrl;
    }
  };
}

export default createDownloadCardState;
