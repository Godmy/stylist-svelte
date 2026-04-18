/** Слот состояния / статуса элемента */
import type { StatusSeverity } from '$stylist/information/type/struct/status-severity';
import type { StatusState } from '$stylist/information/type/struct/status-state';

export interface SlotStatus {
	/** Строковый статус (для отображения) */
	status?: string;
	/** Семантическая серьёзность */
	severity?: StatusSeverity;
	/** Машинное состояние компонента */
	state?: StatusState;
}
