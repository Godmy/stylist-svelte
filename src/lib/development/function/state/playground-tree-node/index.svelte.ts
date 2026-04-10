import type { Props, Story, TreeNodeData } from '$stylist/development/type/struct/playground-tree-node';

const ChevronRight = 'chevron-right';
const Folder = 'folder';
const FolderOpen = 'folder-open';
const FileCode = 'file-code';

export function createPlaygroundTreeNodeState(props: Props) {
  const node = $derived(props.node);
  const level = $derived(props.level);
  const expandedNodes = $derived(props.expandedNodes);
  const categoryConfig = $derived(props.categoryConfig);
  const onToggle = $derived(props.onToggle);
  const onComponentClick = $derived(props.onComponentClick);
  const selectedStoryId = $derived(props.selectedStoryId ?? null);
  const focusedPath = $derived(props.focusedPath ?? null);

  const isExpanded = $derived(expandedNodes.has(node.path));
  const hasChildren = $derived(!!(node.children && node.children.length > 0));
  const isAutoSelectable = $derived(!!node.autoStory);

  const config = $derived.by(() => {
    const categoryName = node.path.split('/')[0];
    return categoryConfig[categoryName];
  });

  const leftPadding = $derived(
    node.type === 'component'
      ? `padding-left: ${level * 12 + 22}px`
      : `padding-left: ${level * 12}px`
  );

  const isSelected = $derived(
    (node.type === 'component' && node.story?.id && node.story.id === selectedStoryId) ||
      (node.type === 'folder' && node.autoStory?.id && node.autoStory.id === selectedStoryId)
  );

  const isFocused = $derived(focusedPath === node.path);

  function handleToggle() {
    onToggle(node.path);
  }

  function handleClick() {
    if (isAutoSelectable && node.autoStory) {
      onComponentClick(node.autoStory);
    } else {
      onToggle(node.path);
    }
  }

  function handleComponentClick() {
    if (node.type === 'component' && node.story) {
      onComponentClick(node.story);
    }
  }

  return {
    get node() { return node; },
    get level() { return level; },
    get expandedNodes() { return expandedNodes; },
    get categoryConfig() { return categoryConfig; },
    get selectedStoryId() { return selectedStoryId; },
    get focusedPath() { return focusedPath; },
    get isExpanded() { return isExpanded; },
    get hasChildren() { return hasChildren; },
    get isAutoSelectable() { return isAutoSelectable; },
    get config() { return config; },
    get leftPadding() { return leftPadding; },
    get isSelected() { return isSelected; },
    get isFocused() { return isFocused; },
    handleToggle,
    handleClick,
    handleComponentClick,
    onComponentClick
  };
}

export default createPlaygroundTreeNodeState;
