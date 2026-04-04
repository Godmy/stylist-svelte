/** Слот состояния / статуса элемента */
export type StatusSeverity = 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export type StatusState = 'idle' | 'active' | 'loading' | 'error' | 'success' | 'disabled';

export interface IStatusSlot {
	/** Строковый статус (для отображения) */
	status?: string;
	/** Семантическая серьёзность */
	severity?: StatusSeverity;
	/** Машинное состояние компонента */
	state?: StatusState;
}
