import type { TableProps } from '$stylist/design-system/contracts';
import { TableStyleManager } from '$stylist/design-system/styles/information/table';

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






