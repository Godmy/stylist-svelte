import type { TableSectionProps } from '$stylist/design-system/contracts';
import { TableStyleManager } from '$stylist/design-system/styles/information/table';

export function createTableHeaderState(props: TableSectionProps) {
    const classes = $derived(TableStyleManager.getHeaderClasses(props.class));

    return {
        get classes() {
            return classes;
        }
    };
}

export default createTableHeaderState;



