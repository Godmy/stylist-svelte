/** Слот состояния / статуса элемента */
import type { StatusSeverity } from '$stylist/information/interface/proto/status-slot-severity';
import type { StatusState } from '$stylist/information/interface/proto/status-slot-state';

export interface IStatusSlot {
	/** Строковый статус (для отображения) */
	status?: string;
	/** Семантическая серьёзность */
	severity?: StatusSeverity;
	/** Машинное состояние компонента */
	state?: StatusState;
}
