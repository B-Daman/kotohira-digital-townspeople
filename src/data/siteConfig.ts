// サイト基本情報
export const siteConfig = {
  name: "琴平デジタル町民",
  nameEn: "KOTOHIRA Digital Town Residents",
  tagline: "こんぴらさんへ続く、新しい参道がここに。",
  description:
    "一生に一度じゃなく、何度でも！「観光地を訪れる」から「観光地と関わる」へ。琴平デジタル町民は、県外・海外からでも琴平に想いを寄せるあなたを迎える仕組みです。公式LINEから無料で登録できます。",
  url: "https://kotohira-digital-townspeople.com",
  lineUrl: "https://lin.ee/UwokNEe",
  operator: "琴平バス株式会社が、加盟店さまと地域の皆さまのご協力をいただき運営",
  startDate: "2024年2月",
} as const;

// ナビゲーション
export const navigation = [
  { label: "ホーム", href: "/" },
  { label: "デジタル町民とは", href: "/about" },
  { label: "町民になるには", href: "/join" },
  { label: "特典", href: "/benefits" },
  { label: "琴平ポイント", href: "/points" },
  { label: "活動・お知らせ", href: "/activities" },
  { label: "パートナー", href: "/partners" },
] as const;

// 統計ハイライト（トップページ用）
export const statsHighlights = [
  {
    number: "2167",
    suffix: "",
    label: "LINE友だち数",
  },
  {
    number: "11",
    suffix: "+",
    label: "パートナー事業者",
  },
] as const;

// 5つのPOINT（特典ページ用）
export const fivePoints = [
  {
    number: "01",
    title: "琴平mobi 1回無料",
    description:
      "相乗り型移動サービス「琴平mobi」が1回無料。琴平町全域＋まんのう町の一部エリアで、350ヶ所以上の仮想停留所から利用できます。",
    icon: "🚐",
  },
  {
    number: "02",
    title: "穴場を巡るスタンプラリー",
    description:
      "観光名所や町民しか知らない穴場スポットをQRコードで巡るスタンプラリー。必要数を集めて景品と交換できます。",
    icon: "🗺️",
  },
  {
    number: "03",
    title: "各店で使えるクーポン",
    description:
      "パートナー店舗で使えるおトクなクーポン。グルメと体験のカテゴリから選べます。",
    icon: "🎫",
  },
  {
    number: "04",
    title: "デジタル町民投票への参加権",
    description:
      "琴平デジタル町民としてまちづくりに関する投票に参加できます。",
    icon: "🗳️",
  },
  {
    number: "05",
    title: "イベント情報のご紹介",
    description:
      "琴平で開催されるイベントや行事の情報をいち早くお届けします。",
    icon: "📅",
  },
] as const;

// 3つの柱（トップページ用）
export const threePillars = [
  {
    title: "つながる",
    description:
      "全国の仲間とオンラインで交流。定例会やリアルイベントで琴平の人々とつながれます。",
    link: "/about",
  },
  {
    title: "おトクに",
    description:
      "琴平mobi無料、クーポン、スタンプラリーなど、デジタル町民限定のおトクな特典が使えます。",
    link: "/benefits",
  },
  {
    title: "参加する",
    description:
      "讃岐おでん、竹あかり、琴平山博覧会などのプロジェクトに参画。琴平を一緒につくる担い手になれます。",
    link: "/activities",
  },
] as const;

// 1,368段の絆（段階的関係深化モデル）
export const stepsOfBond = [
  {
    step: "1段目",
    title: "登録する",
    description: "情報を受け取る",
  },
  {
    step: "100段目",
    title: "琴平を訪れる",
    description: "特典でおトクに",
  },
  {
    step: "200段目",
    title: "イベントに参加",
    description: "仲間ができる",
  },
  {
    step: "500段目",
    title: "担い手活動に参画",
    description: "トークンで活動",
  },
  {
    step: "785段目",
    title: "プロジェクトリーダー",
    description: "アンバサダー認定",
  },
  {
    step: "1,368段目",
    title: "移住・定住",
    description: "琴平の住民に",
  },
] as const;

// タイムライン（琴平の挑戦）
export const challengeTimeline = [
  { date: "2024.02", event: "琴平デジタル町民サービス開始" },
  { date: "2024.10", event: "GOKAN KOTOHIRA・TeaRoom・Bagel House 開業" },
  { date: "2025.09", event: "琴平山博覧会 146年ぶり開催" },
  { date: "2025.11", event: "竹あかりプロジェクト実施" },
  { date: "2025.12", event: "讃岐おでんプロジェクト始動" },
  { date: "2026.01", event: "YouTube「琴平デジタル町民NOW」配信開始" },
] as const;

// メディア掲載（琴平デジタル町民に直接関連するもの）
export const mediaLogos = [
  "日経新聞",
  "KSB瀬戸内海放送",
  "JAL機内誌SKYWARD",
] as const;

// SNSリンク
export const socialLinks = [
  {
    name: "公式LINE",
    url: "https://lin.ee/UwokNEe",
    primary: true,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@kotohiradigitaltownresidents",
    primary: false,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/kotohiradigitaltownresidents/",
    primary: false,
  },
  {
    name: "X",
    url: "https://x.com/kotohiradigital",
    primary: false,
  },
] as const;

// デジタル町民の仲間たち
export const townspeople = [
  {
    id: "inukanfu",
    name: "イヌカンフーさん",
    image: "/images/character-inukanfu.png",
    description:
      "琴平デジタル町民の仲間。ピースサインがトレードマーク。詳細は準備中です。",
  },
  {
    id: "akkey",
    name: "あっきーさん",
    image: "/images/character-akkey.png",
    description:
      "琴平町の地域おこし協力隊。AIセミナーや讃岐おでんプロジェクトなど、琴平のまちづくりを推進中。",
  },
  {
    id: "miyoshi",
    name: "三好さん",
    image: "/images/character-miyoshi.png",
    description:
      "琴平デジタル町民の仲間。詳細は準備中です。",
  },
] as const;

// パートナー事業者
// TODO: 各社のロゴ画像を収集してpublic/images/partners/に配置する
export const partnerHighlights = [
  "DONZO Brewing",
  "GOKAN KOTOHIRA",
  "The TeaRoom KOTOHIRA",
  "Bagel House KOTOHIRA",
  "琴平文具店",
  "西野金陵",
  "藤田屋",
  "中野うどん学校",
  "KOTOHIRA TERRACE",
  "にしきや",
  "ことね",
] as const;
