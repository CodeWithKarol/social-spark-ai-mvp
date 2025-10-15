export interface Post {
  id: string;
  category: string;
  title: string;
  content: string;
  hashtags: string[];
  isFavorite?: boolean;
}

export type PostCategory =
  | 'Promotional Offer'
  | 'Tip & Advice'
  | 'Inspirational Quote'
  | 'Customer Feature'
  | 'Seasonal Content'
  | 'Community Engagement';
