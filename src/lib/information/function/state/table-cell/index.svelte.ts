import type { TableCellRecipe as TableCellRecipe } from '$stylist/information/interface/recipe/table-cell';
import { ObjectManagerTable } from '$stylist/information/class/object-manager/table';
import { TableStyleManager } from '$stylist/information/class/style-manager/table';

export function createTableCellState(props: TableCellRecipe) {
    const variant = $derived(props.variant ?? 'data');
    const align = $derived((props.align ?? 'left') as 'left' | 'center' | 'right');
    const classes = $derived(
        TableStyleManager.getCellClasses(
            variant,
            align,
            typeof props.class === 'string' ? props.class : undefined
        )
    );
    const restProps = $derived(ObjectManagerTable.getCellRestProps(props));

    return {
        get variant() {
            return variant;
        },
        get classes() {
            return classes;
        },
        get restProps() {
            return restProps;
        }
    };
}

export default createTableCellState;






