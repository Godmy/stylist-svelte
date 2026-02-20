<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import TimeGrid from './index.svelte';
  import type { ITimeGridProps, CalendarEvent } from './types';
  import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';

  // Sample events data
  const sampleEvents: CalendarEvent[] = [
    {
      id: '1',
      title: 'Team Meeting',
      start: new Date(new Date().setHours(10, 0, 0, 0)),
      end: new Date(new Date().setHours(11, 30, 0, 0)),
      location: 'Conference Room A',
      color: '#3b82f6',
      allDay: false
    },
    {
      id: '2',
      title: 'Design Review',
      start: (() => {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        date.setHours(14, 0, 0, 0);
        return date;
      })(),
      end: (() => {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        date.setHours(15, 30, 0, 0);
        return date;
      })(),
      location: 'Design Studio',
      color: '#10b981',
      allDay: false
    },
    {
      id: '3',
      title: 'Client Call',
      start: (() => {
        const date = new Date();
        date.setDate(date.getDate() + 2);
        date.setHours(9, 0, 0, 0);
        return date;
      })(),
      end: (() => {
        const date = new Date();
        date.setDate(date.getDate() + 2);
        date.setHours(10, 0, 0, 0);
        return date;
      })(),
      location: 'Phone',
      color: '#8b5cf6',
      allDay: false
    },
    {
      id: '4',
      title: 'Full Day Event',
      start: new Date(new Date().setDate(new Date().getDate() + 3)),
      end: new Date(new Date().setDate(new Date().getDate() + 3)),
      location: 'Office',
      color: '#f59e0b',
      allDay: true
    }
  ];

  const controls = [
    {
      name: 'showHeader',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'showCurrentTimeIndicator',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'timeStep',
      type: CONTROL_TYPES.SELECT,
      options: [15, 30, 60, 120],
      defaultValue: 60
    }
  ];

  function handleEventClick(event: CalendarEvent) {
    console.log('Event clicked:', event.title);
  }

  function handleSlotClick(date: Date) {
    console.log('Time slot clicked:', date);
  }

  const timeGridProps = (values: any) =>
    ({
      events: sampleEvents,
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 6)),
      showHeader: values.showHeader,
      showCurrentTimeIndicator: values.showCurrentTimeIndicator,
      timeStep: values.timeStep,
      onEventClick: handleEventClick,
      onSlotClick: handleSlotClick
    }) as any;
</script>

<Story
  {controls}
  title="TimeGrid"
  category="Organisms/Calendar"
  description="Interactive time grid with detailed scheduling view."
  tags={['calendar', 'time-grid', 'scheduler', 'events']}
>
  {#snippet children(values: any)}
    <TimeGrid {...timeGridProps(values)} />
  {/snippet}
</Story>

