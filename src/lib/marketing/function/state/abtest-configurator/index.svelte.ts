import { untrack } from 'svelte';
import type { SlotABTestConfigurator as IABTestConfiguratorProps } from '$stylist/marketing/interface/slot/ab-test-configurator';
import type { SlotABTest as ABTest } from '$stylist/marketing/interface/slot/ab-test';
import { validateABTest } from '$stylist/marketing/function/script/validate-ab-test';
import { calculateABTestTotalWeight } from '$stylist/marketing/function/script/calculate-ab-test-total-weight';
import { addABTestVariant } from '$stylist/marketing/function/script/add-ab-test-variant';
import { removeABTestVariant } from '$stylist/marketing/function/script/remove-ab-test-variant';
import { updateABTestVariantWeight } from '$stylist/marketing/function/script/update-ab-test-variant-weight';
import { toggleABTestVariantStatus } from '$stylist/marketing/function/script/toggle-ab-test-variant-status';
import { ABTestConfiguratorStyleManager } from '$stylist/marketing/class/style-manager/abtest-configurator';

export function createABTestConfiguratorState(props: IABTestConfiguratorProps & { class?: string; headerClass?: string; formClass?: string; variantClass?: string; footerClass?: string }) {
  const initialTest = $derived(props.initialTest);
  const onSave = $derived(props.onSave);
  const onStart = $derived(props.onStart);
  const onPause = $derived(props.onPause);
  const onComplete = $derived(props.onComplete);
  const className = $derived(props.class ?? '');
  const headerClassName = $derived(props.headerClass ?? '');
  const formClassName = $derived(props.formClass ?? '');
  const variantClassName = $derived(props.variantClass ?? '');
  const footerClassName = $derived(props.footerClass ?? '');

  let test = $state<ABTest>(untrack(() => ({
    id: initialTest?.id || `test-${Date.now()}`,
    name: initialTest?.name || 'New A/B Test',
    description: initialTest?.description || '',
    variants: initialTest?.variants || [
      { id: 'a', name: 'Control', description: 'Current version', weight: 50, isActive: true },
      { id: 'b', name: 'Variant', description: 'Modified version', weight: 50, isActive: true }
    ],
    startDate: initialTest?.startDate || new Date(),
    endDate: initialTest?.endDate,
    status: initialTest?.status || 'draft',
    targetAudience: initialTest?.targetAudience || 'All Users',
    successMetrics: initialTest?.successMetrics || ['Conversion Rate', 'Engagement']
  })));

  let startDateString = $state('');
  $effect(() => {
    startDateString = test.startDate.toISOString().split('T')[0];
  });
  $effect(() => {
    test.startDate = new Date(startDateString);
  });

  let endDateString = $state('');
  $effect(() => {
    endDateString = test.endDate ? test.endDate.toISOString().split('T')[0] : '';
  });
  $effect(() => {
    test.endDate = endDateString ? new Date(endDateString) : undefined;
  });

  let newVariantName = $state('');
  let newVariantDescription = $state('');
  let newVariantWeight = $state(0);
  let errors = $state<Record<string, string>>({});

  const totalWeight = $derived(calculateABTestTotalWeight(test.variants));

  const containerClasses = $derived(
    `${ABTestConfiguratorStyleManager.getContainerClass(className)}`.trim()
  );
  const headerClasses = $derived(
    `${ABTestConfiguratorStyleManager.getHeaderClass(headerClassName)}`.trim()
  );
  const formClasses = $derived(
    `${ABTestConfiguratorStyleManager.getFormClass(formClassName)}`.trim()
  );
  const footerClasses = $derived(
    `${ABTestConfiguratorStyleManager.getFooterClass(footerClassName)}`.trim()
  );

  function saveTest(): void {
    const validationErrors = validateABTest(test);
    errors = validationErrors;
    if (Object.keys(validationErrors).length === 0 && onSave) {
      onSave(test);
    }
  }

  function addVariant(): void {
    if (!newVariantName.trim()) {
      errors.newVariant = 'Variant name is required';
      return;
    } else {
      errors.newVariant = '';
    }
    test = addABTestVariant(test, newVariantName, newVariantDescription, newVariantWeight);
    newVariantName = '';
    newVariantDescription = '';
    newVariantWeight = 0;
  }

  function handleRemoveVariant(id: string): void {
    test = removeABTestVariant(test, id);
  }

  function handleUpdateWeight(id: string, weight: number): void {
    test = updateABTestVariantWeight(test, id, weight);
  }

  function handleToggleStatus(id: string): void {
    test = toggleABTestVariantStatus(test, id);
  }

  function startTest(): void {
    const validationErrors = validateABTest(test);
    errors = validationErrors;
    if (Object.keys(validationErrors).length === 0 && onStart) {
      test.status = 'running';
      test.startDate = new Date();
      onStart(test.id);
    }
  }

  function pauseTest(): void {
    if (onPause) {
      test.status = 'paused';
      onPause(test.id);
    }
  }

  function completeTest(): void {
    if (onComplete) {
      test.status = 'completed';
      onComplete(test.id);
    }
  }

  const restProps = $derived.by(() => {
    const { class: _class, headerClass: _headerClass, formClass: _formClass, variantClass: _variantClass, footerClass: _footerClass, ...rest } = props;
    return rest;
  });

  return {
    get test() { return test; },
    set test(v: ABTest) { test = v; },
    get startDateString() { return startDateString; },
    set startDateString(v: string) { startDateString = v; },
    get endDateString() { return endDateString; },
    set endDateString(v: string) { endDateString = v; },
    get newVariantName() { return newVariantName; },
    set newVariantName(v: string) { newVariantName = v; },
    get newVariantDescription() { return newVariantDescription; },
    set newVariantDescription(v: string) { newVariantDescription = v; },
    get newVariantWeight() { return newVariantWeight; },
    set newVariantWeight(v: number) { newVariantWeight = v; },
    get errors() { return errors; },
    set errors(v: Record<string, string>) { errors = v; },
    get totalWeight() { return totalWeight; },
    get containerClasses() { return containerClasses; },
    get headerClasses() { return headerClasses; },
    get formClasses() { return formClasses; },
    get variantClassName() { return variantClassName; },
    get footerClasses() { return footerClasses; },
    get restProps() { return restProps; },
    saveTest,
    addVariant,
    handleRemoveVariant,
    handleUpdateWeight,
    handleToggleStatus,
    startTest,
    pauseTest,
    completeTest
  };
}

export default createABTestConfiguratorState;
