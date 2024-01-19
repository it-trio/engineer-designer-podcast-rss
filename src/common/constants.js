const siteUrlStem = 'https://engineer-designer-podcast-rss.it-trio-no.com';
const siteUrl = `${siteUrlStem}/`;

module.exports = {
  // サイト設定
  siteUrl: `${siteUrl}`,
  siteUrlStem: siteUrlStem,
  siteTitle: 'エンジニアやデザイナーがやっているポッドキャストRSS',
  siteDescription: 'エンジニアやデザイナーがやっているポッドキャストの更新をまとめたRSSフィードを配信しています',

  // フィード設定
  feedTitle: 'エンジニアやデザイナーがやっているポッドキャストRSS',
  feedDescription: 'エンジニアやデザイナーがやっているポッドキャストの更新をまとめたRSSフィード',
  feedLanguage: 'ja',
  feedCopyright: 'it-trio/engineer-designer-podcast-rss',
  feedGenerator: 'it-trio/engineer-designer-podcast-rss',
  feedUrls: {
    atom: `${siteUrl}feeds/atom.xml`,
    rss: `${siteUrl}feeds/rss.xml`,
    json: `${siteUrl}feeds/feed.json`,
  },

  // GitHub
  author: 'Spice-Z',
  gitHubUserUrl: 'https://github.com/Spice-Z/',
  gitHubRepositoryUrl: 'https://github.com/it-trio/engineer-designer-podcast-rss/',

  // Google Analytics系。フォークして使う際は値を空にするか書き換えてください
  googleSiteVerification: '',
  globalSiteTagKey: '',

  // フィードの取得などに使う UserAgent
  requestUserAgent: 'facebookexternalhit/1.1; it-trio/it-company-podcast-rss-feed',

  // サイトの追加方法のリンク
  howToAddSiteLink:
    'https://github.com/it-trio/engineer-designer-podcast-rss#%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E8%BF%BD%E5%8A%A0%E6%96%B9%E6%B3%95',
};
