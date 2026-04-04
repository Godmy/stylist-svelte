import type { TableSectionRecipe as TableSectionRecipe } from '$stylist/information/interface/recipe/table-section';
import { ObjectManagerTable } from '$stylist/information/class/object-manager/table';
import { TableStyleManager } from '$stylist/information/class/style-manager/table';

export function createTableBodyState(props: TableSectionRecipe) {
    const classes = $derived(
        TableStyleManager.getBodyClasses(typeof props.class === 'string' ? props.class : undefined)
    );
    const restProps = $derived(ObjectManagerTable.getSectionRestProps(props));

    return {
        get classes() {
            return classes;
        },
        get restProps() {
            return restProps;
        }
    };
}

export default createTableBodyState;







