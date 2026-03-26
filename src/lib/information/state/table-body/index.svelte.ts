import type { TableSectionProps } from '$stylist/information/interface/table';
import { TableStyleManager } from '$stylist/information/class/style-manager/table';

export function createTableBodyState(props: TableSectionProps) {
    const classes = $derived(TableStyleManager.getBodyClasses(props.class));

    return {
        get classes() {
            return classes;
        }
    };
}

export default createTableBodyState;








