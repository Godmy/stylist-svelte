import type { Props } from '$stylist/file/type/struct/drop-zone/props';
import type { SlotDropItem } from '$stylist/file/type/struct/drop-zone/item';
import { clearAll } from '$stylist/file/function/script/drop-zone-clear-all';
import { handleDragLeave as handleDragLeaveFn } from '$stylist/file/function/script/drop-zone-handle-drag-leave';
import { handleDragOver as handleDragOverFn } from '$stylist/file/function/script/drop-zone';
import { handleDrop as handleDropFn } from '$stylist/file/function/script/drop-zone-handle-drop';
import { handleFileInput as handleFileInputFn } from '$stylist/file/function/script/drop-zone-handle-file-input';
import { processFiles } from '$stylist/file/function/script/drop-zone-process-files';
import { removeItem } from '$stylist/file/function/script/drop-zone-remove-item';

export function createDropZoneState(
  props: Props
) {
  let isDragOver = $state(false);
  let items = $state<SlotDropItem[]>([]);
  let isProcessing = $state(false);
  let fileInputElement = $state<HTMLInputElement | null>(null);
  const accept = $derived(props.accept ?? '');
  const multiple = $derived(props.multiple ?? false);
  const maxSize = $derived(props.maxSize ?? Infinity);
  const maxItems = $derived(props.maxItems ?? Infinity);
  const label = $derived(props.label ?? 'Drop files here');
  const description = $derived(props.description ?? 'Drag files into the drop zone or browse from disk.');
  const children = $derived(props.children);
  const disabled = $derived(props.disabled ?? false);
  const classes = $derived([props.class || ''].filter(Boolean).join(' '));

  const restProps = $derived.by(() => {
    const {
      children: _children,
      class: _class,
      accept: _accept,
      multiple: _multiple,
      disabled: _disabled,
      maxSize: _maxSize,
      maxItems: _maxItems,
      onDrop,
      onDragOver,
      onDragLeave,
      onItemAdded,
      onItemRemoved,
      preview,
      label: _label,
      description: _description,
      ...rest
    } = props;

    return rest;
  });

  function processSelectedFiles(fileList: FileList): void {
    isProcessing = true;
    items = processFiles(
      fileList,
      items,
      accept || '*',
      maxSize,
      maxItems,
      props.onItemAdded,
      props.onDrop,
    );
    isProcessing = false;
  }

  function handleDragOver(event: DragEvent): void {
    handleDragOverFn(event, (value) => {
      isDragOver = value;
    }, props.onDragOver);
  }

  function handleDragLeave(event: DragEvent): void {
    handleDragLeaveFn(event, (value) => {
      isDragOver = value;
    }, props.onDragLeave);
  }

  function handleDrop(event: DragEvent): void {
    handleDropFn(
      event,
      (value) => {
        isDragOver = value;
      },
      disabled,
      processSelectedFiles,
    );
  }

  function handleFileInput(event: Event): void {
    handleFileInputFn(event, disabled, processSelectedFiles);
  }

  function browse(): void {
    if (!disabled) {
      fileInputElement?.click();
    }
  }

  function clearItems(): void {
    items = clearAll();
  }

  function removeDroppedItem(id: string): void {
    items = removeItem(id, items, props.onItemRemoved);
  }

  return {
    variant: 'default',
    size: 'md',
    get disabled() {
      return disabled;
    },
    get classes() {
      return classes;
    },
    get accept() {
      return accept;
    },
    get multiple() {
      return multiple;
    },
    get maxSize() {
      return maxSize;
    },
    get maxItems() {
      return maxItems;
    },
    get label() {
      return label;
    },
    get description() {
      return description;
    },
    get children() {
      return children;
    },
    get isDragOver() {
      return isDragOver;
    },
    get items() {
      return items;
    },
    get isProcessing() {
      return isProcessing;
    },
    get restProps() {
      return restProps;
    },
    get fileInputElement() {
      return fileInputElement;
    },
    set fileInputElement(value: HTMLInputElement | null) {
      fileInputElement = value;
    },
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileInput,
    browse,
    clearItems,
    removeDroppedItem,
  };
}

export default createDropZoneState;
