export interface SlotOrderConfirmationEvents {
	onDownloadInvoice?: () => void;
	onShareOrder?: () => void;
	onContinueShopping?: () => void;
	onTrackOrder?: () => void;
}
