import type { MessageThreadProps } from '$stylist/design-system/props';
import { mergeClasses } from '$stylist/utils/classes';

export const createMessageThreadState = (props: MessageThreadProps) => {
	const hostClasses = $derived(
		mergeClasses(
			'flex flex-col h-full max-h-[600px] border rounded-lg overflow-hidden',
			props.class
		)
	);
	
	const headerClasses = $derived(
		mergeClasses(
			'px-4 py-3 border-b bg-gray-50'
		)
	);
	
	const containerClasses = $derived(
		mergeClasses(
			'flex-1 overflow-y-auto p-4 bg-white'
		)
	);
	
	const messageContainerClasses = $derived(
		mergeClasses(
			'flex flex-col space-y-4'
		)
	);
	
	const variantClass = $derived(
		props.variant ? `variant-${props.variant}` : ''
	);
	
	const loadingClasses = $derived(
		mergeClasses(
			'flex items-center justify-center h-32'
		)
	);
	
	const spinnerClasses = $derived(
		mergeClasses(
			'animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'
		)
	);

	return {
		get hostClasses() {
			return hostClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get containerClasses() {
			return containerClasses;
		},
		get messageContainerClasses() {
			return messageContainerClasses;
		},
		get variantClass() {
			return variantClass;
		},
		get loadingClasses() {
			return loadingClasses;
		},
		get spinnerClasses() {
			return spinnerClasses;
		},
		get title() {
			return props.title;
		},
		get messages() {
			return props.messages ?? [];
		},
		get loading() {
			return props.loading ?? false;
		},
		get messageVariant() {
			return props.messageVariant;
		}
	};
};
