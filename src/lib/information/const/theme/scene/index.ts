import type { ThemeScene } from '$stylist/information/type/attribute/theme-scene';

export const THEME_SCENE: ThemeScene = {
	node: {
		radius: {
			dot: '9999px',
			icon: '8px',
			pill: '9999px',
			minimal: '12px',
			compact: '16px',
			detailed: '20px',
			screen: '24px'
		},
		shadow: {
			dot: 'none',
			icon: 'var(--elevation-icon)',
			pill: 'var(--elevation-pill)',
			minimal: 'var(--elevation-level1)',
			compact: 'var(--elevation-level2)',
			detailed: 'var(--elevation-level3)',
			screen: 'var(--elevation-level4)'
		},
		padding: {
			dot: '0',
			icon: '8px',
			pill: '8px 16px',
			minimal: '12px 16px',
			compact: '16px',
			detailed: '20px',
			screen: '24px'
		}
	},
	surface: {
		far: 'var(--color-background-primary)',
		mid: 'var(--color-background-secondary)',
		focus: 'var(--color-background-tertiary)',
		grid: 'var(--color-border-primary)',
		gridVisibleOpacity: '0.3',
		gridHiddenOpacity: '0.05',
		backdrop: 'rgba(0, 0, 0, 0.6)',
		dimmingStrength: '0.5',
		clusterGlow: 'rgba(0, 102, 204, 0.3)',
		clusterHighlight: 'var(--color-primary-400)'
	},
	transitions: {
		dotToIcon: '180ms var(--easing-standard)',
		iconToPill: '200ms var(--easing-standard)',
		pillToMinimal: '220ms var(--easing-emphasized)',
		minimalToCompact: '240ms var(--easing-emphasized)',
		compactToDetailed: '260ms var(--easing-emphasized)',
		detailedToScreen: '280ms var(--easing-emphasized)',
		focusToFullscreen: '320ms var(--easing-emphasized)'
	}
};
