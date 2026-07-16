// lib/solutions/data.ts
import { SolutionData } from '@/content/type';
import { 
  aiChatbotsWithZapier, 
  aiChatbotsWithSalesforce,
  solutionsContent,
  getAllSolutions,
  getSolutionBySlug,
  getSolutionsByCategory,
  getSolutionsByPlatform,  // Now this is available
  searchSolutions,
  getRelatedSolutions,
  getAllCategories,
  getAllPlatforms,
  getSolutionsGroupedByCategory,
  getSolutionsGroupedByPlatform,
  allSolutions
} from '@/content/Solutions';

// Re-export everything from the content layer
export { 
  aiChatbotsWithZapier, 
  aiChatbotsWithSalesforce,
  solutionsContent,
  getAllSolutions,
  getSolutionBySlug,
  getSolutionsByCategory,
  getSolutionsByPlatform,
  searchSolutions,
  getRelatedSolutions,
  getAllCategories,
  getAllPlatforms,
  getSolutionsGroupedByCategory,
  getSolutionsGroupedByPlatform,
  allSolutions
};

// Export all solutions as an array
export const solutionsData: SolutionData[] = allSolutions;

// Export solutions grouped by category
export const solutionsByCategory: Record<string, SolutionData[]> = getSolutionsGroupedByCategory();

// Export solutions grouped by platform
export const solutionsByPlatform: Record<string, SolutionData[]> = getSolutionsGroupedByPlatform();

// Export solution categories
export const solutionCategories: string[] = getAllCategories();

// Export solution platforms
export const solutionPlatforms: string[] = getAllPlatforms();

// Helper to get featured solutions (first 3 or custom)
export function getFeaturedSolutions(limit: number = 3): SolutionData[] {
  return allSolutions.slice(0, limit);
}

// Helper to get solution count
export function getSolutionCount(): number {
  return allSolutions.length;
}

// Helper to get solutions by multiple categories
export function getSolutionsByCategories(categories: string[]): SolutionData[] {
  return allSolutions.filter(solution => 
    categories.includes(solution.category)
  );
}

// Helper to get solutions by multiple platforms
export function getSolutionsByPlatforms(platforms: string[]): SolutionData[] {
  return allSolutions.filter(solution => 
    platforms.includes(solution.platform)
  );
}

// Default export
export default {
  solutionsData,
  solutionsByCategory,
  solutionsByPlatform,
  solutionCategories,
  solutionPlatforms,
  solutionsContent,
  allSolutions,
  getAllSolutions,
  getSolutionBySlug,
  getSolutionsByCategory,
  getSolutionsByPlatform,
  searchSolutions,
  getRelatedSolutions,
  getFeaturedSolutions,
  getSolutionCount,
  getSolutionsByCategories,
  getSolutionsByPlatforms,
  getAllCategories,
  getAllPlatforms,
  getSolutionsGroupedByCategory,
  getSolutionsGroupedByPlatform,
};