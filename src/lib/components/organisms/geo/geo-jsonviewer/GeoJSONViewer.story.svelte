<script lang="ts">
  import GeoJSONViewer from './GeoJSONViewer.svelte';

  // Пример данных GeoJSON
  const sampleGeoJSON = {
    type: 'FeatureCollection' as const,
    features: [
      {
        type: 'Feature' as const,
        properties: {
          name: 'London',
          population: 8900000
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [-0.09, 51.505] as [number, number]
        }
      },
      {
        type: 'Feature' as const,
        properties: {
          name: 'Polygon Area',
          description: 'Sample polygon'
        },
        geometry: {
          type: 'Polygon' as const,
          coordinates: [[
            [-0.1, 51.5],
            [-0.05, 51.5],
            [-0.05, 51.55],
            [-0.1, 51.55],
            [-0.1, 51.5]
          ]] as [number, number][][]
        }
      }
    ]
  };

  const sampleLayers = [
    {
      id: 'cities',
      name: 'Cities',
      data: sampleGeoJSON,
      visible: true,
      color: '#3B82F6',
      opacity: 0.8
    }
  ];

  function handleFeatureClick(e: any) {
    console.log('Feature clicked:', e);
  }

  function handleMapClick(e: any) {
    console.log('Map clicked:', e);
  }

  function handleDataChange(e: any) {
    console.log('Data changed:', e);
  }
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">GeoJSONViewer Component</h1>

  <div class="mb-6">
    <h2 class="text-md font-semibold mb-2">Default GeoJSONViewer</h2>
    <div class="border p-4 rounded h-96">
      <GeoJSONViewer
        geojsonData={sampleGeoJSON}
        layers={sampleLayers}
        showControls={true}
        showLayers={true}
        showLegend={true}
        maxZoom={18}
        minZoom={1}
        mapType="roadmap"
        onFeatureClick={handleFeatureClick}
        onMapClick={handleMapClick}
        onDataChange={handleDataChange}
      />
    </div>
  </div>

  <div class="mb-6">
    <h2 class="text-md font-semibold mb-2">Without Controls</h2>
    <div class="border p-4 rounded h-96">
      <GeoJSONViewer
        geojsonData={sampleGeoJSON}
        layers={sampleLayers}
        showControls={false}
        showLayers={true}
        showLegend={true}
        maxZoom={18}
        minZoom={1}
        mapType="roadmap"
      />
    </div>
  </div>

  <div class="mb-6">
    <h2 class="text-md font-semibold mb-2">Without Layers Panel</h2>
    <div class="border p-4 rounded h-96">
      <GeoJSONViewer
        geojsonData={sampleGeoJSON}
        layers={sampleLayers}
        showControls={true}
        showLayers={false}
        showLegend={true}
        maxZoom={18}
        minZoom={1}
        mapType="roadmap"
      />
    </div>
  </div>
</div>