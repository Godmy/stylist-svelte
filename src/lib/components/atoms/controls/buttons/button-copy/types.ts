export interface ICopyButtonProps {
  text: string;
  label?: string;
  successMessage?: string;
  showIcon?: boolean;
  class?: string;
  onSuccess?: (message: string) => void;
  onError?: (message: string) => void;
}