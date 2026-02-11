import { cn } from '../utils/classnames';

export const resolveCountryFlagEmoji = (code = '') => {
	const value = code.trim().toUpperCase();
	if (!/^[A-Z]{2}$/.test(value)) return '';
	return String.fromCodePoint(...value.split('').map((c) => 127397 + c.charCodeAt(0)));
};
export const getCountryFlagClasses = (className = '') =>
	cn('inline-flex items-center justify-center', className);
export const getCountryFlagFallbackClasses = (className = '') =>
	cn('inline-flex items-center justify-center rounded bg-gray-100 text-gray-700', className);
export const getCountryFlagStyle = (size: number) =>
	`width: ${size}px; height: ${size}px; font-size: ${size}px; line-height: ${size}px;`;
