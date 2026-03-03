import { SurahDetail } from '../types';

export const getSurahDetails = async (id: number): Promise<SurahDetail> => {
  // Mock data for Al-Fatihah
  if (id === 1) {
    return {
      id: 1,
      name: 'الفاتحة',
      revelationType: 'MAKKI',
      versesCount: 7,
      revelationOrder: 5,
      asbabAlNuzul: 'نزلت في بداية البعثة بمكة...',
      aqadiyyaTopics: ['توحيد الألوهية', 'الإيمان باليوم الآخر'],
      fiqhiyyaRulings: ['وجوب قراءتها في الصلاة'],
      otherNames: [
        { name: 'أم الكتاب', meaning: 'لأنها أصل القرآن' },
        { name: 'السبع المثاني', meaning: 'لأنها سبع آيات وتثنى في الصلاة' }
      ],
      virtues: ['أعظم سورة في القرآن'],
      reflections: ['التركيز على العبودية والاستعانة بالله'],
      supplications: ['اهدنا الصراط المستقيم']
    };
  }
  
  // Default mock for other surahs
  return {
    id,
    name: 'سورة تجريبية',
    revelationType: 'MAKKI',
    versesCount: 10,
    revelationOrder: 1,
    asbabAlNuzul: 'بيانات تجريبية لأسباب النزول...',
    aqadiyyaTopics: ['موضوع تجريبي 1'],
    fiqhiyyaRulings: ['حكم تجريبي 1'],
    otherNames: [{ name: 'اسم آخر', meaning: 'معنى تجريبي' }],
    virtues: ['فضل تجريبي'],
    reflections: ['وقفة تربوية تجريبية'],
    supplications: ['دعاء تجريبي']
  };
};
