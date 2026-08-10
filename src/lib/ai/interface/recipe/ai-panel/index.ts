import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeAiPanel
	extends ComputeIntersectAll<[SlotThemeBorder, SlotTypography]> {
	/** Selected provider ID */
	selectedProviderId?: string | null;
	/** Callback when option is selected */
	onOptionSelect?: (providerId: string, optionId: string) => void;
	/** Callback when chat is started */
	onStartChat?: (providerId: 'gemini' | 'qwen' | 'claude' | 'codex') => void;

	class?: string;
}
