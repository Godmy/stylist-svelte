import type { TableSectionProps } from '$stylist/design-system/contracts';
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

