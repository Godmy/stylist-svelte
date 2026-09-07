import type { RecipeDiscountApplier as DiscountApplierContract } from '$stylist/commerce/interface/recipe/discount-applier';
import type { SlotDiscountRule as DiscountRuleContract } from '$stylist/commerce/interface/slot/discount-rule';
export function createDiscountApplierState(props: DiscountApplierContract) {
	let codeInput = $state('');
	let message = $state<{ text: string; type: 'success' | 'error' } | null>(null);

	const appliedCodes = $derived(props.appliedCodes ?? []);

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

	const successMessageClasses = 'discount-applier__message discount-applier__message--success';
	const errorMessageClasses = 'discount-applier__message discount-applier__message--error';

	return {
		get codeInput() {
			return codeInput;
		},
		get successMessageClasses() {
			return successMessageClasses;
		},
		get errorMessageClasses() {
			return errorMessageClasses;
		},
		set codeInput(v: string) {
			codeInput = v;
		},
		get message() {
			return message;
		},
		get appliedCodes() {
			return appliedCodes;
		},
		formatDiscount,
		isApplied,
		handleApplyCode,
		handleApplyRule,
		handleRemoveRule
	};
}

export default createDiscountApplierState;
