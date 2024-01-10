import Nav from '../components/Nav.jsx';
import Header from '../components/Header.jsx';
export default function Layout({ children }) {
  return (
	<>
    <Header />
      {children}
	  <Nav />
	</>
  )
}