/**
 * Базовый прото маркера — контракт для любого маркера на карте.
 */
export interface BehaviorMarkerProto {
  id: string;
  name: string;
  lat: number;
  lng: number;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  type?: string;
}
