import { STATE_CLASSES } from '$stylist/design-system/tokens/classes';

import type { SemanticVariant, NeutralVariant, CommonSize } from './variants';

// Общие типы для компонентов тегов
export type BaseTagVariant = SemanticVariant | NeutralVariant;
export type BaseTagSize = CommonSize;

// Базовый интерфейс для компонентов тегов

// Функции для получения классов
const BASE_CLASSES = 'inline-flex items-center font-medium';

const SIZE_CLASSES: Record<CommonSize, string> = {
	sm: 'text-xs',
	md: 'text-sm',
	lg: 'text-base'
};

const VARIANT_CLASSES: Record<BaseTagVariant, string> = {
	primary: 'bg-indigo-100 text-indigo-800 border-indigo-200',
	secondary: 'bg-gray-100 text-gray-800 border-gray-200',
	success: 'bg-green-100 text-green-800 border-green-200',
	warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
	danger: 'bg-red-100 text-red-800 border-red-200',
	info: 'bg-teal-100 text-teal-800 border-teal-200',
	neutral: 'bg-gray-100 text-gray-700 border-gray-200',
	default: 'bg-gray-100 text-gray-700 border-gray-200'
};

// Функции для закрывающей кнопки
const BASE_CLOSE_BUTTON_CLASSES =
	'ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2';

const CLOSE_BUTTON_VARIANT_CLASSES: Record<BaseTagVariant, string> = {
	primary: 'focus:ring-indigo-500 hover:bg-indigo-200',
	secondary: 'focus:ring-gray-500 hover:bg-gray-200',
	success: 'focus:ring-green-500 hover:bg-green-200',
	warning: 'focus:ring-yellow-500 hover:bg-yellow-200',
	danger: 'focus:ring-red-500 hover:bg-red-200',
	info: 'focus:ring-teal-500 hover:bg-teal-200',
	neutral: 'focus:ring-gray-500 hover:bg-gray-200',
	default: 'focus:ring-gray-500 hover:bg-gray-200'
};

const CLOSE_BUTTON_SIZE_CLASSES: Record<CommonSize, string> = {
	sm: 'w-3 h-3 ml-1',
	md: 'w-3.5 h-3.5 ml-1',
	lg: 'w-4 h-4 ml-1'
};
