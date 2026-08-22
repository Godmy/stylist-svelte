export interface PortfolioCell {
	current: number | null;
	added?: number;
	removed?: number;
}

export interface PortfolioEntry {
	id: number;
	name: string;
	new: PortfolioCell;
	plan: PortfolioCell;
	estimate: PortfolioCell;
	inProgress: PortfolioCell;
	test: PortfolioCell;
	acceptance: PortfolioCell;
	deferred: PortfolioCell;
	open: PortfolioCell;
	closed: PortfolioCell;
	percent: number | null;
}

export interface PortfolioSummaryData {
	new: PortfolioCell;
	plan: PortfolioCell;
	estimate: PortfolioCell;
	inProgress: PortfolioCell;
	test: PortfolioCell;
	acceptance: PortfolioCell;
	deferred: PortfolioCell;
	open: PortfolioCell;
	closed: PortfolioCell;
}

export interface PortfolioData {
	entries: PortfolioEntry[];
	summary: PortfolioSummaryData;
}

export class ObjectManagerPortfolio {
	static formatCurrent(value: number | null): string {
		return value !== null && value !== undefined ? String(value) : '';
	}

	static formatAdded(value: number | undefined): string {
		if (!value) return '';
		return `+${value}`;
	}

	static formatRemoved(value: number | undefined): string {
		if (!value) return '';
		return `−${value}`;
	}

	static hasAdded(cell: PortfolioCell): boolean {
		return !!cell.added;
	}

	static hasRemoved(cell: PortfolioCell): boolean {
		return !!cell.removed;
	}

	static hasDelta(cell: PortfolioCell): boolean {
		return ObjectManagerPortfolio.hasAdded(cell) || ObjectManagerPortfolio.hasRemoved(cell);
	}

	static isEmpty(cell: PortfolioCell): boolean {
		return (
			cell.current === null &&
			!cell.added &&
			!cell.removed
		);
	}
}
