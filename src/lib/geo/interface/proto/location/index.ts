/**
 * Базовый прото локации — контракт для любого места на карте.
 */
export interface ILocationProto {
  id: string;
  name: string;
  address?: string;
}
