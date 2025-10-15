export interface BusinessType {
  value: string;
  label: string;
}

export const BUSINESS_TYPES: BusinessType[] = [
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'fitness-studio', label: 'Fitness Studio' },
  { value: 'beauty-salon', label: 'Beauty Salon' },
  { value: 'local-shop', label: 'Local Shop' },
  { value: 'professional-services', label: 'Professional Services' },
  { value: 'e-commerce-store', label: 'E-commerce Store' },
  { value: 'real-estate', label: 'Real Estate' },
  { value: 'healthcare-practice', label: 'Healthcare Practice' },
  { value: 'pet-services', label: 'Pet Services' },
  { value: 'home-services', label: 'Home Services' },
];

export interface AudienceType {
  value: string;
  label: string;
}

export const AUDIENCE_TYPES: AudienceType[] = [
  { value: 'young-professionals', label: 'Young Professionals (25-35)' },
  { value: 'families', label: 'Families with Children' },
  { value: 'seniors', label: 'Seniors (55+)' },
  { value: 'students', label: 'Students & Young Adults (18-24)' },
  { value: 'entrepreneurs', label: 'Entrepreneurs & Business Owners' },
  { value: 'health-conscious', label: 'Health & Wellness Enthusiasts' },
  { value: 'luxury-seekers', label: 'Luxury & Premium Buyers' },
  { value: 'budget-conscious', label: 'Budget-Conscious Shoppers' },
  { value: 'tech-savvy', label: 'Tech-Savvy Consumers' },
  { value: 'eco-conscious', label: 'Environmentally Conscious' },
  { value: 'local-community', label: 'Local Community Members' },
  { value: 'professionals', label: 'Working Professionals (35-50)' },
];

export interface BrandTone {
  value: string;
  label: string;
}

export const BRAND_TONES: BrandTone[] = [
  { value: 'professional', label: 'Professional' },
  { value: 'friendly', label: 'Friendly' },
  { value: 'casual', label: 'Casual' },
  { value: 'formal', label: 'Formal' },
  { value: 'playful', label: 'Playful' },
  { value: 'inspirational', label: 'Inspirational' },
  { value: 'educational', label: 'Educational' },
  { value: 'humorous', label: 'Humorous' },
  { value: 'luxury', label: 'Luxury' },
  { value: 'authentic', label: 'Authentic' },
  { value: 'bold', label: 'Bold' },
  { value: 'empathetic', label: 'Empathetic' },
  { value: 'innovative', label: 'Innovative' },
  { value: 'trustworthy', label: 'Trustworthy' },
];
