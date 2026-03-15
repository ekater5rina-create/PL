// ============================================================
// Hardcoded data parsed from the uploaded CSV files
// All numeric strings cleaned: spaces removed, commas → dots
// ============================================================

export interface MonthRow {
  month: number;
  monthName: string;
  produced: number;
  sold: number;
  revenue: number;
  costSold: number;
  stockQty: number;
  stockRub: number;
  marginPct: number;        // % as decimal e.g. 0.9759
  grossProfit: number;
  loadFactor: number;
}

export interface RealizationRow {
  month: number;
  nomenclature: string;
  qty: number;
  sumWithoutVAT: number;
}

export interface KdsRow {
  month: number;
  nomenclature: string;
  qty: number;
}

// ── Calc_FD data ─────────────────────────────────────────────
export const calcFDData: MonthRow[] = [
  {
    month: 1,
    monthName: "Январь",
    produced: 172270,
    sold: 44202,
    revenue: 120912.95,
    costSold: 2916.31,
    stockQty: 249984,
    stockRub: 4350694,
    marginPct: 0.9759,
    grossProfit: 117996.64,
    loadFactor: 0.2566,
  },
  {
    month: 2,
    monthName: "Февраль",
    produced: 596116,
    sold: 545195,
    revenue: 12113013.31,
    costSold: 8656719.42,
    stockQty: 310234,
    stockRub: 4226263,
    marginPct: 0.2853,
    grossProfit: 3456293.89,
    loadFactor: 0.9146,
  },
  {
    month: 3,
    monthName: "Март",
    produced: 10610,
    sold: 82170,
    revenue: 1865050,
    costSold: 1137197.19,
    stockQty: 0,
    stockRub: 0,
    marginPct: 0.3903,
    grossProfit: 727852.81,
    loadFactor: 7.7446,
  },
  { month: 4, monthName: "Апрель", produced: 0, sold: 0, revenue: 0, costSold: 0, stockQty: 0, stockRub: 0, marginPct: 0, grossProfit: 0, loadFactor: 0 },
  { month: 5, monthName: "Май", produced: 0, sold: 0, revenue: 0, costSold: 0, stockQty: 0, stockRub: 0, marginPct: 0, grossProfit: 0, loadFactor: 0 },
  { month: 6, monthName: "Июнь", produced: 0, sold: 0, revenue: 0, costSold: 0, stockQty: 0, stockRub: 0, marginPct: 0, grossProfit: 0, loadFactor: 0 },
  { month: 7, monthName: "Июль", produced: 0, sold: 0, revenue: 0, costSold: 0, stockQty: 0, stockRub: 0, marginPct: 0, grossProfit: 0, loadFactor: 0 },
  { month: 8, monthName: "Август", produced: 0, sold: 0, revenue: 0, costSold: 0, stockQty: 0, stockRub: 0, marginPct: 0, grossProfit: 0, loadFactor: 0 },
  { month: 9, monthName: "Сентябрь", produced: 0, sold: 0, revenue: 0, costSold: 0, stockQty: 0, stockRub: 0, marginPct: 0, grossProfit: 0, loadFactor: 0 },
  { month: 10, monthName: "Октябрь", produced: 0, sold: 0, revenue: 0, costSold: 0, stockQty: 0, stockRub: 0, marginPct: 0, grossProfit: 0, loadFactor: 0 },
  { month: 11, monthName: "Ноябрь", produced: 0, sold: 0, revenue: 0, costSold: 0, stockQty: 0, stockRub: 0, marginPct: 0, grossProfit: 0, loadFactor: 0 },
  { month: 12, monthName: "Декабрь", produced: 0, sold: 0, revenue: 0, costSold: 0, stockQty: 0, stockRub: 0, marginPct: 0, grossProfit: 0, loadFactor: 0 },
];

// ── Реализация data ───────────────────────────────────────────
// Only rows that are actual bag sales (filter out transport, flexoforms, etc.)
export const realizationData: RealizationRow[] = [
  // Month 1
  { month: 1, nomenclature: "Тестовые образцы", qty: 200, sumWithoutVAT: 5311.48 },
  // Month 2
  { month: 2, nomenclature: "Мешки бумажные - 50х69х13, УМН(п) 70:70:70, Открытого типа, Кукуруза для попкорна SMALL", qty: 10020, sumWithoutVAT: 298546.72 },
  { month: 2, nomenclature: "Мешки бумажные - 50х69х13, УМН(п) 70:70:70, Открытого типа, Кукуруза для попкорна MUSHROOM", qty: 10180, sumWithoutVAT: 303313.93 },
  { month: 2, nomenclature: "Мешки бумажные - 35х48х11,5 МК 70:70, Пирамида М300", qty: 20140, sumWithoutVAT: 320424.10 },
  { month: 2, nomenclature: "Мешки бумажные - 35х49х11 МК(п) 70х70 Смесь Универсальная Цементно-Песчаная М150", qty: 15050, sumWithoutVAT: 272627.05 },
  { month: 2, nomenclature: "Мешки бумажные - 35х49х11 МК(п) 70х70 Смесь Универсальная растворная - Пескобетон М300", qty: 15150, sumWithoutVAT: 274438.52 },
  { month: 2, nomenclature: "Мешки бумажные - 35х49х11 УМК(п) 70б:ПЭ:70к РОКС Фасадная", qty: 15040, sumWithoutVAT: 321634.10 },
  { month: 2, nomenclature: "Мешки бумажные - 35х49х11 УМК(п) 70б:ПЭ:70к РОКС Керамогранит", qty: 15240, sumWithoutVAT: 325911.15 },
  { month: 2, nomenclature: "Мешки бумажные - 35х48х11, МК(п), 70х70, AXTON Стяжка пола", qty: 25220, sumWithoutVAT: 446104.59 },
  { month: 2, nomenclature: "Мешки бумажные - 49х51х11, МК(п), 70х70, ЛЦ Штукатука гипсовая", qty: 25920, sumWithoutVAT: 640563.93 },
  { month: 2, nomenclature: "Мешки бумажные - 35х48х11, МК 70х70, PALADIUM PalafleX-101 Клей плиточный УНИВЕРСАЛЬНЫЙ 25 кг.", qty: 23690, sumWithoutVAT: 408361.23 },
  { month: 2, nomenclature: "Мешки бумажные - 35х49х11 УМК(п) 70б:ПЭ:70к РОКС М-300", qty: 15420, sumWithoutVAT: 329760.49 },
  { month: 2, nomenclature: "Мешки бумажные - 35х49х11 УМК(п) 70б:ПЭ:70к РОКС Стандарт", qty: 15116, sumWithoutVAT: 323259.38 },
  { month: 2, nomenclature: "Мешки бумажные - 35х49х11 УМК(п) 70б:ПЭ:70к РОКС Стяжка", qty: 15120, sumWithoutVAT: 323344.92 },
  { month: 2, nomenclature: "Мешки бумажные - 35х49х11 УНМ(п) 80:70:70 КП DS 1 Эконом", qty: 40360, sumWithoutVAT: 735081.31 },
  { month: 2, nomenclature: "Мешки бумажные - 40х51х11 МК 70х70, PALADIUM БАЗОВАЯ Шпаклевка гипсовая 25 кг.", qty: 15240, sumWithoutVAT: 301177.38 },
  { month: 2, nomenclature: "Мешки бумажные - 45х58х11 УМК(п) 70х70х70 ЦКС PEREL", qty: 131930, sumWithoutVAT: 3610772.70 },
  { month: 2, nomenclature: "Мешки бумажные - 50х56х11, МК(п) 70:80, №6 Штукатурка гипсовая", qty: 70000, sumWithoutVAT: 1293852.46 },
  { month: 2, nomenclature: "Мешки бумажные - 40х55х11, УМК(п) 70:70, №8 Толстослойная гипсовая штукатурка", qty: 66145, sumWithoutVAT: 1355430.33 },
  // Month 3
  { month: 3, nomenclature: "Мешки бумажные - 35х50х11, МК(п), 70х70, AXTON Штукатурка цементная, 25 кг", qty: 26430, sumWithoutVAT: 506936.07 },
  { month: 3, nomenclature: "Мешки бумажные - 35х48х11, МК(п), 70:70, AXTON Клей для газоблоков", qty: 25000, sumWithoutVAT: 442213.11 },
  { month: 3, nomenclature: "Мешки бумажные - 50х69х11, УМН(п) 70:70:70:70, Открытого типа, SunCorn PREMIUM", qty: 30740, sumWithoutVAT: 915900.82 },
];

// ── Импорт KDS data ───────────────────────────────────────────
export const kdsData: KdsRow[] = [
  // Month 1
  { month: 1, nomenclature: "Мешки бумажные - 45х58х11 УМК(п) 70х70х70 ЦКС PEREL", qty: 36480 },
  { month: 1, nomenclature: "Мешки бумажные - 45х58х11 УМК(п) 70х70х70 ЦКС PEREL", qty: 27230 },
  { month: 1, nomenclature: "Мешки бумажные - 45х58х11 УМК(п) 70х70х70 ЦКС PEREL", qty: 68220 },
  { month: 1, nomenclature: "Мешки бумажные - 50х69х13, УМН(п) 70:70:70, Открытого типа, Кукуруза для попкорна SMALL", qty: 10020 },
  { month: 1, nomenclature: "Мешки бумажные - 50х69х13, УМН(п) 70:70:70, Открытого типа, Кукуруза для попкорна MUSHROOM", qty: 10180 },
  { month: 1, nomenclature: "Мешки бумажные - 35х48х11,5 МК 70:70, Пирамида М300", qty: 20140 },
  // Month 2
  { month: 2, nomenclature: "Мешки бумажные - 35х49х11 УНМ(п) 80:70:70 КП DS 1 Эконом", qty: 40360 },
  { month: 2, nomenclature: "Мешки бумажные - 35х49х11 УМК(п) 70б:ПЭ:70к РОКС Фасадная", qty: 15040 },
  { month: 2, nomenclature: "Мешки бумажные - 35х49х11 УМК(п) 70б:ПЭ:70к РОКС Керамогранит", qty: 15240 },
  { month: 2, nomenclature: "Мешки бумажные - 35х49х11 УМК(п) 70б:ПЭ:70к РОКС Стандарт", qty: 15116 },
  { month: 2, nomenclature: "Мешки бумажные - 35х49х11 УМК(п) 70б:ПЭ:70к РОКС Стяжка", qty: 15120 },
  { month: 2, nomenclature: "Мешки бумажные - 35х49х11 УМК(п) 70б:ПЭ:70к РОКС М-300", qty: 15420 },
  { month: 2, nomenclature: "Мешки бумажные - 35х49х11 МК(п) 70х70 Смесь Универсальная Цементно-Песчаная М150", qty: 15050 },
  { month: 2, nomenclature: "Мешки бумажные - 35х49х11 МК(п) 70х70 Смесь Универсальная растворная - Пескобетон М300", qty: 15150 },
  { month: 2, nomenclature: "Мешки бумажные - 35х48х11, МК(п), 70х70, AXTON Стяжка пола", qty: 25100 },
  { month: 2, nomenclature: "Мешки бумажные - 35х48х11, МК 70х70, PALADIUM PalafleX-101 Клей плиточный УНИВЕРСАЛЬНЫЙ 25 кг.", qty: 23690 },
  { month: 2, nomenclature: "Мешки бумажные - 49х51х11, МК(п), 70х70, ЛЦ Штукатука гипсовая", qty: 25920 },
  { month: 2, nomenclature: "Мешки бумажные - 50х56х11, МК(п) 70:80, №6 Штукатурка гипсовая", qty: 136480 },
  { month: 2, nomenclature: "Мешки бумажные - 40х51х11 МК 70х70, PALADIUM БАЗОВАЯ Шпаклевка гипсовая 25 кг.", qty: 15240 },
  { month: 2, nomenclature: "Мешки бумажные - 40х55х11, УМК(п) 70:70, №8 Толстослойная гипсовая штукатурка", qty: 66145 },
  { month: 2, nomenclature: "Мешки бумажные - 45х58х11 УМК(п) 70х70х70 ЦКС PEREL", qty: 131930 },
  { month: 2, nomenclature: "Мешки бумажные - 50х69х11, УМН(п) 70:70:70:70, Открытого типа, SunCorn PREMIUM", qty: 30740 },
  { month: 2, nomenclature: "Мешки бумажные - 35х49х11, УМК(п), 70б:ПЭ:70к, Смесь универсальная ИС М-300", qty: 15820 },
  { month: 2, nomenclature: "Мешки бумажные - 38х49х11, УМК(п) 70х70, Ремонтный состав GRANIT ULTRA LINE RS 600", qty: 5300 },
  { month: 2, nomenclature: "Мешки бумажные - 38х46х9, МК 70:70, Цементно-Песчанная Смесь Евро Л 25 кг", qty: 20510 },
  { month: 2, nomenclature: "Мешки бумажные - 35х48х11, МК(п), 70:70, AXTON Клей для газоблоков", qty: 25000 },
  { month: 2, nomenclature: "Мешки бумажные - 35х50х11, МК(п), 70х70, AXTON Штукатурка цементная, 25 кг", qty: 26430 },
  { month: 2, nomenclature: "Мешки бумажные - 35х48х11,5 МК 70:70, Пирамида М300", qty: 0 },
  // Month 3
  { month: 3, nomenclature: "Мешки бумажные - 35х48х11,5 МК 70:70, Пирамида М300", qty: 10610 },
];
