import {
	TABLE_ALIGNMENT_CLASSES,
	TABLE_CLASSES
} from '../classes/table';
import { cn } from '../utils/cn';

export class TableStyleManager {
	static getTableClasses(className = ''): string {
		return cn(...TABLE_CLASSES.table, className);
	}

	static getCaptionClasses(className = ''): string {
		return cn(...TABLE_CLASSES.caption, className);
	}

	static getHeaderClasses(className = ''): string {
		return cn(...TABLE_CLASSES.header, className);
	}

	static getBodyClasses(className = ''): string {
		return cn(...TABLE_CLASSES.body, className);
	}

	static getRowClasses(striped = false, active = false, className = ''): string {
		return cn(
			...(striped ? TABLE_CLASSES.row.striped : TABLE_CLASSES.row.normal),
			active && TABLE_CLASSES.row.active,
			className
		);
	}

	static getCellClasses(
		variant: 'header' | 'data' = 'data',
		align: 'left' | 'center' | 'right' = 'left',
		className = ''
	): string {
		return cn(
			...TABLE_CLASSES.cell.base,
			...(variant === 'header' ? TABLE_CLASSES.cell.header : TABLE_CLASSES.cell.data),
			...(TABLE_ALIGNMENT_CLASSES[align] ?? TABLE_ALIGNMENT_CLASSES.left),
			className
		);
	}
}
