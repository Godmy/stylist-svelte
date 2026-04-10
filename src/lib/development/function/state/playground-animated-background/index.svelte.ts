import type { Props } from '$stylist/development/type/struct/playground-animated-background';
import { PlaygroundAnimatedBackgroundStyleManager } from '$stylist/development/class/style-manager/playground-animated-background';

export function createPlaygroundAnimatedBackgroundState(props: Props) {
	const children = $derived(props.children);

	const containerClass = $derived(PlaygroundAnimatedBackgroundStyleManager.getContainerClasses());
	const washClass = $derived(PlaygroundAnimatedBackgroundStyleManager.getWashClasses());
	const shapeClass = $derived(PlaygroundAnimatedBackgroundStyleManager.getShapeClasses());
	const orbClass = $derived(PlaygroundAnimatedBackgroundStyleManager.getOrbClasses());
	const particlesContainerClass = $derived(PlaygroundAnimatedBackgroundStyleManager.getParticlesContainerClasses());
	const particleClass = $derived(PlaygroundAnimatedBackgroundStyleManager.getParticleClasses());
	const geoOverlayClass = $derived(PlaygroundAnimatedBackgroundStyleManager.getGeoOverlayClasses());
	const contentWrapperClass = $derived(PlaygroundAnimatedBackgroundStyleManager.getContentWrapperClasses());

	const particleCount = 12;
	const particleIndices = $derived(Array.from({ length: particleCount }, (_, i) => i));

	return {
		get children() { return children; },
		get containerClass() { return containerClass; },
		get washClass() { return washClass; },
		get shapeClass() { return shapeClass; },
		get orbClass() { return orbClass; },
		get particlesContainerClass() { return particlesContainerClass; },
		get particleClass() { return particleClass; },
		get geoOverlayClass() { return geoOverlayClass; },
		get contentWrapperClass() { return contentWrapperClass; },
		get particleIndices() { return particleIndices; }
	};
}

export default createPlaygroundAnimatedBackgroundState;
