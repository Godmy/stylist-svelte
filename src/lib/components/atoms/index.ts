/**
 * Atoms - Basic building blocks
 * @module components/atoms
 */

// Core UI Elements
import Divider from './layout/Divider.svelte';

// Controls
import Button from './controls/Button.svelte';
import Checkbox from './controls/Checkbox.svelte';
import Toggle from './controls/Toggle.svelte';
import Radio from './controls/Radio.svelte';
import RangeSlider from './controls/RangeSlider.svelte';
import Select from './controls/Select.svelte';
import Switch from './controls/Switch.svelte';

// Input
import Input from './input/Input.svelte';
import Textarea from './input/Textarea.svelte';

// Feedback
import Alert from './feedback/Alert.svelte';

// Placeholders
import Skeleton from './placeholders/Skeleton.svelte';
import TableSkeleton from './placeholders/TableSkeleton.svelte';

// Process
import Spinner from './process/Spinner.svelte';
import ProgressBar from './process/ProgressBar.svelte';

// Chat
import ChatStatusIndicator from './chat/ChatStatusIndicator.svelte';
import MessageStatus from './chat/MessageStatus.svelte';
import MessageTimestamp from './chat/MessageTimestamp.svelte';

// Typography
import Badge from './typography/Badge.svelte';
import Chip from './typography/Chip.svelte';
import Label from './typography/Label.svelte';
import Link from './typography/Link.svelte';
import CodeBlock from './typography/CodeBlock.svelte';
import InlineCode from './typography/InlineCode.svelte';
import Kbd from './typography/Kbd.svelte';
import Tag from './typography/Tag.svelte';

// Media
import Icon from './media/Icon.svelte';
import Avatar from './media/Avatar.svelte';

// Animation
import { NumberFlow } from './animation';

export {
  Divider,
  // Controls
  Button,
  Checkbox,
  Toggle,
  Radio,
  RangeSlider,
  Select,
  Switch,
  // Input
  Input,
  Textarea,
  // Feedback
  Alert,
  // Placeholders
  Skeleton,
  TableSkeleton,
  // Process
  Spinner,
  ProgressBar,
  // Chat
  ChatStatusIndicator,
  MessageStatus,
  MessageTimestamp,
  // Typography
  Badge,
  Chip,
  Label,
  Link,
  CodeBlock,
  InlineCode,
  Kbd,
  Tag,
  // Media
  Icon,
  Avatar,
  // Animation
  NumberFlow
};

// Re-export types
export type { InputProps } from './input/Input.svelte';
