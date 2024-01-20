export const FLAG_ZENN_PUBLICATION: unique symbol = Symbol('Zenn Publication');
type FEED_INFO_FLAG = typeof FLAG_ZENN_PUBLICATION;

export type FeedInfo = {
  label: string;
  url: string;
  flags?: FEED_INFO_FLAG[];
};

const createFeedInfoList = (feedInfoTuples: [label: string, url: string, flags?: FEED_INFO_FLAG[]][]) => {
  const feedInfoList: FeedInfo[] = [];

  for (const [label, url, flags] of feedInfoTuples) {
    feedInfoList.push({ label, url, flags });
  }

  return feedInfoList;
};

// フィード情報一覧。アルファベット-50音順
// ITトリオの日常はアピールのため先頭に置いています。聞いてね！
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // ['番組名', 'RSS/AtomフィードのURL'],
  ['ITトリオの日常 ~エンジニア3人がカジュアルに学びを深めるラジオ~', 'https://rss.art19.com/it-pitpa'],
  ['30代デザイナーのゆるらじお', 'https://stand.fm/rss/6342440a8fc92d08ba90ce3f'],
  ['AFTERNOON RADIO「デザインのよみかた」', 'https://anchor.fm/s/45d220f4/podcast/rss'],
  ['backspace.fm', 'https://rss.art19.com/backspace'],
  ['BTRAXのCEOによるサンフランシスコ・デザイントーク', 'https://anchor.fm/s/e5f60ec4/podcast/rss'],
  ['EM.FM', 'https://anchor.fm/s/70a2c40/podcast/rss'],
  ['engineer meeting podcast', 'https://feeds.soundcloud.com/users/soundcloud:users:117239062/sounds.rss'],
  ['fukabori.fm', 'https://rss.art19.com/fukabori'],
  ['Good News for Cities〜都市に関する炉辺談話', 'https://anchor.fm/s/1b8386f8/podcast/rss'],
  ['Image Cast - 技術・デザイン・制作・表現の雑談', 'https://anchor.fm/s/3f0f1de4/podcast/rss'],
  ['kkeethのエンジニア雑談チャンネル', 'https://rss.art19.com/kkeethengineers'],
  ['ManaのWebクリエイターカフェ', 'https://rss.art19.com/webcreatorcafe'],
  ['Misreading Chat', 'https://misreading.chat/category/episodes/feed/'],
  ['mozaic.fm', 'http://feed.mozaic.fm/'],
  ['Pod De Engineer', 'https://anchor.fm/s/12948d58/podcast/rss'],
  ['Rebuild', 'https://feeds.rebuild.fm/rebuildfm'],
  ['resize.fm', 'https://anchor.fm/s/416f2048/podcast/rss'],
  ['Today I Learned', 'https://anchor.fm/s/367f0040/podcast/rss'],
  ['web3FM', 'https://anchor.fm/s/5d5ba88/podcast/rss'],
  ['Work In Progress', 'https://anchor.fm/s/1726edc0/podcast/rss'],
  ['YOWATARI RADIO', 'https://anchor.fm/s/d3754aa8/podcast/rss'],
  ['あべこべコンビのクリエイティブトーク', 'https://anchor.fm/s/e5bd4288/podcast/rss'],
  ['いつものデザインのはなし', 'https://anchor.fm/s/dd40bdb0/podcast/rss'],
  ['ぐんぐんfm', 'https://anchor.fm/s/b4cfa51c/podcast/rss'],
  ['人工知能ラジオ Team AI Channel', 'https://feeds.soundcloud.com/users/soundcloud:users:102623686/sounds.rss'],
  ['エンジニア視点でライフハックするためのラジオ', 'https://rss.art19.com/try-catch'],
  ['エンジニアと人生', 'https://rss.art19.com/shu223'],
  ['しがないラジオ', 'https://feeds.soundcloud.com/users/soundcloud:users:294673416/sounds.rss'],
  ['知らんがなラジオ', 'https://anchor.fm/s/27ac9974/podcast/rss'],
  ['セキュリティのアレ', 'https://www.tsujileaks.com/?feed=podcast'],
  ['たまにデザインFM', 'https://anchor.fm/s/216ede50/podcast/rss'],
  ['だらだらデザイン', 'https://anchor.fm/s/ede071d8/podcast/rss'],
  ['デザイナーの給湯室', 'https://anchor.fm/s/79493a58/podcast/rss'],
  ['デザぽ／デザインがしたい人のためのポッドキャスト', 'https://anchor.fm/s/ac6beb24/podcast/rss'],
  ['なにからデザイン', 'https://anchor.fm/s/94f122fc/podcast/rss'],
  ['バンクーバーのえんじに屋', 'https://rss.art19.com/vancouverengineers'],
  ['ひとくちPKI', 'https://anchor.fm/s/42b89b8c/podcast/rss'],
  ['ひまじんプログラマーの週末エンジニアリングレッスン', 'https://rss.art19.com/07ef6b45-d4fc-4d94-b211-e02a27b7e2a6'],
  ['フムフムエフエム by @takejune', 'https://anchor.fm/s/5c16f0c4/podcast/rss'],
  ['プログラミング初心者のための ナンチャッテ・ラジオ', 'http://9chat-e.mynt.work/?f=rss_radio'],
  ['ものづくりnoラジオ', 'https://anchor.fm/s/bbb92038/podcast/rss'],
  ['リファクタリングとともに生きるラジオ', 'https://anchor.fm/s/ed31ece4/podcast/rss'],
  ['ゆるふわPodcast', 'https://yuru28.com/feed'],
]);
