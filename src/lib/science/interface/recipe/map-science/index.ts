import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { RecipeSentimentAnalysis as SentimentAnalysisContract } from '$stylist/science/interface/recipe/sentiment-analysis';
import type { RecipePromptBuilder as PromptBuilderContract } from '$stylist/science/interface/recipe/prompt-builder';
import type { RecipePredictionResult as PredictionResultContract } from '$stylist/science/interface/recipe/prediction-result';
import type { RecipeAiResultCard as AiResultCardContract } from '$stylist/science/interface/recipe/ai-result-card';
import type { RecipeModelSelector as ModelSelectorContract } from '$stylist/science/interface/recipe/model-selector';

// ==================== Map Science Contract ====================
export interface RecipeMapScience extends StructIntersectAll<[]> {
	SentimentAnalysis: SentimentAnalysisContract;
	PromptBuilder: PromptBuilderContract;
	PredictionResult: PredictionResultContract;
	AiResultCard: AiResultCardContract;
	ModelSelector: ModelSelectorContract;
}
