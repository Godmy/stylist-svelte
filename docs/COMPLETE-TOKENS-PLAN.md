# Полный план токенов и объектов дизайн-системы

## Уровень: Material Design 3 + Prezi (AR)

Этот документ содержит **полный перечень** всех токенов, объектов и структур, которые должны быть в дизайн-системе уровня MD3 + Prezi для AR.

---

## 1. ЦВЕТОВАЯ СИСТЕМА (Color System)

### 1.1. Базовые цветовые шкалы (Color Scales)

Каждая шкала должна содержать **13 значений**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, plus 25 и 75 для ultra-light.

```typescript
// architect-svelte/src/lib/design-system/defaults/information/colors-scales/
// Уже есть: amber, blue, gray, green, neutral, red, slate, teal
// Нужно добавить:

COLORS_SCALES_PURPLE; // фиолетовый (brand accent)
COLORS_SCALES_PINK; // розовый (brand accent)
COLORS_SCALES_ORANGE; // оранжевый (warning альтернатива)
COLORS_SCALES_YELLOW; // жёлтый (attention)
COLORS_SCALES_CYAN; // циан (tech accent)
COLORS_SCALES_INDIGO; // индиго (deep brand)
COLORS_SCALES_VIOLET; // фиолетовый (creative)
COLORS_SCALES_FUCHSIA; // фуксия (bold accent)
COLORS_SCALES_ROSE; // роза (soft accent)
COLORS_SCALES_LIME; // лайм (fresh accent)
COLORS_SCALES_EMERALD; // изумруд (premium green)
COLORS_SCALES_SKY; // небесный (light blue)
```

### 1.2. Семантические цветовые роли (Semantic Color Roles)

```typescript
// architect-svelte/src/lib/design-system/contracts/theme/color-roles.ts

interface SemanticColorRoles {
	// Brand primary палитра
	primary: {
		main: string;
		light: string;
		dark: string;
		contrast: string;
		50: string;
		100: string;
		200: string;
		300: string;
		400: string;
		500: string;
		600: string;
		700: string;
		800: string;
		900: string;
	};

	// Brand secondary палитра
	secondary: {
		main: string;
		light: string;
		dark: string;
		contrast: string;
		50: string;
		100: string;
		200: string;
		300: string;
		400: string;
		500: string;
		600: string;
		700: string;
		800: string;
		900: string;
	};

	// Brand tertiary палитра
	tertiary: {
		main: string;
		light: string;
		dark: string;
		contrast: string;
		50: string;
		100: string;
		200: string;
		300: string;
		400: string;
		500: string;
		600: string;
		700: string;
		800: string;
		900: string;
	};

	// Neutral палитра
	neutral: {
		0: string;
		10: string;
		20: string;
		30: string;
		40: string;
		50: string;
		60: string;
		70: string;
		80: string;
		90: string;
		95: string;
		98: string;
		99: string;
		100: string;
	};

	// Status colors
	success: {
		main: string;
		light: string;
		dark: string;
		contrast: string;
		50: string;
		100: string;
		200: string;
		300: string;
		400: string;
		500: string;
		600: string;
		700: string;
		800: string;
		900: string;
	};

	error: {
		main: string;
		light: string;
		dark: string;
		contrast: string;
		50: string;
		100: string;
		200: string;
		300: string;
		400: string;
		500: string;
		600: string;
		700: string;
		800: string;
		900: string;
	};

	warning: {
		main: string;
		light: string;
		dark: string;
		contrast: string;
		50: string;
		100: string;
		200: string;
		300: string;
		400: string;
		500: string;
		600: string;
		700: string;
		800: string;
		900: string;
	};

	info: {
		main: string;
		light: string;
		dark: string;
		contrast: string;
		50: string;
		100: string;
		200: string;
		300: string;
		400: string;
		500: string;
		600: string;
		700: string;
		800: string;
		900: string;
	};
}
```

### 1.3. Surface цвета (Surface Color Hierarchy)

```typescript
// architect-svelte/src/lib/design-system/contracts/theme/surface-colors.ts

interface SurfaceColors {
	// Основные поверхности
	surface: {
		default: string;
		container: string;
		containerLow: string;
		containerHigh: string;
		subtle: string;
		raised: string;
		floating: string;
		overlay: string;
	};

	// Surface с тональностью (tint)
	surfaceTint: {
		level1: string; // 5% tint
		level2: string; // 10% tint
		level3: string; // 15% tint
		level4: string; // 20% tint
		level5: string; // 25% tint
	};

	// Inverse поверхности (для акцентов)
	inverse: {
		surface: string;
		onSurface: string;
	};

	// Специальные поверхности
	special: {
		glass: string; // полупрозрачная
		blur: string; // с blur эффектом
		gradient: string; // градиентная
		mesh: string; // mesh gradient
	};
}
```

### 1.4. Text цвета (Text Color Roles)

```typescript
// architect-svelte/src/lib/design-system/contracts/theme/text-colors.ts

interface TextColors {
	// Основные текстовые цвета
	primary: string;
	secondary: string;
	tertiary: string;
	disabled: string;

	// На акцентах
	onPrimary: string;
	onSecondary: string;
	onTertiary: string;
	onAccent: string;

	// Специальные
	inverse: string;
	link: string;
	linkHover: string;
	linkVisited: string;

	// Status text
	success: string;
	error: string;
	warning: string;
	info: string;
}
```

### 1.5. Border цвета (Border Color Roles)

```typescript
// architect-svelte/src/lib/design-system/contracts/theme/border-colors.ts

interface BorderColors {
	// Основные
	default: string;
	subtle: string;
	strong: string;

	// Контекстные
	primary: string;
	secondary: string;
	accent: string;

	// Inverse
	inverse: string;

	// Status borders
	success: string;
	error: string;
	warning: string;
	info: string;

	// Focus states
	focus: string;
	focusRing: string;
}
```

### 1.6. Accessibility цвета (A11y Color Variants)

```typescript
// architect-svelte/src/lib/design-system/themes/accessibility/

// High Contrast Mode
highContrastTheme: {
  colors: {
    // Увеличенные контрасты (WCAG AAA)
    primary: '#0000EE';
    onPrimary: '#FFFFFF';
    background: '#FFFFFF';
    text: '#000000';
    // ...
  };
};

// Reduced Motion
reducedMotionTheme: {
  motion: {
    duration: { instant: '0ms', fast: '0ms', normal: '0ms', slow: '0ms' };
    easing: { default: 'linear' };
  };
};

// Color Blindness Modes
protanopiaTheme: {    // красно-зелёная слепота (протаны)
  colors: { /* адаптированная палитра */ };
};

deuteranopiaTheme: {  // красно-зелёная слепота (дейтераны)
  colors: { /* адаптированная палитра */ };
};

tritanopiaTheme: {    // сине-жёлтая слепота
  colors: { /* адаптированная палитра */ };
};

achromatopsiaTheme: { // полная цветовая слепота
  colors: { /* монохромная палитра */ };
};
```

---

## 2. ПРОСТРАНСТВЕННАЯ СИСТЕМА (Spatial System)

### 2.1. Spacing Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/spacing/

export const SPACING = {
	// Base scale (4px grid)
	0: '0rem', // 0px
	1: '0.25rem', // 4px
	2: '0.5rem', // 8px
	3: '0.75rem', // 12px
	4: '1rem', // 16px
	5: '1.25rem', // 20px
	6: '1.5rem', // 24px
	7: '1.75rem', // 28px
	8: '2rem', // 32px
	9: '2.25rem', // 36px
	10: '2.5rem', // 40px
	11: '2.75rem', // 44px
	12: '3rem', // 48px
	14: '3.5rem', // 56px
	16: '4rem', // 64px
	20: '5rem', // 80px
	24: '6rem', // 96px
	28: '7rem', // 112px
	32: '8rem', // 128px

	// Semantic names
	none: '0rem',
	xs: '0.25rem',
	sm: '0.5rem',
	md: '1rem',
	lg: '1.5rem',
	xl: '2rem',
	'2xl': '3rem',
	'3xl': '4rem'
} as const;
```

### 2.2. Border Radius Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/border-radius/

export const BORDER_RADIUS = {
	// Numeric scale
	0: '0rem',
	1: '0.125rem', // 2px
	2: '0.25rem', // 4px
	3: '0.375rem', // 6px
	4: '0.5rem', // 8px
	5: '0.75rem', // 12px
	6: '1rem', // 16px
	7: '1.25rem', // 20px
	8: '1.5rem', // 24px
	9: '1.75rem', // 28px
	10: '2rem', // 32px
	11: '2.5rem', // 40px
	12: '3rem', // 48px
	14: '3.5rem', // 56px
	16: '4rem', // 64px
	20: '5rem', // 80px
	24: '6rem', // 96px
	28: '7rem', // 112px
	32: '8rem', // 128px
	full: '9999px',

	// Semantic names
	none: '0rem',
	sm: '0.25rem',
	md: '0.5rem',
	lg: '0.75rem',
	xl: '1rem',
	'2xl': '1.5rem',
	'3xl': '2rem',
	full: '9999px',

	// Shape-specific
	circle: '50%',
	pill: '9999px',

	// MD3-style
	cornerSmall: '0.25rem',
	cornerMedium: '0.5rem',
	cornerLarge: '1rem',
	cornerExtraLarge: '1.75rem',
	cornerFull: '9999px'
} as const;
```

### 2.3. Elevation / Shadow Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/elevation/

export const ELEVATION = {
	// Basic shadows
	none: 'none',
	xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
	sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
	md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
	lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
	xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
	'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
	inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',

	// MD3-style elevation
	level0: 'none',
	level1: '0 1px 2px rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)',
	level2: '0 1px 2px rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15)',
	level3: '0 1px 3px rgba(0,0,0,0.3), 0 4px 8px 3px rgba(0,0,0,0.15)',
	level4: '0 2px 3px rgba(0,0,0,0.3), 0 6px 10px 4px rgba(0,0,0,0.15)',
	level5: '0 4px 4px rgba(0,0,0,0.3), 0 8px 12px 6px rgba(0,0,0,0.15)',

	// Component-specific
	button: '0 2px 4px rgba(0,0,0,0.2)',
	buttonHover: '0 4px 8px rgba(0,0,0,0.2)',
	buttonPressed: '0 1px 2px rgba(0,0,0,0.2)',
	card: '0 2px 8px rgba(0,0,0,0.1)',
	cardHover: '0 8px 16px rgba(0,0,0,0.15)',
	modal: '0 16px 48px rgba(0,0,0,0.3)',
	dropdown: '0 8px 24px rgba(0,0,0,0.15)',
	tooltip: '0 4px 12px rgba(0,0,0,0.15)',

	// Focus states
	focus: '0 0 0 2px rgba(59, 130, 246, 0.5)',
	focusStrong: '0 0 0 3px rgba(59, 130, 246, 0.7)',

	// Custom (existing)
	custom14: '0 8px 32px rgba(0,0,0,0.12)',
	custom15: '0 12px 48px rgba(0,0,0,0.15)',
	custom21: '0 4px 16px rgba(0,0,0,0.08)',
	custom22: '0 16px 64px rgba(0,0,0,0.2)',
	custom23: '0 8px 24px rgba(0,0,0,0.12)',
	custom24: '0 12px 40px rgba(0,0,0,0.15)',
	custom25: '0 6px 20px rgba(0,0,0,0.1)',
	custom26: '0 4px 12px rgba(0,0,0,0.08)',
	custom31: '0 16px 56px rgba(0,0,0,0.18)',
	custom33: '0 24px 80px rgba(0,0,0,0.25)',
	custom35: '0 8px 28px rgba(0,0,0,0.1)'
} as const;
```

### 2.4. Z-Index Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/z-index/

export const Z_INDEX = {
	base: 0,
	dropdown: 100,
	sticky: 200,
	overlay: 300,
	modal: 400,
	popover: 500,
	tooltip: 600,
	notification: 700,

	// Scene-specific
	sceneBackground: -1,
	sceneGrid: 0,
	sceneNode: 10,
	sceneCluster: 20,
	sceneFocus: 30,
	sceneOverlay: 40,
	sceneModal: 50,
	sceneFullscreen: 60
} as const;
```

### 2.5. Opacity Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/opacity/

export const OPACITY = {
	0: '0',
	5: '0.05',
	10: '0.1',
	15: '0.15',
	20: '0.2',
	25: '0.25',
	30: '0.3',
	40: '0.4',
	50: '0.5',
	60: '0.6',
	70: '0.7',
	80: '0.8',
	90: '0.9',
	95: '0.95',
	100: '1',

	// Semantic
	disabled: '0.5',
	placeholder: '0.6',
	subtle: '0.7',
	default: '1',

	// State layers (MD3)
	stateLayerHover: '0.08',
	stateLayerFocus: '0.12',
	stateLayerPressed: '0.12',
	stateLayerDragged: '0.16'
} as const;
```

---

## 3. ТИПОГРАФИКА (Typography)

### 3.1. Font Family Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/information/font-family/

export const FONT_FAMILY = {
	// Primary font stack
	sans: [
		'Inter',
		'system-ui',
		'-apple-system',
		'BlinkMacSystemFont',
		'Segoe UI',
		'Roboto',
		'Helvetica Neue',
		'Arial',
		'sans-serif'
	].join(', '),

	// Monospace
	mono: [
		'JetBrains Mono',
		'Fira Code',
		'SF Mono',
		'Monaco',
		'Inconsolata',
		'Roboto Mono',
		'monospace'
	].join(', '),

	// Display (для заголовков)
	display: ['Inter Tight', 'system-ui', 'sans-serif'].join(', '),

	// Handwriting (для акцентов)
	hand: ['Caveat', 'Comic Sans MS', 'cursive'].join(', '),

	// Symbol (для иконок)
	symbol: ['Material Symbols', 'Font Awesome', 'sans-serif'].join(', ')
} as const;
```

### 3.2. Font Size Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/information/font-size/

export const FONT_SIZE = {
	// Base scale
	xs: '0.75rem', // 12px
	sm: '0.875rem', // 14px
	base: '1rem', // 16px
	lg: '1.125rem', // 18px
	xl: '1.25rem', // 20px
	'2xl': '1.5rem', // 24px
	'3xl': '1.875rem', // 30px
	'4xl': '2.25rem', // 36px
	'5xl': '3rem', // 48px
	'6xl': '3.75rem', // 60px
	'7xl': '4.5rem', // 72px
	'8xl': '6rem', // 96px

	// MD3-style display
	displayLarge: '3.5625rem', // 57px
	displayMedium: '2.8125rem', // 45px
	displaySmall: '2.25rem', // 36px

	// Headlines
	headlineLarge: '2rem', // 32px
	headlineMedium: '1.75rem', // 28px
	headlineSmall: '1.5rem', // 24px

	// Titles
	titleLarge: '1.375rem', // 22px
	titleMedium: '1rem', // 16px
	titleSmall: '0.875rem', // 14px

	// Body
	bodyLarge: '1rem', // 16px
	bodyMedium: '0.875rem', // 14px
	bodySmall: '0.75rem', // 12px

	// Labels
	labelLarge: '0.875rem', // 14px
	labelMedium: '0.75rem', // 12px
	labelSmall: '0.6875rem' // 11px
} as const;
```

### 3.3. Font Weight Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/information/font-weight/

export const FONT_WEIGHT = {
	thin: 100,
	extraLight: 200,
	light: 300,
	normal: 400,
	medium: 500,
	semiBold: 600,
	bold: 700,
	extraBold: 800,
	black: 900
} as const;
```

### 3.4. Line Height Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/information/line-height/

export const LINE_HEIGHT = {
	none: 1,
	tight: 1.25,
	snug: 1.375,
	normal: 1.5,
	relaxed: 1.625,
	loose: 2,

	// MD3-style
	display: 1.12,
	headline: 1.28,
	title: 1.29,
	body: 1.5,
	label: 1.43
} as const;
```

### 3.5. Letter Spacing Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/information/letter-spacing/

export const LETTER_SPACING = {
	tighter: '-0.05em',
	tight: '-0.025em',
	normal: '0em',
	wide: '0.025em',
	wider: '0.05em',
	widest: '0.1em',

	// MD3-style
	display: '-0.015625em',
	headline: '0em',
	title: '0.009375em',
	body: '0.03125em',
	label: '0.0625em'
} as const;
```

### 3.6. Typography Scale (Complete Presets)

```typescript
// architect-svelte/src/lib/design-system/contracts/theme/theme-typography.ts

export const THEME_TYPOGRAPHY = {
	// Display styles
	displayLarge: {
		fontFamily: FONT_FAMILY.display,
		fontSize: FONT_SIZE.displayLarge,
		fontWeight: FONT_WEIGHT.normal,
		lineHeight: LINE_HEIGHT.display,
		letterSpacing: LETTER_SPACING.display
	},
	displayMedium: {
		fontFamily: FONT_FAMILY.display,
		fontSize: FONT_SIZE.displayMedium,
		fontWeight: FONT_WEIGHT.normal,
		lineHeight: LINE_HEIGHT.display,
		letterSpacing: LETTER_SPACING.display
	},
	displaySmall: {
		fontFamily: FONT_FAMILY.display,
		fontSize: FONT_SIZE.displaySmall,
		fontWeight: FONT_WEIGHT.normal,
		lineHeight: LINE_HEIGHT.display,
		letterSpacing: LETTER_SPACING.display
	},

	// Headline styles
	headlineLarge: {
		fontFamily: FONT_FAMILY.sans,
		fontSize: FONT_SIZE.headlineLarge,
		fontWeight: FONT_WEIGHT.semiBold,
		lineHeight: LINE_HEIGHT.headline,
		letterSpacing: LETTER_SPACING.headline
	},
	headlineMedium: {
		fontFamily: FONT_FAMILY.sans,
		fontSize: FONT_SIZE.headlineMedium,
		fontWeight: FONT_WEIGHT.semiBold,
		lineHeight: LINE_HEIGHT.headline,
		letterSpacing: LETTER_SPACING.headline
	},
	headlineSmall: {
		fontFamily: FONT_FAMILY.sans,
		fontSize: FONT_SIZE.headlineSmall,
		fontWeight: FONT_WEIGHT.semiBold,
		lineHeight: LINE_HEIGHT.headline,
		letterSpacing: LETTER_SPACING.headline
	},

	// Title styles
	titleLarge: {
		fontFamily: FONT_FAMILY.sans,
		fontSize: FONT_SIZE.titleLarge,
		fontWeight: FONT_WEIGHT.semiBold,
		lineHeight: LINE_HEIGHT.title,
		letterSpacing: LETTER_SPACING.title
	},
	titleMedium: {
		fontFamily: FONT_FAMILY.sans,
		fontSize: FONT_SIZE.titleMedium,
		fontWeight: FONT_WEIGHT.medium,
		lineHeight: LINE_HEIGHT.title,
		letterSpacing: LETTER_SPACING.title
	},
	titleSmall: {
		fontFamily: FONT_FAMILY.sans,
		fontSize: FONT_SIZE.titleSmall,
		fontWeight: FONT_WEIGHT.medium,
		lineHeight: LINE_HEIGHT.title,
		letterSpacing: LETTER_SPACING.title
	},

	// Body styles
	bodyLarge: {
		fontFamily: FONT_FAMILY.sans,
		fontSize: FONT_SIZE.bodyLarge,
		fontWeight: FONT_WEIGHT.normal,
		lineHeight: LINE_HEIGHT.body,
		letterSpacing: LETTER_SPACING.body
	},
	bodyMedium: {
		fontFamily: FONT_FAMILY.sans,
		fontSize: FONT_SIZE.bodyMedium,
		fontWeight: FONT_WEIGHT.normal,
		lineHeight: LINE_HEIGHT.body,
		letterSpacing: LETTER_SPACING.body
	},
	bodySmall: {
		fontFamily: FONT_FAMILY.sans,
		fontSize: FONT_SIZE.bodySmall,
		fontWeight: FONT_WEIGHT.normal,
		lineHeight: LINE_HEIGHT.body,
		letterSpacing: LETTER_SPACING.body
	},

	// Label styles
	labelLarge: {
		fontFamily: FONT_FAMILY.sans,
		fontSize: FONT_SIZE.labelLarge,
		fontWeight: FONT_WEIGHT.medium,
		lineHeight: LINE_HEIGHT.label,
		letterSpacing: LETTER_SPACING.label
	},
	labelMedium: {
		fontFamily: FONT_FAMILY.sans,
		fontSize: FONT_SIZE.labelMedium,
		fontWeight: FONT_WEIGHT.medium,
		lineHeight: LINE_HEIGHT.label,
		letterSpacing: LETTER_SPACING.label
	},
	labelSmall: {
		fontFamily: FONT_FAMILY.sans,
		fontSize: FONT_SIZE.labelSmall,
		fontWeight: FONT_WEIGHT.medium,
		lineHeight: LINE_HEIGHT.label,
		letterSpacing: LETTER_SPACING.label
	},

	// Code styles
	codeLarge: {
		fontFamily: FONT_FAMILY.mono,
		fontSize: FONT_SIZE.lg,
		fontWeight: FONT_WEIGHT.normal,
		lineHeight: LINE_HEIGHT.relaxed,
		letterSpacing: LETTER_SPACING.normal
	},
	codeMedium: {
		fontFamily: FONT_FAMILY.mono,
		fontSize: FONT_SIZE.base,
		fontWeight: FONT_WEIGHT.normal,
		lineHeight: LINE_HEIGHT.relaxed,
		letterSpacing: LETTER_SPACING.normal
	},
	codeSmall: {
		fontFamily: FONT_FAMILY.mono,
		fontSize: FONT_SIZE.sm,
		fontWeight: FONT_WEIGHT.normal,
		lineHeight: LINE_HEIGHT.relaxed,
		letterSpacing: LETTER_SPACING.normal
	}
} as const;
```

---

## 4. СИСТЕМА ДВИЖЕНИЯ (Motion System)

### 4.1. Duration Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/interaction/duration/

export const TOKEN_DURATION = {
	// Instant
	instant: '0ms',
	none: '0ms',

	// Fast (для микро-взаимодействий)
	fast1: '50ms',
	fast2: '100ms',
	fast3: '150ms',

	// Normal (для стандартных переходов)
	normal1: '200ms',
	normal2: '250ms',
	normal3: '300ms',

	// Slow (для крупных трансформаций)
	slow1: '400ms',
	slow2: '500ms',
	slow3: '600ms',

	// Very slow (для презентаций)
	verySlow1: '800ms',
	verySlow2: '1000ms',
	verySlow3: '1500ms',

	// Semantic names
	shortest: '50ms',
	shorter: '100ms',
	short: '150ms',
	base: '200ms',
	long: '300ms',
	longer: '400ms',
	longest: '500ms',

	// MD3-style
	durationShort1: '100ms',
	durationShort2: '150ms',
	durationShort3: '200ms',
	durationShort4: '250ms',
	durationMedium1: '300ms',
	durationMedium2: '350ms',
	durationMedium3: '400ms',
	durationMedium4: '450ms',
	durationLong1: '500ms',
	durationLong2: '600ms',
	durationLong3: '700ms',
	durationLong4: '800ms',
	durationExtraLong1: '900ms',
	durationExtraLong2: '1000ms',
	durationExtraLong3: '1200ms',
	durationExtraLong4: '1500ms'
} as const;
```

### 4.2. Easing Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/easing/

export const TOKEN_EASING = {
	// Standard easings
	linear: 'linear',
	ease: 'ease',
	easeIn: 'ease-in',
	easeOut: 'ease-out',
	easeInOut: 'ease-in-out',

	// Custom cubic-bezier
	easeInQuad: 'cubic-bezier(0.11, 0, 0.5, 0)',
	easeOutQuad: 'cubic-bezier(0.5, 1, 0.89, 1)',
	easeInOutQuad: 'cubic-bezier(0.45, 0, 0.55, 1)',

	easeInCubic: 'cubic-bezier(0.32, 0, 0.67, 0)',
	easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
	easeInOutCubic: 'cubic-bezier(0.65, 0, 0.35, 1)',

	easeInQuart: 'cubic-bezier(0.5, 0, 0.75, 0)',
	easeOutQuart: 'cubic-bezier(0.25, 1, 0.5, 1)',
	easeInOutQuart: 'cubic-bezier(0.76, 0, 0.24, 1)',

	easeInQuint: 'cubic-bezier(0.64, 0, 0.78, 0)',
	easeOutQuint: 'cubic-bezier(0.22, 1, 0.36, 1)',
	easeInOutQuint: 'cubic-bezier(0.83, 0, 0.17, 1)',

	// MD3-style easings
	standard: 'cubic-bezier(0.2, 0, 0, 1)',
	standardAccelerate: 'cubic-bezier(0.3, 0, 1, 1)',
	standardDecelerate: 'cubic-bezier(0, 0, 0, 1)',
	standardEmphasized: 'cubic-bezier(0.2, 0, 0, 1)',
	standardEmphasizedAccelerate: 'cubic-bezier(0.3, 0, 1, 1)',
	standardEmphasizedDecelerate: 'cubic-bezier(0, 0, 0, 1)',

	// Spring-like
	spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
	springLight: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
	springMedium: 'cubic-bezier(0.34, 1.45, 0.72, 1)',
	springStrong: 'cubic-bezier(0.34, 1.3, 0.8, 1)',

	// Bounce
	bounceIn: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
	bounceOut: 'cubic-bezier(0.68, 0.55, 0.265, 1.55)',

	// Semantic names
	default: 'cubic-bezier(0.4, 0, 0.2, 1)',
	enter: 'cubic-bezier(0, 0, 0.2, 1)',
	exit: 'cubic-bezier(0.4, 0, 1, 1)',
	emphasize: 'cubic-bezier(0.2, 0, 0, 1)',
	emphasizeDecelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
	emphasizeAccelerate: 'cubic-bezier(0.3, 0, 0.8, 0.15)'
} as const;
```

### 4.3. Transition Presets

```typescript
// architect-svelte/src/lib/design-system/defaults/information/transitions/

export const TRANSITION = {
	// Base transitions
	default: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
	fast: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
	slow: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',

	// Property-specific
	color: 'color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
	backgroundColor: 'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
	borderColor: 'border-color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
	boxShadow: 'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)',
	transform: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
	opacity: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',

	// State transitions
	hover: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
	focus: 'all 100ms cubic-bezier(0.4, 0, 0.2, 1)',
	active: 'all 50ms cubic-bezier(0.4, 0, 0.2, 1)',
	disabled: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',

	// Component transitions
	button: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
	card: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
	modal: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
	dropdown: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',

	// Scene transitions (Prezi-style)
	zoomIn: 'transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 300ms ease-out',
	zoomOut: 'transform 400ms cubic-bezier(0.34, 1.45, 0.72, 1), opacity 250ms ease-in',
	pan: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
	rotate: 'transform 400ms cubic-bezier(0.34, 1.3, 0.8, 1)',
	morph: 'all 600ms cubic-bezier(0.65, 0, 0.35, 1)',
	expand: 'all 500ms cubic-bezier(0.2, 0, 0, 1)',
	collapse: 'all 400ms cubic-bezier(0.4, 0, 1, 1)',
	reveal: 'opacity 300ms ease-out, transform 300ms ease-out',
	fade: 'opacity 200ms ease-in-out',

	// Semantic zoom stages
	starToIcon: 'transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
	iconToLabel: 'transform 350ms cubic-bezier(0.34, 1.45, 0.72, 1)',
	labelToCard: 'transform 400ms cubic-bezier(0.2, 0, 0, 1)',
	cardToDetail: 'transform 450ms cubic-bezier(0.2, 0, 0, 1)',
	detailToFullscreen: 'transform 500ms cubic-bezier(0.2, 0, 0, 1)'
} as const;
```

### 4.4. Animation Presets

```typescript
// architect-svelte/src/lib/design-system/tokens/interaction/animation/

export const TOKEN_ANIMATION = {
	// Fade animations
	fadeIn: 'fadeIn 200ms ease-out',
	fadeOut: 'fadeOut 200ms ease-in',
	fadeInUp: 'fadeInUp 300ms ease-out',
	fadeInDown: 'fadeInDown 300ms ease-out',
	fadeInLeft: 'fadeInLeft 300ms ease-out',
	fadeInRight: 'fadeInRight 300ms ease-out',

	// Scale animations
	scaleIn: 'scaleIn 200ms cubic-bezier(0.34, 1.56, 0.64, 1)',
	scaleOut: 'scaleOut 200ms cubic-bezier(0.4, 0, 1, 1)',
	scaleInUp: 'scaleInUp 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
	scaleInDown: 'scaleInDown 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',

	// Slide animations
	slideInUp: 'slideInUp 300ms ease-out',
	slideInDown: 'slideInDown 300ms ease-out',
	slideInLeft: 'slideInLeft 300ms ease-out',
	slideInRight: 'slideInRight 300ms ease-out',
	slideOutUp: 'slideOutUp 300ms ease-in',
	slideOutDown: 'slideOutDown 300ms ease-in',
	slideOutLeft: 'slideOutLeft 300ms ease-in',
	slideOutRight: 'slideOutRight 300ms ease-in',

	// Bounce animations
	bounceIn: 'bounceIn 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
	bounceOut: 'bounceOut 500ms cubic-bezier(0.68, 0.55, 0.265, 1.55)',
	bounce: 'bounce 1s infinite',

	// Rotate animations
	rotateIn: 'rotateIn 300ms ease-out',
	rotateOut: 'rotateOut 300ms ease-in',
	spin: 'spin 1s linear infinite',
	spinSlow: 'spin 3s linear infinite',

	// Pulse animations
	pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
	pulseFast: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
	pulseSlow: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',

	// Shake animations
	shake: 'shake 500ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both',
	wiggle: 'wiggle 500ms ease-in-out both',

	// Attention animations
	heartbeat: 'heartbeat 1.5s ease-in-out infinite',
	flash: 'flash 1s ease-in-out infinite',
	rubberBand: 'rubberBand 1s ease-in-out',
	swing: 'swing 1s ease-in-out infinite',
	tada: 'tada 1s ease-in-out',

	// Skeleton loading
	skeleton: 'skeleton 1.5s ease-in-out infinite',
	shimmer: 'shimmer 2s linear infinite',

	// Progress
	progress: 'progress 1s linear infinite',
	progressIndeterminate:
		'progressIndeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite',

	// Scene animations (Prezi-style)
	zoomEnter: 'zoomEnter 500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
	zoomExit: 'zoomExit 400ms cubic-bezier(0.4, 0, 1, 1)',
	panTo: 'panTo 300ms cubic-bezier(0.4, 0, 0.2, 1)',
	flyTo: 'flyTo 800ms cubic-bezier(0.2, 0, 0, 1)',
	morphShape: 'morphShape 600ms cubic-bezier(0.65, 0, 0.35, 1)',
	expandFromPoint: 'expandFromPoint 500ms cubic-bezier(0.2, 0, 0, 1)',
	collapseToPoint: 'collapseToPoint 400ms cubic-bezier(0.4, 0, 1, 1)',
	revealContent: 'revealContent 350ms ease-out',
	parallax: 'parallax 400ms cubic-bezier(0.4, 0, 0.2, 1)',
	depthShift: 'depthShift 500ms cubic-bezier(0.34, 1.3, 0.8, 1)',

	// Choreography
	staggerIn: 'staggerIn 400ms ease-out',
	staggerOut: 'staggerOut 300ms ease-in',
	cascadeIn: 'cascadeIn 600ms cubic-bezier(0.34, 1.56, 0.64, 1)',
	cascadeOut: 'cascadeOut 400ms cubic-bezier(0.4, 0, 1, 1)'
} as const;
```

### 4.5. Keyframes (CSS)

```css
/* architect-svelte/src/lib/design-system/styles/motion/keyframes.css */

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes fadeOut {
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
}

@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes scaleIn {
	from {
		opacity: 0;
		transform: scale(0.9);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
}

@keyframes zoomEnter {
	from {
		opacity: 0;
		transform: scale(0.5) translateZ(-500px);
	}
	to {
		opacity: 1;
		transform: scale(1) translateZ(0);
	}
}

@keyframes zoomExit {
	from {
		opacity: 1;
		transform: scale(1) translateZ(0);
	}
	to {
		opacity: 0;
		transform: scale(1.5) translateZ(500px);
	}
}

@keyframes flyTo {
	from {
		transform: translate3d(0, 0, 0);
	}
	to {
		transform: translate3d(var(--tx, 0), var(--ty, 0), var(--tz, 0));
	}
}

@keyframes morphShape {
	0% {
		border-radius: var(--from-radius, '50%');
		transform: scale(var(--from-scale, 1));
	}
	100% {
		border-radius: var(--to-radius, '0');
		transform: scale(var(--to-scale, 1));
	}
}

@keyframes expandFromPoint {
	from {
		opacity: 0;
		transform: scale(0);
		transform-origin: var(--origin-x, 50%) var(--origin-y, 50%);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
}

@keyframes parallax {
	from {
		transform: translateZ(var(--parallax-depth, -100px));
	}
	to {
		transform: translateZ(0);
	}
}

@keyframes depthShift {
	from {
		opacity: 0;
		transform: translateZ(-200px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: translateZ(0) scale(1);
	}
}

@keyframes staggerIn {
	from {
		opacity: 0;
		transform: translateY(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes skeleton {
	0% {
		background-position: -200px 0;
	}
	100% {
		background-position: calc(200px + 100%) 0;
	}
}

@keyframes pulse {
	0%,
	100% {
		opacity: 1;
	}
	50% {
		opacity: 0.5;
	}
}

@keyframes spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
```

---

## 5. КАМЕРНАЯ СИСТЕМА (Camera System)

### 5.1. Camera Mode Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/camera-mode/

export const CAMERA_MODE = {
	// Navigation modes
	orbit: 'orbit', // орбитальное движение вокруг точки
	pan: 'pan', // панорамирование (2D сдвиг)
	dolly: 'dolly', // приближение/удаление
	track: 'track', // слежение за объектом
	follow: 'follow', // плавное следование

	// Focus modes
	focus: 'focus', // фокус на объекте
	inspect: 'inspect', // режим инспекции
	present: 'present', // режим презентации
	edit: 'edit', // режим редактирования

	// AR-specific
	arWorld: 'ar-world', // мировой AR режим
	arScreen: 'ar-screen', // экранный AR режим
	arPassthrough: 'ar-passthrough' // сквозной AR
} as const;
```

### 5.2. Camera Axis Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/camera-axis/

export const CAMERA_AXIS = {
	// Axes
	x: 'x',
	y: 'y',
	z: 'z',

	// Planes
	xy: 'xy',
	xz: 'xz',
	yz: 'yz',

	// Directions
	forward: 'forward',
	backward: 'backward',
	left: 'left',
	right: 'right',
	up: 'up',
	down: 'down',

	// Depth
	near: 'near',
	far: 'far',
	depth: 'depth'
} as const;
```

### 5.3. Viewport Fit Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/viewport-fit/

export const VIEWPORT_FIT = {
	contain: 'contain', // показать всё содержимое
	cover: 'cover', // заполнить viewport
	width: 'width', // по ширине
	height: 'height', // по высоте
	auto: 'auto', // автоматически
	fit: 'fit', // точное соответствие
	fill: 'fill', // растянуть
	none: 'none' // без масштабирования
} as const;
```

### 5.4. Zoom Stage Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/zoom-stage/

export const ZOOM_STAGE = {
	// Semantic zoom levels (Prezi-style)
	star: 'star', // далёкая точка (0.1x - 0.3x)
	icon: 'icon', // иконка (0.3x - 0.5x)
	label: 'label', // иконка с подписью (0.5x - 0.8x)
	card: 'card', // карточка (0.8x - 1.2x)
	detail: 'detail', // детализация (1.2x - 2x)
	fullscreen: 'fullscreen', // полный экран (2x - 5x)

	// Numeric stages
	level0: 'level0', // 0.1x
	level1: 'level1', // 0.25x
	level2: 'level2', // 0.5x
	level3: 'level3', // 1x
	level4: 'level4', // 2x
	level5: 'level5', // 4x

	// Thresholds (scale factors)
	thresholds: {
		star: 0.3,
		icon: 0.5,
		label: 0.8,
		card: 1.2,
		detail: 2.0,
		fullscreen: 4.0
	}
} as const;
```

### 5.5. Depth Layer Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/depth-layer/

export const DEPTH_LAYER = {
	// Scene depth
	background: 'background', // фон сцены
	field: 'field', // поле/сетка
	cluster: 'cluster', // кластеры
	node: 'node', // узлы
	overlay: 'overlay', // оверлеи
	modal: 'modal', // модальные окна
	popover: 'popover', // попoверы
	tooltip: 'tooltip', // подсказки
	cursor: 'cursor', // курсор

	// Z-positions (in 3D space)
	back: 'back', // задний план
	mid: 'mid', // средний план
	front: 'front', // передний план
	foreground: 'foreground', // передний план (UI)

	// AR depth
	realWorld: 'real-world', // реальный мир
	virtual: 'virtual', // виртуальные объекты
	ui: 'ui' // UI элементы
} as const;
```

### 5.6. Focus Mode Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/focus-mode/

export const FOCUS_MODE = {
	free: 'free', // свободный фокус
	guided: 'guided', // направляемый фокус
	locked: 'locked', // заблокированный фокус
	modal: 'modal', // модальный фокус
	fullscreen: 'fullscreen', // полноэкранный фокус
	follow: 'follow', // следящий фокус
	fixed: 'fixed' // фиксированный фокус
} as const;
```

### 5.7. Scene Layout Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/scene-layout/

export const SCENE_LAYOUT = {
	// Layout types
	galaxy: 'galaxy', // галактика (random散布)
	constellation: 'constellation', // созвездие (связанные узлы)
	cluster: 'cluster', // кластеры (группы)
	graph: 'graph', // граф (nodes + edges)
	tree: 'tree', // дерево (иерархия)
	timeline: 'timeline', // временная шкала
	grid: 'grid', // сетка
	spiral: 'spiral', // спираль
	radial: 'radial', // радиальный
	force: 'force', // force-directed
	hierarchical: 'hierarchical', // иерархический
	circular: 'circular' // круговой
} as const;
```

### 5.8. Node Presentation Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/node-presentation/

export const NODE_PRESENTATION = {
	// Presentation stages
	star: 'star', // далёкая звезда
	glyph: 'glyph', // глиф/иконка
	glyphLabel: 'glyph-label', // глиф с подписью
	summaryCard: 'summary-card', // краткая карточка
	detailCard: 'detail-card', // детальная карточка
	fullscreen: 'fullscreen', // полный экран

	// Content density per stage
	starDensity: ['position', 'color'],
	glyphDensity: ['position', 'color', 'icon'],
	labelDensity: ['position', 'color', 'icon', 'label'],
	cardDensity: ['position', 'color', 'icon', 'label', 'summary', 'actions'],
	detailDensity: [
		'position',
		'color',
		'icon',
		'label',
		'summary',
		'details',
		'metadata',
		'actions',
		'related'
	],
	fullscreenDensity: [
		'position',
		'color',
		'icon',
		'label',
		'summary',
		'details',
		'metadata',
		'actions',
		'related',
		'history',
		'comments'
	]
} as const;
```

---

## 6. ПРОСТРАНСТВЕННАЯ СЕМАНТИКА (Spatial Semantics)

### 6.1. Spatial Anchor Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/spatial-anchor/

export const SPATIAL_ANCHOR = {
	// Positions
	center: 'center',
	topLeft: 'top-left',
	topCenter: 'top-center',
	topRight: 'top-right',
	middleLeft: 'middle-left',
	middleCenter: 'middle-center',
	middleRight: 'middle-right',
	bottomLeft: 'bottom-left',
	bottomCenter: 'bottom-center',
	bottomRight: 'bottom-right',

	// Origins
	origin: 'origin',
	pivot: 'pivot',
	focal: 'focal',

	// Edges
	top: 'top',
	right: 'right',
	bottom: 'bottom',
	left: 'left',

	// 3D positions
	front: 'front',
	back: 'back',
	near: 'near',
	far: 'far'
} as const;
```

### 6.2. Spatial Reveal Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/spatial-reveal/

export const SPATIAL_REVEAL = {
	// Reveal types
	fade: 'fade', // плавное появление
	scale: 'scale', // масштабирование
	expand: 'expand', // расширение
	morph: 'morph', // морфинг формы
	dock: 'dock', // причаливание
	slide: 'slide', // сдвиг
	rotate: 'rotate', // вращение
	flip: 'flip', // переворот
	unfold: 'unfold', // разворачивание
	explode: 'explode', // взрыв (из центра)
	implode: 'implode', // схлопывание (к центру)

	// Directional
	fromTop: 'from-top',
	fromRight: 'from-right',
	fromBottom: 'from-bottom',
	fromLeft: 'from-left',
	fromCenter: 'from-center',
	fromPoint: 'from-point'
} as const;
```

### 6.3. Containment Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/containment/

export const CONTAINMENT = {
	// Containment modes
	free: 'free', // свободное размещение
	bounded: 'bounded', // ограниченное контейнером
	clamped: 'clamped', // прижатое к границам
	portal: 'portal', // через портал
	sticky: 'sticky', // прилипшее
	fixed: 'fixed', // фиксированное
	absolute: 'absolute', // абсолютное
	relative: 'relative', // относительное

	// Overflow behavior
	clip: 'clip', // обрезать
	scroll: 'scroll', // прокрутка
	expand: 'expand', // расширить
	wrap: 'wrap', // перенос
	ellipsis: 'ellipsis' // многоточие
} as const;
```

### 6.4. Frame Role Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/frame-role/

export const FRAME_ROLE = {
	// Frame types
	scene: 'scene', // сцена
	node: 'node', // узел
	card: 'card', // карточка
	modal: 'modal', // модальное окно
	overlay: 'overlay', // оверлей
	popover: 'popover', // попoвер
	tooltip: 'tooltip', // подсказка
	dialog: 'dialog', // диалог
	drawer: 'drawer', // выдвижная панель
	panel: 'panel', // панель
	viewport: 'viewport', // область просмотра
	canvas: 'canvas' // холст
} as const;
```

---

## 7. ИНФОРМАЦИОННЫЕ ТОКЕНЫ (Information Tokens)

### 7.1. Node Kind Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/information/node-kind/

export const NODE_KIND = {
	// Conceptual nodes
	concept: 'concept', // понятие
	idea: 'idea', // идея
	theory: 'theory', // теория
	principle: 'principle', // принцип

	// Token nodes
	token: 'token', // токен
	variable: 'variable', // переменная
	constant: 'constant', // константа
	property: 'property', // свойство

	// Component nodes
	component: 'component', // компонент
	atom: 'atom', // атом
	molecule: 'molecule', // молекула
	organism: 'organism', // организм
	template: 'template', // шаблон
	page: 'page', // страница

	// System nodes
	preset: 'preset', // пресет
	theme: 'theme', // тема
	contract: 'contract', // контракт
	rune: 'rune', // руна
	scene: 'scene', // сцена
	model: 'model', // модель

	// Data nodes
	data: 'data', // данные
	record: 'record', // запись
	entity: 'entity', // сущность
	collection: 'collection', // коллекция

	// Action nodes
	action: 'action', // действие
	function: 'function', // функция
	method: 'method', // метод
	event: 'event' // событие
} as const;
```

### 7.2. Node Role Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/information/node-role/

export const NODE_ROLE = {
	// Graph roles
	hub: 'hub', // центральный узел
	leaf: 'leaf', // конечный узел
	bridge: 'bridge', // мост между кластерами
	cluster: 'cluster', // кластер
	entry: 'entry', // точка входа
	detail: 'detail', // детализация
	root: 'root', // корень
	parent: 'parent', // родитель
	child: 'child', // потомок
	sibling: 'sibling', // брат
	related: 'related', // связанный

	// Presentation roles
	featured: 'featured', // выделяющийся
	highlighted: 'highlighted', // подсвеченный
	dimmed: 'dimmed', // затемнённый
	hidden: 'hidden', // скрытый
	ghost: 'ghost' // призрачный
} as const;
```

### 7.3. Cluster Kind Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/information/cluster-kind/

export const CLUSTER_KIND = {
	// Cosmic scale
	galaxy: 'galaxy', // галактика (очень большой кластер)
	constellation: 'constellation', // созвездие (средний кластер)
	group: 'group', // группа (малый кластер)

	// Organizational
	category: 'category', // категория
	collection: 'collection', // коллекция
	section: 'section', // секция
	chapter: 'chapter', // глава

	// Functional
	module: 'module', // модуль
	package: 'package', // пакет
	namespace: 'namespace', // пространство имён

	// Visual
	bounding: 'bounding', // ограничивающий
	convex: 'convex', // выпуклый
	concave: 'concave', // вогнутый
	custom: 'custom' // пользовательский
} as const;
```

### 7.4. Detail Level Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/information/detail-level/

export const DETAIL_LEVEL = {
	// Detail levels
	hint: 'hint', // намёк (минимум информации)
	label: 'label', // только подпись
	summary: 'summary', // краткое описание
	detail: 'detail', // детальное описание
	document: 'document', // полный документ

	// Numeric levels
	level0: 'level0', // 0% detail
	level1: 'level1', // 25% detail
	level2: 'level2', // 50% detail
	level3: 'level3', // 75% detail
	level4: 'level4', // 100% detail

	// Semantic
	minimal: 'minimal',
	compact: 'compact',
	normal: 'normal',
	expanded: 'expanded',
	full: 'full'
} as const;
```

### 7.5. Content Density Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/information/content-density/

export const CONTENT_DENSITY = {
	// Density levels
	micro: 'micro', // минимальная плотность
	compact: 'compact', // компактная
	default: 'default', // стандартная
	rich: 'rich', // богатая
	immersive: 'immersive', // иммерсивная

	// Spacing-based
	tight: 'tight', // тесная
	snug: 'snug', // уютная
	normal: 'normal', // нормальная
	relaxed: 'relaxed', // свободная
	loose: 'loose', // просторная

	// Component-specific
	buttonSmall: 'button-small',
	buttonMedium: 'button-medium',
	buttonLarge: 'button-large',
	cardCompact: 'card-compact',
	cardNormal: 'card-normal',
	cardSpacious: 'card-spacious'
} as const;
```

### 7.6. Token Domain Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/information/token-domain/

export const TOKEN_DOMAIN = {
	// Main domains
	architecture: 'architecture', // архитектурные токены
	information: 'information', // информационные токены
	interaction: 'interaction', // интерактивные токены
	commerce: 'commerce', // коммерческие токены

	// Sub-domains
	theme: 'theme', // темы
	contract: 'contract', // контракты
	component: 'component', // компоненты
	utility: 'utility', // утилиты

	// Functional areas
	color: 'color', // цвет
	typography: 'typography', // типографика
	spacing: 'spacing', // отступы
	motion: 'motion', // движение
	shape: 'shape', // форма
	elevation: 'elevation', // возвышение
	zindex: 'zindex' // z-index
} as const;
```

### 7.7. Theme Role Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/information/theme-role/

export const THEME_ROLE = {
	// Surface roles
	surface: 'surface', // поверхность
	text: 'text', // текст
	border: 'border', // граница
	accent: 'accent', // акцент
	feedback: 'feedback', // обратная связь
	overlay: 'overlay', // оверлей

	// Specific roles
	background: 'background', // фон
	foreground: 'foreground', // передний план
	container: 'container', // контейнер
	content: 'content', // содержимое

	// State roles
	default: 'default', // по умолчанию
	hover: 'hover', // наведение
	focus: 'focus', // фокус
	active: 'active', // активно
	disabled: 'disabled', // отключено
	selected: 'selected' // выбрано
} as const;
```

### 7.8. Semantic Color Role Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/information/semantic-color-role/

export const SEMANTIC_COLOR_ROLE = {
	// Brand roles
	primary: 'primary', // основной бренд
	secondary: 'secondary', // вторичный бренд
	tertiary: 'tertiary', // третичный бренд
	accent: 'accent', // акцент

	// Neutral roles
	neutral: 'neutral', // нейтральный
	muted: 'muted', // приглушённый

	// Status roles
	success: 'success', // успех
	warning: 'warning', // предупреждение
	danger: 'danger', // опасность
	error: 'error', // ошибка
	info: 'info', // информация

	// Functional roles
	link: 'link', // ссылка
	code: 'code', // код
	mark: 'mark', // выделение
	placeholder: 'placeholder' // плейсхолдер
} as const;
```

---

## 8. ИНТЕРАКТИВНЫЕ ТОКЕНЫ (Interaction Tokens)

### 8.1. Focus State Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/interaction/focus-state/

export const FOCUS_STATE = {
	// Basic states
	idle: 'idle', // бездействие
	hovered: 'hovered', // наведение
	targeted: 'targeted', // нацелено (keyboard focus)
	focused: 'focused', // фокус
	active: 'active', // активно (нажато)
	selected: 'selected', // выбрано

	// Expanded states
	expanded: 'expanded', // развёрнуто
	collapsed: 'collapsed', // свёрнуто
	opening: 'opening', // открывается
	closing: 'closing', // закрывается

	// Zoom states
	zoomedIn: 'zoomed-in', // приближено
	zoomedOut: 'zoomed-out', // удалено
	zooming: 'zooming', // в процессе зума

	// Presentation states
	presenting: 'presenting', // презентация
	fullscreen: 'fullscreen', // полный экран
	windowed: 'windowed', // оконный режим

	// Drag states
	dragging: 'dragging', // перетаскивание
	droppable: 'droppable', // можно бросить
	draggedOver: 'dragged-over', // над элементом

	// Loading states
	loading: 'loading', // загрузка
	loaded: 'loaded', // загружено
	error: 'error', // ошибка загрузки
	empty: 'empty' // пусто
} as const;
```

### 8.2. Navigation Mode Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/interaction/navigation-mode/

export const NAVIGATION_MODE = {
	// Basic modes
	browse: 'browse', // просмотр
	inspect: 'inspect', // инспекция
	edit: 'edit', // редактирование
	present: 'present', // презентация

	// Navigation modes
	navigate: 'navigate', // навигация
	search: 'search', // поиск
	filter: 'filter', // фильтрация
	sort: 'sort', // сортировка

	// Selection modes
	select: 'select', // выбор
	multiSelect: 'multi-select', // множественный выбор
	rangeSelect: 'range-select', // выбор диапазона

	// Camera modes
	orbit: 'orbit', // орбита
	pan: 'pan', // панорамирование
	zoom: 'zoom', // зум
	follow: 'follow', // следование

	// AR modes
	arPlace: 'ar-place', // размещение в AR
	arMove: 'ar-move', // перемещение в AR
	arScale: 'ar-scale', // масштабирование в AR
	arRotate: 'ar-rotate' // вращение в AR
} as const;
```

### 8.3. Selection Scope Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/interaction/selection-scope/

export const SELECTION_SCOPE = {
	// Single/Multi
	single: 'single', // одиночный выбор
	multi: 'multi', // множественный выбор

	// Hierarchical
	branch: 'branch', // ветка (дерево)
	subtree: 'subtree', // поддерево
	cluster: 'cluster', // кластер
	group: 'group', // группа

	// Spatial
	scene: 'scene', // вся сцена
	viewport: 'viewport', // видимая область
	region: 'region', // регион
	area: 'area', // область

	// Temporal
	range: 'range', // диапазон
	period: 'period', // период
	span: 'span' // промежуток
} as const;
```

### 8.4. Expand Mode Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/interaction/expand-mode/

export const EXPAND_MODE = {
	// Expansion types
	inline: 'inline', // развёртывание на месте
	card: 'card', // развёртывание в карточку
	modal: 'modal', // развёртывание в модальное окно
	fullscreen: 'fullscreen', // развёртывание на весь экран
	popover: 'popover', // развёртывание в попoвер
	drawer: 'drawer', // развёртывание в выдвижную панель

	// Directional
	expandUp: 'expand-up', // расширение вверх
	expandDown: 'expand-down', // расширение вниз
	expandLeft: 'expand-left', // расширение влево
	expandRight: 'expand-right', // расширение вправо
	expandCenter: 'expand-center', // расширение от центра

	// Animation modes
	morph: 'morph', // морфинг
	fade: 'fade', // плавное появление
	slide: 'slide', // сдвиг
	scale: 'scale', // масштабирование
	flip: 'flip' // переворот
} as const;
```

### 8.5. Reveal Trigger Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/interaction/reveal-trigger/

export const REVEAL_TRIGGER = {
	// Zoom triggers
	zoomIn: 'zoom-in', // приближение
	zoomOut: 'zoom-out', // удаление

	// Pointer triggers
	hover: 'hover', // наведение
	click: 'click', // клик
	dblClick: 'dbl-click', // двойной клик
	rightClick: 'right-click', // правый клик
	longPress: 'long-press', // долгое нажатие

	// Focus triggers
	focus: 'focus', // фокус
	blur: 'blur', // потеря фокуса

	// Keyboard triggers
	enter: 'enter', // Enter
	escape: 'escape', // Escape
	space: 'space', // Пробел
	arrowKeys: 'arrow-keys', // стрелки

	// Gesture triggers
	pinch: 'pinch', // щипок
	swipe: 'swipe', // свайп
	tap: 'tap', // тап
	doubleTap: 'double-tap', // двойной тап

	// Search triggers
	searchHit: 'search-hit', // попадание в поиске
	filterMatch: 'filter-match', // совпадение с фильтром

	// Auto triggers
	auto: 'auto', // автоматически
	delay: 'delay', // с задержкой
	intersection: 'intersection', // при пересечении
	viewport: 'viewport' // при попадании в viewport
} as const;
```

### 8.6. Motion Stage Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/interaction/motion-stage/

export const MOTION_STAGE = {
	// Lifecycle stages
	enter: 'enter', // вход
	settle: 'settle', // успокоение
	morph: 'morph', // трансформация
	dock: 'dock', // причаливание
	exit: 'exit', // выход

	// Transition stages
	start: 'start', // начало
	mid: 'mid', // середина
	end: 'end', // конец

	// Animation stages
	prepare: 'prepare', // подготовка
	animate: 'animate', // анимация
	complete: 'complete', // завершение

	// Physics stages
	accelerate: 'accelerate', // ускорение
	coast: 'coast', // движение по инерции
	decelerate: 'decelerate', // замедление
	stop: 'stop', // остановка

	// Choreography stages
	stagger: 'stagger', // каскад
	sync: 'sync', // синхронно
	cascade: 'cascade', // каскад
	wave: 'wave' // волна
} as const;
```

---

## 9. КОММЕРЧЕСКИЕ ТОКЕНЫ (Commerce Tokens)

### 9.1. Product Kind Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/commerce/product-kind/

export const PRODUCT_KIND = {
	// Physical products
	physical: 'physical', // физический товар
	digital: 'digital', // цифровой товар
	service: 'service', // услуга
	subscription: 'subscription', // подписка

	// Product types
	simple: 'simple', // простой товар
	variable: 'variable', // вариативный товар
	grouped: 'grouped', // групповой товар
	bundled: 'bundled', // набор товаров

	// Special types
	downloadable: 'downloadable', // загружаемый
	virtual: 'virtual', // виртуальный
	external: 'external', // внешний товар
	affiliate: 'affiliate' // партнёрский товар
} as const;
```

### 9.2. Price Type Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/commerce/price-type/

export const PRICE_TYPE = {
	// Price formats
	regular: 'regular', // обычная цена
	sale: 'sale', // цена со скидкой
	wholesale: 'wholesale', // оптовая цена
	retail: 'retail', // розничная цена

	// Price ranges
	from: 'from', // от
	to: 'to', // до
	range: 'range', // диапазон

	// Price states
	original: 'original', // оригинальная цена
	discounted: 'discounted', // цена со скидкой
	member: 'member', // цена для участников

	// Subscription prices
	oneTime: 'one-time', // разовый платёж
	recurring: 'recurring', // периодический платёж
	trial: 'trial' // пробный период
} as const;
```

### 9.3. Cart Status Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/commerce/cart-status/

export const CART_STATUS = {
	// Cart states
	empty: 'empty', // пустая корзина
	active: 'active', // активная корзина
	saved: 'saved', // сохранённая корзина
	expired: 'expired', // истёкшая корзина

	// Item states
	available: 'available', // доступно
	lowStock: 'low-stock', // мало на складе
	outOfStock: 'out-of-stock', // нет на складе
	backorder: 'backorder', // предзаказ
	discontinued: 'discontinued', // снято с производства

	// Checkout states
	checkout: 'checkout', // оформление заказа
	processing: 'processing', // обработка
	completed: 'completed', // завершено
	cancelled: 'cancelled', // отменено
	refunded: 'refunded' // возвращено
} as const;
```

### 9.4. Order Status Tokens

```typescript
// architect-svelte/src/lib/design-system/tokens/commerce/order-status/

export const ORDER_STATUS = {
	// Order lifecycle
	pending: 'pending', // ожидает оплаты
	paid: 'paid', // оплачен
	confirmed: 'confirmed', // подтверждён
	processing: 'processing', // обрабатывается
	shipped: 'shipped', // отправлен
	delivered: 'delivered', // доставлен
	completed: 'completed', // завершён

	// Problem states
	onHold: 'on-hold', // на удержании
	cancelled: 'cancelled', // отменён
	refunded: 'refunded', // возвращён
	failed: 'failed', // не удался

	// Shipping states
	preparing: 'preparing', // готовится к отправке
	inTransit: 'in-transit', // в пути
	outForDelivery: 'out-for-delivery', // доставляется
	readyForPickup: 'ready-for-pickup', // готов к выдаче
	pickedUp: 'picked-up', // получен

	// Return states
	returnRequested: 'return-requested', // запрошен возврат
	returnApproved: 'return-approved', // возврат одобрен
	returnReceived: 'return-received', // возврат получен
	returnProcessed: 'return-processed' // возврат обработан
} as const;
```

---

## 10. ГРАДИЕНТЫ (Gradients)

### 10.1. Directional Gradients

```typescript
// architect-svelte/src/lib/design-system/defaults/information/gradient-directional/

export const DIRECTIONAL_GRADIENTS = {
	// Basic directions
	toTop: 'linear-gradient(to top, var(--from), var(--to))',
	toTopRight: 'linear-gradient(to top right, var(--from), var(--to))',
	toRight: 'linear-gradient(to right, var(--from), var(--to))',
	toBottomRight: 'linear-gradient(to bottom right, var(--from), var(--to))',
	toBottom: 'linear-gradient(to bottom, var(--from), var(--to))',
	toBottomLeft: 'linear-gradient(to bottom left, var(--from), var(--to))',
	toLeft: 'linear-gradient(to left, var(--from), var(--to))',
	toTopLeft: 'linear-gradient(to top left, var(--from), var(--to))',

	// Angled
	'45deg': 'linear-gradient(45deg, var(--from), var(--to))',
	'90deg': 'linear-gradient(90deg, var(--from), var(--to))',
	'135deg': 'linear-gradient(135deg, var(--from), var(--to))',
	'180deg': 'linear-gradient(180deg, var(--from), var(--to))',
	'225deg': 'linear-gradient(225deg, var(--from), var(--to))',
	'270deg': 'linear-gradient(270deg, var(--from), var(--to))',
	'315deg': 'linear-gradient(315deg, var(--from), var(--to))',

	// Multi-stop
	threeStop: 'linear-gradient(90deg, var(--from), var(--mid), var(--to))',
	fourStop: 'linear-gradient(90deg, var(--stop1), var(--stop2), var(--stop3), var(--stop4))',

	// Semantic gradients
	primary: 'linear-gradient(135deg, var(--primary-500), var(--primary-700))',
	secondary: 'linear-gradient(135deg, var(--secondary-500), var(--secondary-700))',
	success: 'linear-gradient(135deg, var(--success-500), var(--success-700))',
	warning: 'linear-gradient(135deg, var(--warning-500), var(--warning-700))',
	danger: 'linear-gradient(135deg, var(--danger-500), var(--danger-700))',

	// Background gradients
	surface: 'linear-gradient(180deg, var(--surface-from), var(--surface-to))',
	card: 'linear-gradient(180deg, var(--card-from), var(--card-to))',
	overlay: 'linear-gradient(180deg, var(--overlay-from), var(--overlay-to))'
} as const;
```

### 10.2. Radial Gradients

```typescript
// architect-svelte/src/lib/design-system/defaults/information/gradient-radial/

export const RADIAL_GRADIENTS = {
	// Basic radial
	circle: 'radial-gradient(circle, var(--from), var(--to))',
	circleAtCenter: 'radial-gradient(circle at center, var(--from), var(--to))',
	circleAtTop: 'radial-gradient(circle at top, var(--from), var(--to))',
	circleAtBottom: 'radial-gradient(circle at bottom, var(--from), var(--to))',
	circleAtLeft: 'radial-gradient(circle at left, var(--from), var(--to))',
	circleAtRight: 'radial-gradient(circle at right, var(--from), var(--to))',

	// Ellipse
	ellipse: 'radial-gradient(ellipse, var(--from), var(--to))',
	ellipseAtCenter: 'radial-gradient(ellipse at center, var(--from), var(--to))',

	// Multi-stop radial
	multiStop: 'radial-gradient(circle, var(--stop1), var(--stop2), var(--stop3))',

	// Spotlight effects
	spotlight: 'radial-gradient(circle at var(--x) var(--y), var(--highlight), var(--base))',
	glow: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)',
	vignette: 'radial-gradient(circle, transparent 50%, var(--dark) 100%)',

	// Semantic radial
	focus: 'radial-gradient(circle at center, var(--focus-glow), transparent 60%)',
	selection: 'radial-gradient(circle, var(--selection-from), var(--selection-to))'
} as const;
```

### 10.3. Conic Gradients

```typescript
// architect-svelte/src/lib/design-system/defaults/information/gradient-conic/

export const CONIC_GRADIENTS = {
	// Basic conic
	circle: 'conic-gradient(from 0deg, var(--from), var(--to))',

	// Pie chart style
	pie2: 'conic-gradient(var(--color1) 0% 50%, var(--color2) 50% 100%)',
	pie3: 'conic-gradient(var(--color1) 0% 33%, var(--color2) 33% 66%, var(--color3) 66% 100%)',
	pie4: 'conic-gradient(var(--color1) 0% 25%, var(--color2) 25% 50%, var(--color3) 50% 75%, var(--color4) 75% 100%)',

	// Progress
	progress: 'conic-gradient(var(--progress-color) var(--percentage), var(--track-color) 0)',

	// Spinner
	spinner: 'conic-gradient(from 0deg, transparent 0deg, var(--color) 60deg, transparent 120deg)'
} as const;
```

### 10.4. Mesh Gradients

```typescript
// architect-svelte/src/lib/design-system/defaults/information/gradient-mesh/

export const MESH_GRADIENTS = {
	// 2-color mesh
	mesh2:
		'radial-gradient(at 0% 0%, var(--color1) 0px, transparent 50%), radial-gradient(at 100% 100%, var(--color2) 0px, transparent 50%)',

	// 3-color mesh
	mesh3: `
    radial-gradient(at 0% 0%, var(--color1) 0px, transparent 50%),
    radial-gradient(at 100% 0%, var(--color2) 0px, transparent 50%),
    radial-gradient(at 100% 100%, var(--color3) 0px, transparent 50%)
  `,

	// 4-color mesh
	mesh4: `
    radial-gradient(at 0% 0%, var(--color1) 0px, transparent 50%),
    radial-gradient(at 100% 0%, var(--color2) 0px, transparent 50%),
    radial-gradient(at 100% 100%, var(--color3) 0px, transparent 50%),
    radial-gradient(at 0% 100%, var(--color4) 0px, transparent 50%)
  `,

	// Organic mesh
	organic: `
    radial-gradient(at 40% 20%, var(--color1) 0px, transparent 50%),
    radial-gradient(at 80% 0%, var(--color2) 0px, transparent 50%),
    radial-gradient(at 0% 80%, var(--color3) 0px, transparent 50%),
    radial-gradient(at 80% 80%, var(--color4) 0px, transparent 50%),
    radial-gradient(at 20% 60%, var(--color5) 0px, transparent 50%)
  `,

	// Animated mesh (CSS custom properties)
	animated: `
    radial-gradient(at var(--x1) var(--y1), var(--color1) 0px, transparent 50%),
    radial-gradient(at var(--x2) var(--y2), var(--color2) 0px, transparent 50%),
    radial-gradient(at var(--x3) var(--y3), var(--color3) 0px, transparent 50%)
  `
} as const;
```

---

## 11. СЦЕНАРНЫЕ ТОКЕНЫ (Scene Tokens)

### 11.1. Theme Scene Colors

```typescript
// architect-svelte/src/lib/design-system/defaults/information/theme-scene/

export const THEME_SCENE = {
	// Depth layers
	far: '#f8fafc', // дальний план (фон)
	mid: '#f1f5f9', // средний план
	focus: '#e2e8f0', // план фокуса

	// Grid and guides
	grid: '#cbd5e1', // сетка
	guide: '#94a3b8', // направляющие
	axis: '#64748b', // оси

	// Scene elements
	star: '#3b82f6', // далёкая звезда
	icon: '#2563eb', // иконка
	cluster: '#60a5fa', // кластер
	selection: '#3b82f6', // выделение
	focusGlow: '#60a5fa', // свечение фокуса

	// Background variations
	sky: '#f0f9ff', // небо
	ground: '#f8fafc', // земля
	horizon: '#e0f2fe', // горизонт

	// Atmospheric
	fog: 'rgba(148, 163, 184, 0.1)', // туман
	haze: 'rgba(148, 163, 184, 0.05)', // дымка
	depth: 'rgba(0, 0, 0, 0.1)' // глубина
} as const;
```

### 11.2. Scene Camera Defaults

```typescript
// architect-svelte/src/lib/design-system/defaults/architecture/camera/

export const CAMERA_DEFAULTS = {
	// Position
	position: { x: 0, y: 0, z: 1000 },

	// Target (look at)
	target: { x: 0, y: 0, z: 0 },

	// Field of view
	fov: 60,

	// Zoom
	zoom: 1,
	minZoom: 0.1,
	maxZoom: 10,

	// Movement
	panSpeed: 1,
	zoomSpeed: 0.5,
	rotateSpeed: 0.005,

	// Constraints
	minX: -Infinity,
	maxX: Infinity,
	minY: -Infinity,
	maxY: Infinity,
	minZ: 0,
	maxZ: Infinity,

	// Damping
	dampingFactor: 0.05,
	zoomDamping: 0.1,

	// Auto rotation
	autoRotate: false,
	autoRotateSpeed: 1
} as const;
```

### 11.3. Semantic Zoom Thresholds

```typescript
// architect-svelte/src/lib/design-system/defaults/theme/semantic-zoom/

export const SEMANTIC_ZOOM = {
	// Scale thresholds
	thresholds: {
		star: { min: 0, max: 0.3 },
		icon: { min: 0.3, max: 0.5 },
		label: { min: 0.5, max: 0.8 },
		card: { min: 0.8, max: 1.2 },
		detail: { min: 1.2, max: 2.0 },
		fullscreen: { min: 2.0, max: 10 }
	},

	// Scale factors
	scaleFactors: {
		star: 0.2,
		icon: 0.4,
		label: 0.65,
		card: 1,
		detail: 1.5,
		fullscreen: 3
	},

	// Reveal policies
	revealPolicies: {
		star: ['position', 'color'],
		icon: ['position', 'color', 'icon'],
		label: ['position', 'color', 'icon', 'label'],
		card: ['position', 'color', 'icon', 'label', 'summary'],
		detail: ['position', 'color', 'icon', 'label', 'summary', 'details', 'actions'],
		fullscreen: [
			'position',
			'color',
			'icon',
			'label',
			'summary',
			'details',
			'actions',
			'metadata',
			'related'
		]
	},

	// Transition durations
	durations: {
		starToIcon: 300,
		iconToLabel: 350,
		labelToCard: 400,
		cardToDetail: 450,
		detailToFullscreen: 500
	},

	// Easing functions
	easing: {
		starToIcon: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
		iconToLabel: 'cubic-bezier(0.34, 1.45, 0.72, 1)',
		labelToCard: 'cubic-bezier(0.2, 0, 0, 1)',
		cardToDetail: 'cubic-bezier(0.2, 0, 0, 1)',
		detailToFullscreen: 'cubic-bezier(0.2, 0, 0, 1)'
	}
} as const;
```

---

## 12. ТЕМЫ (Themes)

### 12.1. Theme Variants

```typescript
// architect-svelte/src/lib/design-system/themes/

// Основные темы
lightTheme; // светлая тема
darkTheme; // тёмная тема
defaultTheme; // тема по умолчанию

// Accessibility темы
highContrastTheme; // высокий контраст
reducedMotionTheme; // уменьшенное движение
protanopiaTheme; // протанопия
deuteranopiaTheme; // дейтеранопия
tritanopiaTheme; // тританопия
achromatopsiaTheme; // ахроматопсия

// Brand темы (примеры)
brandBlueTheme; // синий бренд
brandGreenTheme; // зелёный бренд
brandPurpleTheme; // фиолетовый бренд
brandOrangeTheme; // оранжевый бренд

// Context темы
dayTheme; // дневная
nightTheme; // ночная
sunsetTheme; // закат
sunriseTheme; // рассвет

// Season themes
springTheme; // весна
summerTheme; // лето
autumnTheme; // осень
winterTheme; // зима

// Mood themes
calmTheme; // спокойная
energeticTheme; // энергичная
focusTheme; // фокус
creativeTheme; // креативная

// Device themes
mobileTheme; // мобильная
tabletTheme; // планшетная
desktopTheme; // десктопная
tvTheme; // ТВ
watchTheme; // часы
arGlassesTheme; // AR очки
vrHeadsetTheme; // VR шлем
```

### 12.2. Theme Structure

```typescript
// architect-svelte/src/lib/design-system/contracts/theme/theme.ts

export interface Theme {
	// Identity
	name: string;
	scheme: 'light' | 'dark' | 'custom';

	// Colors
	colors: {
		// Brand colors (scales)
		primary: ColorScale;
		secondary: ColorScale;
		tertiary: ColorScale;
		neutral: ColorScale;

		// Status colors
		success: ColorScale;
		info: ColorScale;
		warning: ColorScale;
		error: ColorScale;
		danger: ColorScale;

		// Surface colors
		background: SurfaceColors;
		surfaceTint: SurfaceTintColors;

		// Text colors
		text: TextColors;

		// Border colors
		border: BorderColors;

		// On-color counterparts
		onPrimary: string;
		onSecondary: string;
		onTertiary: string;
		onSuccess: string;
		onInfo: string;
		onWarning: string;
		onError: string;
		onBackground: string;
		onSurface: string;

		// Container colors
		primaryContainer: string;
		onPrimaryContainer: string;
		secondaryContainer: string;
		onSecondaryContainer: string;
		tertiaryContainer: string;
		onTertiaryContainer: string;
		errorContainer: string;
		onErrorContainer: string;

		// Outline colors
		outline: string;
		outlineVariant: string;

		// Shadow and scrim
		shadow: string;
		scrim: string;
		backdrop: string;

		// Scene colors
		scene: SceneColors;
	};

	// Typography
	typography: TypographyScale;

	// Spacing
	spacing: SpacingScale;

	// Border radius
	borderRadius: BorderRadiusScale;

	// Elevation
	elevation: ElevationScale;
	boxShadow: BoxShadowScale;

	// Size
	size: SizeScale;

	// Opacity
	opacity: OpacityScale;

	// Z-index
	zIndex: ZIndexScale;

	// Motion
	motion: {
		duration: DurationScale;
		easing: EasingScale;
		transitions: TransitionPresets;
		animations: AnimationPresets;
	};

	// Gradients
	gradients: {
		types: GradientTypes;
		directional: DirectionalGradients;
		radial: RadialGradients;
		conic: ConicGradients;
		mesh: MeshGradients;
	};

	// Scene
	scene: SceneDefaults;

	// Camera
	camera: CameraDefaults;

	// Semantic zoom
	semanticZoom: SemanticZoomDefaults;
}
```

---

## 13. ДОПОЛНИТЕЛЬНЫЕ ОБЪЕКТЫ

### 13.1. Size Scale

```typescript
// architect-svelte/src/lib/design-system/defaults/architecture/size/

export const Size = {
	// Icon sizes
	iconXs: '0.75rem', // 12px
	iconSm: '1rem', // 16px
	iconMd: '1.25rem', // 20px
	iconLg: '1.5rem', // 24px
	iconXl: '2rem', // 32px
	icon2xl: '2.5rem', // 40px
	icon3xl: '3rem', // 48px

	// Avatar sizes
	avatarXs: '1.5rem', // 24px
	avatarSm: '2rem', // 32px
	avatarMd: '2.5rem', // 40px
	avatarLg: '3rem', // 48px
	avatarXl: '4rem', // 64px
	avatar2xl: '5rem', // 80px
	avatar3xl: '6rem', // 96px

	// Button sizes
	buttonSm: '2rem', // 32px
	buttonMd: '2.5rem', // 40px
	buttonLg: '3rem', // 48px
	buttonXl: '3.5rem', // 56px

	// Input sizes
	inputSm: '2rem', // 32px
	inputMd: '2.5rem', // 40px
	inputLg: '3rem', // 48px

	// Component sizes
	componentXs: '1.5rem',
	componentSm: '2rem',
	componentMd: '2.5rem',
	componentLg: '3rem',
	componentXl: '4rem',
	component2xl: '5rem',
	component3xl: '6rem'
} as const;
```

### 13.2. Breakpoints

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/breakpoint/

export const BREAKPOINT = {
	// Standard breakpoints
	xs: '0px', // mobile small
	sm: '576px', // mobile large
	md: '768px', // tablet
	lg: '992px', // desktop small
	xl: '1200px', // desktop medium
	'2xl': '1400px', // desktop large
	'3xl': '1600px', // desktop extra large
	'4xl': '1920px', // full HD
	'5xl': '2560px', // 2K
	'6xl': '3840px', // 4K

	// Semantic names
	mobile: '0px',
	mobileLg: '576px',
	tablet: '768px',
	tabletLg: '992px',
	desktop: '992px',
	desktopLg: '1200px',
	desktopXl: '1400px',
	desktop2xl: '1600px',
	hd: '1920px',
	'2k': '2560px',
	'4k': '3840px'
} as const;
```

### 13.3. Aspect Ratios

```typescript
// architect-svelte/src/lib/design-system/tokens/architecture/aspect-ratio/

export const ASPECT_RATIO = {
	// Square
	square: '1 / 1',

	// Portrait
	portrait4: '3 / 4',
	portrait3: '2 / 3',
	portrait2: '1 / 2',

	// Landscape
	landscape4: '4 / 3',
	landscape3: '3 / 2',
	landscape2: '2 / 1',

	// Standard
	video: '16 / 9',
	cinema: '21 / 9',
	photo35: '3 / 2',
	photo43: '4 / 3',

	// Social media
	instagram: '1 / 1',
	instagramPortrait: '4 / 5',
	instagramStory: '9 / 16',
	youtube: '16 / 9',
	twitter: '16 / 9',
	facebook: '1.91 / 1',
	linkedin: '1.91 / 1',
	pinterest: '2 / 3',

	// Documents
	a4: '1 / 1.414',
	letter: '1 / 1.294',
	legal: '1 / 1.647'
} as const;
```

---

## 14. ССЫЛКИ НА МАТЕРИАЛЫ

### 14.1. Material Design 3 Reference

- [MD3 Color System](https://m3.material.io/styles/color/overview)
- [MD3 Typography](https://m3.material.io/styles/typography/overview)
- [MD3 Elevation](https://m3.material.io/styles/elevation/overview)
- [MD3 Motion](https://m3.material.io/styles/motion/overview)
- [MD3 Shapes](https://m3.material.io/styles/shapes/overview)

### 14.2. Prezi-style Resources

- [Prezi Presentation Style](https://prezi.com/)
- [Spatial Design Principles](https://developer.apple.com/design/human-interface-guidelines/spatial-design)
- [Zoomable UI Patterns](https://www.patternfly.org/patterns/zoomable-ui/)

### 14.3. AR Design Resources

- [Apple AR Human Interface Guidelines](https://developer.apple.com/augmented-reality/human-interface-guidelines/)
- [Google ARCore Design Guidelines](https://developers.google.com/ar/design)
- [Microsoft HoloLens Design](https://docs.microsoft.com/en-us/windows/mixed-reality/design/)

---

## 15. ПЛАНЫ РЕАЛИЗАЦИИ

### 15.1. Phase 1: Базовые токены (1-2 недели)

- [ ] Добавить недостающие цветовые шкалы (purple, pink, orange, yellow, cyan, indigo, violet, fuchsia, rose, lime, emerald, sky)
- [ ] Создать accessibility темы (high contrast, reduced motion)
- [ ] Расширить motion систему (choreography, physics)
- [ ] Добавить component-specific токены

### 15.2. Phase 2: Пространственная система (2-3 недели)

- [ ] Camera tokens (mode, axis, viewport)
- [ ] Zoom stage tokens и thresholds
- [ ] Depth layer tokens
- [ ] Spatial anchor и reveal tokens

### 15.3. Phase 3: Scene система (3-4 недели)

- [ ] Scene layout tokens
- [ ] Node presentation tokens
- [ ] Semantic zoom contracts
- [ ] Camera defaults и behavior

### 15.4. Phase 4: Accessibility (1-2 недели)

- [ ] Color blindness themes
- [ ] High contrast improvements
- [ ] Reduced motion polish
- [ ] WCAG compliance checking

### 15.5. Phase 5: AR/VR (4-6 недель)

- [ ] AR-specific tokens
- [ ] VR viewport tokens
- [ ] Spatial audio tokens
- [ ] Haptic feedback tokens

---

**Итого токенов:** ~1500+ значений
**Итого объектов:** ~100+ структур
**Итого тем:** 20+ вариантов

Этот план обеспечит уровень, сопоставимый с Material Design 3 + Prezi для AR.
