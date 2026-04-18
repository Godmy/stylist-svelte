/**
 * Базовый прото локации — контракт для любого места на карте.
 */
export interface BehaviorLocationProto {
  id: string;
  name: string;
  address?: string;
}
