import { mergeClasses } from '$stylist/utils/classes';
﻿import type { DarkModeToggleProps } from '$stylist/design-system/props/interaction/toggles';

export const createDarkModeToggleState = (props: DarkModeToggleProps) => {
	const size = props.size ?? 'md';
	const disabled = props.disabled ?? false;
	const darkMode = props.darkMode ?? false;

	const classes = mergeClasses(
		'inline-flex items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700',
		disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
		props.class
	);

	return {
		size,
		disabled,
		darkMode,
		classes
	};
};



export default createDarkModeToggleState;



