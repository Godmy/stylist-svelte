<script lang="ts">
  import Story from '$stylist/playground/component/molecule/story/index.svelte';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import RoutePlanner from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'showSearch', type: 'boolean', defaultValue: true },
    { name: 'showRouteOptions', type: 'boolean', defaultValue: true },
    { name: 'showDirections', type: 'boolean', defaultValue: true },
    { name: 'showMap', type: 'boolean', defaultValue: true },
    { name: 'showTravelMode', type: 'boolean', defaultValue: true },
    { name: 'height', type: 'text', defaultValue: '520px' },
    { name: 'width', type: 'text', defaultValue: '100%' }
  ];

  const startLocation = {
    id: 'start',
    name: 'Санкт-Петербург',
    address: 'Лиговский проспект, 30',
    latitude: 59.9311,
    longitude: 30.3609
  };

  const endLocation = {
    id: 'end',
    name: 'Москва',
    address: 'Нагатинская набережная, 34',
    latitude: 55.7089,
    longitude: 37.6543
  };

  const waypoints = [
    { id: 'wp-1', name: 'Великий Новгород', address: 'ул. Большая Санкт-Петербургская, 25', latitude: 58.5215, longitude: 31.2755 },
    { id: 'wp-2', name: 'Тула', address: 'Октябрьская ул., 92', latitude: 54.1961, longitude: 37.6182 }
  ];

  const routeOptions = [
    { id: 'fastest', name: 'Быстрый', duration: 420, distance: 705 },
    { id: 'eco', name: 'Экономичный', duration: 470, distance: 690 },
    { id: 'scenic', name: 'Без платных', duration: 520, distance: 730 }
  ];
</script>

<Story {controls} component={RoutePlanner} title="RoutePlanner" category="Organisms/Geo/RoutePlanner" description="Interactive route planner">
  {#snippet children(values: any)}
    <RoutePlanner
      startLocation={startLocation}
      endLocation={endLocation}
      waypoints={waypoints}
      routeOptions={routeOptions}
      showSearch={values.showSearch as boolean}
      showRouteOptions={values.showRouteOptions as boolean}
      showDirections={values.showDirections as boolean}
      showMap={values.showMap as boolean}
      showTravelMode={values.showTravelMode as boolean}
      height={values.height as string}
      width={values.width as string}
    />
  {/snippet}
</Story>
