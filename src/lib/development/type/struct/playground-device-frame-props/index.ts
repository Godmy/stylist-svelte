import type { Snippet } from 'svelte';
import type { PlaygroundDeviceFrameViewportSize } from '$stylist/development/type/struct/playground-device-frame-viewport-size';

export type PlaygroundDeviceFrameProps = {
  device: PlaygroundDeviceFrameViewportSize;
  children?: Snippet;
}
