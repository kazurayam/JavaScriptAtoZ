- Table of contents
{:toc}

# \[Deno\] JavaScriptのFetch APIを学ぶためにWebサーバをDenoとJupyterで作った話

## 動機

なぜこのプロジェクトを作ったのか、動機を述べる。

第一の動機。2023年12月、わたしは書籍 [《改訂３版 JavaScript本格入門》](https://gihyo.jp/book/2023/978-4-297-13288-0)（山田祥寛 著 2023年2月 技術評論社 刊、以下で「本格本」と略記）を読んだ。わたしは長いあいだJavaScriptをちゃんと学習せず **とりあえず動いた** で立ち止まっていた。この本を通読して古びない本質を習得できたとおもう。ただしひとつ不満があった。《10.4 非同期通信の基本を理解する - Fetch API》のサンプルコードを実行するのにWebサーバを立てる必要があるのだが、本格本はPHP言語によるWebサーバの実装例を紹介していた。残念ながらわたしはPHPがよくわからない …​ そういえばJavaScriptとTypeScriptのランタイム環境 [Deno](https://qiita.com/search?q=Deno) があるじゃないか。クライアントとしてのJavaScriptをテストするのに必要最小限のサービスを実装したWebサーバをTypeScriptで書こう。同じ根を持つ言語でぜんぶ書けるなら楽でいい。やってみよう。

第二の動機。2023年9月に Deno 1.37 がリリースされて、JupyterカーネルとしてDenoが選べるようになった。

-   [Deno 1.37: Modern JavaScript in Jupyter Notebooks](https://deno.com/blog/v1.37)

VS Codeに拡張モジュールをインストールすれば、JupyterでNotebook(`*.ipynb`)ファイルを作りコードを素早く実行することができる。さらにDenoがJupyterカーネルとして使えるなら、ノートブックにTypeScriptのコードを書き、素早く実行し、結果をノートブックのなかで見ることができる。この作業環境は軽快で、魅力的だ。最小限のWebサーバをTypeScriptで実装するのにはJupyterが好適だ。だからJupyterカーネルとしてのDenoを試してみよう。

## Denoで動かすJupyterプロジェクト

-   [Denoで動かすJupyterプロジェクト](https://qiita.com/KokiSakano/items/60c53a1b1b113d3711c2)(Qiita, @KokiSakano)
