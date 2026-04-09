import type { IShapeable } from '$stylist/layout/interface/proto/shapeable';
import type { ISpaced } from '$stylist/layout/interface/proto/spaced';
import type { ISized } from '$stylist/layout/interface/proto/sized';

export interface ISizable extends ISized, IShapeable, ISpaced {}
