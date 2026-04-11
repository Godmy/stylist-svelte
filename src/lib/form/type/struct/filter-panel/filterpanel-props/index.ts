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
}
