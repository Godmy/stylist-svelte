import type { TableProps } from '$stylist/information/interface/table';
import { TableStyleManager } from '$stylist/information/class/style-manager/table';

export function createTableState(props: TableProps) {
    const classes = $derived(TableStyleManager.getTableClasses(props.class));
    const captionClasses = $derived(TableStyleManager.getCaptionClasses());

    return {
        get classes() {
            return classes;
        },
        get captionClasses() {
            return captionClasses;
        }
    };
}

export default createTableState;







