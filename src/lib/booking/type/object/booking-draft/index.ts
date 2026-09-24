export type BookingDraft = {
	pickup: string;
	date: string;
	adults: number;
	/** Дети от 3 до 13 лет. Дети до 3 лет — отдельное поле `childrenUnder3`. */
	children: number;
	/** Пенсионеры (скидка). Необязательное поле — старые потребители типа его не знают. */
	seniors?: number;
	/** Дети до 3 лет. Необязательное поле — старые потребители типа его не знают. */
	childrenUnder3?: number;
	/** Дети/подростки 13-18 лет. Необязательное поле — старые потребители типа его не знают. */
	childrenTeen?: number;
	/** Id выбранных приключений (`Excursion.id` из travel-commerce) для аккордеона бронирования. */
	adventures?: string[];
	/** Выбранные варианты длительности тура в днях (значения из `DURATION_OPTIONS`, 3 — «3+»). Фильтр по каталогу, не параметр брони одного тура. */
	durationDays?: number[];
};
