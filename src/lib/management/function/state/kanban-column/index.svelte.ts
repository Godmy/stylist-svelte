import { KanbanColumnStyleManager } from '$stylist/management/class/style-manager/kanban-column';
import type { KanbanCardType } from '$stylist/management/interface/slot/kanban-card-type';
import { applyKanbanColumnDrop } from '$stylist/management/function/script/apply-kanban-column-drop';
import type { KanbanColumnStateProps } from '$stylist/management/interface/recipe/kanban-column';

const Check = 'check';
const Pencil = 'pencil';
const Plus = 'plus';
const X = 'x';

export function createKanbanColumnState(props: KanbanColumnStateProps) {
  // Props with defaults
  const column = $derived(props.column);
  const droppable = $derived(props.droppable ?? true);
  const editable = $derived(props.editable ?? true);
  const showArchivedCards = $derived(props.showArchivedCards ?? false);
  const onAddCard = $derived(props.onAddCard);
  const onCardDrop = $derived(props.onCardDrop);
  const onColumnTitleChange = $derived(props.onColumnTitleChange);
  const onCardTitleChange = $derived(props.onCardTitleChange);
  const onCardDelete = $derived(props.onCardDelete);
  const onCardArchive = $derived(props.onCardArchive);
  const content = $derived(props.content);

  // SlotState
  let dragOverIndex = $state<number | null>(null);
  let isEditingTitle = $state(false);
  let draftTitle = $state(column.title);

  // Icons
  const checkIcon = Check;
  const pencilIcon = Pencil;
  const plusIcon = Plus;
  const xIcon = X;

  // Sync with column title
  $effect(() => {
    draftTitle = column.title;
  });

  // Computed
  const visibleCards = $derived(
    showArchivedCards ? column.cards : column.cards.filter((card) => card.status !== 'archived')
  );

  // Methods
  function handleColumnDrop(e: DragEvent): void {
    applyKanbanColumnDrop(e, droppable, column.id, visibleCards.length, onCardDrop);
    dragOverIndex = null;
  }

  function handleCardDrop(e: DragEvent, index: number): void {
    applyKanbanColumnDrop(e, droppable, column.id, index, onCardDrop);
    dragOverIndex = null;
  }

  function handleDragOver(e: DragEvent, index?: number): void {
    if (!droppable) return;
    e.preventDefault();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }

    dragOverIndex = typeof index === 'number' ? index : null;
  }

  function handleAddCard(): void {
    onAddCard?.(column.id);
  }

  function startTitleEdit(): void {
    if (!editable) return;
    draftTitle = column.title;
    isEditingTitle = true;
  }

  function cancelTitleEdit(): void {
    draftTitle = column.title;
    isEditingTitle = false;
  }

  function commitTitleEdit(): void {
    const nextTitle = draftTitle.trim();
    if (!nextTitle) {
      draftTitle = column.title;
      isEditingTitle = false;
      return;
    }
    if (nextTitle !== column.title) {
      onColumnTitleChange?.(column.id, nextTitle);
    }
    isEditingTitle = false;
  }

  function handleCardDragStart(e: DragEvent, card: KanbanCardType): void {
    if (!droppable) return;
    const payload = { cardId: card.id, fromColumnId: column.id };
    e.dataTransfer?.setData('application/json', JSON.stringify(payload));
    e.dataTransfer?.setData('text/plain', JSON.stringify(payload));
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
    }
  }

  function handleCardDragEnd(): void {
    dragOverIndex = null;
  }

  // CSS classes
  const containerClass = $derived(KanbanColumnStyleManager.getContainerClass());

  return {
    get column() {
      return column;
    },
    get droppable() {
      return droppable;
    },
    get editable() {
      return editable;
    },
    get showArchivedCards() {
      return showArchivedCards;
    },
    get content() {
      return content;
    },
    get dragOverIndex() {
      return dragOverIndex;
    },
    set dragOverIndex(value: number | null) {
      dragOverIndex = value;
    },
    get isEditingTitle() {
      return isEditingTitle;
    },
    set isEditingTitle(value: boolean) {
      isEditingTitle = value;
    },
    get draftTitle() {
      return draftTitle;
    },
    set draftTitle(value: string) {
      draftTitle = value;
    },
    get visibleCards() {
      return visibleCards;
    },
    get checkIcon() {
      return checkIcon;
    },
    get pencilIcon() {
      return pencilIcon;
    },
    get plusIcon() {
      return plusIcon;
    },
    get xIcon() {
      return xIcon;
    },
    get containerClass() {
      return containerClass;
    },
    handleColumnDrop,
    handleCardDrop,
    handleDragOver,
    handleAddCard,
    startTitleEdit,
    cancelTitleEdit,
    commitTitleEdit,
    handleCardDragStart,
    handleCardDragEnd
  };
}

export default createKanbanColumnState;
