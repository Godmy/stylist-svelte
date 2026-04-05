/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export { Camera } from './camera';
export { DEFAULT_FOUNDATION_CAMERA, createFoundationCameraState, getFoundationCameraDepth, getFoundationCameraDistance } from './camera-state';
export { FOUNDATION_DEPTH_RANGE, FOUNDATION_DEPTH_THRESHOLDS, FOUNDATION_SEMANTIC_ZOOM_STAGES, clampFoundationDepth, getFoundationDepthDistance, normalizeFoundationDepthDistance, resolveFoundationSemanticZoomStage } from './depth';
export { interpolateFoundationValue, normalizeFoundationValue } from './math';
export { Matrix4 } from './matrix4';
export { clampSceneRadius, clampSceneVerticalAngle, createSceneBuffers, createSceneCubeGeometry, createSceneProgram, createSceneRoomGeometry, destroySceneBuffers, drawSceneBuffers, projectSceneCoordinate, resolvePresenterSceneLinks } from './scene';
export { resolveSemanticZoomNode, resolveSemanticZoomPresentation, useSemanticZoom } from './semantic-zoom';
export type { FoundationCameraState } from './camera-state';
export type { FoundationDepth, FoundationSemanticZoomStage } from './depth';
export type { FoundationDepthThreshold } from './depth';