import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { clearFile } from '$stylist/file/function/script/clear-file';
import { resolveFileSelectionLabel } from '$stylist/file/function/script/resolve-file-selection-label';
import { handleFileChange } from '$stylist/file/function/script/file-input';

export function createFileInputState(
  props: {
    variant?: TokenAppearance;
    size?: string;
    disabled?: boolean;
    class?: string;
    value?: File | File[];
    multiple?: boolean;
    accept?: string;
    placeholder?: string;
    onFileChange?: (files: File | File[] | null) => void;
  } & Record<string, unknown>
) {
  let inputElement = $state<HTMLInputElement | null>(null);
  let internalValue = $state<File | File[] | null>(props.value ?? null);
  let fileName = $state(resolveFileSelectionLabel(internalValue));

  $effect(() => {
    internalValue = props.value ?? null;
    fileName = resolveFileSelectionLabel(internalValue);
  });

  function handleChange(event: Event): void {
    const result = handleFileChange(
      event,
      props.multiple ?? false,
      props.onFileChange,
    );

    internalValue = result.internalValue;
    fileName = result.fileName;
  }

  function clearSelection(): void {
    clearFile(inputElement, props.onFileChange);
    internalValue = null;
    fileName = '';
  }

  return {
    variant: props.variant ?? 'default',
    size: props.size ?? 'md',
    disabled: props.disabled ?? false,
    multiple: props.multiple ?? false,
    accept: props.accept ?? '',
    placeholder: props.placeholder ?? 'Choose file(s)...',
    classes: [props.class || ''].filter(Boolean).join(' '),
    get inputElement() {
      return inputElement;
    },
    set inputElement(value: HTMLInputElement | null) {
      inputElement = value;
    },
    get internalValue() {
      return internalValue;
    },
    get fileName() {
      return fileName;
    },
    handleChange,
    clearSelection,
  };
}

export default createFileInputState;
