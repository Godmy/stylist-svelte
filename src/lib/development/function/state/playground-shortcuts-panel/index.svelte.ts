import type { Props, Shortcut } from '$stylist/development/type/struct/playground-shortcuts-panel';

const Keyboard = 'keyboard';
const Command = 'command';
const Search = 'search';
const Zap = 'zap';
const Eye = 'eye';
const SidebarIcon = 'sidebar';
const Layout = 'layout';
const Grid = 'grid';
const Moon = 'moon';
const Code = 'code';
const Copy = 'copy';

const shortcuts: Shortcut[] = [
  { keys: ['Ctrl', '/'], description: 'Toggle Sidebar', category: 'Navigation', icon: SidebarIcon },
  { keys: ['Ctrl', 'B'], description: 'Toggle Bottom Panel', category: 'Navigation', icon: Layout },
  { keys: ['Ctrl', 'K'], description: 'Open Command Palette', category: 'Navigation', icon: Command },
  { keys: ['Ctrl', 'P'], description: 'Quick Search Components', category: 'Navigation', icon: Search },
  { keys: ['Ctrl', 'G'], description: 'Toggle Grid', category: 'View', icon: Grid },
  { keys: ['Ctrl', 'D'], description: 'Toggle Dark Mode', category: 'View', icon: Moon },
  { keys: ['Ctrl', '+'], description: 'Zoom In', category: 'View', icon: Eye },
  { keys: ['Ctrl', '-'], description: 'Zoom Out', category: 'View', icon: Eye },
  { keys: ['Ctrl', '0'], description: 'Reset Zoom', category: 'View', icon: Eye },
  { keys: ['Ctrl', 'C'], description: 'Copy Code', category: 'Actions', icon: Copy },
  { keys: ['Ctrl', 'E'], description: 'Export Component', category: 'Actions', icon: Code },
  { keys: ['Ctrl', 'R'], description: 'Reset All Props', category: 'Actions', icon: Zap },
  { keys: ['Ctrl', 'S'], description: 'Save Variant', category: 'Actions', icon: Zap },
  { keys: ['Alt', '1'], description: 'Mobile Viewport', category: 'Viewport', icon: Layout },
  { keys: ['Alt', '2'], description: 'Tablet Viewport', category: 'Viewport', icon: Layout },
  { keys: ['Alt', '3'], description: 'Desktop Viewport', category: 'Viewport', icon: Layout },
  { keys: ['Alt', '4'], description: 'Fullscreen Viewport', category: 'Viewport', icon: Layout },
  { keys: ['Ctrl', '1'], description: 'Go to Controls Tab', category: 'Tabs', icon: Layout },
  { keys: ['Ctrl', '2'], description: 'Go to Code Tab', category: 'Tabs', icon: Layout },
  { keys: ['Ctrl', '3'], description: 'Go to Actions Tab', category: 'Tabs', icon: Layout },
  { keys: ['Ctrl', '4'], description: 'Go to Variants Tab', category: 'Tabs', icon: Layout },
  { keys: ['?'], description: 'Show Shortcuts Panel', category: 'Misc', icon: Keyboard },
  { keys: ['Esc'], description: 'Close Modals/Panels', category: 'Misc', icon: Keyboard },
];

export function createPlaygroundShortcutsPanelState(_props: Props) {
  const groupedShortcuts = $derived.by(() => {
    const groups = new Map<string, Shortcut[]>();
    shortcuts.forEach(shortcut => {
      if (!groups.has(shortcut.category)) {
        groups.set(shortcut.category, []);
      }
      groups.get(shortcut.category)!.push(shortcut);
    });
    return groups;
  });

  const categoryOrder = ['Navigation', 'View', 'Actions', 'Viewport', 'Tabs', 'Misc'];

  function getCategoryIcon(category: string) {
    switch (category) {
      case 'Navigation': return SidebarIcon;
      case 'View': return Eye;
      case 'Actions': return Zap;
      case 'Viewport': return Layout;
      case 'Tabs': return Layout;
      case 'Misc': return Keyboard;
      default: return Keyboard;
    }
  }

  function getCategoryColor(category: string) {
    switch (category) {
      case 'Navigation': return 'from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border-indigo-200 dark:border-indigo-800';
      case 'View': return 'from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-green-200 dark:border-green-800';
      case 'Actions': return 'from-orange-50 to-COLOR_AMBER-50 dark:from-orange-900/30 dark:to-COLOR_AMBER-900/30 border-orange-200 dark:border-orange-800';
      case 'Viewport': return 'from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-blue-200 dark:border-blue-800';
      case 'Tabs': return 'from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-purple-200 dark:border-purple-800';
      case 'Misc': return 'from-gray-50 to-slate-50 dark:from-gray-900/30 dark:to-slate-900/30 border-gray-200 dark:border-gray-800';
      default: return 'from-gray-50 to-slate-50 dark:from-gray-900/30 dark:to-slate-900/30 border-gray-200 dark:border-gray-800';
    }
  }

  function getKeyColor(key: string) {
    if (key === 'Ctrl' || key === 'Alt' || key === 'Shift') {
      return 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700';
    }
    return 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600';
  }

  return {
    get shortcuts() { return shortcuts; },
    get groupedShortcuts() { return groupedShortcuts; },
    get categoryOrder() { return categoryOrder; },
    getCategoryIcon,
    getCategoryColor,
    getKeyColor
  };
}

export default createPlaygroundShortcutsPanelState;
