<script lang="ts">
  import Story from '$stylist/playground/component/molecule/story/index.svelte';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import MapMarker from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'title', type: 'text', defaultValue: 'Map Marker Title' },
    { name: 'description', type: 'text', defaultValue: 'Marker description text' },
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
    { name: 'type', type: 'select', options: ['default', 'restaurant', 'hotel', 'attraction'], defaultValue: 'default' },
    { name: 'color', type: 'select', options: ['primary', 'success', 'warning', 'danger'], defaultValue: 'primary' },
    { name: 'pinStyle', type: 'select', options: ['vector', 'flag', 'circle'], defaultValue: 'vector' },
    { name: 'showPopup', type: 'boolean', defaultValue: false },
    { name: 'showRating', type: 'boolean', defaultValue: false },
    { name: 'showContactInfo', type: 'boolean', defaultValue: false },
    { name: 'distance', type: 'text', defaultValue: '1.2 km' }
  ];
</script>

<Story {controls} component={MapMarker} title="MapMarker" category="Organisms/Geo/MapMarker" description="Map marker with popup and category-based icons">
  {#snippet children(values: any)}
    <MapMarker
      title={values.title as string}
      description={values.description as string}
      size={values.size as 'sm' | 'md' | 'lg'}
      type={values.type as string}
      color={values.color as string}
      pinStyle={values.pinStyle as 'vector' | 'flag' | 'circle'}
      showPopup={values.showPopup as boolean}
      showRating={values.showRating as boolean}
      showContactInfo={values.showContactInfo as boolean}
      distance={values.distance as string}
    />
  {/snippet}
</Story>
