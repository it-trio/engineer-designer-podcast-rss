# <img src="src/site/images/icon-transparent.png" height=26> エンジニアやデザイナーがやっているポッドキャスト更新まとめ

エンジニアやデザイナーがやっているポッドキャストの更新をまとめたRSSフィードを配信しています。

@yamadashyさんの作成された[yamadashy/tech-blog-rss-feed](https://yamadashy.github.io/tech-blog-rss-feed/)をフォークして作成しました。


## 番組追加の方針

以下の条件を満たした番組を追加しています。

- ホストのうち少なくとも1人がエンジニアかデザイナーであること
- 番組の内容が、少しでもエンジニアリングやデザインについて触れていること
  - 内容で判断に迷う場合は、番組の登録カテゴリを参考に判断します
- エピソードが5個以上あること
- 更新が止まってなさそうなこと

企業が運営しているポッドキャスト番組については[it-trio/it-company-podcast-rss-feed](https://github.com/it-trio/it-company-podcast-rss-feed)で管理しています。

## 番組の追加方法
[src/resources/feed-info-list.ts](https://github.com/it-trio/engineer-designer-podcast-rss/blob/main/src/resources/feed-info-list.ts) で管理しており、その一覧にない場合 issue を作っていただければ対応します。  

### プルリクでの送り方
もしプルリクを送っていただける場合は以下のように作成できます。

1. このリポジトリをフォーク
2. ブランチ作成  
   `git switch -c new-blog-feed-xxx`
3. フィードを追加  
   `src/resources/feed-info-list.ts` の `FEED_INFO_LIST` を更新
4. コミット  
   `git commit -am 'add: 新規フィード追加`
5. プッシュ  
   `git push origin new-blog-feed-xxx`
6. プルリクを作成

## 開発

### 仕組み
GitHub Actions で定期的に更新されており、サイトの生成は [Eleventy](https://www.11ty.dev/) を使用しています。

更新は多少遅延ありますが以下のタイミングで行います。
- 平日: 6時、7時、8時、10時、12時、20時
- 土日: 6時、12時、20時

### 開発環境とコマンド
環境
- Node.js => .node-versionを参照

パッケージのインストール
```bash
$ yarn
```

フィード生成とサイト立ち上げ
```bash
$ # フィードを取得して作成
$ yarn feed-generate

$ # localhost:8080 で確認
$ yarn site-serve
```

コードのチェック
```bash
$ # lint
$ yarn lint

$ # TypeScript のチェック
$ yarn type-check

$ # テスト
$ yarn test
```

## ライセンス
MIT
