import type { Props } from '$stylist/development/type/struct/atomic-principles-showcase';
import { AtomicPrinciplesShowcaseStyleManager } from '$stylist/development/class/style-manager/atomic-principles-showcase';

export function createAtomicPrinciplesShowcaseState(props: Props) {
	const GitBranch = 'git-branch';
	const Code = 'code';
	const Layers = 'layers';
	const Package = 'package';

	const sectionClass = $derived(AtomicPrinciplesShowcaseStyleManager.getSectionClasses(props.class == null ? undefined : String(props.class)));
	const innerContainerClass = $derived(AtomicPrinciplesShowcaseStyleManager.getInnerContainerClasses());
	const textCenterClass = $derived(AtomicPrinciplesShowcaseStyleManager.getTextCenterClasses());
	const badgeClass = $derived(AtomicPrinciplesShowcaseStyleManager.getBadgeClasses());
	const badgeIconClass = $derived(AtomicPrinciplesShowcaseStyleManager.getBadgeIconClasses());
	const badgeTextClass = $derived(AtomicPrinciplesShowcaseStyleManager.getBadgeTextClasses());
	const titleClass = $derived(AtomicPrinciplesShowcaseStyleManager.getTitleClasses());
	const descriptionClass = $derived(AtomicPrinciplesShowcaseStyleManager.getDescriptionClasses());
	const gridClass = $derived(AtomicPrinciplesShowcaseStyleManager.getGridClasses());

	const badgeText = $derived(props.badgeText ?? 'Atomic Design');
	const title = $derived(props.title ?? 'Built on Atomic Principles');
	const description = $derived(props.description ?? 'Every component follows the proven Atomic Design methodology');
	const stats = $derived(props.stats);

	const restProps = $derived(() => {
		const { class: _className, stats: _stats, badgeText: _badgeText, title: _title, description: _desc, ...rest } = props;
		return rest;
	});

	return {
		get GitBranch() {
			return GitBranch;
		},
		get Code() {
			return Code;
		},
		get Layers() {
			return Layers;
		},
		get Package() {
			return Package;
		},
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
			return restProps();
		}
	};
}

export default createAtomicPrinciplesShowcaseState;
