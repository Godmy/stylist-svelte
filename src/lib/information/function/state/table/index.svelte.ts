import type { TableRecipe as TableRecipe } from '$stylist/information/interface/recipe/table';
import { ObjectManagerTable } from '$stylist/information/class/object-manager/table';
import { TableStyleManager } from '$stylist/information/class/style-manager/table';

export function createTableState(props: TableRecipe) {
    const classes = $derived(
        TableStyleManager.getTableClasses(typeof props.class === 'string' ? props.class : undefined)
    );
    const captionClasses = $derived(TableStyleManager.getCaptionClasses());
    const restProps = $derived(ObjectManagerTable.getTableRestProps(props));

    return {
        get classes() {
            return classes;
        },
        get captionClasses() {
            return captionClasses;
        },
        get restProps() {
            return restProps;
        }
    };
}

export default createTableState;






