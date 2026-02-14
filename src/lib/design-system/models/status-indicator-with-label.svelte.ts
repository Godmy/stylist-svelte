import type {
	AbbrProps,
	BadgeGroupProps,
	BadgeProps,
	BlockquoteProps,
	CodeBlockProps,
	CountBadgeProps,
	CounterProps,
	DotProps,
	InlineBaseProps,
	InlineCodeProps,
	LabelProps,
	LinkProps,
	ListItemMarkerProps,
	SeparatorProps,
	StatusIndicatorProps,
	StatusIndicatorWithLabelProps,
	SyntaxHighlightedCodeProps
} from '$stylist/design-system/props';
import {
	BADGE_GROUP_CONTAINER_CLASSES,
	BADGE_GROUP_OVERFLOW_CLASSES,
	BADGE_SIZE_CLASSES,
	BADGE_VARIANT_CLASSES,
	BASE_BADGE_CLASSES,
	BASE_CODE_BLOCK_CLASSES,
	BASE_LABEL_CLASSES,
	BLOCKQUOTE_CLASSES,
	CODE_BLOCK_SIZE_CLASSES,
	CODE_BLOCK_VARIANT_CLASSES,
	LABEL_DISABLED_CLASSES,
	LABEL_ENABLED_CLASSES,
	LABEL_SIZE_CLASSES,
	REQUIRED_INDICATOR_CLASSES,
	SEPARATOR_CLASSES,
	SYNTAX_HIGHLIGHTED_CODE_CLASSES,
	SYNTAX_HIGHLIGHTED_CODE_CONTAINER_BASE_CLASSES
} from '$stylist/design-system/classes';
import { IndicatorsStyleManager } from '$stylist/design-system/styles/indicators';
import { LinkStyleManager } from '$stylist/design-system/styles/link';
import type { CompactSize } from '$stylist/design-system/tokens/sizes';
import type { CommonSize } from '$stylist/design-system/tokens/variants';
import { cn } from '$stylist/utils/classes';

type InlineCodeVariant = 'default' | 'subtle';
type LinkVariant =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'info'
	| 'solid'
	| 'outline'
	| 'ghost'
	| 'link'
	| 'subtle'
	| 'neutral'
	| 'gray'
	| 'muted'
	| 'dark'
	| 'light';
type MessageStatusType = 'sent' | 'delivered' | 'read';
type StatusIndicatorWithLabelStatus =
	| 'success'
	| 'warning'
	| 'error'
	| 'info'
	| 'neutral'
	| 'custom';

interface MessageStatusProps {
	status?: MessageStatusType;
	size?: CommonSize;
}
function createBlockquoteState(props: BlockquoteProps) {
	const cite = $derived(props.cite ?? '');
	const withBorder = $derived(props.withBorder ?? false);
	const withBackground = $derived(props.withBackground ?? false);
	const classes = $derived(
		cn(
			BLOCKQUOTE_CLASSES.base,
			withBorder && BLOCKQUOTE_CLASSES.background,
			withBackground && BLOCKQUOTE_CLASSES.border,
			props.class ?? ''
		)
	);
	const footerClasses = $derived(BLOCKQUOTE_CLASSES.footer);

	return {
		get cite() {
			return cite;
		},
		get withBorder() {
			return withBorder;
		},
		get withBackground() {
			return withBackground;
		},
		get classes() {
			return classes;
		},
		get footerClasses() {
			return footerClasses;
		},
		get footerPrefix() {
			return '&mdash; ';
		}
	};
}
function createBadgeState(props: BadgeProps) {
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const classes = $derived(
		cn(
			BASE_BADGE_CLASSES,
			BADGE_VARIANT_CLASSES[variant as keyof typeof BADGE_VARIANT_CLASSES],
			BADGE_SIZE_CLASSES[size as keyof typeof BADGE_SIZE_CLASSES],
			props.class ?? ''
		)
	);

	return {
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		}
	};
}
function createBadgeGroupState(props: BadgeGroupProps) {
	const badges = $derived(props.badges ?? []);
	const maxVisible = $derived(props.maxVisible ?? 5);
	const showOverflow = $derived(props.showOverflow ?? true);
	const badgeClass = $derived(props.badgeClass ?? '');
	const overflowClass = $derived(props.overflowClass ?? '');
	const containerClasses = $derived(cn(BADGE_GROUP_CONTAINER_CLASSES, props.class ?? ''));
	const overflowClasses = $derived(cn(BADGE_GROUP_OVERFLOW_CLASSES, overflowClass));
	const visibleBadges = $derived(badges.slice(0, maxVisible));
	const overflowCount = $derived(Math.max(0, badges.length - maxVisible));

	return {
		get badges() {
			return badges;
		},
		get maxVisible() {
			return maxVisible;
		},
		get showOverflow() {
			return showOverflow;
		},
		get badgeClass() {
			return badgeClass;
		},
		get overflowClass() {
			return overflowClass;
		},
		get containerClasses() {
			return containerClasses;
		},
		get overflowClasses() {
			return overflowClasses;
		},
		get visibleBadges() {
			return visibleBadges;
		},
		get overflowCount() {
			return overflowCount;
		}
	};
}
function createCodeBlockState(props: CodeBlockProps) {
	const language = $derived(props.language ?? 'text');
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const showLineNumbers = $derived(props.showLineNumbers ?? false);
	const startLineNumber = $derived(props.startLineNumber ?? 1);
	const classes = $derived(
		cn(
			BASE_CODE_BLOCK_CLASSES,
			CODE_BLOCK_VARIANT_CLASSES[variant as keyof typeof CODE_BLOCK_VARIANT_CLASSES],
			CODE_BLOCK_SIZE_CLASSES[size as keyof typeof CODE_BLOCK_SIZE_CLASSES],
			props.class ?? ''
		)
	);

	return {
		get language() {
			return language;
		},
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get showLineNumbers() {
			return showLineNumbers;
		},
		get startLineNumber() {
			return startLineNumber;
		},
		get classes() {
			return classes;
		}
	};
}
function createLabelState(props: LabelProps) {
	const size = $derived(props.size ?? 'md');
	const required = $derived(props.required ?? false);
	const disabled = $derived(props.disabled ?? false);
	const htmlFor = $derived(props.htmlFor);
	const text = $derived(props.text);
	const classes = $derived(
		cn(
			BASE_LABEL_CLASSES,
			LABEL_SIZE_CLASSES[size],
			disabled ? LABEL_DISABLED_CLASSES : LABEL_ENABLED_CLASSES,
			props.class ?? ''
		)
	);
	const requiredIndicatorClasses = $derived(REQUIRED_INDICATOR_CLASSES);

	return {
		get size() {
			return size;
		},
		get required() {
			return required;
		},
		get disabled() {
			return disabled;
		},
		get htmlFor() {
			return htmlFor;
		},
		get text() {
			return text;
		},
		get classes() {
			return classes;
		},
		get requiredIndicatorClasses() {
			return requiredIndicatorClasses;
		}
	};
}
function createCountBadgeState(props: CountBadgeProps) {
	const count = $derived(props.count ?? 0);
	const max = $derived(props.max ?? 99);
	const showZero = $derived(props.showZero ?? false);
	const classes = $derived(IndicatorsStyleManager.getCountBadgeClasses(props.class ?? ''));
	const displayCount = $derived(count > max ? `${max}+` : count);

	return {
		get count() {
			return count;
		},
		get max() {
			return max;
		},
		get showZero() {
			return showZero;
		},
		get classes() {
			return classes;
		},
		get displayCount() {
			return displayCount;
		}
	};
}
function createCounterState(props: CounterProps) {
	const count = $derived(props.count ?? 0);
	const max = $derived(props.max ?? 99);
	const variant = $derived(props.variant ?? 'primary');
	const size = $derived(props.size ?? 'md');
	const classes = $derived(
		IndicatorsStyleManager.getCounterClasses(
			variant as Parameters<typeof IndicatorsStyleManager.getCounterClasses>[0],
			size as Parameters<typeof IndicatorsStyleManager.getCounterClasses>[1],
			props.class ?? ''
		)
	);
	const displayCount = $derived(count > max ? `${max}+` : count);

	return {
		get count() {
			return count;
		},
		get max() {
			return max;
		},
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		},
		get displayCount() {
			return displayCount;
		}
	};
}
function createDotState(props: DotProps) {
	const color = $derived(props.color ?? 'primary');
	const size = $derived(props.size ?? 'md');
	const classes = $derived(
		IndicatorsStyleManager.getDotClasses(
			color as Parameters<typeof IndicatorsStyleManager.getDotClasses>[0],
			size as Parameters<typeof IndicatorsStyleManager.getDotClasses>[1],
			props.class ?? ''
		)
	);

	return {
		get color() {
			return color;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		}
	};
}
function createListItemMarkerState(props: ListItemMarkerProps) {
	const type = $derived(props.type ?? 'bullet');
	const value = $derived(props.value ?? '');
	const color = $derived(props.color ?? 'gray');
	const size = $derived(props.size ?? 'md');
	const classes = $derived(
		IndicatorsStyleManager.getMarkerClasses(
			color as Parameters<typeof IndicatorsStyleManager.getMarkerClasses>[0],
			size as Parameters<typeof IndicatorsStyleManager.getMarkerClasses>[1],
			props.class ?? ''
		)
	);
	const bulletClasses = $derived(
		IndicatorsStyleManager.getBulletClasses(
			size as Parameters<typeof IndicatorsStyleManager.getBulletClasses>[0]
		)
	);

	return {
		get type() {
			return type;
		},
		get value() {
			return value;
		},
		get color() {
			return color;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		},
		get bulletClasses() {
			return bulletClasses;
		}
	};
}
function createMessageStatusState(props: MessageStatusProps) {
	const status = $derived(props.status ?? 'sent');
	const size = $derived(props.size ?? 'sm');
	const containerClasses = $derived(
		IndicatorsStyleManager.getMessageStatusContainerClasses(status as MessageStatusType)
	);
	const iconClasses = $derived(
		IndicatorsStyleManager.getMessageStatusIconClasses(
			size as Parameters<typeof IndicatorsStyleManager.getMessageStatusIconClasses>[0]
		)
	);
	const isDoubleCheck = $derived(status === 'read');

	return {
		get status() {
			return status;
		},
		get size() {
			return size;
		},
		get containerClasses() {
			return containerClasses;
		},
		get iconClasses() {
			return iconClasses;
		},
		get isDoubleCheck() {
			return isDoubleCheck;
		}
	};
}
function createStatusIndicatorState(props: StatusIndicatorProps) {
	const status = $derived(props.status ?? 'online');
	const label = $derived(props.label ?? status);
	const classes = $derived(IndicatorsStyleManager.getStatusIndicatorContainerClasses(props.class ?? ''));
	const dotClasses = $derived(
		IndicatorsStyleManager.getStatusIndicatorDotClasses(
			status as Parameters<typeof IndicatorsStyleManager.getStatusIndicatorDotClasses>[0]
		)
	);

	return {
		get status() {
			return status;
		},
		get label() {
			return label;
		},
		get classes() {
			return classes;
		},
		get dotClasses() {
			return dotClasses;
		}
	};
}

export function createStatusIndicatorWithLabelState(props: StatusIndicatorWithLabelProps) {
	const status = $derived((props.status ?? 'neutral') as StatusIndicatorWithLabelStatus);
	const label = $derived(props.label ?? 'Status');
	const customColor = $derived(props.customColor);
	const size = $derived(props.size ?? 'md');
	const showLabel = $derived(props.showLabel ?? true);
	const indicatorClass = $derived(props.indicatorClass ?? '');
	const labelClass = $derived(props.labelClass ?? '');
	const containerClasses = $derived(
		IndicatorsStyleManager.getStatusIndicatorWithLabelContainerClasses(props.class ?? '')
	);
	const indicatorClasses = $derived(
		IndicatorsStyleManager.getStatusIndicatorWithLabelIndicatorClasses(
			status,
			size as Parameters<typeof IndicatorsStyleManager.getStatusIndicatorWithLabelIndicatorClasses>[1],
			customColor,
			indicatorClass
		)
	);
	const indicatorStyle = $derived(
		status === 'custom' && customColor ? `background-color: ${customColor};` : ''
	);
	const labelClasses = $derived(
		IndicatorsStyleManager.getStatusIndicatorWithLabelLabelClasses(labelClass)
	);

	return {
		get status() {
			return status;
		},
		get label() {
			return label;
		},
		get customColor() {
			return customColor;
		},
		get size() {
			return size;
		},
		get showLabel() {
			return showLabel;
		},
		get indicatorClass() {
			return indicatorClass;
		},
		get labelClass() {
			return labelClass;
		},
		get containerClasses() {
			return containerClasses;
		},
		get indicatorClasses() {
			return indicatorClasses;
		},
		get indicatorStyle() {
			return indicatorStyle;
		},
		get labelClasses() {
			return labelClasses;
		}
	};
}
function createAbbrState(props: AbbrProps) {
	const title = $derived(props.title ?? '');
	const classes = $derived(LinkStyleManager.getAbbrClasses(props.class ?? ''));

	return {
		get title() {
			return title;
		},
		get classes() {
			return classes;
		}
	};
}
function createDefinitionDescriptionState(props: InlineBaseProps) {
	const classes = $derived(LinkStyleManager.getDefinitionDescriptionClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}
function createDefinitionTermState(props: InlineBaseProps) {
	const classes = $derived(LinkStyleManager.getDefinitionTermClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}
function createEmState(props: InlineBaseProps) {
	const classes = $derived(LinkStyleManager.getEmClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}
function createHighlightState(props: InlineBaseProps) {
	const classes = $derived(LinkStyleManager.getHighlightClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}
function createInlineCodeState(props: InlineCodeProps) {
	const variant = $derived(props.variant ?? 'default');
	const classes = $derived(LinkStyleManager.getInlineCodeClasses(variant as InlineCodeVariant, props.class ?? ''));

	return {
		get variant() {
			return variant;
		},
		get classes() {
			return classes;
		}
	};
}
function createKbdState(props: InlineBaseProps) {
	const classes = $derived(LinkStyleManager.getKbdClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}
function createLinkState(props: LinkProps) {
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const underline = $derived(props.underline ?? true);
	const href = $derived(props.href);
	const target = $derived(props.target);
	const text = $derived(props.text);
	const classes = $derived(
		LinkStyleManager.getLinkClasses(
			variant as LinkVariant,
			size as CompactSize,
			disabled,
			underline,
			props.class ?? ''
		)
	);

	return {
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get disabled() {
			return disabled;
		},
		get underline() {
			return underline;
		},
		get href() {
			return href;
		},
		get target() {
			return target;
		},
		get text() {
			return text;
		},
		get classes() {
			return classes;
		}
	};
}
function createSeparatorState(props: SeparatorProps) {
	const orientation = $derived(props.orientation ?? 'horizontal');
	const decorative = $derived(props.decorative ?? false);
	const classes = $derived(cn(SEPARATOR_CLASSES[orientation], props.class ?? ''));

	return {
		get orientation() {
			return orientation;
		},
		get decorative() {
			return decorative;
		},
		get classes() {
			return classes;
		}
	};
}
function createSyntaxHighlightedCodeState(props: SyntaxHighlightedCodeProps) {
	const language = $derived(props.language ?? 'text');
	const code = $derived(props.code ?? '');
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const showLineNumbers = $derived(props.showLineNumbers ?? false);
	const startLineNumber = $derived(props.startLineNumber ?? 1);
	const containerClasses = $derived(
		cn(
			SYNTAX_HIGHLIGHTED_CODE_CONTAINER_BASE_CLASSES,
			CODE_BLOCK_VARIANT_CLASSES[variant as keyof typeof CODE_BLOCK_VARIANT_CLASSES],
			CODE_BLOCK_SIZE_CLASSES[size as keyof typeof CODE_BLOCK_SIZE_CLASSES],
			props.class ?? ''
		)
	);
	const codeClasses = $derived(SYNTAX_HIGHLIGHTED_CODE_CLASSES);
	const escapedCode = $derived(
		code
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#039;')
	);

	return {
		get language() {
			return language;
		},
		get code() {
			return code;
		},
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get showLineNumbers() {
			return showLineNumbers;
		},
		get startLineNumber() {
			return startLineNumber;
		},
		get containerClasses() {
			return containerClasses;
		},
		get codeClasses() {
			return codeClasses;
		},
		get escapedCode() {
			return escapedCode;
		}
	};
}

export default createStatusIndicatorWithLabelState;



