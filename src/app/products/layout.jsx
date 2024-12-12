import Nav from '@/app/components/Nav.jsx';
import Header from '@/app/components/Header.jsx';
export const runtime = 'edge';

// export const metadata = {
//   openGraph: {
//     title: '상품',
//   },
// }

export default function Layout({ children }) {
  return (
	<>
    <Header opts={{type:'main', cate: 'products'}}/>
      {children}
	  <Nav />
	</>
  )
}