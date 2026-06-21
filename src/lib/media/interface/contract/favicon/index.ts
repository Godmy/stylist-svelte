export interface ContractFavicon {
	/** Size in pixels */
	size?: number;
	/** Favicon URL */
	url?: string;
	/** Slot content (fallback) */
	/** Additional CSS class */
	class?: string;
	/** Error state */
	error?: boolean;
	/** On error callback */
	onError?: () => void;
}
