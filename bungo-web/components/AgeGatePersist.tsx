'use client';

import { useEffect } from 'react';

/**
 * 二十歳確認の記憶のみを担当する。
 * 開閉そのものは CSS（:checked）が行うため、このスクリプトが無くても操作できる。
 */
export default function AgeGatePersist() {
  useEffect(() => {
    const yes = document.getElementById('age-yes') as HTMLInputElement | null;
    if (!yes) return;

    try {
      if (sessionStorage.getItem('td20') === 'ok') {
        yes.checked = true;
      }
    } catch {
      /* プライベートブラウズ等で sessionStorage が使えない場合は無視 */
    }

    const onChange = () => {
      if (yes.checked) {
        try {
          sessionStorage.setItem('td20', 'ok');
        } catch {
          /* 同上 */
        }
      }
    };

    yes.addEventListener('change', onChange);
    return () => yes.removeEventListener('change', onChange);
  }, []);

  return null;
}
