import type { SlotReactionPicker as IReactionPickerProps } from '$stylist/input/interface/slot/reaction-picker';

type ReactionType = 'like' | 'love' | 'laugh' | 'wow' | 'sad' | 'angry' | 'care' | 'share' | 'save' | 'view';
type Reaction = {
	type: string;
	count: number;
	active: boolean;
};

const Heart = 'heart';
const ThumbsUp = 'thumbs-up';
const Laugh = 'laugh';
const Smile = 'smile';
const Angry = 'angry';
const Frown = 'frown';
const Eye = 'eye';
const Bookmark = 'bookmark';
const Share2 = 'share-2';
const HandHeart = 'hand-heart';
const Sparkles = 'sparkles';

export const createReactionPickerState = (props: IReactionPickerProps) => {
	let showEmojiPicker = $state(false);

	function toggleReaction(reactionType: string) {
		props.onReactionToggle?.(reactionType as ReactionType);
	}

	function getReactionIcon(reactionType: string) {
		const iconMap: Record<ReactionType, string> = {
			like: ThumbsUp,
			love: Heart,
			laugh: Laugh,
			wow: Sparkles,
			sad: Frown,
			angry: Angry,
			care: HandHeart,
			share: Share2,
			save: Bookmark,
			view: Eye
		};

		return iconMap[reactionType as ReactionType] ?? ThumbsUp;
	}

	function getReactionLabel(reactionType: string) {
		const labelMap: Record<ReactionType, string> = {
			like: 'Like',
			love: 'Love',
			laugh: 'Haha',
			wow: 'Wow',
			sad: 'Sad',
			angry: 'Angry',
			care: 'Care',
			share: 'Share',
			save: 'Save',
			view: 'View'
		};

		return labelMap[reactionType as ReactionType] ?? reactionType;
	}

	function handleMouseEnter() {
		if (props.showPickerOnHover ?? true) {
			showEmojiPicker = true;
		}
	}

	function handleMouseLeave() {
		if (props.showPickerOnHover ?? true) {
			showEmojiPicker = false;
		}
	}

	function togglePicker() {
		showEmojiPicker = !showEmojiPicker;
	}

	const sizeClass = $derived(
		({
			sm: 'h-5 w-5',
			md: 'h-6 w-6',
			lg: 'h-8 w-8'
		} as const)[props.size ?? 'md']
	);

	const textSizeClass = $derived(
		({
			sm: 'text-xs',
			md: 'text-sm',
			lg: 'text-base'
		} as const)[props.size ?? 'md']
	);
	const reactions = $derived(
		props.reactions ?? [
			{ type: 'like', count: 0, active: false },
			{ type: 'love', count: 0, active: false },
			{ type: 'laugh', count: 0, active: false },
			{ type: 'wow', count: 0, active: false },
			{ type: 'sad', count: 0, active: false },
			{ type: 'angry', count: 0, active: false }
		] satisfies Reaction[]
	);
	const firstActiveReaction = $derived(reactions.find((reaction) => reaction.active));
	const hasActiveReaction = $derived(reactions.some((reaction) => reaction.active));

	return {
		get reactions() {
			return reactions;
		},
		get showCounts() {
			return props.showCounts ?? true;
		},
		get showPicker() {
			return props.showPicker ?? true;
		},
		get hostClass() {
			return props.class ?? '';
		},
		get reactionClass() {
			return props.reactionClass ?? '';
		},
		get pickerClass() {
			return props.pickerClass ?? '';
		},
		get showEmojiPicker() {
			return showEmojiPicker;
		},
		get sizeClass() {
			return sizeClass;
		},
		get textSizeClass() {
			return textSizeClass;
		},
		get hasActiveReaction() {
			return hasActiveReaction;
		},
		get firstActiveReaction() {
			return firstActiveReaction;
		},
		toggleReaction,
		getReactionIcon,
		getReactionLabel,
		handleMouseEnter,
		handleMouseLeave,
		togglePicker
	};
};

export default createReactionPickerState;
