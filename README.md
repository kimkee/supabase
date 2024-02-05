<p align="center"> <a href="https://supamarket.pages.dev">
  <img width="168" height="30" src="https://supabase.com/badge-made-with-supabase.svg" alt="Made with Supabase"  />
</a> </p>

<p align="center"> <a href="https://supamarket.pages.dev"> <img width="70%" src="https://supamarket.pages.dev/img/supamarket.png"> </a></p>

<h1 align="center"> Learn to Supabase + Next.js</h1>

<p align="center"> https://supamarket.pages.dev </p>


## API 
- 상품   
  https://supamarket.pages.dev/api/products

- 카테고리  
  https://supamarket.pages.dev/api/category

- 판매장소  
  https://supamarket.pages.dev/api/location

- 상품상태  
  https://supamarket.pages.dev/api/condition

<br>

<!-- <img src="https://supabase.com/docs/_next/image?url=%2Fdocs%2Fsupabase-dark.svg&w=96&q=75" width="200"> -->

```js
import { supabase } from '@/app/supabase.js';
export async function  GET(req) {
  const { data, error } = await supabase.from("products").select().order( id, { ascending: asc });
  return Response.json(data);
}
```


[supabase.com](https://supabase.com)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
