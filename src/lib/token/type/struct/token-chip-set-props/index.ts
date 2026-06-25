export type TokenChipSetProps = {
	title: string;
	tokens: readonly string[];
	value?: string;
	class?: string;
	dedupe?: boolean;
	onSelect?: (token: string) => void;
};
