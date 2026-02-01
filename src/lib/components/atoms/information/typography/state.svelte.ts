import type { BlockquoteProps } from '$stylist/design-system/typography/block/blockquote';
import {
  BLOCKQUOTE_CLASSES,
  DEFAULT_WITH_BACKGROUND,
  DEFAULT_WITH_BORDER,
  FOOTER_PREFIX,
  getBlockquoteClasses
} from '$stylist/design-system/typography/block/blockquote';
import type { BadgeProps } from '$stylist/design-system/typography/elements/badge';
import {
  BADGE_DEFAULT_SIZE,
  BADGE_DEFAULT_VARIANT,
  getBadgeClasses
} from '$stylist/design-system/typography/elements/badge';
import type { BadgeGroupProps } from '$stylist/design-system/typography/elements/badge-group';
import {
  getBadgeGroupContainerClasses,
  getBadgeGroupOverflowClasses
} from '$stylist/design-system/typography/elements/badge-group';
import type { CodeBlockProps } from '$stylist/design-system/typography/elements/code-block';
import {
  DEFAULT_CODE_BLOCK_SIZE,
  DEFAULT_CODE_BLOCK_VARIANT,
  DEFAULT_LANGUAGE,
  DEFAULT_SHOW_LINE_NUMBERS,
  DEFAULT_START_LINE_NUMBER,
  getCodeBlockClasses
} from '$stylist/design-system/typography/elements/code-block';
import type { LabelProps } from '$stylist/design-system/typography/elements/label';
import {
  DEFAULT_LABEL_DISABLED,
  DEFAULT_LABEL_REQUIRED,
  DEFAULT_LABEL_SIZE,
  getLabelClasses,
  getRequiredIndicatorClasses
} from '$stylist/design-system/typography/elements/label';
import type { CountBadgeProps } from '$stylist/design-system/typography/indicators/count-badge';
import {
  DEFAULT_COUNT_BADGE_COUNT,
  DEFAULT_COUNT_BADGE_MAX,
  DEFAULT_COUNT_BADGE_SHOW_ZERO,
  getCountBadgeClasses
} from '$stylist/design-system/typography/indicators/count-badge';
import type { CounterProps } from '$stylist/design-system/typography/indicators/counter';
import {
  DEFAULT_COUNTER_COUNT,
  DEFAULT_COUNTER_MAX,
  DEFAULT_COUNTER_SIZE,
  DEFAULT_COUNTER_VARIANT,
  getCounterClasses
} from '$stylist/design-system/typography/indicators/counter';
import type { DotProps } from '$stylist/design-system/typography/indicators/dot';
import {
  DEFAULT_DOT_COLOR,
  DEFAULT_DOT_SIZE,
  getDotClasses
} from '$stylist/design-system/typography/indicators/dot';
import type { ListItemMarkerProps } from '$stylist/design-system/typography/indicators/list-item-marker';
import {
  DEFAULT_MARKER_COLOR,
  DEFAULT_MARKER_SIZE,
  DEFAULT_MARKER_TYPE,
  DEFAULT_MARKER_VALUE,
  getBulletClasses,
  getMarkerClasses
} from '$stylist/design-system/typography/indicators/list-item-marker';
import type { MessageStatusProps } from '$stylist/design-system/typography/indicators/message-status';
import {
  getMessageStatusContainerClasses,
  getMessageStatusIconClasses
} from '$stylist/design-system/typography/indicators/message-status';
import type { StatusIndicatorProps } from '$stylist/design-system/typography/indicators/status-indicator';
import {
  DEFAULT_STATUS_INDICATOR_STATUS,
  getStatusIndicatorContainerClasses,
  getStatusIndicatorDotClasses,
  getStatusIndicatorLabel
} from '$stylist/design-system/typography/indicators/status-indicator';
import type { StatusIndicatorWithLabelProps } from '$stylist/design-system/typography/indicators/status-indicator-with-label';
import {
  getStatusIndicatorWithLabelContainerClasses,
  getStatusIndicatorWithLabelIndicatorClasses,
  getStatusIndicatorWithLabelLabelClasses,
  getStatusIndicatorWithLabelSizeClasses
} from '$stylist/design-system/typography/indicators/status-indicator-with-label';
import type { AbbrProps } from '$stylist/design-system/typography/inline/abbr';
import { DEFAULT_ABBR_TITLE, getAbbrClasses } from '$stylist/design-system/typography/inline/abbr';
import type { DefinitionDescriptionProps } from '$stylist/design-system/typography/inline/definition-description';
import { getDefinitionDescriptionClasses } from '$stylist/design-system/typography/inline/definition-description';
import type { DefinitionTermProps } from '$stylist/design-system/typography/inline/definition-term';
import { getDefinitionTermClasses } from '$stylist/design-system/typography/inline/definition-term';
import type { EmProps } from '$stylist/design-system/typography/inline/em';
import { getEmClasses } from '$stylist/design-system/typography/inline/em';
import type { HighlightProps } from '$stylist/design-system/typography/inline/highlight';
import { getHighlightClasses } from '$stylist/design-system/typography/inline/highlight';
import type { InlineCodeProps } from '$stylist/design-system/typography/inline/inline-code';
import {
  DEFAULT_INLINE_CODE_VARIANT,
  getInlineCodeClasses
} from '$stylist/design-system/typography/inline/inline-code';
import type { KbdProps } from '$stylist/design-system/typography/inline/kbd';
import { getKbdClasses } from '$stylist/design-system/typography/inline/kbd';
import type { LinkProps } from '$stylist/design-system/typography/inline/link';
import {
  DEFAULT_LINK_DISABLED,
  DEFAULT_LINK_SIZE,
  DEFAULT_LINK_UNDERLINE,
  DEFAULT_LINK_VARIANT,
  getLinkClasses
} from '$stylist/design-system/typography/inline/link';
import type { SeparatorProps } from '$stylist/design-system/typography/inline/separator';
import {
  DEFAULT_SEPARATOR_DECORATIVE,
  DEFAULT_SEPARATOR_ORIENTATION,
  getSeparatorClasses
} from '$stylist/design-system/typography/inline/separator';
import type { SyntaxHighlightedCodeProps } from '$stylist/design-system/typography/inline/syntax-highlighted-code';
import {
  DEFAULT_SYNTAX_HIGHLIGHTED_CODE_SIZE,
  DEFAULT_SYNTAX_HIGHLIGHTED_CODE_VARIANT,
  getSyntaxHighlightedCodeClasses,
  getSyntaxHighlightedCodeContainerClasses
} from '$stylist/design-system/typography/inline/syntax-highlighted-code';

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
  const containerClasses = $derived(getBadgeGroupContainerClasses(props.class ?? ''));
  const overflowClasses = $derived(getBadgeGroupOverflowClasses(overflowClass));
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
  const requiredIndicatorClasses = $derived(getRequiredIndicatorClasses());

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
  const classes = $derived(getCountBadgeClasses(props.class ?? ''));
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
  const classes = $derived(getCounterClasses(variant, size, props.class ?? ''));
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
  const classes = $derived(getDotClasses(color, size, props.class ?? ''));

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
  const classes = $derived(getMarkerClasses(color, size, props.class ?? ''));
  const bulletClasses = $derived(getBulletClasses(size));

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
  const containerClasses = $derived(getMessageStatusContainerClasses(status));
  const iconClasses = $derived(getMessageStatusIconClasses(size));
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
  const classes = $derived(getStatusIndicatorContainerClasses(props.class ?? ''));
  const dotClasses = $derived(getStatusIndicatorDotClasses(status));

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
  const containerClasses = $derived(getStatusIndicatorWithLabelContainerClasses(props.class ?? ''));
  const indicatorSizeClasses = $derived(getStatusIndicatorWithLabelSizeClasses(size));
  const indicatorStatusClasses = $derived(
    getStatusIndicatorWithLabelIndicatorClasses(status, customColor, indicatorClass)
  );
  const labelClasses = $derived(getStatusIndicatorWithLabelLabelClasses(labelClass));

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

export function createDefinitionDescriptionState(props: DefinitionDescriptionProps) {
  const classes = $derived(getDefinitionDescriptionClasses(props.class ?? ''));

  return {
    get classes() {
      return classes;
    }
  };
}

export function createDefinitionTermState(props: DefinitionTermProps) {
  const classes = $derived(getDefinitionTermClasses(props.class ?? ''));

  return {
    get classes() {
      return classes;
    }
  };
}

export function createEmState(props: EmProps) {
  const classes = $derived(getEmClasses(props.class ?? ''));

  return {
    get classes() {
      return classes;
    }
  };
}

export function createHighlightState(props: HighlightProps) {
  const classes = $derived(getHighlightClasses(props.class ?? ''));

  return {
    get classes() {
      return classes;
    }
  };
}

export function createInlineCodeState(props: InlineCodeProps) {
  const variant = $derived(props.variant ?? DEFAULT_INLINE_CODE_VARIANT);
  const classes = $derived(getInlineCodeClasses(variant, props.class ?? ''));

  return {
    get variant() {
      return variant;
    },
    get classes() {
      return classes;
    }
  };
}

export function createKbdState(props: KbdProps) {
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
  const classes = $derived(getLinkClasses(variant, size, disabled, underline, props.class ?? ''));

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
  const containerClasses = $derived(getSyntaxHighlightedCodeContainerClasses(variant, size, props.class ?? ''));
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
