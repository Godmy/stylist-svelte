import type { ResourceOptimizerProps } from '$stylist/development/type/struct/resource-optimizer-props';
import type { ResourceOptimizerResourceType } from '$stylist/development/type/struct/resource-optimizer-resource-type';
import type { ResourceOptimizerResource } from '$stylist/development/type/struct/resource-optimizer-resource';
import type { ResourceOptimizerOptimizationSuggestion } from '$stylist/development/type/struct/resource-optimizer-optimization-suggestion';
const HardDrive = 'hard-drive';
const Zap = 'zap';
const Image = 'image';
const File = 'file';
const Package = 'package';
const Upload = 'upload';
const Download = 'download';
const Settings = 'settings';

export function createResourceOptimizerState(props: ResourceOptimizerProps) {
  const resources = $derived(props.resources ?? []);
  const suggestions = $derived(props.suggestions ?? []);
  const showResourceDetails = $derived(props.showResourceDetails ?? true);
  const showOptimizationSuggestions = $derived(props.showOptimizationSuggestions ?? true);
  const showPrioritization = $derived(props.showPrioritization ?? true);
  const showSizeComparison = $derived(props.showSizeComparison ?? true);
  const onResourceOptimize = $derived(props.onResourceOptimize);
  const onApplySuggestions = $derived(props.onApplySuggestions);
  const title = $derived(props.title ?? 'ResourceOptimizerResource Optimizer');
  const description = $derived(props.description ?? 'Optimize your application resources for better performance');
  const className = $derived(props.class ?? '');
  const headerClass = $derived('');
  const resourceClass = $derived('');
  const suggestionClass = $derived('');
  const footerClass = $derived('');

  let expandedResources = $state<Record<string, boolean>>({});
  let selectedOptimizations = $state<string[]>([]);

  function formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  function getResourceTypeIcon(type: ResourceOptimizerResourceType) {
    switch(type) {
      case 'image': return Image;
      case 'api': return Package;
      case 'script': return File;
      case 'stylesheet': return File;
      case 'font': return Settings;
      default: return File;
    }
  }

  function getResourceColor(status: string) {
    switch(status) {
      case 'loaded': return 'bg-green-100 text-green-800';
      case 'loading': return 'bg-blue-100 text-blue-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'cached': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  function toggleResourceDetails(id: string) {
    expandedResources = {
      ...expandedResources,
      [id]: !expandedResources[id]
    };
  }

  function toggleOptimization(id: string) {
    if (selectedOptimizations.includes(id)) {
      selectedOptimizations = selectedOptimizations.filter(sid => sid !== id);
    } else {
      selectedOptimizations = [...selectedOptimizations, id];
    }
  }

  function applySelectedOptimizations() {
    if (onApplySuggestions) {
      onApplySuggestions();
    }
    selectedOptimizations = [];
  }

  const totalSize = $derived(resources.reduce((sum, res) => sum + res.size, 0));
  const totalTransferSize = $derived(resources.reduce((sum, res) => sum + (res.transferSize || res.size), 0));
  const optimizationPotential = $derived(suggestions.reduce((sum, s) => sum + s.estimatedSavings, 0));
  const savingsPercent = $derived(totalSize > 0 ? (optimizationPotential / totalSize) * 100 : 0);

  return {
    get resources() { return resources; },
    get suggestions() { return suggestions; },
    get showResourceDetails() { return showResourceDetails; },
    get showOptimizationSuggestions() { return showOptimizationSuggestions; },
    get showPrioritization() { return showPrioritization; },
    get showSizeComparison() { return showSizeComparison; },
    get title() { return title; },
    get description() { return description; },
    get className() { return className; },
    get headerClass() { return headerClass; },
    get resourceClass() { return resourceClass; },
    get suggestionClass() { return suggestionClass; },
    get footerClass() { return footerClass; },
    get expandedResources() { return expandedResources; },
    get selectedOptimizations() { return selectedOptimizations; },
    get totalSize() { return totalSize; },
    get totalTransferSize() { return totalTransferSize; },
    get optimizationPotential() { return optimizationPotential; },
    get savingsPercent() { return savingsPercent; },
    formatBytes,
    getResourceTypeIcon,
    getResourceColor,
    toggleResourceDetails,
    toggleOptimization,
    applySelectedOptimizations,
    get onResourceOptimize() { return onResourceOptimize; },
    get onApplySuggestions() { return onApplySuggestions; }
  };
}

export default createResourceOptimizerState;
