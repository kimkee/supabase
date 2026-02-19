import { supabase } from '@/app/supabase.js';

// Cloudflare Pages 환경을 위한 Edge Runtime 설정
export const runtime = 'edge';
// 동적 파라미터를 사용하므로 dynamic 설정을 추가하는 것이 안전합니다.
export const dynamic = 'force-dynamic';

export async function GET(req, { params }) {
  try {
    // 1. [중요] Next.js 15에서는 params를 반드시 await 해야 합니다.
    const resolvedParams = await params;
    
    // 2. 비동기적으로 받은 params에서 값을 추출합니다.
    const { opt, asc: ascParam } = resolvedParams;

    // 3. 정렬 순서 결정 (파라미터가 'asc'이면 true, 아니면 false)
    const isAscending = ascParam === 'asc';

    // 4. Supabase 쿼리 실행
    // .order() 메서드에 await로 받은 opt와 정렬 옵션을 적용합니다.
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order(opt, { ascending: isAscending });

    // 5. 에러 처리
    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    // 6. 결과 반환
    return Response.json(data);

  } catch (err) {
    // 7. 예외 상황 처리
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
// http://localhost:9008/api/products/sort/updated_at/asc
// http://localhost:9008/api/products/sort/updated_at/desc
// http://localhost:9008/api/products/sort/price/asc
// http://localhost:9008/api/products/sort/price/desc

// export default async function handler(req, res) {
//   try {
//     const { data, error } = await supabase.from("products").select().order('id', { ascending: true });

//     if (error) {
//       throw error;
//     }

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
// export const method = 'post'; // `method` 속성을 `POST`로 변경
