/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export {
	AuthError,
	AuthGuard,
	AuthLink,
	ForgotPassword,
	ForgotPasswordPage,
	Login,
	LoginField,
	LoginPage,
	Register,
	RegisterPage,
	SecureForm,
	SecuritySettings,
	SessionManager,
	SubmitButton
} from './component';
export {
	AUTH_STRATEGIES,
	PERMISSION_SCOPES,
	STORAGE_KEYS,
	TOKEN_TYPE
} from './const';
export {
	createAuthGuardState,
	createForgotPasswordState,
	createLoginFieldState,
	createLoginState,
	createRegisterState,
	createSecureFormState,
	createSecuritySettingsState,
	createSessionManagerState,
	resolveAuthGuardState
} from './function';
export type {
	AuthFormState,
	AuthGuardProps,
	AuthGuardResolution,
	AuthGuardResolutionInput,
	AuthResponse,
	AuthResult,
	AuthState,
	AuthTokens,
	EmailVerification,
	GoogleAuthData,
	LoginCredentials,
	MessageResponse,
	PasswordReset,
	PasswordResetRequest,
	Permission,
	RegistrationData,
	Role,
	Session,
	TelegramAuthData,
	User,
	UserProfile
} from './type';
export type {
	IAuthProvider,
	IAuthStateManager,
	IAuthStrategy,
	IEmailVerification,
	IGraphQLClient,
	IPasswordManager,
	IPermissionChecker,
	ITokenStorage,
	RecipeAuthGuard,
	RecipeForgotPassword,
	RecipeLogin,
	RecipeLoginField,
	RecipeRegister,
	RecipeSecureForm,
	RecipeSecuritySettings,
	RecipeSessionManager,
	SlotSecureForm,
	SlotSecuritySettings,
	SlotSessionManager
} from './interface';
