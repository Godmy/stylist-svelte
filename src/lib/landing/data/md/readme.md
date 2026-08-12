# Инспекция компонентов: `molecule` и `organism`

Область: `stylist-svelte/src/lib/landing/component/molecule` и `stylist-svelte/src/lib/landing/component/organism`.

> Обновлено: изображения в landing-компонентах переведены с сырых `<img>` на атом `Image` из домена `image`, а разделители секций (`border-top`) — на атом `Divider` из домена `layout`. См. раздел «Доработка» в конце файла.

## Molecule (5 компонентов)

### 1. HeroMediaSection
Блок «текст + медиа» — эйброу, заголовок и опциональный лид-параграф слева/сверху, картинка справа (grid 2 колонки). Используется как база для hero и media-секций.
[`HeroMediaSection`](../../component/molecule/hero-media-section/index.svelte)
    [`Heading`](../../../typography/component/atom/heading/index.svelte) — заголовок, `level` настраиваемый (1–3)
    [`Text`](../../../typography/component/atom/text/index.svelte) — эйброу (uppercase, extrabold)
    [`Paragraph`](../../../typography/component/molecule/paragraph/index.svelte) — лид-текст
    [`Image`](../../../image/component/atom/image/index.svelte) — картинка, `size="xl"`, проброшен новый проп `imageLoading` (`eager`/`lazy`, по умолчанию `lazy`)

### 2. NameHeroMediaItems
Сетка карточек «имя + описание» (3 колонки), например список персон/фич под hero-медиа блоком. Атомов нет — чистая разметка без импортов из stylist (только `<strong>`/`<span>`).
[`NameHeroMediaItems`](../../component/molecule/name-hero-media-items/index.svelte)

### 3. NavBar
Навигационная панель лендинга: слот бренда, ссылки по секциям, ссылка входа, слот переключателя языка, переключатель темы.
[`NavBar`](../../component/molecule/nav-bar/index.svelte)
    [`Link`](../../../typography/component/atom/link/index.svelte) — секционные ссылки и sign-in
    [`ThemeModeToggle`](../../../theme/component/atom/theme-mode-toggle/index.svelte) — переключатель светлой/тёмной темы
    Snippet-слоты: `brand`, `languageControl` (кастомный контент снаружи)

### 4. SectionHeading
Стандартный заголовок секции — эйброу + h2. Переиспользуется во многих organism (cases, result, workflow).
[`SectionHeading`](../../component/molecule/section-heading/index.svelte)
    [`Text`](../../../typography/component/atom/text/index.svelte) — эйброу
    [`Heading`](../../../typography/component/atom/heading/index.svelte) — заголовок, жёстко `level={2}`

### 5. StepList
Нумерованный список шагов (например, «как это работает») с кастомными маркерами-счётчиками (01, 02…). Атомов нет — чистый `<ol>/<li>`, нумерация через CSS `counter()`.
[`StepList`](../../component/molecule/step-list/index.svelte)

---

## Organism (6 компонентов)

### 1. CasesSection
Секция кейсов/портфолио — заголовок секции + сетка карточек (первые 2 — широкие, span 3, остальные — span 2 из 6 колонок).
[`CasesSection`](../../component/organism/cases-section/index.svelte)
    [`SectionHeading`](../../component/molecule/section-heading/index.svelte) — заголовок секции
    [`Card`](../../../layout/component/molecule/card/index.svelte) — карточка с media-снипетом
    [`Image`](../../../image/component/atom/image/index.svelte) — картинка кейса внутри snippet `media`, `size="xl"`
    [`Text`](../../../typography/component/atom/text/index.svelte) — kicker
    [`Heading`](../../../typography/component/atom/heading/index.svelte) — заголовок карточки
    [`Paragraph`](../../../typography/component/molecule/paragraph/index.svelte) — тело и результат

### 2. DefinitionSection
Секция «определение/тезис» — тонкая обёртка над `DividerHeadingImageText` (домен `image`): даёт странично-специфичный padding и пробрасывает CSS-переменные `--definition-section-*` во внутренние `--divider-heading-image-text-*`. Публичный проп-интерфейс и стори не менялись.
[`DefinitionSection`](../../component/organism/definition-section/index.svelte)
    [`DividerHeadingImageText`](../../../image/component/molecule/divider-heading-image-text/index.svelte) — вся визуальная композиция теперь здесь, см. раздел «Перенос» ниже

### 3. HeroSection
Верхняя секция лендинга целиком — навбар + hero-медиа блок + лид-параграф. Композиция трёх готовых блоков.
[`HeroSection`](../../component/organism/hero-section/index.svelte)
    [`NavBar`](../../component/molecule/nav-bar/index.svelte) — с прокидываемыми snippet-слотами `brand`, `languageControl`
    [`HeroMediaSection`](../../component/molecule/hero-media-section/index.svelte) — заголовок + картинка (без eyebrow/lead, level по умолчанию 1), передаёт `imageLoading="eager"` — единственное место, где картинка загружается не лениво, так как это контент над фолдом (LCP)
    [`Paragraph`](../../../typography/component/molecule/paragraph/index.svelte) — лид-текст

### 4. IntroSection
Вводная секция, почти идентична `DefinitionSection`, но без второго (statement) параграфа — только `HeroMediaSection` + один body-параграф.
[`IntroSection`](../../component/organism/intro-section/index.svelte)
    [`HeroMediaSection`](../../component/molecule/hero-media-section/index.svelte) — level 2, с eyebrow
    [`Paragraph`](../../../typography/component/molecule/paragraph/index.svelte) — body
    [`Divider`](../../../layout/component/atom/divider/index.svelte) — верхний разделитель секции

Заметка: структурно дублирует `DefinitionSection` (различие только в наличии `statement`) — кандидат на объединение при доработке.

### 5. ResultSection
Финальная секция с CTA — картинка слева, справа `SectionHeading` + текст + кнопка-ссылка призыва к действию.
[`ResultSection`](../../component/organism/result-section/index.svelte)
    [`SectionHeading`](../../component/molecule/section-heading/index.svelte)
    [`Paragraph`](../../../typography/component/molecule/paragraph/index.svelte) — body
    [`Link`](../../../typography/component/atom/link/index.svelte) — CTA-кнопка (стилизована как кнопка через `background`)
    [`Image`](../../../image/component/atom/image/index.svelte) — картинка результата, `size="xl"`
    [`Divider`](../../../layout/component/atom/divider/index.svelte) — верхний разделитель секции

### 6. WorkflowSection
Самая сложная секция — заголовок, пара «список шагов + картинка», плюс сравнительная таблица (например, «мы vs конкуренты»). Единственный organism, использующий table-компонент и вычисляемые (`$derived`) структуры данных.
[`WorkflowSection`](../../component/organism/workflow-section/index.svelte)
    [`SectionHeading`](../../component/molecule/section-heading/index.svelte)
    [`StepList`](../../component/molecule/step-list/index.svelte)
    [`Heading`](../../../typography/component/atom/heading/index.svelte) — заголовок таблицы
    [`ComparisonTable`](../../../table/component/molecule/comparison-table/index.svelte) — принимает `features`/`products`, вычисленные из `comparisonCriteria`/`comparisonColumns`/`comparisonRows`
    [`Image`](../../../image/component/atom/image/index.svelte) — картинка воркфлоу, `size="xl"`
    [`Divider`](../../../layout/component/atom/divider/index.svelte) — верхний разделитель секции

---

## Доработка: подключение домена `image` и `Divider` (актуально)

**Была найдена причина, почему `image`-домен не встречался в `landing`**: все landing-компоненты рисовали картинки сырыми `<img>` тегами напрямую в разметке, хотя в `image/component/atom/image` уже существовал полноценный атом `Image` (с состоянием загрузки, fallback-картинкой, fade-in при загрузке, size-токенами). До этой правки `Image` не импортировался ни одним компонентом за пределами собственного домена — это подтверждено поиском (`grep` по всему `stylist-svelte/src/lib`).

Внесены изменения:
1. **`Image` атом (image-домен) доработан**, чтобы быть пригодным для full-bleed сценариев landing:
   - `class`-проп теперь применяется к корневому контейнеру (`.c-image`), а не к `<img>` — по аналогии с `Card`/`Divider` и остальными атомами дизайн-системы.
   - Добавлены CSS custom properties `--image-width`, `--image-height`, `--image-object-fit`, `--image-radius`, `--image-background` с фолбэками, совпадающими со старым хардкодом (визуальной регрессии для существующих потребителей нет).
   - Файлы: `image/component/atom/image/index.svelte`, `image/component/atom/image/state.svelte.ts`.
2. **Раздутые `<img>` в landing заменены на `Image`**: `HeroMediaSection`, `CasesSection`, `ResultSection`, `WorkflowSection`. Каждый компонент передаёт `class="{component}__image"` и через `:global()` задаёт `--image-width: 100%; --image-height: 100%; --image-radius: 0;`, чтобы `Image` заполнял уже существующий обрамляющий `<figure>`/`Card`-media блок без визуальных отличий от прежнего поведения.
3. **`border-top`-разделители заменены на `Divider`** (layout-домен) в `DefinitionSection`, `IntroSection`, `ResultSection`, `WorkflowSection`. Цвет линии по-прежнему настраивается через прежние CSS-переменные секции (`--{section}-border`) — проброшены в локальный `--color-border-secondary` на самом `Divider`.
4. `ResultSection` получил дополнительную grid-обёртку `.result-section__grid`, так как `Divider` не может быть третьим элементом в исходной 2-колоночной сетке секции без поломки раскладки.
5. `HeroMediaSection` получил новый проп `imageLoading` (`'eager' | 'lazy'`, по умолчанию `'lazy'`) — раньше сырой `<img>` не указывал `loading` вовсе (браузер грузил eager), а переход на `Image`-атом сделал бы hero-картинку тоже ленивой по умолчанию, что вредно для LCP. `HeroSection` явно передаёт `imageLoading="eager"`.
6. Проверено: `yarn check` (svelte-check) — 0 ошибок, 0 предупреждений. Barrel `index.ts` регенерированы через `stylist/indexation/cli.py` — изменений не потребовалось (публичные экспорты не менялись).

### Что ещё стоит прокачать в `image`-домене дальше
- `ImageCaption` (переименован из `ImageWithCaption`, `image/component/atom/image-caption`) существует, но нигде не используется — потенциально применим в `CasesSection` вместо ручной сборки `Text`+`Heading`+`Paragraph` поверх `Card`.
- `ImageGallery`, `CanvasImageEditor` (image/organism) — тоже полностью изолированы от остального кода, не задействованы ни в одном домене за пределами `image`.
- Стоит рассмотреть единый `srcSet`/`thumbnail` проп (уже есть в `SlotImage`, но не используется в `Image`-атоме и не пробрасывается из landing) для реальной responsive-загрузки картинок лендинга.

### Story-инфраструктура домена `image` (актуально)
1. **`image/component/atom/image/index.story.svelte` переработан**: вместо статичной сетки из 5 захардкоженных `https://via.placeholder.com/...` карточек — один живой превью (управляемый контролами `Story`) плюс компактное сравнение size-токенов (`sm`/`md`/`lg`/`xl`) на одном и том же изображении. Дефолтное изображение — реальный ассет домена `image/data/png/2-section-about.png` (было: внешний placeholder-сервис). Добавлен тумблер `simulateError`, наглядно демонстрирующий встроенный fallback-механизм атома (битый `src` → автопереключение на `fallback`).
2. **`image-with-caption` переименован в `image-caption`** (директория, компонент `ImageCaption`, интерфейс `RecipeImageCaption`, стейт `createImageCaptionState`, CSS-классы `c-image-caption*`). Затронуты `image/component/atom/image-caption/**` и `image/interface/recipe/image-caption/index.ts`. Не путать с `svg/const/value/image-with-caption` — это отдельная, не связанная SVG-иконка из домена `svg`, её переименование не касается.
3. **Story `ImageCaption` показывает один компонент** и переключается между 4 предустановленными пресетами (select `preset`) вместо ручной раскладки «primary + 3 варианта».
4. **Добавлена переиспользуемая инфраструктура для дальнейшего развития домена**:
   - `image/type/object/image-story-asset` — тип записи галереи (`id`/`label`/`src`).
   - Story-галерея PNG и `IMAGE_CAPTION_STORY_PRESETS` живут локально в соответствующих `index.story.svelte`, чтобы демонстрационные данные не попадали в публичный `const` API.
   - Тот же приём (локальные story presets поверх реальных ассетов) стоит повторить для `ImageGallery` и `CanvasImageEditor`, когда до них дойдут руки — они тоже сейчас изолированы и не показывают реальные ассеты домена.
5. Проверено: `yarn check` (svelte-check) — 0 ошибок, 0 предупреждений; barrel `index.ts` регенерированы через `stylist/indexation/cli.py`.

### Исправлен size-токен `xl` в `Image` (баг)
У `.c-image__img--xl` было `max-width: 100%`. Контейнер атома `.c-image` — `display: inline-block` без явной ширины, поэтому `100%` резолвился относительно неопределённого containing block и на практике визуально совпадал с `lg` (37.5rem) вместо того, чтобы быть больше. Заменено на `max-width: none` (без потолка) — размерная шкала `sm`/`md`/`lg`/`xl` теперь детерминирована и не зависит от контекста, а full-bleed-заполнение контейнера (как в landing) по-прежнему управляется отдельным механизмом — CSS-переменными `--image-width`/`--image-height`. В story `image/component/atom/image/index.story.svelte` ряд сравнения размеров получил `overflow-x: auto`, чтобы неограниченный `xl` на реальном крупном PNG не ломал раскладку.

## Перенос `DefinitionSection` в домен `image`: `DividerHeadingImageText`

Композиция «подписанный разделитель + блок заголовок/картинка (2:1) + полноширинный текстовый блок» была специфична только для `DefinitionSection`, хотя по сути является общей image+text компоновкой, а не landing-специфичной. Вынесена в переиспользуемый molecule:

- **`image/component/molecule/divider-heading-image-text`** (+ `image/interface/recipe/divider-heading-image-text`) — новый molecule в домене `image`. Состав: `Divider` (layout/atom, с опциональным `label`) → `.{...}__block-one` (grid `2fr 1fr`: `Text`+`Heading` слева, `Image` справа) → `.{...}__block-two` (полноширинный `Paragraph` body + опциональный `Paragraph` statement). Не зависит от `landing` (собран напрямую из `image`/`layout`/`typography` атомов и молекул — раньше через `HeroMediaSection` была бы обратная зависимость `image → landing`).
- **`DefinitionSection`** (`landing/component/organism/definition-section`) стал тонкой обёрткой: рендерит `DividerHeadingImageText` с `class="definition-section"`, пробрасывает старые CSS-переменные `--definition-section-*` во внутренние `--divider-heading-image-text-*`, добавляет только page-level `padding`. Публичный проп-интерфейс и `index.story.svelte` не менялись — `dividerLabel` = `eyebrow` (в этой секции у разделителя нет отдельного текста, кроме имени секции).
- `IntroSection` пока НЕ переведён на новый molecule (не запрашивалось) — он всё ещё держит собственные `Divider`+`HeroMediaSection`+`Paragraph`. Дублирование с `DefinitionSection`, отмеченное выше, теперь можно закрыть, переведя и его на `DividerHeadingImageText` (у него просто `statement` не передаётся).
- У нового molecule своя story: `image/component/molecule/divider-heading-image-text/index.story.svelte` — переиспользует `IMAGE_STORY_GALLERY` для выбора картинки и повторяет пример «Definition» из старой `definition-section`-стори.
- Barrel `index.ts` регенерированы через `stylist/indexation/cli.py` (потребовалось два прохода — при первом новый `component/molecule` кластер не подхватился в родительском `image/component/index.ts`, второй проход досчитал). `yarn check` — 0 ошибок.
