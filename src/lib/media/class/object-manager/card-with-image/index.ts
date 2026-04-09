import type { CardWithImageRecipe as CardWithImageProps } from '$stylist/commerce/interface/recipe/card-with-image';

export class ObjectManagerCardWithImage {
	static getRestProps(props: CardWithImageProps) {
		const {
			title: _title,
			subtitle: _subtitle,
			description: _description,
			image: _image,
			imageClass: _imageClass,
			footer: _footer,
			actions: _actions,
			class: _class,
			headerClass: _headerClass,
			bodyClass: _bodyClass,
			footerClass: _footerClass,
			actionsClass: _actionsClass,
			...rest
		} = props;

		return rest;
	}
}
