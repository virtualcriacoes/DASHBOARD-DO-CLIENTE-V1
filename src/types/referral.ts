export interface ReferralSection {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
}

export interface ReferralBanner {
  id: string;
  title: string;
  imageUrl: string;
}

export interface ReferralFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ReferralContent {
  heroSection: {
    title: string;
    description: string;
  };
  howToParticipate: ReferralSection[];
  banners: ReferralBanner[];
  discountFeatures: ReferralFeature[];
  exclusiveContents: ReferralFeature[];
}
