'use client';
import { useState } from 'react';

export default function RegisterForm() {
  const [ok, setOk] = useState(false);
  const [sent, setSent] = useState(false);
  return (
    <form className="reg-form" noValidate onSubmit={(e) => {
      e.preventDefault();
      const input = (e.currentTarget.elements.namedItem('email') as HTMLInputElement);
      if (!input.value || input.value.indexOf('@') < 0) {
        input.style.borderColor = '#C56A4A';
        input.focus();
        return;
      }
      input.style.borderColor = '';
      setOk(true);
      setSent(true);
    }}>
      <label htmlFor="email" className="reg-note" style={{ color: 'var(--muted)' }}>メールアドレス</label>
      <input type="email" id="email" name="email" placeholder="example@example.com" autoComplete="email" required />
      <button type="submit">{sent ? '受け付けました' : '登録する'}</button>
      <p className={`reg-ok${ok ? ' show' : ''}`} role="status">ご登録を受け付けました。開所情報をお届けします。(※ デモ動作)</p>
      <p className="reg-note">ご登録いただいた情報は、多摩平蒸留所からのお知らせ配信のみに使用します。<br />配信の停止はいつでも可能です。プライバシーポリシーはフッターのリンクをご確認ください。</p>
    </form>
  );
}
