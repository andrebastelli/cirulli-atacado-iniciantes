# Atacado Cirulli — Landing Page

Stack: **Vite + React 18 + TypeScript + Tailwind CSS**.
Estrutura padrão: `index.html` na raiz, `src/main.tsx` como entry point.

## 🚀 Deploy no Vercel via GitHub

1. Suba para um repositório GitHub:
   ```bash
   git init && git add . && git commit -m "feat: landing inicial"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
   git push -u origin main
   ```
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. Vercel detecta Vite automaticamente (`build` → `dist`). Clique em **Deploy**.
4. Em **Settings → Environment Variables**, adicione as variáveis de `.env.example`.

## 💻 Desenvolvimento local

```bash
npm install
cp .env.example .env.local
npm run dev      # http://localhost:5173
npm run build    # gera /dist
npm start        # preview da build em :3000
```

## ⚙️ Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `VITE_SITE_URL` | URL canônica do site |
| `VITE_WHATSAPP_NUMBER` | WhatsApp formato `55DDDNUMERO` |

## 📁 Estrutura

```
index.html          ← raiz
src/
  main.tsx          ← entry point
  App.tsx           ← landing completa
  index.css         ← Tailwind
  vite-env.d.ts
public/
  hero-jewelry.jpg
  kit-detail.jpg
  (adicione: favicon.ico, og-cover.jpg)
tailwind.config.ts
vite.config.ts
vercel.json
```

## ✅ Antes de publicar

1. Substituir `VITE_WHATSAPP_NUMBER` pelo número real.
2. Adicionar `public/favicon.ico` e `public/og-cover.jpg` (1200×630).
3. Ajustar URL canônica em `index.html` e `VITE_SITE_URL`.
