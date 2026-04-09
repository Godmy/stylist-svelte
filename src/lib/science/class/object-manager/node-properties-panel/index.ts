import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { LiteGraphNodeProperty } from '$stylist/science/interface/recipe/litegraph-node';
import type { NodePropertiesPanelRecipe as NodePropertiesPanelProps } from '$stylist/science/interface/recipe/node-properties-panel';

export class ObjectManagerNodePropertiesPanel {
	static getRestProps(props: NodePropertiesPanelProps) {
		const {
			class: _class,
			id: _id,
			nodeId: _nodeId,
			title: _title,
			properties: _properties,
			size: _size,
			compact: _compact,
			showHeader: _showHeader,
			showClose: _showClose,
			editable: _editable,
			groupByType: _groupByType,
			onPropertyChange: _onPropertyChange,
			onclose: _onclose,
			children: _children,
			oncopy: _oncopy,
			oncut: _oncut,
			onpaste: _onpaste,
			...rest
		} = props;

		return rest as Omit<
			InformationHTMLAttributes<HTMLElement>,
			'class' | 'id' | 'oncopy' | 'oncut' | 'onpaste'
		>;
	}

	static getPropertyGroups(items: readonly LiteGraphNodeProperty[]) {
		return Object.entries(
			items.reduce<Record<string, LiteGraphNodeProperty[]>>((groups, property) => {
				const key = property.type ?? 'default';
				(groups[key] ??= []).push(property);
				return groups;
			}, {})
		);
	}
}
