export class CodeEditorStyleManager {
	static root(className: string): string {
		return `border rounded-lg overflow-hidden ${className}`.trim();
	}

	static button(): string {
		return 'px-2 py-1 text-xs border rounded hover:bg-gray-100 dark:hover:bg-gray-700';
	}
}
