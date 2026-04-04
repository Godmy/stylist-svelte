export interface IAttachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url?: string;
  previewUrl?: string;
}

export interface IAttachmentPreviewProps {
  attachment: IAttachment;
  showActions?: boolean;
  onDownload?: (attachment: IAttachment) => void;
  onRemove?: (attachment: IAttachment) => void;
}
