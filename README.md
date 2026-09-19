# Ackie Plus Website

เว็บไซต์หลักของบริษัท แอ็คกี้ พลัส จำกัด (Ackie Plus Co., Ltd.) / เกษตรคลับ

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- React Router
- react-i18next (ไทย / อังกฤษ)

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — dev server
- `npm run build` — typecheck + production build
- `npm run lint` — oxlint
- `npm run preview` — preview production build

## Project Structure

```
src/
├── components/
│   ├── layout/   # Header, Footer, Layout
│   ├── product/  # ProductCard
│   └── ui/       # LanguageSwitcher, shared UI
├── config/
│   └── portals.ts  # URL ของระบบตัวแทน/พนักงาน (แก้ทีเดียวที่นี่)
├── data/
│   └── products.ts
├── i18n/
│   └── locales/  # th.json, en.json
└── pages/
```

## Environment Variables

คัดลอก `.env.example` เป็น `.env` แล้วใส่ URL จริงของระบบตัวแทน (`VITE_DEALER_PORTAL_URL`) และระบบพนักงาน (`VITE_STAFF_PORTAL_URL`) เมื่อระบบเหล่านั้นพร้อมใช้งาน
