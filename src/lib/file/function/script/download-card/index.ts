import { handleFileDownload } from '$stylist/file/function/script/handle-file-download';

export function handleDownload(downloadUrl: string): void {
  handleFileDownload(downloadUrl);
}
