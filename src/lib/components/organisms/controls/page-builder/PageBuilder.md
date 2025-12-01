# PageBuilder Component

## Описание

PageBuilder - это компонент для визуального конструирования веб-страниц. Он позволяет пользователям добавлять, перемещать и редактировать элементы страницы через интуитивный интерфейс "перетаскивания".

## Архитектура

Компонент PageBuilder следует принципам SAMO (SOLID + Atomic Design):

- **Single Responsibility Principle**: Каждый файл в компоненте имеет одну ответственность:
  - `PageBuilder.svelte` - отвечает за логику отображения
  - `styles.ts` - отвечает за стилизацию
  - `types.ts` - отвечает за типизацию
  - `PageBuilder.story.svelte` - отвечает за документацию в Storybook
  - `index.ts` - отвечает за экспорт компонента

- **Open/Closed Principle**: Компонент открыт для расширения, но закрыт для модификации. Новые элементы могут быть добавлены без изменения основной логики.

- **Liskov Substitution Principle**: Все типы элементов могут быть использованы взаимозаменяемо.

- **Interface Segregation Principle**: Интерфейсы типов четко разделены и содержат только необходимый минимум свойств.

- **Dependency Inversion Principle**: Компонент зависит от абстракций (интерфейсов), а не от конкретных реализаций.

## Использование

```svelte
<script>
  import { PageBuilder } from 'stylist-svelte';
</script>

<PageBuilder
  showToolbar={true}
  showPreview={false}
  onSave={(elements) => console.log('Saved elements:', elements)}
/>
```

## Свойства

| Свойство       | Тип                        | По умолчанию | Описание                             |
|----------------|----------------------------|--------------|--------------------------------------|
| initialElements | IElement[]                 | []           | Начальные элементы для отображения   |
| onSave         | (elements: IElement[]) => void | -          | Функция для сохранения элементов     |
| showToolbar    | boolean                     | true         | Показать/скрыть панель инструментов  |
| showPreview    | boolean                     | true         | Показать/скрыть режим предварительного просмотра |
| class          | string                      | ''           | Дополнительные CSS-классы            |

## Типы

Компонент экспортирует следующие типы:

- IPageBuilderProps
- IElement
- ElementType
- IToolbarItem