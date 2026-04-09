/** Слот текстовой метки — заголовок, плейсхолдер, имя */
export interface ILabelSlot {
	/** Основная текстовая метка */
	label?: string;
	/** Подсказка-плейсхолдер (для инпутов) */
	placeholder?: string;
	/** HTML-заголовок (title-атрибут) */
	title?: string;
	/** Aria-метка для доступности */
	ariaLabel?: string;
}
