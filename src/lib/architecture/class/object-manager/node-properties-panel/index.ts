import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { LiteGraphNodeProperty } from '$stylist/architecture/type/struct/lite-graph-node-property';
import type { RecipeNodePropertiesPanel as NodePropertiesPanelProps } from '$stylist/architecture/interface/recipe/node-properties-panel';

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
			HTMLAttributes<HTMLElement> & BehaviorBorderToken & BehaviorTypography,
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
