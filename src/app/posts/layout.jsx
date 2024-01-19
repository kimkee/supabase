import Nav from '@/app/components/Nav.jsx';
import Header from '@/app/components/Header.jsx';

export default function Layout({ children }) {
  return (
	<>
    <Header opts={{cate:'write'}}/>
      {children}
	  {/* <Nav /> */}
	</>
  )
}