import type { Props } from '$stylist/file/type/struct/file-list-item/props';
import {
  getFileIcon,
  handleAction as handleActionFn,
  handleDoubleClick as handleDoubleClickFn,
  handleSelect as handleSelectFn,
} from '$stylist/file/function/script/file-list-item';

export function createFileListItemState(
  props: Props
) {
  const item = $derived(props.item);
  const showThumbnail = $derived(props.showThumbnail ?? false);
  const showSize = $derived(props.showSize ?? true);
  const showModified = $derived(props.showModified ?? true);
  const showOwner = $derived(props.showOwner ?? false);
  const enableSelection = $derived(props.enableSelection ?? true);
  const variant = $derived(props.variant ?? 'default');
  const disabled = $derived(props.disabled ?? false);
  const classes = $derived([props.class || ''].filter(Boolean).join(' '));
  let isSelected = $state(false);

  const restProps = $derived.by(() => {
    const {
      item: _item,
      class: _class,
      cellClass,
      onItemSelect,
      onItemDoubleClick,
      onItemAction,
      showThumbnail: _showThumbnail,
      showSize: _showSize,
      showModified: _showModified,
      showOwner: _showOwner,
      enableSelection: _enableSelection,
      disabled: _disabled,
      variant: _variant,
      ...rest
    } = props;

    return rest;
  });

  $effect(() => {
    isSelected = item?.selected || false;
  });

  function handleSelect(): void {
    handleSelectFn(item, disabled, enableSelection, isSelected, (value) => {
      isSelected = value;
    }, props.onItemSelect);
  }

  function handleDoubleClick(): void {
    handleDoubleClickFn(item, disabled, props.onItemDoubleClick);
  }

  function handleAction(action: string): void {
    handleActionFn(item, action, disabled, props.onItemAction);
  }

  return {
    get variant() {
      return variant;
    },
    get size() {
      return 'md';
    },
    get disabled() {
      return disabled;
    },
    get classes() {
      return classes;
    },
    get item() {
      return item;
    },
    get showThumbnail() {
      return showThumbnail;
    },
    get showSize() {
      return showSize;
    },
    get showModified() {
      return showModified;
    },
    get showOwner() {
      return showOwner;
    },
    get enableSelection() {
      return enableSelection;
    },
    get isSelected() {
      return isSelected;
    },
    get restProps() {
      return restProps;
    },
    get iconName() {
      return getFileIcon(item);
    },
    handleSelect,
    handleDoubleClick,
    handleAction,
  };
}

export default createFileListItemState;
