export type FilterPanelLayout = 'force-directed' | 'hierarchical' | 'circular' | 'grid';

export type FilterChangePayload = {
	showObjects: boolean;
	showInterfaces: boolean;
	showUnions: boolean;
	showEnums: boolean;
	showScalars: boolean;
	showInputs: boolean;
	layout: string;
};

export interface FilterPanelProps {
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
