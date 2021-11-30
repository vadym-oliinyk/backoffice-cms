export interface Post {
  user: string;
  id: number;
  title: string;
  body: string;
}

export enum Disclaimer {
  Health = 'health',
  Violence = 'violence',
  Covid = 'covid',
  Fiction = 'fiction',
}

export enum Format {
  HardNews = 'hardNews',
  Profile = 'profile',
  Listicles = 'listicles',
  PhotoEssay = 'photoEssay',
  Explainer = 'explainer',
  Timeline = 'timeline',
}

export interface FullPost {
  user: string;
  id: number;
  mainHeadline: string;
  fbTitle: string;
  body: string;
  status: number;
  topStatus: number;
  advStatus: number;
  disclaimers: Disclaimer[];
  isBreakingNews: boolean;
  isAdv: boolean;
  isEditorPick: boolean;
  isSmartNews: boolean;
  isOperaRss: boolean;
  format: Format;
  description: string;
}
