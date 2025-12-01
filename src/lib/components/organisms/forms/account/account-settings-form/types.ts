/**
 * Типы для компонента AccountSettingsForm
 * Следует принципам SOLID и архитектуре SAMO
 */

/** Данные формы настройки аккаунта */
export type AccountSettingsFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  bio?: string;
  dateOfBirth?: Date;
  location?: string;
  website?: string;
  avatar?: string;
};

/** Пропсы компонента AccountSettingsForm */
export interface IAccountSettingsFormProps {
  initialData?: AccountSettingsFormData;
  onSave?: (data: AccountSettingsFormData) => void;
  onCancel?: () => void;
  showAvatar?: boolean;
  class?: string;
  headerClass?: string;
  formClass?: string;
  footerClass?: string;
}

/** Ошибки формы */
export interface IAccountSettingsFormErrors {
  firstName?: string;
  email?: string;
  phone?: string;
  website?: string;
  [key: string]: string | undefined;
}