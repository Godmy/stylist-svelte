import type { StylistCategoryId } from '$stylist/development/type/struct/stylist-category-id';
export const categories = [
  {
    id: 'architecture' as StylistCategoryId,
    label: 'Архитектурные',
    description: 'Размер, компоновка и пространственная структура компонента.',
    accent: 'var(--color-primary-600)',
    icon: 'building-2',
    options: [
      { id: 'size', label: 'Размер', description: 'Контролирует общий масштаб и плотность блока.', hint: 'Меняйте высоту, ширину и визуальный вес компонента.', accent: 'var(--color-primary-600)', icon: 'ruler' },
      { id: 'layout', label: 'Расположение', description: 'Отвечает за выравнивание и направление компоновки.', hint: 'Подходит для выбора сетки, выравнивания и ориентации.', accent: 'var(--color-primary-700)', icon: 'layout' },
      { id: 'padding', label: 'Паддинги', description: 'Управляет внутренними отступами и дыханием интерфейса.', hint: 'Помогает регулировать внутренний воздух внутри карточки или панели.', accent: 'var(--color-primary-500)', icon: 'grid' },
      { id: 'margin', label: 'Марджины', description: 'Настраивает внешний ритм между соседними блоками.', hint: 'Используйте для разделения секций и стабилизации композиции.', accent: 'var(--color-primary-400)', icon: 'layers' }
    ]
  },
  {
    id: 'information' as StylistCategoryId,
    label: 'Информационные',
    description: 'Цвет, типографика и читаемость содержимого.',
    accent: 'var(--color-warning-600)',
    icon: 'info',
    options: [
      { id: 'color', label: 'Цвет', description: 'Настраивает палитру, акценты и контраст.', hint: 'Влияет на фоны, акценты, текст и эмоциональный тон интерфейса.', accent: 'var(--color-warning-500)', icon: 'palette' },
      { id: 'font-family', label: 'Шрифт', description: 'Выбирает характер типографики для блока.', hint: 'Переключайтесь между нейтральным, редакционным и техническим стилем.', accent: 'var(--color-warning-500)', icon: 'type' },
      { id: 'font-size', label: 'Размер шрифта', description: 'Регулирует иерархию текста и плотность чтения.', hint: 'Полезно для усиления заголовков и балансировки secondary-copy.', accent: 'var(--color-warning-400)', icon: 'ruler' },
      { id: 'contrast', label: 'Контраст', description: 'Подтягивает читаемость и визуальный фокус.', hint: 'Используйте для режимов повышенной доступности и светотени.', accent: 'var(--color-warning-300)', icon: 'layers' }
    ]
  },
  {
    id: 'interaction' as StylistCategoryId,
    label: 'Интерактивные',
    description: 'Поведение на клик, hover и ответ интерфейса на действия.',
    accent: 'var(--color-success-600)',
    icon: 'hand',
    options: [
      { id: 'press-action', label: 'Нажатие', description: 'Определяет действие по клику или tap-жесту.', hint: 'Открыть модалку, отправить событие, запустить сценарий или переключение.', accent: 'var(--color-success-500)', icon: 'hand' },
      { id: 'verdict', label: 'Вердикт', description: 'Задаёт статус, подтверждение или реакцию после действия.', hint: 'Подходит для success, warning, validation и async-result состояний.', accent: 'var(--color-success-400)', icon: 'check-circle' },
      { id: 'tooltips', label: 'Тултипы', description: 'Добавляет пояснения при наведении курсора.', hint: 'Показывайте краткую подсказку или расширенное объяснение по hover.', accent: 'var(--color-success-300)', icon: 'info' },
      { id: 'hover-state', label: 'Hover-события', description: 'Настраивает реакции на наведение и фокус.', hint: 'Подсветка, звуковой отклик, показ бейджей и вторичных действий.', accent: 'var(--color-success-200)', icon: 'bell' }
    ]
  }
] satisfies Array<{
	id: StylistCategoryId;
	label: string;
	description: string;
	accent: string;
	icon: string;
	options: Array<{
		id: string;
		label: string;
		description: string;
		hint: string;
		accent: string;
		icon: string;
	}>;
}>;
