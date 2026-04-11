export type OverlayLayoutProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
	/** Базовый контент (всегда снизу) */
	base: Snippet;
	/** Один или несколько оверлей-слоёв поверх базового */
	overlays?: OverlayLayerProps[];
	/** Дефолтное позиционирование оверлея если overlays не задан */
	overlay?: Snippet;
	overlayAlign?: OverlayLayoutAlign;
	overlayZIndex?: number;
	overlayPointerEvents?: boolean;
};
