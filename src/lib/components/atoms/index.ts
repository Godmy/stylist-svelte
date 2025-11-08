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
import InputAddon from './controls/InputAddon.svelte';
import ColorSwatch from './controls/ColorSwatch.svelte';
import SliderTick from './controls/SliderTick.svelte';
import CloseButton from './controls/CloseButton.svelte';

// Input
import Input from './input/Input.svelte';
import Textarea from './input/Textarea.svelte';
import FormHelperText from './input/FormHelperText.svelte';
import FormErrorMessage from './input/FormErrorMessage.svelte';
import PinInputDigit from './input/PinInputDigit.svelte';
import CharacterCount from './input/CharacterCount.svelte';

// Feedback
import Alert from './feedback/Alert.svelte';

// Placeholders
import Skeleton from './placeholders/Skeleton.svelte';
import TableSkeleton from './placeholders/TableSkeleton.svelte';
import SkeletonText from './placeholders/SkeletonText.svelte';
import SkeletonCircle from './placeholders/SkeletonCircle.svelte';
import SkeletonRectangle from './placeholders/SkeletonRectangle.svelte';

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
import Image from './media/Image.svelte';
import Favicon from './media/Favicon.svelte';
import CountryFlag from './media/CountryFlag.svelte';
import IconWrapper from './media/IconWrapper.svelte';

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
  InputAddon,
  ColorSwatch,
  SliderTick,
  CloseButton,
  // Input
  Input,
  Textarea,
  FormHelperText,
  FormErrorMessage,
  PinInputDigit,
  CharacterCount,
  // Feedback
  Alert,
  // Placeholders
  Skeleton,
  TableSkeleton,
  SkeletonText,
  SkeletonCircle,
  SkeletonRectangle,
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
  Image,
  Favicon,
  CountryFlag,
  IconWrapper,
  // Animation
  NumberFlow
};

// Re-export types
export type { InputProps } from './input/Input.svelte';
