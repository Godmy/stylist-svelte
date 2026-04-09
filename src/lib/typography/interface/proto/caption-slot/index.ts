/** Слот вспомогательного текста — описание, подзаголовок, подсказка */
export interface ICaptionSlot {
	/** Краткое описание под основным контентом */
	caption?: string;
	/** Развёрнутое описание */
	description?: string;
	/** Подзаголовок */
	subtitle?: string;
	/** Текст-подсказка под полем ввода */
	helperText?: string;
}
