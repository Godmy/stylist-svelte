import type { StructRichTextMark } from '$stylist/typography/type/struct/rich-text-mark';
import type { StructRichTextSegment } from '$stylist/typography/type/struct/rich-text-segment';

export function createRichTextSegments(
	text: string,
	marks: StructRichTextMark[] = []
): StructRichTextSegment[] {
	const normalizedText = typeof text === 'string' ? text : '';

	if (normalizedText.length === 0) {
		return [];
	}

	const clampIndex = (value: number) =>
		Math.min(Math.max(Math.trunc(value), 0), normalizedText.length);
	const normalizedMarks = marks
		.map((mark) => ({
			...mark,
			start: clampIndex(mark.start),
			end: clampIndex(mark.end)
		}))
		.filter((mark) => mark.start < mark.end);

	if (normalizedMarks.length === 0) {
		return [
			{
				key: '0:plain',
				text: normalizedText,
				tag: 'span',
				bold: false,
				italic: false,
				underline: false,
				strikeThrough: false,
				highlight: false
			}
		];
	}

	const boundaries = new Set<number>([0, normalizedText.length]);

	for (const mark of normalizedMarks) {
		boundaries.add(mark.start);
		boundaries.add(mark.end);
	}

	const sortedBoundaries = [...boundaries].sort((left, right) => left - right);
	const segments: StructRichTextSegment[] = [];

	const getLastDefinedValue = <Value>(
		activeMarks: StructRichTextMark[],
		pick: (mark: StructRichTextMark) => Value | undefined
	): Value | undefined => {
		for (let index = activeMarks.length - 1; index >= 0; index -= 1) {
			const value = pick(activeMarks[index]);
			if (value !== undefined) {
				return value;
			}
		}

		return undefined;
	};

	const canMergeSegments = (left: StructRichTextSegment, right: StructRichTextSegment) =>
		left.tag === right.tag &&
		left.color === right.color &&
		left.backgroundColor === right.backgroundColor &&
		left.bold === right.bold &&
		left.italic === right.italic &&
		left.underline === right.underline &&
		left.strikeThrough === right.strikeThrough &&
		left.highlight === right.highlight &&
		left.href === right.href &&
		left.target === right.target &&
		left.title === right.title &&
		left.rel === right.rel;

	for (let index = 0; index < sortedBoundaries.length - 1; index += 1) {
		const start = sortedBoundaries[index];
		const end = sortedBoundaries[index + 1];
		const segmentText = normalizedText.slice(start, end);

		if (!segmentText) {
			continue;
		}

		const activeMarks = normalizedMarks.filter((mark) => mark.start < end && mark.end > start);
		const bold = activeMarks.some((mark) => mark.bold);
		const italic = activeMarks.some((mark) => mark.italic);
		const underline = activeMarks.some((mark) => mark.underline);
		const strikeThrough = activeMarks.some((mark) => mark.strikeThrough);
		const highlight = activeMarks.some((mark) => mark.highlight);
		const subscript = activeMarks.some((mark) => mark.subscript);
		const superscript = activeMarks.some((mark) => mark.superscript);
		const code = activeMarks.some((mark) => mark.code);
		const color = getLastDefinedValue(activeMarks, (mark) => mark.color);
		const backgroundColor = getLastDefinedValue(activeMarks, (mark) => mark.backgroundColor);
		const href = getLastDefinedValue(activeMarks, (mark) => mark.href);
		const target = getLastDefinedValue(activeMarks, (mark) => mark.target);
		const title = getLastDefinedValue(activeMarks, (mark) => mark.title);
		const rel = getLastDefinedValue(activeMarks, (mark) => mark.rel);
		const tag = code
			? 'code'
			: superscript
				? 'sup'
				: subscript
					? 'sub'
					: highlight || backgroundColor
						? 'mark'
						: 'span';

		const nextSegment: StructRichTextSegment = {
			key: `${start}:${end}:${tag}:${href ?? 'plain'}`,
			text: segmentText,
			tag,
			color,
			backgroundColor,
			bold,
			italic,
			underline,
			strikeThrough,
			highlight,
			href,
			target,
			title,
			rel
		};

		const previousSegment = segments.at(-1);

		if (previousSegment && canMergeSegments(previousSegment, nextSegment)) {
			previousSegment.text += nextSegment.text;
			previousSegment.key = `${previousSegment.key}+${end}`;
			continue;
		}

		segments.push(nextSegment);
	}

	return segments;
}
