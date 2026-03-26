import type { TableSectionProps } from '$stylist/information/interface/table';
import { TableStyleManager } from '$stylist/information/class/style-manager/table';

export function createTableHeaderState(props: TableSectionProps) {
    const classes = $derived(TableStyleManager.getHeaderClasses(props.class));

    return {
        get classes() {
            return classes;
        }
    };
}

export default createTableHeaderState;










