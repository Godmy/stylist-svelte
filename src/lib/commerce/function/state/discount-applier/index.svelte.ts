import type { DiscountApplierContract, DiscountRuleContract } from '$stylist/commerce/interface/component/discount-applier';
import { DiscountApplierStyleManager } from '$stylist/commerce/class/style-manager/discount-applier';

export function createDiscountApplierState(props: DiscountApplierContract) {
	let codeInput = $state('');
	let message = $state<{ text: string; type: 'success' | 'error' } | null>(null);

	const appliedCodes = $derived(props.appliedCodes ?? []);

	const containerClasses = $derived(DiscountApplierStyleManager.getContainerClasses(String(props.class ?? '')));
	const headerClasses = $derived(DiscountApplierStyleManager.getHeaderClasses());
	const titleClasses = $derived(DiscountApplierStyleManager.getTitleClasses());
	const promoCodeContainerClasses = $derived(DiscountApplierStyleManager.getPromoCodeContainerClasses());
	const promoCodeInputClasses = $derived(DiscountApplierStyleManager.getPromoCodeInputClasses());
	const applyButtonClasses = $derived(DiscountApplierStyleManager.getApplyButtonClasses());
	const rulesListClasses = $derived(DiscountApplierStyleManager.getRulesListClasses());
	const ruleItemClasses = $derived(DiscountApplierStyleManager.getRuleItemClasses());
	const ruleNameClasses = $derived(DiscountApplierStyleManager.getRuleNameClasses());
	const ruleDescriptionClasses = $derived(DiscountApplierStyleManager.getRuleDescriptionClasses());
	const discountValueClasses = $derived(DiscountApplierStyleManager.getDiscountValueClasses());
	const appliedBadgeClasses = $derived(DiscountApplierStyleManager.getAppliedBadgeClasses());
	const appliedRulesContainerClasses = $derived(DiscountApplierStyleManager.getAppliedRulesContainerClasses());
	const successMessageClasses = $derived(DiscountApplierStyleManager.getSuccessMessageClasses());
	const errorMessageClasses = $derived(DiscountApplierStyleManager.getErrorMessageClasses());

	function formatDiscount(rule: DiscountRuleContract) {
		if (rule.type === 'percentage') return `${rule.value}% off`;
		if (rule.type === 'fixed') return `$${rule.value} off`;
		return 'Free shipping';
	}

	function isApplied(code: string) {
		return appliedCodes.includes(code);
	}

	async function handleApplyCode() {
		if (!codeInput.trim()) return;
		const code = codeInput.trim().toUpperCase();
		if (props.onValidateCode) {
			const valid = await props.onValidateCode(code);
			if (valid) {
				props.onApplyCode?.(code);
				message = { text: `Code "${code}" applied!`, type: 'success' };
			} else {
				message = { text: `Invalid code "${code}"`, type: 'error' };
			}
		} else {
			props.onApplyCode?.(code);
			message = { text: `Code "${code}" applied!`, type: 'success' };
		}
		codeInput = '';
	}

	function handleApplyRule(rule: DiscountRuleContract) {
		props.onApplyRule?.(rule);
	}

	function handleRemoveRule(ruleId: string) {
		props.onRemoveRule?.(ruleId);
	}

	return {
		get codeInput() { return codeInput; },
		set codeInput(v: string) { codeInput = v; },
		get message() { return message; },
		get appliedCodes() { return appliedCodes; },
		get containerClasses() { return containerClasses; },
		get headerClasses() { return headerClasses; },
		get titleClasses() { return titleClasses; },
		get promoCodeContainerClasses() { return promoCodeContainerClasses; },
		get promoCodeInputClasses() { return promoCodeInputClasses; },
		get applyButtonClasses() { return applyButtonClasses; },
		get rulesListClasses() { return rulesListClasses; },
		get ruleItemClasses() { return ruleItemClasses; },
		get ruleNameClasses() { return ruleNameClasses; },
		get ruleDescriptionClasses() { return ruleDescriptionClasses; },
		get discountValueClasses() { return discountValueClasses; },
		get appliedBadgeClasses() { return appliedBadgeClasses; },
		get appliedRulesContainerClasses() { return appliedRulesContainerClasses; },
		get successMessageClasses() { return successMessageClasses; },
		get errorMessageClasses() { return errorMessageClasses; },
		formatDiscount,
		isApplied,
		handleApplyCode,
		handleApplyRule,
		handleRemoveRule
	};
}

export default createDiscountApplierState;
