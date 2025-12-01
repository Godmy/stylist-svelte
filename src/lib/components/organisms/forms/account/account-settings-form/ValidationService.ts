/**
 * Validation service for account settings form following Single Responsibility Principle
 * Responsible only for validating account settings form data
 */
export class AccountSettingsFormValidator {
  /**
   * Validates the account settings form data
   * @param formData - The form data to validate
   * @returns Object containing validation errors or empty object if valid
   */
  static validate(formData: any): Record<string, string> {
    const errors: Record<string, string> = {};

    if (!formData.firstName?.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!formData.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (formData.phone && !/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      errors.phone = 'Phone number is invalid';
    }

    if (formData.website && !/^https?:\/\/.*/.test(formData.website)) {
      errors.website = 'Website must start with http:// or https://';
    }

    return errors;
  }
}