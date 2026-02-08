export const getTabsClasses = (disabled: boolean, className = '') => {
	const classes = ['inline-flex items-center gap-1'];
	if (disabled) classes.push('opacity-50 pointer-events-none');
	if (className) classes.push(className);
	return classes.join(' ');
};

export const getTabClasses = (
	variant: string,
	size: string,
	isSelected: boolean,
	isDisabled: boolean,
	className = ''
) => {
	const variantClass =
		variant === 'primary'
			? 'text-[--color-primary-700]'
			: variant === 'secondary'
				? 'text-[--color-text-secondary]'
				: 'text-[--color-text-primary]';
	const sizeClass =
		size === 'sm'
			? 'px-2 py-1 text-sm'
			: size === 'lg'
				? 'px-4 py-2 text-base'
				: 'px-3 py-1.5 text-sm';
	const stateClass = isSelected ? 'border-b-2 border-[--color-primary-500]' : 'opacity-80';
	const disabledClass = isDisabled ? 'opacity-50 cursor-not-allowed' : '';
	return [sizeClass, variantClass, stateClass, disabledClass, className].filter(Boolean).join(' ');
};

export const getTabListClasses = (disabled: boolean, className = '') =>
	['flex items-center gap-1', disabled ? 'opacity-50' : '', className].filter(Boolean).join(' ');

export const getTabPanelClasses = (isSelected: boolean, isDisabled: boolean, className = '') =>
	[isSelected ? 'block' : 'hidden', isDisabled ? 'opacity-50' : '', className]
		.filter(Boolean)
		.join(' ');

export const getTabPanelsClasses = (disabled: boolean, className = '') =>
	['mt-4', disabled ? 'opacity-50' : '', className].filter(Boolean).join(' ');

export const getTabIndicatorClasses = (color: string, isDisabled: boolean, className = '') => {
	const colorClass =
		color === 'secondary'
			? 'bg-[--color-secondary-500]'
			: color === 'success'
				? 'bg-[--color-success-500]'
				: color === 'warning'
					? 'bg-[--color-warning-500]'
					: color === 'danger'
						? 'bg-[--color-danger-500]'
						: 'bg-[--color-primary-500]';
	return [
		'absolute bottom-0 h-0.5 transition-all',
		colorClass,
		isDisabled ? 'opacity-50' : '',
		className
	]
		.filter(Boolean)
		.join(' ');
};

export const getTabIndicatorStyle = (width: string, left: string) =>
	`width: ${width}; left: ${left};`;
