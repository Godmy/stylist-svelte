/**
 * Atoms - Basic building blocks
 * @module components/atoms
 */

// Core UI Elements
import Button from './ui-elements/Button.svelte';
import Badge from './ui-elements/Badge.svelte';
import Tag from './ui-elements/Tag.svelte';
import Chip from './ui-elements/Chip.svelte';
import Divider from './ui-elements/Divider.svelte';
import Toggle from './ui-elements/Toggle.svelte';

// Forms
import Input from './forms/Input.svelte';
import Textarea from './forms/Textarea.svelte';
import Select from './forms/Select.svelte';
import Checkbox from './forms/Checkbox.svelte';
import Switch from './forms/Switch.svelte';
import RangeSlider from './forms/RangeSlider.svelte';
import Label from './forms/Label.svelte';

// Feedback
import Alert from './feedback/Alert.svelte';
import ProgressBar from './feedback/ProgressBar.svelte';
import Skeleton from './feedback/Skeleton.svelte';
import CardSkeleton from './feedback/CardSkeleton.svelte';
import TableSkeleton from './feedback/TableSkeleton.svelte';

// Indicators
import Spinner from './indicators/Spinner.svelte';
import ChatStatusIndicator from './indicators/ChatStatusIndicator.svelte';
import MessageStatus from './indicators/MessageStatus.svelte';
import MessageTimestamp from './indicators/MessageTimestamp.svelte';
import StatusIndicator from './indicators/StatusIndicator.svelte';

// Typography
import Link from './typography/Link.svelte';
import CodeBlock from './typography/CodeBlock.svelte';
import InlineCode from './typography/InlineCode.svelte';
import Kbd from './typography/Kbd.svelte';

// Media
import Icon from './media/Icon.svelte';
import Avatar from './media/Avatar.svelte';





// Other
import ExampleAtom from './ExampleAtom.svelte';
import TestButton from './TestButton.svelte';

export {
  Button,
  Badge,
  Tag,
  Chip,
  Divider,
  Toggle,
  // Forms
  Input,
  Textarea,
  Select,
  Checkbox,
  Switch,
  RangeSlider,
  Label,
  // Feedback
  Alert,
  ProgressBar,
  Skeleton,
  CardSkeleton,
  TableSkeleton,
  // Indicators
  Spinner,
  ChatStatusIndicator,
  MessageStatus,
  MessageTimestamp,
  StatusIndicator,
  // Typography
  Link,
  CodeBlock,
  InlineCode,
  Kbd,
  // Media
  Icon,
  Avatar,

  // Other
  ExampleAtom,
  TestButton
};

// Re-export types
export type { InputProps } from './forms/Input.svelte';
