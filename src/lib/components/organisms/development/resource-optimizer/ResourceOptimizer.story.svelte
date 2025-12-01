<script lang="ts">
  import ResourceOptimizer from './ResourceOptimizer.svelte';

  type ResourceType = 'image' | 'script' | 'stylesheet' | 'font' | 'api' | 'other';

  type Resource = {
    id: string;
    name: string;
    url: string;
    type: ResourceType;
    size: number;
    transferSize?: number;
    loadTime?: number;
    status: 'loading' | 'loaded' | 'error' | 'cached';
    priority: 'high' | 'normal' | 'low';
    isOptimized: boolean;
  };

  type OptimizationSuggestion = {
    id: string;
    resourceId: string;
    type: 'compress' | 'resize' | 'cache' | 'preload' | 'lazy-load' | 'cdn';
    description: string;
    estimatedSavings: number;
    implementationEffort: 'low' | 'medium' | 'high';
  };

  const resources: Resource[] = [
    { id: 'cpu', name: 'CPU', url: '/api/cpu', type: 'api', size: 1024, status: 'loaded', priority: 'high', isOptimized: true },
    { id: 'memory', name: 'Memory', url: '/api/memory', type: 'api', size: 2048, status: 'loaded', priority: 'normal', isOptimized: false },
    { id: 'disk', name: 'Disk', url: '/api/disk', type: 'api', size: 4096, status: 'loading', priority: 'low', isOptimized: true },
    { id: 'network', name: 'Network', url: '/api/network', type: 'api', size: 512, status: 'cached', priority: 'high', isOptimized: false }
  ];
</script>

<div class="p-4">
  <h1>ResourceOptimizer Story</h1>
  <ResourceOptimizer
    {resources}
    class="my-2"
  />
</div>