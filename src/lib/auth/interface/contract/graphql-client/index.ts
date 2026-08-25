export interface IGraphQLClient {
	query<T>(query: string, variables?: Record<string, unknown>, accessToken?: string): Promise<T>;
	mutate<T>(
		mutation: string,
		variables?: Record<string, unknown>,
		accessToken?: string
	): Promise<T>;
}
