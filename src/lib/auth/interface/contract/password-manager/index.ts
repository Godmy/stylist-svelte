import type { AuthResult } from '$stylist/auth/type/object/auth-result';
import type { MessageResponse } from '$stylist/auth/type/object/message-response';
import type { PasswordResetRequest } from '$stylist/auth/type/object/password-reset-request';

export interface IPasswordManager {
	requestPasswordReset(data: PasswordResetRequest): Promise<AuthResult<MessageResponse>>;
	resetPassword(data: ({
	token: string;
	newPassword: string;
})): Promise<AuthResult<MessageResponse>>;
}
