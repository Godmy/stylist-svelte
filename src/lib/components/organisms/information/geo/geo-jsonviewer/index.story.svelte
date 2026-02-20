<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import GeoJSONViewer from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showProperties', type: 'boolean', defaultValue: true },
      { name: 'showZoomControls', type: 'boolean', defaultValue: true },
      { name: 'showLayerControl', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  const sampleGeoJSON = {
    type: 'FeatureCollection' as const,
    features: [
      {
        type: 'Feature' as const,
        properties: { name: 'London', population: 8900000 },
        geometry: { type: 'Point' as const, coordinates: [-0.09, 51.505] as [number, number] }
      },
      {
        type: 'Feature' as const,
        properties: { name: 'Polygon Area', description: 'Sample polygon' },
        geometry: { type: 'Polygon' as const, coordinates: [[[-0.1, 51.5], [-0.05, 51.5], [-0.05, 51.55], [-0.1, 51.55], [-0.1, 51.5]]] as [number, number][][] }
      }
    ]
  };

  function handleFeatureClick(feature: any) {
    console.log('Feature clicked:', feature.properties.name);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={GeoJSONViewer}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-geo-jsonviewer grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary GeoJSON Viewer Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive GeoJSON viewer with customizable options.</p>

        <div class="mt-6 h-96">
          <GeoJSONViewer
            data={sampleGeoJSON}
            showProperties={props.showProperties}
            showZoomControls={props.showZoomControls}
            showLayerControl={props.showLayerControl}
            onFeatureClick={handleFeatureClick}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">GeoJSON Viewer Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different GeoJSON viewer configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Properties</p>
            <div class="h-64">
              <GeoJSONViewer
                data={sampleGeoJSON}
                showProperties={false}
                onFeatureClick={handleFeatureClick}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Minimal Controls</p>
            <div class="h-64">
              <GeoJSONViewer
                data={sampleGeoJSON}
                showZoomControls={false}
                showLayerControl={false}
                onFeatureClick={handleFeatureClick}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>
