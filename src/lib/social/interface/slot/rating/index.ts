import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * ���� � ���������� ��� ���������� Rating
 */

import type { TokenSize } from '$stylist/theme/type/alias/size';

/**
 * ������� ����� � ���������� ��������
 */

/**
 * ������ ��� ���������� Rating
 */
export interface SlotRating extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	/**
	 * ������� ������� (0-5)
	 * @default 0
	 */
	rating?: number;

	/**
	 * ������������ ���������� �����
	 * @default 5
	 */
	max?: number;

	/**
	 * ������ ��� ������ (��� ����������� ���������)
	 * @default false
	 */
	readonly?: boolean;

	/**
	 * ����������� ���������
	 * @default false
	 */
	disabled?: boolean;

	/**
	 * ������ �����
	 * @default 'md'
	 */
	size?: TokenSize;

	/**
	 * �������������� CSS ������
	 */
	class?: string;

	/**
	 * ���������� ��������� ��������
	 */
	onRatingChange?: (rating: number) => void;
}
