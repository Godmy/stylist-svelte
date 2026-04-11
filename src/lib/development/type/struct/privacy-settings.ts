export type Setting = {
	id: string;
	label: string;
	description: string;
	enabled: boolean;
};

export type Props = {
	settings: Setting[];
	onSave?: () => void;
	class?: string;
};
