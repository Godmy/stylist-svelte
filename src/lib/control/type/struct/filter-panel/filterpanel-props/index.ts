import type { FilterChangePayload } from '$stylist/control/type/struct/filter-panel/filterchangepayload';
import type { FilterPanelLayout } from '$stylist/token/type/alias/filter-panel-layout';

export type FilterPanelProps = {
	showObjects?: boolean;
	showInterfaces?: boolean;
	showUnions?: boolean;
	showEnums?: boolean;
	showScalars?: boolean;
	showInputs?: boolean;
	layout?: FilterPanelLayout;
	onFilterChange?: (payload: FilterChangePayload) => void;
	onReset?: () => void;
};

