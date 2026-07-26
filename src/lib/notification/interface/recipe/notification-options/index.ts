import type { RecipeToast } from '$stylist/notification/interface/recipe/toast';

export interface RecipeNotificationOptions
	extends Pick<RecipeToast, 'title' | 'duration' | 'dismissible' | 'actions'> {}
