export type BookingDraft = {
	pickup: string;
	date: string;
	adults: number;
	/** Дети от 2 до 13 лет. Младенцы до 2 лет — отдельное поле `childrenUnder2`. */
	children: number;
	/** Пенсионеры (скидка). Необязательное поле — старые потребители типа его не знают. */
	seniors?: number;
	/** Дети до 2 лет. Необязательное поле — старые потребители типа его не знают. */
	childrenUnder2?: number;
	/** Дети/подростки 13-18 лет. Необязательное поле — старые потребители типа его не знают. */
	childrenTeen?: number;
	/** Id выбранных приключений (`Excursion.id` из travel-commerce) для аккордеона бронирования. */
	adventures?: string[];
};
