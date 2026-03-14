import type { TableRowProps } from '$stylist/design-system/contracts';
import { TableStyleManager } from '$stylist/design-system';

export function createTableRowState(props: TableRowProps) {
    const striped = $derived(props.striped ?? false);
    const active = $derived(props.active ?? false);
    const classes = $derived(TableStyleManager.getRowClasses(striped, active, props.class));

    return {
        get classes() {
            return classes;
        }
    };
}

export default createTableRowState;






