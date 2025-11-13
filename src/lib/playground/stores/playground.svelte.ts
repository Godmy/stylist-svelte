/**
 * Playground State Management
 * Using Svelte 5 runes for reactive state
 */

import type { PlaygroundState, StoryConfig, ControlConfig } from '../types';

export type ViewportSize = 'mobile' | 'tablet' | 'desktop' | 'fullscreen';
export type BackgroundType = 'white' | 'gray' | 'dark' | 'transparent';

// Re-export types for convenience
export type { PlaygroundState, StoryConfig, ControlConfig };

class PlaygroundStore {
  // Core state
  state = $state<PlaygroundState>({
    currentStoryId: null,
    darkMode: false,
    sidebarOpen: true,
    viewport: 'desktop',
    showCode: false,
    controlsOpen: true,
    bottomTab: 'controls',
    sidebarTab: 'variants'
  });

  // Extended UI state for playground
  uiState = $state({
    background: 'white' as BackgroundType,
    showGrid: false,
    showRulers: false,
    zoom: 1,
    bottomPanelOpen: true
  });

  // Stories registry
  stories = $state<Map<string, StoryConfig>>(new Map());

  // Control values for current story
  controlValues = $state<Record<string, any>>({});

  // Methods
  registerStory(story: StoryConfig) {
    const wasEmpty = this.stories.size === 0;
    const isSameStory = this.state.currentStoryId === story.id;
    const existingStory = this.stories.get(story.id);

    // Check if story actually changed - compare stringified version to avoid deep comparison
    const storyChanged = !existingStory || JSON.stringify(existingStory) !== JSON.stringify(story);

    if (storyChanged) {
      this.stories.set(story.id, story);
    }

    if (wasEmpty || this.state.currentStoryId === null) {
      this.setCurrentStory(story.id);
      return;
    }

    // Only re-set current story if it's the same story AND it actually changed
    if (isSameStory && storyChanged) {
      this.setCurrentStory(story.id);
    }
  }

  unregisterStory(id: string) {
    this.stories.delete(id);

    if (this.state.currentStoryId === id) {
      const next = this.stories.keys().next().value ?? null;
      this.setCurrentStory(next ?? null);
    }
  }

  setCurrentStory(id: string | null) {
    const previousId = this.state.currentStoryId;
    const previousValues = this.controlValues;

    this.state.currentStoryId = id;

    if (!id) {
      this.controlValues = {};
      return;
    }

    const story = this.stories.get(id);

    if (!story) {
      this.controlValues = {};
      return;
    }

    if (story.controls && story.controls.length > 0) {
      const mergedValues = story.controls.reduce((acc, control) => {
        if (previousId === id && control.name in previousValues) {
          acc[control.name] = previousValues[control.name];
        } else {
          acc[control.name] = control.defaultValue;
        }
        return acc;
      }, {} as Record<string, any>);

      this.controlValues = mergedValues;
    } else {
      this.controlValues = {};
    }
  }

  toggleSidebar() {
    this.state.sidebarOpen = !this.state.sidebarOpen;
  }

  setViewport(viewport: PlaygroundState['viewport']) {
    this.state.viewport = viewport;
  }

  toggleCode() {
    this.state.showCode = !this.state.showCode;
  }

  toggleControls() {
    this.state.controlsOpen = !this.state.controlsOpen;
  }

  updateControl(name: string, value: any) {
    this.controlValues[name] = value;
  }

  // Extended UI methods
  setBackground(bg: BackgroundType) {
    this.uiState.background = bg;
  }

  toggleGrid() {
    this.uiState.showGrid = !this.uiState.showGrid;
  }

  toggleRulers() {
    this.uiState.showRulers = !this.uiState.showRulers;
  }

  setZoom(zoom: number) {
    this.uiState.zoom = Math.max(0.25, Math.min(2, zoom));
  }

  zoomIn() {
    this.setZoom(this.uiState.zoom + 0.1);
  }

  zoomOut() {
    this.setZoom(this.uiState.zoom - 0.1);
  }

  resetZoom() {
    this.uiState.zoom = 1;
  }

  toggleBottomPanel() {
    this.uiState.bottomPanelOpen = !this.uiState.bottomPanelOpen;
  }

  setBottomTab(tab: 'controls' | 'code' | 'tokens') {
    this.state.bottomTab = tab;
  }

  setSidebarTab(tab: 'variants' | 'props' | 'docs' | 'code' | 'a11y') {
    this.state.sidebarTab = tab;
  }

  toggleDarkMode() {
    this.state.darkMode = !this.state.darkMode;
    if (this.state.darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  init() {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      this.state.darkMode = true;
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light' || !savedTheme) {
      this.state.darkMode = false;
      document.documentElement.classList.remove('dark');
    }
  }

  getCurrentStory(): StoryConfig | undefined {
    if (!this.state.currentStoryId) return undefined;
    return this.stories.get(this.state.currentStoryId);
  }

  getStoriesByCategory(): Map<string, StoryConfig[]> {
    const categorized = new Map<string, StoryConfig[]>();

    this.stories.forEach((story) => {
      const category = story.category || 'Uncategorized';
      const list = categorized.get(category) || [];
      list.push(story);
      categorized.set(category, list);
    });

    const sorted = new Map<string, StoryConfig[]>();

    [...categorized.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .forEach(([category, stories]) => {
        const orderedStories = [...stories].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        sorted.set(category, orderedStories);
      });

    return sorted;
  }
}

// Export singleton instance
export const playgroundStore = new PlaygroundStore();
