import type { CheckboxProps } from '$stylist/design-system/attributes';

export function createCheckboxState(props: CheckboxProps) {
  const id = $derived(props.id);
  const label = $derived(props.label);
  const description = $derived(props.description ?? '');
  const checked = $derived(props.checked ?? false);
  const errors = $derived(props.errors ?? []);
  const required = $derived(props.required ?? false);
  const disabled = $derived(props.disabled ?? false);
  const className = $derived(props.class ?? '');

  const hasError = $derived(errors.length > 0);
  const errorId = $derived(`${id}-error`);

  const containerClasses = $derived(
    `flex items-start space-x-2 ${className}`.trim()
  );
  const wrapperClasses = $derived('flex items-center h-5');
  const checkboxWrapperClasses = $derived('');
  const checkboxClasses = $derived(
    `h-4 w-4 rounded border text-[--color-primary-500] focus:ring-[--color-primary-500] ${
      hasError ? 'border-[--color-danger-500] focus:ring-[--color-danger-500]' : 'border-[--color-border-primary]'
    } ${disabled ? 'cursor-not-allowed opacity-50' : ''}`.trim()
  );
  const labelWrapperClasses = $derived('ml-2');
  const labelClasses = $derived(
    `block text-sm font-medium leading-5 ${
      disabled ? 'text-[--color-text-disabled]' : 'text-[--color-text-primary]'
    }`.trim()
  );
  const descriptionClasses = $derived('block text-sm text-[--color-text-secondary]');
  const errorClasses = $derived('mt-1 text-sm text-[--color-danger-500]');

  return {
    get id() {
      return id;
    },
    get label() {
      return label;
    },
    get description() {
      return description;
    },
    get checked() {
      return checked;
    },
    get errors() {
      return errors;
    },
    get required() {
      return required;
    },
    get disabled() {
      return disabled;
    },
    get hasError() {
      return hasError;
    },
    get errorId() {
      return errorId;
    },
    get containerClasses() {
      return containerClasses;
    },
    get wrapperClasses() {
      return wrapperClasses;
    },
    get checkboxWrapperClasses() {
      return checkboxWrapperClasses;
    },
    get checkboxClasses() {
      return checkboxClasses;
    },
    get labelWrapperClasses() {
      return labelWrapperClasses;
    },
    get labelClasses() {
      return labelClasses;
    },
    get descriptionClasses() {
      return descriptionClasses;
    },
    get errorClasses() {
      return errorClasses;
    }
  };
}
