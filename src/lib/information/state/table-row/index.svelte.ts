import type { TableRowProps } from '$stylist/information/interface/table';
import { TableStyleManager } from '$stylist/information/class/style-manager/table';

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







