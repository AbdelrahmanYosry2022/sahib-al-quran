import { useState, useMemo } from 'react';
import { SurahDetail } from '../types';

// Mock data (temporary, can be replaced by an actual API/JSON)
const mockSurahData: Record<number, Partial<SurahDetail>> = {
  1: {
    id: 1,
    name: "الفاتحة",
    revelationType: "MAKKI",
    versesCount: 7,
    revelationOrder: 5,
    asbabAlNuzul: "نزلت في أول ما نزل من القرآن الكريم، وقيل هي أول سورة نزلت كاملة.",
    aqadiyyaTopics: ["التوحيد", "الربوبية", "الإلوهية", "الجزاء والحساب"],
    fiqhiyyaRulings: ["وجوب قراءتها في الصلاة", "البسملة آية منها أم لا"],
    otherNames: [{ name: "أم الكتاب", meaning: "لأنها تجمع مقاصد القرآن" }, { name: "السبع المثاني", meaning: "لأنها سبع آيات وتثنى في الصلاة" }],
    virtues: ["أعظم سورة في القرآن", "رقية للمريض"],
    reflections: ["الحمد هو الاستحقاق الكامل لله وحده", "الاستعانة بالله هي سر العبادة"],
    supplications: ["اهدنا الصراط المستقيم"]
  }
};

export const useSurahDetails = (initialId: number = 1) => {
  const [selectedSurahId, setSelectedSurahId] = useState<number>(initialId);

  const selectedSurah = useMemo(() => {
    return mockSurahData[selectedSurahId] || { id: selectedSurahId, name: "تحت التطوير" };
  }, [selectedSurahId]);

  const selectSurah = (id: number) => {
    setSelectedSurahId(id);
  };

  return {
    selectedSurah,
    selectedSurahId,
    selectSurah,
  };
};
