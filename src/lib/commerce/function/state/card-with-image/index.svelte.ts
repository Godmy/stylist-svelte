import { CardWithImageStyleManager } from '$stylist/commerce/class/style-manager/card-with-image';
import type { CardWithImageRecipe } from '$stylist/commerce/interface/recipe/card-with-image';

export function createCardWithImageState(props: CardWithImageRecipe) {
	const containerClasses = $derived(
		CardWithImageStyleManager.getContainerClasses(
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const imageClasses = $derived(
		CardWithImageStyleManager.getImageClasses(props.imageClass ?? 'h-48 w-full object-cover')
	);
	const bodyClasses = $derived(CardWithImageStyleManager.getBodyClasses(props.bodyClass));
	const headerClasses = $derived(CardWithImageStyleManager.getHeaderClasses(props.headerClass));
	const titleClasses = $derived(CardWithImageStyleManager.getTitleClasses());
	const subtitleClasses = $derived(CardWithImageStyleManager.getSubtitleClasses());
	const descriptionClasses = $derived(CardWithImageStyleManager.getDescriptionClasses());
	const restProps = $derived.by(() => {
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
	});

	return {
		get containerClasses() {
			return containerClasses;
		},
		get imageClasses() {
			return imageClasses;
		},
		get bodyClasses() {
			return bodyClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get subtitleClasses() {
			return subtitleClasses;
		},
		get descriptionClasses() {
			return descriptionClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createCardWithImageState;
