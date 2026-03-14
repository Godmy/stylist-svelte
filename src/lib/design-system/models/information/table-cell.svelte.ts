import type { TableCellProps } from '$stylist/design-system/contracts';
import { TableStyleManager } from '$stylist/design-system/styles/information/table';

export function createTableCellState(props: TableCellProps) {
    const variant = $derived(props.variant ?? 'data');
    const align = $derived((props.align ?? 'left') as 'left' | 'center' | 'right');
    const classes = $derived(TableStyleManager.getCellClasses(variant, align, props.class));

    return {
        get variant() {
            return variant;
        },
        get classes() {
            return classes;
        }
    };
}

export default createTableCellState;






