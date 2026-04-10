import type { CubeControlProps } from '$stylist/control/type/struct/cube-controlprops';
import type { CubeRotation } from '$stylist/control/type/struct/cube-rotation';
import type { CubeSelectionState } from '$stylist/control/type/struct/cube-selection-state';
import type { CubeDebugLogEntry } from '$stylist/control/type/struct/cube-debug-log-entry';
import {
	CUBE_FACE_TITLES,
	CUBE_FACE_NAMES,
	CUBE_FACE_THEMES,
	CUBE_VERTICAL_ICONS,
	CUBE_HORIZONTAL_ICONS,
	CUBE_FACE_NUMBERS_SNAPSHOT
} from '$stylist/control/const/record/cube-face-config';

export function createCubeControlState(props: CubeControlProps) {
	const size = $derived(props.size ?? 380);
	const perspective = $derived(props.perspective ?? 700);
	const autoRotate = $derived(props.autoRotate ?? true);
	const rotationDuration = $derived(props.rotationDuration ?? 24);
	const interactive = $derived(props.interactive ?? true);
	const inertiaEnabled = $derived(props.inertiaEnabled ?? true);
	const inertiaFriction = $derived(props.inertiaFriction ?? 0.94);
	const inertiaSensitivity = $derived(props.inertiaSensitivity ?? 1);
	const faceLabels = $derived(props.faceLabels ?? true);
	const className = $derived(props.class ?? '');

	const cubeSize = $derived(Math.max(40, size));
	const perspectiveValue = $derived(Math.max(200, perspective));
	const durationValue = $derived(Math.max(1, rotationDuration));
	const inertiaFrictionValue = $derived(clamp(inertiaFriction, 0.82, 0.99));
	const inertiaSensitivityValue = $derived(clamp(inertiaSensitivity, 0.2, 3));

	const rotationX = $state(-22);
	const rotationY = $state(32);
	const isDragging = $state(false);
	const isInertiaSpinning = $state(false);
	const lastPointerX = $state(0);
	const lastPointerY = $state(0);
	const lastMoveTime = $state(0);
	const pointerTravel = $state(0);
	const velocityX = $state(0);
	const velocityY = $state(0);
	const inertiaFrame = $state(null as number | null);
	const autoRotateFrame = $state(null as number | null);
	const autoRotatePauseUntil = $state(0);
	const autoRotateRampStart = $state(0);
	const vectorShiftInterval = $state(null as number | null);
	const autoDriftX = $state(0);
	const autoDriftY = $state(0);
	const targetDriftX = $state(0);
	const targetDriftY = $state(0);
	const faceNumbers = $state(CUBE_FACE_NUMBERS_SNAPSHOT.map((grid) => [...grid]));
	const activeCells = $state(CUBE_FACE_TITLES.map(() => -1));
	const selectedIconId = $state(null as string | null);
	const selectedTitleFace = $state(null as number | null);
	const selectedCellByFace = $state(CUBE_FACE_TITLES.map(() => -1));
	let lastSelectionSignature = '';
	const isHoveringSelectable = $state(false);

	const orbitTransform = $derived(`rotateX(${rotationX}deg) rotateY(${rotationY}deg)`);

	function clamp(value: number, min: number, max: number) {
		return Math.min(max, Math.max(min, value));
	}

	function stopInertia() {
		if (typeof window === 'undefined') return;
		if (inertiaFrame !== null) {
			window.cancelAnimationFrame(inertiaFrame);
			inertiaFrame = null;
		}
		velocityX = 0;
		velocityY = 0;
		isInertiaSpinning = false;
	}

	function handlePointerDown(event: PointerEvent) {
		if (!interactive) return;
		stopInertia();
		isDragging = true;
		isInertiaSpinning = false;
		pointerTravel = 0;
		lastPointerX = event.clientX;
		lastPointerY = event.clientY;
		lastMoveTime = performance.now();
	}

	function selectIcon(iconId: string) {
		selectedIconId = iconId;
		emitSelectionChange();
	}

	function emitSelectionChange() {
		const signature = `${selectedIconId ?? ''}|${selectedTitleFace ?? ''}|${selectedCellByFace.join(',')}`;
		if (signature === lastSelectionSignature) return;
		lastSelectionSignature = signature;
		props.onSelectionChange?.({
			selectedIconId,
			selectedTitleFace,
			selectedCellByFace: [...selectedCellByFace]
		});
	}

	function pushDebugLog(entry: CubeDebugLogEntry) {
		props.onDebugLog?.(entry);
	}

	function scheduleAutoRotateResume() {
		if (typeof window === 'undefined') return;
		const now = performance.now();
		autoRotatePauseUntil = now + 4000;
		autoRotateRampStart = autoRotatePauseUntil;
	}

	function resetRotation() {
		stopInertia();
		rotationX = -22;
		rotationY = 32;
	}

	const selectionState: CubeSelectionState = {
		get selectedIconId() { return selectedIconId; },
		get selectedTitleFace() { return selectedTitleFace; },
		get selectedCellByFace() { return [...selectedCellByFace]; }
	};

	const rotationState: CubeRotation = {
		get x() { return rotationX; },
		get y() { return rotationY; }
	};

	return {
		get cubeSize() { return cubeSize; },
		get perspectiveValue() { return perspectiveValue; },
		get durationValue() { return durationValue; },
		get inertiaFrictionValue() { return inertiaFrictionValue; },
		get inertiaSensitivityValue() { return inertiaSensitivityValue; },
		get orbitTransform() { return orbitTransform; },
		get rotationX() { return rotationX; },
		set rotationX(v: number) { rotationX = v; },
		get rotationY() { return rotationY; },
		set rotationY(v: number) { rotationY = v; },
		get isDragging() { return isDragging; },
		get isInertiaSpinning() { return isInertiaSpinning; },
		get lastPointerX() { return lastPointerX; },
		set lastPointerX(v: number) { lastPointerX = v; },
		get lastPointerY() { return lastPointerY; },
		set lastPointerY(v: number) { lastPointerY = v; },
		get lastMoveTime() { return lastMoveTime; },
		set lastMoveTime(v: number) { lastMoveTime = v; },
		get pointerTravel() { return pointerTravel; },
		set pointerTravel(v: number) { pointerTravel = v; },
		get velocityX() { return velocityX; },
		set velocityX(v: number) { velocityX = v; },
		get velocityY() { return velocityY; },
		set velocityY(v: number) { velocityY = v; },
		get inertiaFrame() { return inertiaFrame; },
		set inertiaFrame(v: number | null) { inertiaFrame = v; },
		get autoRotateFrame() { return autoRotateFrame; },
		set autoRotateFrame(v: number | null) { autoRotateFrame = v; },
		get autoRotatePauseUntil() { return autoRotatePauseUntil; },
		set autoRotatePauseUntil(v: number) { autoRotatePauseUntil = v; },
		get autoRotateRampStart() { return autoRotateRampStart; },
		set autoRotateRampStart(v: number) { autoRotateRampStart = v; },
		get vectorShiftInterval() { return vectorShiftInterval; },
		set vectorShiftInterval(v: number | null) { vectorShiftInterval = v; },
		get autoDriftX() { return autoDriftX; },
		set autoDriftX(v: number) { autoDriftX = v; },
		get autoDriftY() { return autoDriftY; },
		set autoDriftY(v: number) { autoDriftY = v; },
		get targetDriftX() { return targetDriftX; },
		set targetDriftX(v: number) { targetDriftX = v; },
		get targetDriftY() { return targetDriftY; },
		set targetDriftY(v: number) { targetDriftY = v; },
		get faceNumbers() { return faceNumbers; },
		set faceNumbers(v: number[][]) { faceNumbers = v; },
		get activeCells() { return activeCells; },
		set activeCells(v: number[]) { activeCells = v; },
		get selectedIconId() { return selectedIconId; },
		set selectedIconId(v: string | null) { selectedIconId = v; },
		get selectedTitleFace() { return selectedTitleFace; },
		set selectedTitleFace(v: number | null) { selectedTitleFace = v; },
		get selectedCellByFace() { return selectedCellByFace; },
		set selectedCellByFace(v: number[]) { selectedCellByFace = v; },
		get isHoveringSelectable() { return isHoveringSelectable; },
		set isHoveringSelectable(v: boolean) { isHoveringSelectable = v; },
		get autoRotate() { return autoRotate; },
		get interactive() { return interactive; },
		get faceLabels() { return faceLabels; },
		get className() { return className; },
		get FACE_TITLES() { return CUBE_FACE_TITLES; },
		get FACE_NAMES() { return CUBE_FACE_NAMES; },
		get FACE_THEMES() { return CUBE_FACE_THEMES; },
		get VERTICAL_ICONS() { return CUBE_VERTICAL_ICONS; },
		get HORIZONTAL_ICONS() { return CUBE_HORIZONTAL_ICONS; },
		clamp,
		stopInertia,
		handlePointerDown,
		selectIcon,
		emitSelectionChange,
		pushDebugLog,
		scheduleAutoRotateResume,
		resetRotation,
		selectionState,
		rotationState,
		onRotate: props.onRotate,
		onSelectionChange: props.onSelectionChange,
		onDebugLog: props.onDebugLog
	};
}

export default createCubeControlState;
