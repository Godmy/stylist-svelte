import type { RecipeWarrantyInfo as WarrantyInfoContract } from '$stylist/commerce/interface/recipe/warranty-info';
export function createWarrantyInfoState(props: WarrantyInfoContract) {
	let claimIssue = $state('');
	let claimDescription = $state('');

	const claims = $derived(props.claims ?? []);
	const coverage = $derived(props.warrantyPeriod?.coverage ?? []);
	const exclusions = $derived(props.warrantyPeriod?.exclusions ?? []);

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
		get claimIssue() {
			return claimIssue;
		},
		set claimIssue(v: string) {
			claimIssue = v;
		},
		get claimDescription() {
			return claimDescription;
		},
		set claimDescription(v: string) {
			claimDescription = v;
		},
		get claims() {
			return claims;
		},
		get coverage() {
			return coverage;
		},
		get exclusions() {
			return exclusions;
		},
		formatDate,
		getWarrantyEndDate,
		handleSubmitClaim
	};
}

export default createWarrantyInfoState;
