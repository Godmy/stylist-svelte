import type { TableSectionProps } from '$stylist/design-system/types/information/table';
import { TableStyleManager } from '$stylist/design-system/styles/information/table';

export function createTableBodyState(props: TableSectionProps) {
    const classes = $derived(TableStyleManager.getBodyClasses(props.class));

    return {
        get classes() {
            return classes;
        }
    };
}

export default createTableBodyState;







