export interface CardData {
	id: string;
	title: string;
	description?: string;
	content?: any;
	status?: string;
	tags?: string[];
	dueDate?: Date;
	assignedTo?: string;
}

export interface DraggableCardProps {
	data: CardData;
	class?: string;
	contentClass?: string;
	headerClass?: string;
	bodyClass?: string;
	footerClass?: string;
	disabled?: boolean;
	draggable?: boolean;
	showHandle?: boolean;
	showMenu?: boolean;
	variant?: 'default' | 'minimal' | 'compact';
}

export class ObjectManagerDraggableCard {
	/**
	 * Нормализует данные карточки, обеспечивая значения по умолчанию
	 */
	static normalizeData(data: CardData): CardData {
		return {
			id: data.id,
			title: data.title?.trim() ?? '',
			description: data.description?.trim(),
			content: data.content,
			status: data.status ?? 'default',
			tags: data.tags ?? [],
			dueDate: data.dueDate,
			assignedTo: data.assignedTo
		};
	}

	/**
	 * Форматирует дату для отображения
	 */
	static formatDueDate(dueDate?: Date): string | null {
		if (!dueDate) return null;
		const date = dueDate instanceof Date ? dueDate : new Date(dueDate);
		if (isNaN(date.getTime())) return null;
		return date.toLocaleDateString();
	}

	/**
	 * Проверяет, есть ли у карточки метаданные (дата или назначенный)
	 */
	static hasMetadata(data: CardData): boolean {
		return !!(data.dueDate || data.assignedTo);
	}

	/**
	 * Проверяет, есть ли у карточки теги
	 */
	static hasTags(data: CardData): boolean {
		return !!(data.tags && data.tags.length > 0);
	}

	/**
	 * Определяет, нужно ли показывать handle
	 */
	static shouldShowHandle(showHandle: boolean, draggable: boolean, disabled: boolean, variant: string): boolean {
		return showHandle && draggable && !disabled && variant !== 'compact';
	}

	/**
	 * Определяет, нужно ли показывать меню
	 */
	static shouldShowMenu(showMenu: boolean, disabled: boolean): boolean {
		return showMenu && !disabled;
	}

	/**
	 * Получает класс variant
	 */
	static getVariantClass(variant?: string): string {
		switch (variant) {
			case 'minimal':
				return 'minimal';
			case 'compact':
				return 'compact';
			default:
				return 'default';
		}
	}

	/**
	 * Создаёт drag data для передачи при drag-and-drop
	 */
	static createDragData(data: CardData): string {
		return JSON.stringify({
			id: data.id,
			type: 'card',
			title: data.title
		});
	}

	/**
	 * Парсит drag data из drag-and-drop события
	 */
	static parseDragData(data: string): { id: string; type: string; title: string } | null {
		try {
			return JSON.parse(data);
		} catch {
			return null;
		}
	}
}
