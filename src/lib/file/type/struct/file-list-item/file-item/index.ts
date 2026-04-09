import type { FileType } from '../file-type';

export type FileItem = {
  id: string;
  name: string;
  type: FileType;
  size?: number;
  modified?: Date;
  created?: Date;
  path?: string;
  thumbnail?: string;
  permissions?: string;
  owner?: string;
  icon?: string;
  selected?: boolean;
};
