export type RevelationType = 'MAKKI' | 'MADANI';

export interface SurahDetail {
  id: number;
  name: string;
  revelationType: RevelationType;
  versesCount: number;
  revelationOrder: number;
  asbabAlNuzul: string;
  aqadiyyaTopics: string[];
  fiqhiyyaRulings: string[];
  otherNames: { name: string; meaning: string }[];
  virtues: string[];
  reflections: string[];
  supplications: string[];
}

export interface SurahListItem {
  id: number;
  name: string;
  englishName: string;
}
