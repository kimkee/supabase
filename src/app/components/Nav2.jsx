'use client'


export default function Nav() {
  
  const goTop = ()=> ui.scrollTo("body", 0 , 200 );
  const isActive = els => location.pathname.includes(`${els}`) ? "active" : "";
  return (
    <>
      <div className={`floatnav`}>
        <button type="button" className="bt top" onClick={goTop}><i className="fa-solid fa-arrow-up"></i><em>위로</em></button>
      </div>
      <nav id="menubar" className="menubar">
        <div className="inr">
          <ul className="menu">
            <li>
              <a href={`/`} className={"bt"}><i className="fa-regular fa-house"></i><em>Home</em></a>
            </li>
            <li>
              <a href={`/products`} className={"bt"}><i className="fa-regular fa-clapperboard-play"></i><em>Products</em></a>
            </li>
            <li>
              <a href={`/search`} className={"bt"}><i className="fa-regular fa-search"></i><em>Search</em></a>
            </li>
            <li>
              <a href={`/user/abc`} className={"bt"}> <i className="fa-regular fa-user"></i><em>Mypage</em></a>
              {/* <a href={`/user/signin`} className={"bt"}><i className="fa-regular fa-user"></i><em>Login</em></a> */}
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
