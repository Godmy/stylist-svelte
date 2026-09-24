<script lang="ts">
  import Story from "$stylist/theme/component/molecule/story/index.svelte";
  import type { SlotStory } from "$stylist/theme/interface/slot/story";
  import BookingAccordion from "./index.svelte";

  const controls: SlotStory[] = [
    {
      name: "showAdventures",
      type: "boolean",
      label: 'Показать секцию "Приключения"',
      defaultValue: true,
    },
    {
      name: "showDuration",
      type: "boolean",
      label: 'Показать секцию "Количество дней"',
      defaultValue: true,
    },
  ];
</script>

<Story
  id="booking-organisms-booking-accordion"
  title="Booking / BookingAccordion"
  component={BookingAccordion}
  category="Booking/Organisms"
  description="Мобильная вертикальная лента: одна секция открыта одновременно (Откуда забрать / Гости / Когда / Количество дней / Приключения). Заголовок каждой секции — всегда живая сводка выбранного (режим чтения), при раскрытии под ним появляются элементы редактирования. Задуман как мобильный аналог BookingBar — переключение между ними через CSS-медиа-запрос на уровне вызывающего компонента, а не JS-детект устройства."
  {controls}
>
  {#snippet children(values)}
    {@const showAdventures = Boolean(values.showAdventures)}
    {@const showDuration = Boolean(values.showDuration)}
    <div class="_surface">
      <BookingAccordion {showAdventures} {showDuration} />
    </div>
  {/snippet}
</Story>

<style>
  ._surface {
    display: flex;
    justify-content: center;
    padding: 24px;
    background: #f7f3ec;
  }
</style>
