export type ProductDemoProps = {
	title?: string;
	description?: string;
	demoContent: Snippet;
	features?: string[];
	onDemo?: () => void;
	class?: string;
}
