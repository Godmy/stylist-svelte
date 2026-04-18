import type { RecipeWarrantyInfo as WarrantyInfoContract } from '$stylist/commerce/interface/recipe/warranty-info';
import type { SlotWarrantyClaim as WarrantyClaimContract } from '$stylist/commerce/interface/slot/warranty-claim';
import { WarrantyInfoStyleManager } from '$stylist/commerce/class/style-manager/warranty-info';

export function createWarrantyInfoState(props: WarrantyInfoContract) {
	let claimIssue = $state('');
	let claimDescription = $state('');

	const claims = $derived(props.claims ?? []);
	const coverage = $derived(props.warrantyPeriod?.coverage ?? []);
	const exclusions = $derived(props.warrantyPeriod?.exclusions ?? []);

	const containerClasses = $derived(WarrantyInfoStyleManager.getContainerClasses(String(props.class ?? '')));
	const headerClasses = $derived(WarrantyInfoStyleManager.getHeaderClasses(props.headerClass ?? ''));
	const titleClasses = $derived(WarrantyInfoStyleManager.getTitleClasses());
	const contentContainerClasses = $derived(WarrantyInfoStyleManager.getContentContainerClasses());
	const sectionClasses = $derived(WarrantyInfoStyleManager.getSectionClasses());
	const sectionTitleClasses = $derived(WarrantyInfoStyleManager.getSectionTitleClasses());
	const coverageListClasses = $derived(WarrantyInfoStyleManager.getCoverageListClasses());
	const coverageItemClasses = $derived(WarrantyInfoStyleManager.getCoverageItemClasses());
	const coverageIconClasses = $derived(WarrantyInfoStyleManager.getCoverageIconClasses());
	const coverageTextClasses = $derived(WarrantyInfoStyleManager.getCoverageTextClasses());
	const exclusionsListClasses = $derived(WarrantyInfoStyleManager.getExclusionsListClasses());
	const exclusionItemClasses = $derived(WarrantyInfoStyleManager.getExclusionItemClasses());
	const exclusionIconClasses = $derived(WarrantyInfoStyleManager.getExclusionIconClasses());
	const exclusionTextClasses = $derived(WarrantyInfoStyleManager.getExclusionTextClasses());
	const claimsContainerClasses = $derived(WarrantyInfoStyleManager.getClaimsContainerClasses());
	const claimItemClasses = $derived(WarrantyInfoStyleManager.getClaimItemClasses());
	const claimTitleClasses = $derived(WarrantyInfoStyleManager.getClaimTitleClasses());
	const formContainerClasses = $derived(WarrantyInfoStyleManager.getFormContainerClasses());
	const inputClasses = $derived(WarrantyInfoStyleManager.getInputClasses());
	const textAreaClasses = $derived(WarrantyInfoStyleManager.getTextAreaClasses());
	const iconClasses = $derived(WarrantyInfoStyleManager.getIconClasses());
	const warrantyPeriodBadgeClasses = $derived(WarrantyInfoStyleManager.getWarrantyPeriodBadgeClasses());

	function getClaimStatusBadgeClasses(status: string) {
		return WarrantyInfoStyleManager.getClaimStatusBadgeClasses(status);
	}

	function getButtonClasses(variant: 'primary' | 'secondary') {
		return WarrantyInfoStyleManager.getButtonClasses(variant);
	}

	function formatDate(date?: Date) {
		if (!date) return '';
		return date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
	}

	function getWarrantyEndDate() {
		if (!props.purchaseDate || !props.warrantyPeriod) return null;
		const endDate = new Date(props.purchaseDate);
		endDate.setFullYear(endDate.getFullYear() + props.warrantyPeriod.duration);
		return endDate;
	}

	function handleSubmitClaim() {
		if (!claimIssue.trim()) return;
		props.onClaimSubmit?.({
			issue: claimIssue,
			description: claimDescription,
			claimNumber: `CLM-${Date.now()}`
		});
		claimIssue = '';
		claimDescription = '';
	}

	return {
		get claimIssue() { return claimIssue; },
		set claimIssue(v: string) { claimIssue = v; },
		get claimDescription() { return claimDescription; },
		set claimDescription(v: string) { claimDescription = v; },
		get claims() { return claims; },
		get coverage() { return coverage; },
		get exclusions() { return exclusions; },
		get containerClasses() { return containerClasses; },
		get headerClasses() { return headerClasses; },
		get titleClasses() { return titleClasses; },
		get contentContainerClasses() { return contentContainerClasses; },
		get sectionClasses() { return sectionClasses; },
		get sectionTitleClasses() { return sectionTitleClasses; },
		get coverageListClasses() { return coverageListClasses; },
		get coverageItemClasses() { return coverageItemClasses; },
		get coverageIconClasses() { return coverageIconClasses; },
		get coverageTextClasses() { return coverageTextClasses; },
		get exclusionsListClasses() { return exclusionsListClasses; },
		get exclusionItemClasses() { return exclusionItemClasses; },
		get exclusionIconClasses() { return exclusionIconClasses; },
		get exclusionTextClasses() { return exclusionTextClasses; },
		get claimsContainerClasses() { return claimsContainerClasses; },
		get claimItemClasses() { return claimItemClasses; },
		get claimTitleClasses() { return claimTitleClasses; },
		get formContainerClasses() { return formContainerClasses; },
		get inputClasses() { return inputClasses; },
		get textAreaClasses() { return textAreaClasses; },
		get iconClasses() { return iconClasses; },
		get warrantyPeriodBadgeClasses() { return warrantyPeriodBadgeClasses; },
		getClaimStatusBadgeClasses,
		getButtonClasses,
		formatDate,
		getWarrantyEndDate,
		handleSubmitClaim
	};
}

export default createWarrantyInfoState;
