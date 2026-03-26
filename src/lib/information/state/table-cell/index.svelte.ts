import type { TableCellProps } from '$stylist/information/interface/table';
import { TableStyleManager } from '$stylist/information/class/style-manager/table';

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







