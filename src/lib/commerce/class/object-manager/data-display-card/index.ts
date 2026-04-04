import type { DataDisplayCardRecipe as DataDisplayCardProps } from '$stylist/commerce/interface/recipe/data-display-card';

export class ObjectManagerDataDisplayCard {
	static getRestProps(props: DataDisplayCardProps) {
		const {
			title: _title,
			subtitle: _subtitle,
			description: _description,
			image: _image,
			footer: _footer,
			actions: _actions,
			class: _class,
			imageClass: _imageClass,
			headerClass: _headerClass,
			bodyClass: _bodyClass,
			footerClass: _footerClass,
			actionsClass: _actionsClass,
			...rest
		} = props;

		return rest;
	}
}
