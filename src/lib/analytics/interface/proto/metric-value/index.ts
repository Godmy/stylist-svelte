/** Атомарные значения метрики без UI-обвязки */
export interface IMetricValue {
	value?: string | number;
	currentValue?: number;
	targetValue?: number;
	max?: number;
	percentage?: number;
	unit?: string;
}
