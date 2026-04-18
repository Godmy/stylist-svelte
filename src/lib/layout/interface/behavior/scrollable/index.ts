/** Управление прокруткой и переполнением контента */
export interface BehaviorScrollable {
	/** Поведение переполнения по горизонтали */
	overflowX?: 'auto' | 'hidden' | 'scroll' | 'visible';
	/** Поведение переполнения по вертикали */
	overflowY?: 'auto' | 'hidden' | 'scroll' | 'visible';
	/** Привязать прокрутку к дочерним элементам (CSS scroll-snap) */
	scrollSnap?: 'none' | 'start' | 'center' | 'end';
	/** Поведение прокрутки (плавное или мгновенное) */
	scrollBehavior?: 'auto' | 'smooth';
}
