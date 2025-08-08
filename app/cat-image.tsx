'use client';
import { useState } from 'react';
import { fetchImage } from './fetch-image';
import styles from './page.module.css';

// コンポーネントの引数を定義する
type CatImageProps = {
  url: string;
};

// 画像を表示するコンポーネント
export function CatImage({ url }: CatImageProps) {
  // useSteteを使って状態を管理
  const [imageUrl, setImageUrl] = useState<string>(url);

  // 画像を取得する関数を定義
  const refreshImage = async () => {
    setImageUrl('');
    const image = await fetchImage();
    setImageUrl(image.url);
  };

  return (
    <div className={styles.page}>
      <button onClick={refreshImage} className={styles.button}>
        他のニャンコも見る
      </button>
      <div className={styles.frame}>
        {imageUrl && <img src={imageUrl} className={styles.img} />}
      </div>
    </div>
  );
}
