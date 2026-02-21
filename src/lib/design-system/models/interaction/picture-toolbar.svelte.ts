import { mergeClasses } from '$stylist/utils/classes';
﻿import { cn } from '$stylist/utils/classes';
import type { PictureToolbarProps } from '$stylist/design-system/props';

// Определение состояния для PictureToolbar
export function createPictureToolbarState(props: PictureToolbarProps) {
	const classes = $derived(mergeClasses('picture-toolbar flex space-x-2 p-2 bg-gray-100 rounded', props.class));

	const getButtonClasses = (isActive: boolean) => {
		return mergeClasses(
			'flex items-center justify-center p-2 rounded border transition-colors',
			isActive
				? 'bg-blue-500 text-white border-blue-500'
				: 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
		);
	};

	const iconClasses = $derived('w-4 h-4');

	return {
		get classes() {
			return classes;
		},
		get tools() {
			return props.tools;
		},
		get activeTool() {
			return props.activeTool;
		},
		get onToolSelect() {
			return props.onToolSelect;
		},
		getButtonClasses,
		get iconClasses() {
			return iconClasses;
		}
	};
}

export default createPictureToolbarState;


