import type { BlockquoteProps } from '$stylist/design-system/attributes';
import {
	BLOCKQUOTE_CLASSES,
	DEFAULT_WITH_BACKGROUND,
	DEFAULT_WITH_BORDER,
	FOOTER_PREFIX
} from '$stylist/design-system';
import { getBlockquoteClasses } from '$stylist/design-system/presets';
import type {
	BadgeProps,
	BadgeGroupProps,
	CodeBlockProps,
	LabelProps
} from '$stylist/design-system/attributes';
import {
	BADGE_DEFAULT_SIZE,
	BADGE_DEFAULT_VARIANT,
	BADGE_GROUP_CONTAINER_CLASSES,
	BADGE_GROUP_OVERFLOW_CLASSES,
	DEFAULT_CODE_BLOCK_SIZE,
	DEFAULT_CODE_BLOCK_VARIANT,
	DEFAULT_LANGUAGE,
	DEFAULT_SHOW_LINE_NUMBERS,
	DEFAULT_START_LINE_NUMBER,
	DEFAULT_LABEL_DISABLED,
	DEFAULT_LABEL_REQUIRED,
	DEFAULT_LABEL_SIZE,
	REQUIRED_INDICATOR_CLASSES
} from '$stylist/design-system';
import {
	getBadgeClasses,
	getCodeBlockClasses,
	getLabelClasses
} from '$stylist/design-system/presets';
import type {
	CountBadgeProps,
	CounterProps,
	DotProps,
	ListItemMarkerProps,
	StatusIndicatorProps,
	StatusIndicatorWithLabelProps
} from '$stylist/design-system/attributes';
import type { MessageStatusType } from '$stylist/design-system';
import type { CommonSize } from '$stylist/design-system/tokens/variants';
import {
	BASE_COUNT_BADGE_CLASSES,
	BASE_COUNTER_CLASSES,
	BASE_DOT_CLASSES,
	BASE_MARKER_CLASSES,
	BULLET_CLASSES,
	BULLET_SIZE_CLASSES,
	COUNTER_SIZE_CLASSES,
	COUNTER_VARIANT_CLASSES,
	DEFAULT_COUNT_BADGE_COUNT,
	DEFAULT_COUNT_BADGE_MAX,
	DEFAULT_COUNT_BADGE_SHOW_ZERO,
	DEFAULT_COUNTER_COUNT,
	DEFAULT_COUNTER_MAX,
	DEFAULT_COUNTER_SIZE,
	DEFAULT_COUNTER_VARIANT,
	DEFAULT_DOT_COLOR,
	DEFAULT_DOT_SIZE,
	DEFAULT_MARKER_COLOR,
	DEFAULT_MARKER_SIZE,
	DEFAULT_MARKER_TYPE,
	DEFAULT_MARKER_VALUE,
	DEFAULT_STATUS_INDICATOR_STATUS,
	DOT_COLOR_CLASSES,
	DOT_SIZE_CLASSES,
	getStatusIndicatorLabel,
	MARKER_COLOR_CLASSES,
	MARKER_SIZE_CLASSES,
	MESSAGE_STATUS_COLORS,
	MESSAGE_STATUS_SIZE_CLASSES,
	STATUS_INDICATOR_CONTAINER_CLASSES,
	STATUS_INDICATOR_DOT_BASE_CLASSES,
	STATUS_INDICATOR_STATUS_CLASSES,
	STATUS_INDICATOR_WITH_LABEL_COLOR_CLASSES,
	STATUS_INDICATOR_WITH_LABEL_CONTAINER_CLASSES,
	STATUS_INDICATOR_WITH_LABEL_SIZE_CLASSES
} from '$stylist/design-system';
import type {
	AbbrProps,
	InlineBaseProps,
	InlineCodeProps,
	LinkProps
} from '$stylist/design-system/attributes';
import type { SeparatorProps, SyntaxHighlightedCodeProps } from '$stylist/design-system/attributes';
import {
	DEFAULT_ABBR_TITLE,
	DEFAULT_INLINE_CODE_VARIANT,
	DEFAULT_LINK_DISABLED,
	DEFAULT_LINK_SIZE,
	DEFAULT_LINK_UNDERLINE,
	DEFAULT_LINK_VARIANT,
	DEFAULT_SEPARATOR_DECORATIVE,
	DEFAULT_SEPARATOR_ORIENTATION,
	DEFAULT_SYNTAX_HIGHLIGHTED_CODE_SIZE,
	DEFAULT_SYNTAX_HIGHLIGHTED_CODE_VARIANT
} from '$stylist/design-system';
import {
	getAbbrClasses,
	getDefinitionDescriptionClasses,
	getDefinitionTermClasses,
	getEmClasses,
	getHighlightClasses,
	getInlineCodeClasses,
	getKbdClasses,
	getLinkClasses,
	getSeparatorClasses,
	getSyntaxHighlightedCodeClasses,
	getSyntaxHighlightedCodeContainerClasses
} from '$stylist/design-system/presets/information';

interface MessageStatusProps {
	status?: MessageStatusType;
	size?: CommonSize;
}

export function createBlockquoteState(props: BlockquoteProps) {
	const cite = $derived(props.cite ?? '');
	const withBorder = $derived(props.withBorder ?? DEFAULT_WITH_BORDER);
	const withBackground = $derived(props.withBackground ?? DEFAULT_WITH_BACKGROUND);
	const classes = $derived(getBlockquoteClasses(withBorder, withBackground, props.class ?? ''));
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
			return FOOTER_PREFIX;
		}
	};
}

export function createBadgeState(props: BadgeProps) {
	const variant = $derived(props.variant ?? BADGE_DEFAULT_VARIANT);
	const size = $derived(props.size ?? BADGE_DEFAULT_SIZE);
	const classes = $derived(getBadgeClasses(variant, size, props.class ?? ''));

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

export function createBadgeGroupState(props: BadgeGroupProps) {
	const badges = $derived(props.badges ?? []);
	const maxVisible = $derived(props.maxVisible ?? 5);
	const showOverflow = $derived(props.showOverflow ?? true);
	const badgeClass = $derived(props.badgeClass ?? '');
	const overflowClass = $derived(props.overflowClass ?? '');
	const containerClasses = $derived(
		props.class ? `${BADGE_GROUP_CONTAINER_CLASSES} ${props.class}` : BADGE_GROUP_CONTAINER_CLASSES
	);
	const overflowClasses = $derived(
		overflowClass
			? `${BADGE_GROUP_OVERFLOW_CLASSES} ${overflowClass}`
			: BADGE_GROUP_OVERFLOW_CLASSES
	);
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

export function createCodeBlockState(props: CodeBlockProps) {
	const language = $derived(props.language ?? DEFAULT_LANGUAGE);
	const variant = $derived(props.variant ?? DEFAULT_CODE_BLOCK_VARIANT);
	const size = $derived(props.size ?? DEFAULT_CODE_BLOCK_SIZE);
	const showLineNumbers = $derived(props.showLineNumbers ?? DEFAULT_SHOW_LINE_NUMBERS);
	const startLineNumber = $derived(props.startLineNumber ?? DEFAULT_START_LINE_NUMBER);
	const classes = $derived(getCodeBlockClasses(variant, size, props.class ?? ''));

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

export function createLabelState(props: LabelProps) {
	const size = $derived(props.size ?? DEFAULT_LABEL_SIZE);
	const required = $derived(props.required ?? DEFAULT_LABEL_REQUIRED);
	const disabled = $derived(props.disabled ?? DEFAULT_LABEL_DISABLED);
	const htmlFor = $derived(props.htmlFor);
	const text = $derived(props.text);
	const classes = $derived(getLabelClasses(size, disabled, props.class ?? ''));
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

export function createCountBadgeState(props: CountBadgeProps) {
	const count = $derived(props.count ?? DEFAULT_COUNT_BADGE_COUNT);
	const max = $derived(props.max ?? DEFAULT_COUNT_BADGE_MAX);
	const showZero = $derived(props.showZero ?? DEFAULT_COUNT_BADGE_SHOW_ZERO);
	const classes = $derived(
		props.class ? `${BASE_COUNT_BADGE_CLASSES} ${props.class}` : BASE_COUNT_BADGE_CLASSES
	);
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

export function createCounterState(props: CounterProps) {
	const count = $derived(props.count ?? DEFAULT_COUNTER_COUNT);
	const max = $derived(props.max ?? DEFAULT_COUNTER_MAX);
	const variant = $derived(props.variant ?? DEFAULT_COUNTER_VARIANT);
	const size = $derived(props.size ?? DEFAULT_COUNTER_SIZE);
	const classes = $derived(
		`${BASE_COUNTER_CLASSES} ${COUNTER_VARIANT_CLASSES[variant]} ${COUNTER_SIZE_CLASSES[size]} ${props.class ?? ''}`.trim()
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

export function createDotState(props: DotProps) {
	const color = $derived(props.color ?? DEFAULT_DOT_COLOR);
	const size = $derived(props.size ?? DEFAULT_DOT_SIZE);
	const classes = $derived(
		[BASE_DOT_CLASSES, DOT_COLOR_CLASSES[color], DOT_SIZE_CLASSES[size], props.class]
			.filter(Boolean)
			.join(' ')
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

export function createListItemMarkerState(props: ListItemMarkerProps) {
	const type = $derived(props.type ?? DEFAULT_MARKER_TYPE);
	const value = $derived(props.value ?? DEFAULT_MARKER_VALUE);
	const color = $derived(props.color ?? DEFAULT_MARKER_COLOR);
	const size = $derived(props.size ?? DEFAULT_MARKER_SIZE);
	const classes = $derived(
		[BASE_MARKER_CLASSES, MARKER_COLOR_CLASSES[color], MARKER_SIZE_CLASSES[size], props.class]
			.filter(Boolean)
			.join(' ')
	);
	const bulletClasses = $derived(
		[BULLET_CLASSES, BULLET_SIZE_CLASSES[size]].filter(Boolean).join(' ')
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

export function createMessageStatusState(props: MessageStatusProps) {
	const status = $derived(props.status ?? 'sent');
	const size = $derived(props.size ?? 'sm');
	const containerClasses = $derived(
		`inline-flex items-center justify-center ${MESSAGE_STATUS_COLORS[status as MessageStatusType]}`
	);
	const iconClasses = $derived(MESSAGE_STATUS_SIZE_CLASSES[size as CommonSize]);
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

export function createStatusIndicatorState(props: StatusIndicatorProps) {
	const status = $derived(props.status ?? DEFAULT_STATUS_INDICATOR_STATUS);
	const label = $derived(getStatusIndicatorLabel(status, props.label));
	const classes = $derived(
		props.class
			? `${STATUS_INDICATOR_CONTAINER_CLASSES} ${props.class}`
			: STATUS_INDICATOR_CONTAINER_CLASSES
	);
	const dotClasses = $derived(
		[STATUS_INDICATOR_DOT_BASE_CLASSES, STATUS_INDICATOR_STATUS_CLASSES[status]]
			.filter(Boolean)
			.join(' ')
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
	const status = $derived(props.status ?? 'neutral');
	const label = $derived(props.label ?? 'Status');
	const customColor = $derived(props.customColor);
	const size = $derived(props.size ?? 'md');
	const showLabel = $derived(props.showLabel ?? true);
	const indicatorClass = $derived(props.indicatorClass ?? '');
	const labelClass = $derived(props.labelClass ?? '');
	const containerClasses = $derived(
		props.class
			? `${STATUS_INDICATOR_WITH_LABEL_CONTAINER_CLASSES.join(' ')} ${props.class}`
			: STATUS_INDICATOR_WITH_LABEL_CONTAINER_CLASSES.join(' ')
	);
	const indicatorSizeClasses = $derived(STATUS_INDICATOR_WITH_LABEL_SIZE_CLASSES[size]);
	const indicatorStatusClasses = $derived(
		[
			'inline-block',
			'rounded-full',
			'mr-2',
			status === 'custom' && customColor
				? `bg-[${customColor}]`
				: status !== 'custom'
					? STATUS_INDICATOR_WITH_LABEL_COLOR_CLASSES[status]
					: 'bg-gray-500',
			indicatorClass
		]
			.filter(Boolean)
			.join(' ')
	);
	const labelClasses = $derived(labelClass);

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
		get indicatorSizeClasses() {
			return indicatorSizeClasses;
		},
		get indicatorStatusClasses() {
			return indicatorStatusClasses;
		},
		get labelClasses() {
			return labelClasses;
		}
	};
}

export function createAbbrState(props: AbbrProps) {
	const title = $derived(props.title ?? DEFAULT_ABBR_TITLE);
	const classes = $derived(getAbbrClasses(props.class ?? ''));

	return {
		get title() {
			return title;
		},
		get classes() {
			return classes;
		}
	};
}

export function createDefinitionDescriptionState(props: InlineBaseProps) {
	const classes = $derived(getDefinitionDescriptionClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export function createDefinitionTermState(props: InlineBaseProps) {
	const classes = $derived(getDefinitionTermClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export function createEmState(props: InlineBaseProps) {
	const classes = $derived(getEmClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export function createHighlightState(props: InlineBaseProps) {
	const classes = $derived(getHighlightClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export function createInlineCodeState(props: InlineCodeProps) {
	const variant = $derived(props.variant ?? DEFAULT_INLINE_CODE_VARIANT);
	const classes = $derived(getInlineCodeClasses(variant as any, props.class ?? ''));

	return {
		get variant() {
			return variant;
		},
		get classes() {
			return classes;
		}
	};
}

export function createKbdState(props: InlineBaseProps) {
	const classes = $derived(getKbdClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export function createLinkState(props: LinkProps) {
	const variant = $derived(props.variant ?? DEFAULT_LINK_VARIANT);
	const size = $derived(props.size ?? DEFAULT_LINK_SIZE);
	const disabled = $derived(props.disabled ?? DEFAULT_LINK_DISABLED);
	const underline = $derived(props.underline ?? DEFAULT_LINK_UNDERLINE);
	const href = $derived(props.href);
	const target = $derived(props.target);
	const text = $derived(props.text);
	const classes = $derived(
		getLinkClasses(variant as any, size as any, disabled, underline, props.class ?? '')
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

export function createSeparatorState(props: SeparatorProps) {
	const orientation = $derived(props.orientation ?? DEFAULT_SEPARATOR_ORIENTATION);
	const decorative = $derived(props.decorative ?? DEFAULT_SEPARATOR_DECORATIVE);
	const classes = $derived(getSeparatorClasses(orientation, props.class ?? ''));

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

export function createSyntaxHighlightedCodeState(props: SyntaxHighlightedCodeProps) {
	const language = $derived(props.language ?? 'text');
	const code = $derived(props.code ?? '');
	const variant = $derived(props.variant ?? DEFAULT_SYNTAX_HIGHLIGHTED_CODE_VARIANT);
	const size = $derived(props.size ?? DEFAULT_SYNTAX_HIGHLIGHTED_CODE_SIZE);
	const showLineNumbers = $derived(props.showLineNumbers ?? false);
	const startLineNumber = $derived(props.startLineNumber ?? 1);
	const containerClasses = $derived(
		getSyntaxHighlightedCodeContainerClasses(variant, size, props.class ?? '')
	);
	const codeClasses = $derived(getSyntaxHighlightedCodeClasses(language));
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
