import type {
	TableRecipe as TableRecipe
} from '$stylist/information/interface/recipe/table';
import type {
	TableSectionRecipe as TableSectionRecipe
} from '$stylist/information/interface/recipe/table-section';
import type {
	TableRowRecipe as TableRowRecipe
} from '$stylist/information/interface/recipe/table-row';
import type {
	TableCellRecipe as TableCellRecipe
} from '$stylist/information/interface/recipe/table-cell';

export class ObjectManagerTable {
	static getTableRestProps(props: TableRecipe) {
		const {
			class: _class,
			content: _content,
			caption: _caption,
			striped: _striped,
			bordered: _bordered,
			hoverable: _hoverable,
			...rest
		} = props;

		return rest;
	}

	static getSectionRestProps(props: TableSectionRecipe) {
		const { class: _class, content: _content, ...rest } = props;
		return rest;
	}

	static getRowRestProps(props: TableRowRecipe) {
		const {
			class: _class,
			content: _content,
			striped: _striped,
			active: _active,
			...rest
		} = props;

		return rest;
	}

	static getCellRestProps(props: TableCellRecipe) {
		const { align: _align, class: _class, content: _content, ...rest } = props;
		return rest;
	}
}
