import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export type CubeControlProps = {
  size?: number;
  perspective?: number;
  autoRotate?: boolean;
  rotationDuration?: number;
  interactive?: boolean;
  inertiaEnabled?: boolean;
  inertiaFriction?: number;
  inertiaSensitivity?: number;
  faceLabels?: boolean;
  class?: string;
  [key: string]: unknown;
};

export function createCubeControlState(props: CubeControlProps) {
  const className = props.class ?? '';
  const containerClasses = joinClassNames('c-cube-control', className);

  return {
    containerClasses
  };
}

export default createCubeControlState;
