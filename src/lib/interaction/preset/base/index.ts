import type { Preset } from '$stylist/interaction/type/struct/preset/preset';
import { TOKEN_SIZE } from '$stylist/layout/const/enum/size';
import { AccessibilityToolbarStyleManager } from '$stylist/control/class/style-manager/accessibility-toolbar/index';
import { StyleManagerState } from '$stylist/architecture/class/style-manager/state/index';
import { RECORD_CLASS_SIZE } from '$stylist/layout/const/record/class-size';
import { RECORD_ICON_SIZE } from '$stylist/media/const/record/icon-size';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

const DEFAULT_STATE_FLAGS = {
	disabled: false,
	loading: false,
	readonly: false,
	required: false,
	closeable: false
} as const;

export const INTERACTION_TOKENS = {
	INTERACTIVE_VARIANTS: InteractionStyleManager.getInteractiveVariants(),
	TOKEN_SIZE,
	DEFAULT_STATE_FLAGS,
	STATE_CLASSES: StyleManagerState.classes,
	INTERACTIVE_BASE_CLASS: InteractionStyleManager.getInteractiveBaseClass(),
	ACCESSIBILITY_CLASSES: {
		container: AccessibilityToolbarStyleManager.getContainerClass(),
		toolbar: AccessibilityToolbarStyleManager.getToolbarClass(),
		button: AccessibilityToolbarStyleManager.getButtonClass(),
		activeButton: AccessibilityToolbarStyleManager.getActiveButtonClass()
	},
	VARIANT_CLASSES: Object.fromEntries(
		InteractionStyleManager.getInteractiveVariants().map((variant: TokenAppearance) => [
			variant,
			InteractionStyleManager.getVariantClasses(variant)
		])
	),
	SIZE_CLASSES: RECORD_CLASS_SIZE,
	ICON_SIZES: RECORD_ICON_SIZE
} as const;

export const createBasePreset = <V extends string, S extends string>(
	variants: readonly V[],
	sizes: readonly S[],
	defaults: { variant: V; size: S }
): Preset<V, S> => ({
	variants,
	sizes,
	defaults: { ...defaults, disabled: false, block: false },
	classes: {
		base: 'inline-flex items-center justify-center rounded-md transition-colors',
		focusVisible: 'focus-visible:outline-none focus-visible:ring-2',
		size: Object.fromEntries(
			sizes.map((s) => [
				s,
				RECORD_CLASS_SIZE[s as keyof typeof RECORD_CLASS_SIZE] ??
					(s === 'sm' ? 'h-8 px-3 text-xs' : s === 'lg' ? 'h-11 px-6 text-base' : 'h-9 px-4 text-sm')
			])
		) as Record<S, string>,
		variant: Object.fromEntries(
			variants.map((v) => [
				v,
				InteractionStyleManager.getVariantClasses(v as Parameters<typeof InteractionStyleManager.getVariantClasses>[0]) ??
					(v === 'outline'
						? 'border bg-transparent'
						: 'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] border border-transparent hover:bg-[var(--color-primary-700)]')
			])
		) as Record<V, string>,
		state: { disabled: 'opacity-[var(--opacity-50)] cursor-not-allowed', block: 'w-full' }
	},
	loaderSize: Object.fromEntries(
		sizes.map((s) => [s, s === 'sm' ? 'w-3 h-3' : s === 'lg' ? 'w-5 h-5' : 'w-4 h-4'])
	) as Record<S, string>
});





