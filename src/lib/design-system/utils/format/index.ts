/**
 * Утилиты форматирования значений
 * Централизованные функции для форматирования чисел, валют, процентов и дат
 */

/**
 * Форматирует анимированное числовое значение
 * @param value - Число для форматирования
 * @param options - Опции форматирования
 * @returns Отформатированная строка
 */
export function formatAnimatedValue(
	value: number | null | undefined,
	options: { format?: 'number' | 'percent' | 'currency'; separator?: string; decimals?: number } = {}
): string {
	const { format = 'number', separator = ',', decimals = 0 } = options;
	const safeValue = Number.isFinite(value) ? (value as number) : 0;

	switch (format) {
		case 'percent':
			return `${(safeValue * 100).toFixed(decimals)}%`;
		case 'currency':
			return `$${safeValue.toLocaleString('en-US', {
				minimumFractionDigits: decimals,
				maximumFractionDigits: decimals
			})}`;
		default:
			return safeValue.toLocaleString('en-US', {
				useGrouping: true,
				minimumFractionDigits: decimals,
				maximumFractionDigits: decimals
			});
	}
}

/**
 * Форматирует числовое значение для NumberFlow компонента
 * @param value - Число для форматирования
 * @param locales - Локаль для форматирования
 * @param format - Опции Intl.NumberFormat
 * @returns Отформатированная строка
 */
export function formatNumberFlowValue(
	value: number,
	locales: string | string[] = 'en-US',
	format?: Intl.NumberFormatOptions
): string {
	return new Intl.NumberFormat(locales, format).format(value);
}

/**
 * Форматирует дату в читаемый формат
 * @param date - Дата для форматирования
 * @param options - Опции форматирования
 * @returns Отформатированная строка даты
 */
export function formatDate(
	date: Date | string,
	options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	}
): string {
	const dateObj = typeof date === 'string' ? new Date(date) : date;
	return dateObj.toLocaleDateString('en-US', options);
}

/**
 * Форматирует время
 * @param date - Дата для форматирования времени
 * @param options - Опции форматирования времени
 * @returns Отформатированная строка времени
 */
export function formatTime(
	date: Date | string,
	options: Intl.DateTimeFormatOptions = {
		hour: '2-digit',
		minute: '2-digit'
	}
): string {
	const dateObj = typeof date === 'string' ? new Date(date) : date;
	return dateObj.toLocaleTimeString('en-US', options);
}

/**
 * Форматирует дату и время вместе
 * @param date - Дата для форматирования
 * @param options - Опции форматирования
 * @returns Отформатированная строка даты и времени
 */
export function formatDateTime(
	date: Date | string,
	options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	}
): string {
	const dateObj = typeof date === 'string' ? new Date(date) : date;
	return dateObj.toLocaleString('en-US', options);
}

/**
 * Сокращает большие числа (K, M, B)
 * @param num - Число для сокращения
 * @param decimals - Количество знаков после запятой
 * @returns Сокращённая строка
 */
export function formatCompactNumber(num: number, decimals: number = 1): string {
	const formatter = Intl.NumberFormat('en-US', {
		notation: 'compact',
		compactDisplay: 'short',
		maximumFractionDigits: decimals
	});
	return formatter.format(num);
}
