import type { ReturnPolicyContract } from '$stylist/commerce/interface/component/return-policy';
import { ReturnPolicyStyleManager } from '$stylist/commerce/class/style-manager/return-policy';

export function createReturnPolicyState(props: ReturnPolicyContract) {
	const containerClasses = $derived(ReturnPolicyStyleManager.getContainerClasses(String(props.class ?? '')));
	const headerClasses = $derived(ReturnPolicyStyleManager.getHeaderClasses(props.headerClass ?? ''));
	const titleClasses = $derived(ReturnPolicyStyleManager.getTitleClasses());
	const contentContainerClasses = $derived(ReturnPolicyStyleManager.getContentContainerClasses());
	const sectionClasses = $derived(ReturnPolicyStyleManager.getSectionClasses());
	const sectionTitleClasses = $derived(ReturnPolicyStyleManager.getSectionTitleClasses());
	const policyDescriptionClasses = $derived(ReturnPolicyStyleManager.getPolicyDescriptionClasses());
	const conditionsListClasses = $derived(ReturnPolicyStyleManager.getConditionsListClasses());
	const conditionItemClasses = $derived(ReturnPolicyStyleManager.getConditionItemClasses());
	const conditionTitleClasses = $derived(ReturnPolicyStyleManager.getConditionTitleClasses());
	const conditionDescriptionClasses = $derived(ReturnPolicyStyleManager.getConditionDescriptionClasses());
	const stepsListClasses = $derived(ReturnPolicyStyleManager.getStepsListClasses());
	const stepItemClasses = $derived(ReturnPolicyStyleManager.getStepItemClasses());
	const stepNumberClasses = $derived(ReturnPolicyStyleManager.getStepNumberClasses());
	const stepContentClasses = $derived(ReturnPolicyStyleManager.getStepContentClasses());
	const stepTitleClasses = $derived(ReturnPolicyStyleManager.getStepTitleClasses());
	const stepDescriptionClasses = $derived(ReturnPolicyStyleManager.getStepDescriptionClasses());
	const faqListClasses = $derived(ReturnPolicyStyleManager.getFaqListClasses());
	const faqItemClasses = $derived(ReturnPolicyStyleManager.getFaqItemClasses());
	const faqQuestionClasses = $derived(ReturnPolicyStyleManager.getFaqQuestionClasses());
	const faqAnswerClasses = $derived(ReturnPolicyStyleManager.getFaqAnswerClasses());
	const shippingInfoClasses = $derived(ReturnPolicyStyleManager.getShippingInfoClasses());
	const shippingInfoItemClasses = $derived(ReturnPolicyStyleManager.getShippingInfoItemClasses());
	const shippingInfoLabelClasses = $derived(ReturnPolicyStyleManager.getShippingInfoLabelClasses());
	const shippingInfoValueClasses = $derived(ReturnPolicyStyleManager.getShippingInfoValueClasses());
	const badgeClasses = $derived(ReturnPolicyStyleManager.getBadgeClasses());
	const iconClasses = $derived(ReturnPolicyStyleManager.getIconClasses());

	function getButtonClasses(variant: 'primary' | 'secondary') {
		return ReturnPolicyStyleManager.getButtonClasses(variant);
	}

	return {
		get containerClasses() { return containerClasses; },
		get headerClasses() { return headerClasses; },
		get titleClasses() { return titleClasses; },
		get contentContainerClasses() { return contentContainerClasses; },
		get sectionClasses() { return sectionClasses; },
		get sectionTitleClasses() { return sectionTitleClasses; },
		get policyDescriptionClasses() { return policyDescriptionClasses; },
		get conditionsListClasses() { return conditionsListClasses; },
		get conditionItemClasses() { return conditionItemClasses; },
		get conditionTitleClasses() { return conditionTitleClasses; },
		get conditionDescriptionClasses() { return conditionDescriptionClasses; },
		get stepsListClasses() { return stepsListClasses; },
		get stepItemClasses() { return stepItemClasses; },
		get stepNumberClasses() { return stepNumberClasses; },
		get stepContentClasses() { return stepContentClasses; },
		get stepTitleClasses() { return stepTitleClasses; },
		get stepDescriptionClasses() { return stepDescriptionClasses; },
		get faqListClasses() { return faqListClasses; },
		get faqItemClasses() { return faqItemClasses; },
		get faqQuestionClasses() { return faqQuestionClasses; },
		get faqAnswerClasses() { return faqAnswerClasses; },
		get shippingInfoClasses() { return shippingInfoClasses; },
		get shippingInfoItemClasses() { return shippingInfoItemClasses; },
		get shippingInfoLabelClasses() { return shippingInfoLabelClasses; },
		get shippingInfoValueClasses() { return shippingInfoValueClasses; },
		get badgeClasses() { return badgeClasses; },
		get iconClasses() { return iconClasses; },
		getButtonClasses
	};
}

export default createReturnPolicyState;
