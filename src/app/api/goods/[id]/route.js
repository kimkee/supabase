
import { supabase } from '@/app/supabase.js'; // supabase 설정 파일 불러오기

export const runtime = 'edge';

export async function  GET(req, {params}) {
  // const sortParam = req.query.sort || "id";
  // const team = params.id // '1'
  const asc = params.asc == 'asc' ? true : false;
  const { data, error } = await supabase.from("products").select().eq("id", params.id);
  console.log(req);
  return Response.json(data);
}


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
