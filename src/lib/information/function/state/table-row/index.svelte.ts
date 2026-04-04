import type { TableRowRecipe as TableRowRecipe } from '$stylist/information/interface/recipe/table-row';
import { ObjectManagerTable } from '$stylist/information/class/object-manager/table';
import { TableStyleManager } from '$stylist/information/class/style-manager/table';

export function createTableRowState(props: TableRowRecipe) {
    const striped = $derived(props.striped ?? false);
    const active = $derived(props.active ?? false);
    const classes = $derived(
        TableStyleManager.getRowClasses(
            striped,
            active,
            typeof props.class === 'string' ? props.class : undefined
        )
    );
    const restProps = $derived(ObjectManagerTable.getRowRestProps(props));

    return {
        get classes() {
            return classes;
        },
        get restProps() {
            return restProps;
        }
    };
}

export default createTableRowState;






