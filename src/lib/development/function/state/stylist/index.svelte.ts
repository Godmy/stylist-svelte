import type { Props, StylistCategoryId, StylistSelection } from '$stylist/development/type/struct/stylist';

const Bell = 'bell';
const Building2 = 'building-2';
const CheckCircle = 'check-circle';
const Grid = 'grid';
const Hand = 'hand';
const Info = 'info';
const Layout = 'layout';
const Layers = 'layers';
const Palette = 'palette';
const Ruler = 'ruler';
const Settings = 'settings';
const Sparkles = 'sparkles';
const Type = 'type';
const X = 'x';

export function createStylistState(props: Props) {
  const initialCategory = $derived(props.initialCategory ?? 'architecture');
  const className = $derived(props.class ?? '');
  const onSelectionChange = $derived(props.onSelectionChange);

  let isOpen = $state(false);
  let selectedCategoryId = $state<StylistCategoryId>(initialCategory);
  let selections = $state<Record<StylistCategoryId, string>>({
    architecture: 'size',
    information: 'color',
    interaction: 'tooltips'
  });

  const panelId = $derived(`stylist-panel-${Math.random().toString(36).slice(2, 9)}`);

  const activeCategory = $derived(
    categories.find((category) => category.id === selectedCategoryId) ?? categories[0]
  );

  const activeOption = $derived(
    activeCategory.options.find((option) => option.id === selections[selectedCategoryId]) ??
      activeCategory.options[0]
  );

  function toggleOpen() {
    isOpen = !isOpen;
  }

  function closePanel() {
    isOpen = false;
  }

  function handleCategorySelect(categoryId: StylistCategoryId) {
    selectedCategoryId = categoryId;
  }

  function handleOptionSelect(optionId: string) {
    selections = {
      ...selections,
      [selectedCategoryId]: optionId
    };
  }

  function handleWindowClick(event: MouseEvent, rootElement: HTMLElement | null) {
    if (!isOpen || !rootElement) {
      return;
    }
    const path = event.composedPath();
    if (!path.includes(rootElement)) {
      closePanel();
    }
  }

  function handleWindowKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closePanel();
    }
  }

  return {
    get initialCategory() { return initialCategory; },
    get className() { return className; },
    get isOpen() { return isOpen; },
    get selectedCategoryId() { return selectedCategoryId; },
    get selections() { return selections; },
    get panelId() { return panelId; },
    get activeCategory() { return activeCategory; },
    get activeOption() { return activeOption; },
    set isOpen(value: boolean) { isOpen = value; },
    set selectedCategoryId(value: StylistCategoryId) { selectedCategoryId = value; },
    set selections(value: Record<StylistCategoryId, string>) { selections = value; },
    toggleOpen,
    closePanel,
    handleCategorySelect,
    handleOptionSelect,
    handleWindowClick,
    handleWindowKeydown,
    onSelectionChange
  };
}

const categories = [
  {
    id: 'architecture' as StylistCategoryId,
    label: 'Архитектурные',
    description: 'Размер, компоновка и пространственная структура компонента.',
    accent: 'var(--color-primary-600)',
    icon: Building2,
    options: [
      { id: 'size', label: 'Размер', description: 'Контролирует общий масштаб и плотность блока.', hint: 'Меняйте высоту, ширину и визуальный вес компонента.', accent: 'var(--color-primary-600)', icon: Ruler },
      { id: 'layout', label: 'Расположение', description: 'Отвечает за выравнивание и направление компоновки.', hint: 'Подходит для выбора сетки, выравнивания и ориентации.', accent: 'var(--color-primary-700)', icon: Layout },
      { id: 'padding', label: 'Паддинги', description: 'Управляет внутренними отступами и дыханием интерфейса.', hint: 'Помогает регулировать внутренний воздух внутри карточки или панели.', accent: 'var(--color-primary-500)', icon: Grid },
      { id: 'margin', label: 'Марджины', description: 'Настраивает внешний ритм между соседними блоками.', hint: 'Используйте для разделения секций и стабилизации композиции.', accent: 'var(--color-primary-400)', icon: Layers }
    ]
  },
  {
    id: 'information' as StylistCategoryId,
    label: 'Информационные',
    description: 'Цвет, типографика и читаемость содержимого.',
    accent: 'var(--color-warning-600)',
    icon: Info,
    options: [
      { id: 'color', label: 'Цвет', description: 'Настраивает палитру, акценты и контраст.', hint: 'Влияет на фоны, акценты, текст и эмоциональный тон интерфейса.', accent: 'var(--color-warning-500)', icon: Palette },
      { id: 'font-family', label: 'Шрифт', description: 'Выбирает характер типографики для блока.', hint: 'Переключайтесь между нейтральным, редакционным и техническим стилем.', accent: 'var(--color-warning-500)', icon: Type },
      { id: 'font-size', label: 'Размер шрифта', description: 'Регулирует иерархию текста и плотность чтения.', hint: 'Полезно для усиления заголовков и балансировки secondary-copy.', accent: 'var(--color-warning-400)', icon: Ruler },
      { id: 'contrast', label: 'Контраст', description: 'Подтягивает читаемость и визуальный фокус.', hint: 'Используйте для режимов повышенной доступности и светотени.', accent: 'var(--color-warning-300)', icon: Layers }
    ]
  },
  {
    id: 'interaction' as StylistCategoryId,
    label: 'Интерактивные',
    description: 'Поведение на клик, hover и ответ интерфейса на действия.',
    accent: 'var(--color-success-600)',
    icon: Hand,
    options: [
      { id: 'press-action', label: 'Нажатие', description: 'Определяет действие по клику или tap-жесту.', hint: 'Открыть модалку, отправить событие, запустить сценарий или переключение.', accent: 'var(--color-success-500)', icon: Hand },
      { id: 'verdict', label: 'Вердикт', description: 'Задаёт статус, подтверждение или реакцию после действия.', hint: 'Подходит для success, warning, validation и async-result состояний.', accent: 'var(--color-success-400)', icon: CheckCircle },
      { id: 'tooltips', label: 'Тултипы', description: 'Добавляет пояснения при наведении курсора.', hint: 'Показывайте краткую подсказку или расширенное объяснение по hover.', accent: 'var(--color-success-300)', icon: Info },
      { id: 'hover-state', label: 'Hover-события', description: 'Настраивает реакции на наведение и фокус.', hint: 'Подсветка, звуковой отклик, показ бейджей и вторичных действий.', accent: 'var(--color-success-200)', icon: Bell }
    ]
  }
];

export { categories };
export default createStylistState;
