

export interface SlotBulkOrderForm {
	products: {
	id: string;
	name: string;
	price: number;
	originalPrice?: number;
	thumbnail?: string;
	minOrder?: number;
	available?: number;
}[];
	initialItems?: {
	id: string;
	productId: string;
	quantity: number;
	price: number;
	note?: string;
}[];
	title?: string;
	description?: string;
	showTotal?: boolean;
	showNotes?: boolean;
	allowFileUpload?: boolean;
	class?: string;
	headerClass?: string;
	formClass?: string;
	itemClass?: string;
	actionsClass?: string;
	onOrderSubmit?: (items: {
	id: string;
	productId: string;
	quantity: number;
	price: number;
	note?: string;
}[]) => void;
	onItemsChange?: (items: {
	id: string;
	productId: string;
	quantity: number;
	price: number;
	note?: string;
}[]) => void;
	currency?: string;
	locale?: string;
}
