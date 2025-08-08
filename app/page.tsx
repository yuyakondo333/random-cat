import { connection } from 'next/server';
import { fetchImage } from './fetch-image';
import { CatImage } from './cat-image';

export default async function Home() {
  // ビルド時にfetchImageの結果が固定されないようにする
  await connection();
  // APIから画像を取得
  const image = await fetchImage();
  // 画像URLをコンソールに表示
  console.log('Home: 画像情報を取得しました', image);
  return <CatImage url={image.url} />;
}
