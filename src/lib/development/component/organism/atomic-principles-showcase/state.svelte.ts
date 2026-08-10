import type { RecipeAtomicPrinciplesShowcase } from '$stylist/development/interface/recipe/atomic-principles-showcase';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createAtomicPrinciplesShowcaseState(props: RecipeAtomicPrinciplesShowcase) {
	const sectionClass = $derived(
		mergeClassNames(
			'c-atomic-principles-showcase',
			props.class == null ? undefined : String(props.class)
		)
	);
	const innerContainerClass = $derived('c-atomic-principles-showcase__inner');
	const textCenterClass = $derived('c-atomic-principles-showcase__intro');
	const badgeClass = $derived('c-atomic-principles-showcase__badge');
	const badgeIconClass = $derived('c-atomic-principles-showcase__badge-icon');
	const badgeTextClass = $derived('c-atomic-principles-showcase__badge-text');
	const titleClass = $derived('c-atomic-principles-showcase__title');
	const descriptionClass = $derived('c-atomic-principles-showcase__description');
	const gridClass = $derived('c-atomic-principles-showcase__grid');
	const iconClass = $derived('aps-icon');

	const badgeText = $derived(props.badgeText ?? 'Atomic Design');
	const title = $derived(props.title ?? 'Built on Atomic Principles');
	const description = $derived(
		props.description ?? 'Every component follows the proven Atomic Design methodology'
	);
	const stats = $derived(props.stats);

	const restProps = $derived.by(() => {
		const {
			class: _className,
			stats: _stats,
			badgeText: _badgeText,
			title: _title,
			description: _desc,
			...rest
		} = props;
		return rest;
	});

	return {
		get sectionClass() {
			return sectionClass;
		},
		get innerContainerClass() {
			return innerContainerClass;
		},
		get textCenterClass() {
			return textCenterClass;
		},
		get badgeClass() {
			return badgeClass;
		},
		get badgeIconClass() {
			return badgeIconClass;
		},
		get badgeTextClass() {
			return badgeTextClass;
		},
		get titleClass() {
			return titleClass;
		},
		get descriptionClass() {
			return descriptionClass;
		},
		get gridClass() {
			return gridClass;
		},
		get iconClass() {
			return iconClass;
		},
		get badgeText() {
			return badgeText;
		},
		get title() {
			return title;
		},
		get description() {
			return description;
		},
		get stats() {
			return stats;
		},
		get restProps() {
			return restProps;
		}
	};
}
