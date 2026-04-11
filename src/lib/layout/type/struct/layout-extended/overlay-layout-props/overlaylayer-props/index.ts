export type OverlayLayerProps = {
	content: Snippet;
	align?: OverlayLayoutAlign;
	/** z-index слоя */
	zIndex?: number;
	/** Разрешает pointer events на слое */
	pointerEvents?: boolean;
};
