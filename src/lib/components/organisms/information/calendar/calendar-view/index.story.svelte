<script>
  import CalendarView from './index.svelte';

  // Sample events data for the CalendarView component
  const sampleEvents = [
    { id: '1', title: 'Meeting', start: new Date(2023, 5, 15, 10, 0), end: new Date(2023, 5, 15, 11, 0) },
    { id: '2', title: 'Lunch', start: new Date(2023, 5, 16, 12, 30), end: new Date(2023, 5, 16, 13, 30) },
    { id: '3', title: 'Conference', start: new Date(2023, 5, 18, 9, 0), end: new Date(2023, 5, 20, 17, 0) }
  ];
</script>

<svelte:head>
  <title>CalendarView Story</title>
</svelte:head>

<div class="sb-organisms-calendar-view">
  <CalendarView
    events={sampleEvents}
  />
</div>
