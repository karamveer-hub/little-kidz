import React from 'react'
import {useRef,useState} from 'react'
import { NavLink } from 'react-router-dom';

// import './App.scss'
import '../script'

function Navbar() {
  const searchMobDisplayLi = document.querySelectorAll(".dropdownli");
  const [isMenuDisplayed, setMenuDisplayed] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  const burgerRef = useRef(null);
  const dropDownRef = useRef(null);

  const handleBurgerClick = () => {
    const burgerElement = burgerRef.current;
    console.log('Burger icon clicked!', burgerElement);
    // Add your logic here
    burgerElement.classList.toggle("active")
    setMenuDisplayed(!isMenuDisplayed);
  };
  const handleDropdownClick = (e) => {
    if (e.currentTarget.nextElementSibling) {
      if (e.currentTarget.nextElementSibling.classList.contains("show")) {
        e.currentTarget.nextElementSibling.classList.remove("show");
        e.currentTarget.style.transform = null;
      } else {
        for (let i = 0; i < searchMobDisplayLi.length; i++) {
          searchMobDisplayLi[i].nextElementSibling?.classList.remove("show");
          searchMobDisplayLi[i].style.transform = null;
        }
        e.currentTarget.nextElementSibling.classList.add("show");
        e.currentTarget.style.transform = 'rotate(180deg)';
      }
    }
  };
  return (
    <React.Fragment>
    <div className="mob-menu display_flex">

      <div className="logoMain display_flex">
        {/* <a href="https://www.nagaland.gov.in/" target="_blank" rel="noreferrer">
          <img src="images/Rectangle6.png" alt="Government of Nagaland Logo" />
        </a> */}
<NavLink to="/" activeClassName="active"><img src="../images/logo.png" alt="The Little Kidz School" className='logo'/></NavLink>
                <div>
                    <h2 style={{textAlign: "left",fontSize: "20px", margin:"0",color:"#78BDE2"}} className="">The Little Kidz School</h2>
                    <p style={{textAlign: "left",fontSize: "16px", margin:"0"}}  className="">Rohtak 124001
                        <br />Haryana</p>
                </div> 
                       {/* <a href="https://www.undp.org/india" target="_blank" rel="noreferrer">
          <img src="images/Rectangle8.png" alt="UNDP Logo" />
        </a> */}
      </div>
      <div id="burger" ref={burgerRef} onClick={handleBurgerClick}>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>

      {/* <svg className="mob-header-search" width="30" height="30" viewBox="0 0 30 30" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M24.1983 21.3505C25.8381 19.1269 26.8073 16.3783 26.8073 13.4034C26.8073 6.00092 20.8064 0 13.4039 0C6.0014 0 0.000488281 6.00092 0.000488281 13.4034C0.000488281 20.8059 6.0014 26.8068 13.4039 26.8068C16.3883 26.8068 19.1449 25.8314 21.3723 24.182L26.3779 29.3319C27.1477 30.1239 28.4139 30.1419 29.206 29.3721C29.9981 28.6022 30.0161 27.336 29.2462 26.5439L24.1983 21.3505ZM13.4039 22.8083C8.20973 22.8083 3.99903 18.5976 3.99903 13.4034C3.99903 8.20925 8.20973 3.99855 13.4039 3.99855C18.5981 3.99855 22.8088 8.20925 22.8088 13.4034C22.8088 18.5976 18.5981 22.8083 13.4039 22.8083Z"
          fill="#0977B9" />
      </svg> */}

      <div className={`mob-menu-display ${isMenuDisplayed ? 'show' : ''}`}>
        <ul className="display_flex">
          {/* <li className="display_flex " id="searchMobDisplay"><svg width="30" height="30" viewBox="0 0 30 30"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" className="svgColor"
              d="M24.1978 21.3505C25.8376 19.1269 26.8068 16.3783 26.8068 13.4034C26.8068 6.00092 20.8059 0 13.4034 0C6.00091 0 0 6.00092 0 13.4034C0 20.8059 6.00091 26.8068 13.4034 26.8068C16.3878 26.8068 19.1444 25.8314 21.3718 24.182L26.3774 29.3319C27.1472 30.1239 28.4134 30.1419 29.2055 29.3721C29.9976 28.6022 30.0156 27.336 29.2457 26.5439L24.1978 21.3505ZM13.4034 22.8083C8.20924 22.8083 3.99854 18.5976 3.99854 13.4034C3.99854 8.20925 8.20924 3.99855 13.4034 3.99855C18.5976 3.99855 22.8083 8.20925 22.8083 13.4034C22.8083 18.5976 18.5976 22.8083 13.4034 22.8083Z"
              fill="#0977B9" />
          </svg>
            <input type="text" placeholder="Search media and pdfs" pattern="[a-zA-Z]*"
              className="font700 allSearch" /><img src="images/closeSearch.png" alt="" />
          </li> */}
          <li className="display_flex "><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" className="svgColor"
              d="M10.7071 0.292893C10.3166 -0.0976311 9.68342 -0.0976311 9.29289 0.292893L0.292893 9.29289C-0.0976311 9.68342 -0.0976311 10.3166 0.292893 10.7071C0.683417 11.0976 1.31658 11.0976 1.70711 10.7071L10 2.41421L18.2929 10.7071C18.6834 11.0976 19.3166 11.0976 19.7071 10.7071C20.0976 10.3166 20.0976 9.68342 19.7071 9.29289L10.7071 0.292893ZM17 10.4999C17 9.94758 16.5523 9.49986 16 9.49986C15.4477 9.49986 15 9.94758 15 10.4999V17C15 17.5523 14.5523 18 14 18H6C5.44772 18 5 17.5523 5 17V10.4999C5 9.94762 4.55228 9.49991 4 9.49991C3.44772 9.49991 3 9.94762 3 10.4999V17C3 18.6569 4.34315 20 6 20H14C15.6569 20 17 18.6569 17 17V10.4999Z"
              fill="#fff" />
          </svg>
            <p className="font700"><NavLink to="/">Home</NavLink> </p><img src="images/arrowBlue.png"
              alt="" style={{visibility: "hidden"}} />
          </li>
          <li className="display_flex "><svg width="30" height="31" viewBox="0 0 30 31" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" className="svgColor"
              d="M26 15.9379C26 22.013 21.0751 26.9379 15 26.9379C8.92487 26.9379 4 22.013 4 15.9379C4 9.86273 8.92487 4.93787 15 4.93787C21.0751 4.93787 26 9.86273 26 15.9379ZM30 15.9379C30 24.2221 23.2843 30.9379 15 30.9379C6.71573 30.9379 0 24.2221 0 15.9379C0 7.65359 6.71573 0.937866 15 0.937866C23.2843 0.937866 30 7.65359 30 15.9379ZM17 8.93787C17 10.0424 16.1046 10.9379 15 10.9379C13.8954 10.9379 13 10.0424 13 8.93787C13 7.8333 13.8954 6.93787 15 6.93787C16.1046 6.93787 17 7.8333 17 8.93787ZM13 14.9379C13 13.8333 13.8954 12.9379 15 12.9379C16.1046 12.9379 17 13.8333 17 14.9379V22.9379C17 24.0424 16.1046 24.9379 15 24.9379C13.8954 24.9379 13 24.0424 13 22.9379V14.9379Z"
              fill="#fff" />
          </svg>
            <p className="font700"><NavLink to="/about">About Us</NavLink></p><img
              src="images/arrowBlue.png" alt="" className="dropdownli" ref={dropDownRef} onClick={handleDropdownClick}/>
            <div className="dropdown">
            <ul>
  <li><NavLink to="#" activeClassName="active">Sample</NavLink></li>
  <li><NavLink to="#" activeClassName="active">sample</NavLink></li>
</ul>
            </div>
          </li>
          <li className="display_flex "><svg width="30" height="31" viewBox="0 0 30 31" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" className="svgColor"
              d="M5 4.56287C5 3.73444 5.67157 3.06287 6.5 3.06287C7.32843 3.06287 8 3.73444 8 4.56287V5.06287H13.5V4.56287C13.5 3.73444 14.1716 3.06287 15 3.06287C15.8284 3.06287 16.5 3.73444 16.5 4.56287V5.06287H22V4.56287C22 3.73444 22.6716 3.06287 23.5 3.06287C24.3284 3.06287 25 3.73444 25 4.56287V5.06287H26C28.2091 5.06287 30 6.85373 30 9.06287V25.0629C30 27.272 28.2091 29.0629 26 29.0629H4C1.79086 29.0629 0 27.272 0 25.0629V9.06287C0 6.85373 1.79086 5.06287 4 5.06287H5V4.56287ZM22 8.06287V8.56287C22 9.39129 22.6716 10.0629 23.5 10.0629C24.3284 10.0629 25 9.39129 25 8.56287V8.06287H26C26.5523 8.06287 27 8.51058 27 9.06287V11.0629H3V9.06287C3 8.51058 3.44772 8.06287 4 8.06287H5V8.56287C5 9.39129 5.67157 10.0629 6.5 10.0629C7.32843 10.0629 8 9.39129 8 8.56287V8.06287H13.5V8.56287C13.5 9.39129 14.1716 10.0629 15 10.0629C15.8284 10.0629 16.5 9.39129 16.5 8.56287V8.06287H22ZM3 14.0629V25.0629C3 25.6152 3.44772 26.0629 4 26.0629H26C26.5523 26.0629 27 25.6152 27 25.0629V14.0629H3ZM4 16.0629C4 15.5106 4.44772 15.0629 5 15.0629H9C9.55228 15.0629 10 15.5106 10 16.0629C10 16.6152 9.55228 17.0629 9 17.0629H5C4.44772 17.0629 4 16.6152 4 16.0629Z"
              fill="#fff" />
          </svg>
            <p className="font700"><NavLink to="events">Events</NavLink></p><img
              src="images/arrowBlue.png" alt="" className="dropdownli" ref={dropDownRef} onClick={handleDropdownClick}/>
            <div className="dropdown">
              <ul>
              <li><NavLink to="#" activeClassName="active">Sample</NavLink></li>
  <li><NavLink to="#" activeClassName="active">sample</NavLink></li>
              </ul>
            </div>
          </li>
          <li className="display_flex "><svg width="30" height="31" viewBox="0 0 30 31" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" className="svgColor"
              d="M17.4548 22.6832H12.4928C12.2258 22.6832 12.0251 22.4724 12.0226 22.2287C12.018 21.7838 12.0149 21.342 12.0149 20.961C12.0149 19.5683 11.5833 18.4972 10.8698 17.6328C10.3864 17.0473 9.73276 16.5409 9.28403 16.1933C9.18662 16.1178 9.09887 16.0498 9.02461 15.9901C8.52061 15.585 8.13387 15.2167 7.82288 14.6981C7.51399 14.183 7.20839 13.3966 7.0869 12.0906C6.71062 8.04569 10.4611 4.34998 15.0214 4.34998C19.6112 4.34998 23.3856 8.07074 22.9586 12.0631C22.819 13.3686 22.5012 14.1586 22.1812 14.6794C21.8585 15.2044 21.4613 15.5768 20.9494 15.9844C20.8749 16.0437 20.7877 16.1107 20.6911 16.1849L20.6911 16.185C20.2368 16.5342 19.5779 17.0406 19.0895 17.6302C18.3726 18.4957 17.9408 19.5681 17.9408 20.961C17.9408 21.3328 17.9436 21.7535 17.9477 22.1735C17.9505 22.4628 17.7193 22.6832 17.4548 22.6832ZM10.0149 20.961C10.0149 19.3017 9.15203 18.6287 8.14444 17.8428C6.89173 16.8656 5.41534 15.7141 5.0955 12.2759C4.58773 6.81751 9.53947 2.34998 15.0214 2.34998C20.5033 2.34998 25.5303 6.82504 24.9473 12.2759C24.5804 15.7056 23.089 16.8599 21.8286 17.8355C20.8091 18.6245 19.9408 19.2966 19.9408 20.961C19.9408 21.3239 19.9435 21.7375 19.9476 22.1539C19.9612 23.543 18.8439 24.6832 17.4548 24.6832H12.4928C11.1408 24.6832 10.0365 23.601 10.0227 22.2492C10.0181 21.8008 10.0149 21.3515 10.0149 20.961ZM11.6356 25.3036C11.0833 25.3036 10.6356 25.7513 10.6356 26.3036C10.6356 26.8559 11.0833 27.3036 11.6356 27.3036H18.3208C18.873 27.3036 19.3208 26.8559 19.3208 26.3036C19.3208 25.7513 18.873 25.3036 18.3208 25.3036H11.6356ZM11.2996 28.535C11.2996 28.1208 11.6354 27.785 12.0496 27.785H17.994C18.4082 27.785 18.744 28.1208 18.744 28.535C18.744 28.9493 18.4082 29.285 17.994 29.285H12.0496C11.6354 29.285 11.2996 28.9493 11.2996 28.535ZM21.8303 11.3527C21.8831 11.7773 21.5312 12.1256 21.1033 12.1256C20.6754 12.1256 20.3346 11.7766 20.2681 11.3539C20.0921 10.2359 19.5368 9.18939 18.6701 8.3683C17.7731 7.51842 16.6017 6.96618 15.3397 6.78628C14.9497 6.73069 14.6398 6.40472 14.6539 6.01108C14.668 5.62061 14.9955 5.31155 15.3835 5.3573C17.0512 5.55389 18.6051 6.26372 19.7839 7.38053C20.9303 8.46671 21.6453 9.86525 21.8303 11.3527Z"
              fill="#fff" />
          </svg>
            <p className="font700"><NavLink to="#" activeClassName="active">sample</NavLink></p><img
              src="images/arrowBlue.png" alt="" className="dropdownli" ref={dropDownRef} onClick={handleDropdownClick}/>
            <div className="dropdown">
              <ul>
              <li><NavLink to="#" activeClassName="active">Sample</NavLink></li>
  <li><NavLink to="#" activeClassName="active">sample</NavLink></li>
              </ul>
            </div>
          </li>
          {/* <li className="display_flex "><svg width="30" height="31" viewBox="0 0 30 31" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" className="svgColor"
              d="M3.25005 4.18811C3.94041 4.18811 4.50005 4.74776 4.50005 5.43811L4.5 23.3328C4.5 23.6659 4.60409 23.9207 4.71383 24.0651C4.78652 24.1607 4.83735 24.1835 4.85347 24.1881L23.25 24.1881C23.9404 24.1881 24.5 24.7478 24.5 25.4381C24.5 26.1285 23.9404 26.6881 23.25 26.6881L4.84999 26.6881C3.93361 26.6881 3.19347 26.1963 2.72342 25.5778C2.25408 24.9602 2 24.1623 2 23.3328L2.00005 5.43811C2.00005 4.74775 2.5597 4.18811 3.25005 4.18811ZM4.85893 24.189C4.85889 24.1892 4.85716 24.1891 4.85386 24.1882C4.85732 24.1884 4.85897 24.1888 4.85893 24.189ZM25.75 10.9381H18.1298C16.8684 10.9381 15.665 10.4087 14.8126 9.47887L13.4002 7.93811H8.75V19.9381H25.75V10.9381ZM8.25 5.43811C7.14543 5.43811 6.25 6.33354 6.25 7.43811V20.4381C6.25 21.5427 7.14543 22.4381 8.25 22.4381H26.25C27.3546 22.4381 28.25 21.5427 28.25 20.4381V10.4381C28.25 9.33354 27.3546 8.43811 26.25 8.43811H18.1298C17.5692 8.43811 17.0343 8.20282 16.6555 7.78956L15.0945 6.08666C14.7157 5.6734 14.1808 5.43811 13.6202 5.43811H8.25ZM16.1475 12.4381L18.8305 15.5362L20.6475 13.4381L23.2455 16.4381H19.6116L20.0446 16.9381H12.2503L16.1475 12.4381Z"
              fill="#fff" />
          </svg>
            <p className="font700"><a href="html/resources.html">Resources</a></p><img
              src="images/arrowBlue.png" alt="" className="dropdownli" ref={dropDownRef} onClick={handleDropdownClick}/>
            <div className="dropdown">
              <ul>
                <li><a href="html/resources.html#practice">Good Practices</a></li>
                <li><a href="html/resources.html#publications">Publications</a></li>
                <li><a href="html/resources.html#release">Press Releases</a></li>
                <li><a href="html/resources.html#reports">Reports/Indices</a></li>
                <li><a href="html/resources.html#posters">IEC Materials</a></li>
              </ul>
            </div>
          </li> */}
          <li className="display_flex "><svg width="30" height="31" viewBox="0 0 30 31" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" className="svgColor"
              d="M3.25005 4.18811C3.94041 4.18811 4.50005 4.74776 4.50005 5.43811L4.5 23.3328C4.5 23.6659 4.60409 23.9207 4.71383 24.0651C4.78652 24.1607 4.83735 24.1835 4.85347 24.1881L23.25 24.1881C23.9404 24.1881 24.5 24.7478 24.5 25.4381C24.5 26.1285 23.9404 26.6881 23.25 26.6881L4.84999 26.6881C3.93361 26.6881 3.19347 26.1963 2.72342 25.5778C2.25408 24.9602 2 24.1623 2 23.3328L2.00005 5.43811C2.00005 4.74775 2.5597 4.18811 3.25005 4.18811ZM4.85893 24.189C4.85889 24.1892 4.85716 24.1891 4.85386 24.1882C4.85732 24.1884 4.85897 24.1888 4.85893 24.189ZM25.75 10.9381H18.1298C16.8684 10.9381 15.665 10.4087 14.8126 9.47887L13.4002 7.93811H8.75V19.9381H25.75V10.9381ZM8.25 5.43811C7.14543 5.43811 6.25 6.33354 6.25 7.43811V20.4381C6.25 21.5427 7.14543 22.4381 8.25 22.4381H26.25C27.3546 22.4381 28.25 21.5427 28.25 20.4381V10.4381C28.25 9.33354 27.3546 8.43811 26.25 8.43811H18.1298C17.5692 8.43811 17.0343 8.20282 16.6555 7.78956L15.0945 6.08666C14.7157 5.6734 14.1808 5.43811 13.6202 5.43811H8.25ZM16.1475 12.4381L18.8305 15.5362L20.6475 13.4381L23.2455 16.4381H19.6116L20.0446 16.9381H12.2503L16.1475 12.4381Z"
              fill="#fff" />
          </svg>
            <p className="font700"><NavLink to="/gallery">Gallery</NavLink></p><img
              src="images/arrowBlue.png" alt="" className="dropdownli" style={{ visibility: "hidden" }} />

          </li>
          <li className="display_flex "><svg width="30" height="31" viewBox="0 0 30 31" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M29.9983 23.3045V29.1979C29.9985 29.6198 29.8387 30.0262 29.551 30.3349C29.2634 30.6436 28.8693 30.8317 28.4484 30.8612C27.7201 30.9112 27.1252 30.9379 26.6652 30.9379C11.9377 30.9379 0 18.9995 0 4.2712C0 3.8112 0.0249986 3.2162 0.0766624 2.48787C0.106198 2.06694 0.294286 1.67288 0.602972 1.38521C0.911659 1.09754 1.31796 0.937675 1.7399 0.937867H7.63291C7.83963 0.937657 8.03905 1.0143 8.19243 1.1529C8.3458 1.2915 8.44219 1.48217 8.46286 1.68787C8.50119 2.0712 8.53619 2.3762 8.56952 2.60787C8.90073 4.9194 9.57947 7.16759 10.5827 9.2762C10.7411 9.60953 10.6377 10.0079 10.3378 10.2212L6.74129 12.7912C8.94026 17.9153 13.0235 21.9988 18.1473 24.1979L20.7139 20.6079C20.8188 20.4612 20.9718 20.356 21.1463 20.3106C21.3208 20.2652 21.5057 20.2825 21.6688 20.3595C23.777 21.3611 26.0245 22.0382 28.3351 22.3679C28.5667 22.4012 28.8717 22.4362 29.2517 22.4745C29.4571 22.4956 29.6473 22.5922 29.7856 22.7455C29.9238 22.8988 29.9986 23.0981 29.9983 23.3045Z"
              fill="#fff" />
          </svg>
            <p className="font700"><NavLink to="/contact">Contact Us</NavLink></p><img
              src="images/arrowBlue.png" alt="" className="dropdownli" ref={dropDownRef} onClick={handleDropdownClick}/>
            <div className="dropdown">
              <ul>
                <li >Email: littlekidz@gmail.com</li>
              <li style={{fontSize:"18px", color: "black"}}>Address: <br />camp <br />kiloi<br />Department, <br />jawahar nagar <br />Rohtak</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
      
  </div>
  <div className="display_flex container logoContainer" >
                         {/* <a href="https://www.nagaland.gov.in/" target="_blank">
                    <img src="images/Rectangle6.png" alt="Government of Nagaland Logo"/>
                </a> */}
                <div className="logoMain display_flex">

                <NavLink to="/" activeClassName="active"><img src="../images/logo.png" className='logo'  alt="SDGCC Nagaland Logo"/></NavLink>
                <div>
                    <h2 style={{textAlign: "left",fontSize: "30px", margin:"0",color:"#78BDE2"}} className="">The Little Kidz School</h2>
                    <p style={{textAlign: "left",fontSize: "16px", margin:"0"}}  className="">Jwahar Nagar ,Rohtak 124001
                        <br />Haryana</p>
                </div>
                </div>
                {/* <div>
                    <li className="font700 desk-search display_flex">
                        <input type="text"
                            style="border: 1px solid rgba(0, 0, 0, 0.107);width: 85%;border-radius: 2px;padding: 8px;"
                            placeholder="Search media and pdfs" className="allSearchDesk"/>
                        <img src="assets/images/search.png" alt="" className="search"/>
                    </li>
                </div> */}
                                {/* <a href="https://www.undp.org/india" target="_blank">
                    <img src="images/Rectangle8.png" alt="UNDP Logo"/>
                </a> */}
  </div>
  <div className="desktop-menu">
    <nav>
      <ul className="display_flex">
        <li className="font700"><NavLink to="/" activeClassName="active">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" className="svgColor" clipRule="evenodd"
              d="M10.7071 0.292893C10.3166 -0.0976311 9.68342 -0.0976311 9.29289 0.292893L0.292893 9.29289C-0.0976311 9.68342 -0.0976311 10.3166 0.292893 10.7071C0.683417 11.0976 1.31658 11.0976 1.70711 10.7071L10 2.41421L18.2929 10.7071C18.6834 11.0976 19.3166 11.0976 19.7071 10.7071C20.0976 10.3166 20.0976 9.68342 19.7071 9.29289L10.7071 0.292893ZM17 10.4999C17 9.94758 16.5523 9.49986 16 9.49986C15.4477 9.49986 15 9.94758 15 10.4999V17C15 17.5523 14.5523 18 14 18H6C5.44772 18 5 17.5523 5 17V10.4999C5 9.94762 4.55228 9.49991 4 9.49991C3.44772 9.49991 3 9.94762 3 10.4999V17C3 18.6569 4.34315 20 6 20H14C15.6569 20 17 18.6569 17 17V10.4999Z"
              fill="#fff" />
          </svg>Home</NavLink>
        </li>
        <li className="font700"><NavLink to="/about" activeClassName="active">

          <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" className="svgColor"
              d="M26 15.9379C26 22.013 21.0751 26.9379 15 26.9379C8.92487 26.9379 4 22.013 4 15.9379C4 9.86273 8.92487 4.93787 15 4.93787C21.0751 4.93787 26 9.86273 26 15.9379ZM30 15.9379C30 24.2221 23.2843 30.9379 15 30.9379C6.71573 30.9379 0 24.2221 0 15.9379C0 7.65359 6.71573 0.937866 15 0.937866C23.2843 0.937866 30 7.65359 30 15.9379ZM17 8.93787C17 10.0424 16.1046 10.9379 15 10.9379C13.8954 10.9379 13 10.0424 13 8.93787C13 7.8333 13.8954 6.93787 15 6.93787C16.1046 6.93787 17 7.8333 17 8.93787ZM13 14.9379C13 13.8333 13.8954 12.9379 15 12.9379C16.1046 12.9379 17 13.8333 17 14.9379V22.9379C17 24.0424 16.1046 24.9379 15 24.9379C13.8954 24.9379 13 24.0424 13 22.9379V14.9379Z"
              fill="#fff" />
          </svg>
          About Us </NavLink><img src="images/Arrow.svg" alt="" className="dropdownli" ref={dropDownRef} onClick={handleDropdownClick}/>
          <div className="dropdown">
            <ul>
            <li><NavLink to="#" activeClassName="active">Sample</NavLink></li>
  <li><NavLink to="#" activeClassName="active">sample</NavLink></li>
            </ul>
          </div>

        </li>

        {/* <li className="font700"><NavLink to="#" activeClassName="active"><span><img src="images/sdgWhite.svg"
          className="rotate" alt=""
          style={{verticalAlign: "sub", margin: "0 5px"}} /></span>SDGs</NavLink><img
            src="images/Arrow.svg" alt="" className="dropdownli" style={{visibility: "hidden"}} />

        </li> */}
        <li className="font700"><NavLink to="/events" activeClassName="active"><svg width="30" height="31" viewBox="0 0 30 31"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" className="svgColor"
            d="M5 4.56287C5 3.73444 5.67157 3.06287 6.5 3.06287C7.32843 3.06287 8 3.73444 8 4.56287V5.06287H13.5V4.56287C13.5 3.73444 14.1716 3.06287 15 3.06287C15.8284 3.06287 16.5 3.73444 16.5 4.56287V5.06287H22V4.56287C22 3.73444 22.6716 3.06287 23.5 3.06287C24.3284 3.06287 25 3.73444 25 4.56287V5.06287H26C28.2091 5.06287 30 6.85373 30 9.06287V25.0629C30 27.272 28.2091 29.0629 26 29.0629H4C1.79086 29.0629 0 27.272 0 25.0629V9.06287C0 6.85373 1.79086 5.06287 4 5.06287H5V4.56287ZM22 8.06287V8.56287C22 9.39129 22.6716 10.0629 23.5 10.0629C24.3284 10.0629 25 9.39129 25 8.56287V8.06287H26C26.5523 8.06287 27 8.51058 27 9.06287V11.0629H3V9.06287C3 8.51058 3.44772 8.06287 4 8.06287H5V8.56287C5 9.39129 5.67157 10.0629 6.5 10.0629C7.32843 10.0629 8 9.39129 8 8.56287V8.06287H13.5V8.56287C13.5 9.39129 14.1716 10.0629 15 10.0629C15.8284 10.0629 16.5 9.39129 16.5 8.56287V8.06287H22ZM3 14.0629V25.0629C3 25.6152 3.44772 26.0629 4 26.0629H26C26.5523 26.0629 27 25.6152 27 25.0629V14.0629H3ZM4 16.0629C4 15.5106 4.44772 15.0629 5 15.0629H9C9.55228 15.0629 10 15.5106 10 16.0629C10 16.6152 9.55228 17.0629 9 17.0629H5C4.44772 17.0629 4 16.6152 4 16.0629Z"
            fill="#fff" />
        </svg>
          Events</NavLink><img src="images/Arrow.svg" alt="" className="dropdownli" ref={dropDownRef} onClick={handleDropdownClick} />
          <div className="dropdown">
            <ul>
              <li><NavLink to="/events#">Upcoming Events</NavLink></li>
              <li><NavLink to="/event#">Past Events</NavLink></li>
            </ul>
          </div>

        </li>
        {/* <li className="font700"><NavLink to="#" activeClassName="active"><svg width="30" height="31" viewBox="0 0 30 31"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" className="svgColor"
            d="M3.25005 4.18811C3.94041 4.18811 4.50005 4.74776 4.50005 5.43811L4.5 23.3328C4.5 23.6659 4.60409 23.9207 4.71383 24.0651C4.78652 24.1607 4.83735 24.1835 4.85347 24.1881L23.25 24.1881C23.9404 24.1881 24.5 24.7478 24.5 25.4381C24.5 26.1285 23.9404 26.6881 23.25 26.6881L4.84999 26.6881C3.93361 26.6881 3.19347 26.1963 2.72342 25.5778C2.25408 24.9602 2 24.1623 2 23.3328L2.00005 5.43811C2.00005 4.74775 2.5597 4.18811 3.25005 4.18811ZM4.85893 24.189C4.85889 24.1892 4.85716 24.1891 4.85386 24.1882C4.85732 24.1884 4.85897 24.1888 4.85893 24.189ZM25.75 10.9381H18.1298C16.8684 10.9381 15.665 10.4087 14.8126 9.47887L13.4002 7.93811H8.75V19.9381H25.75V10.9381ZM8.25 5.43811C7.14543 5.43811 6.25 6.33354 6.25 7.43811V20.4381C6.25 21.5427 7.14543 22.4381 8.25 22.4381H26.25C27.3546 22.4381 28.25 21.5427 28.25 20.4381V10.4381C28.25 9.33354 27.3546 8.43811 26.25 8.43811H18.1298C17.5692 8.43811 17.0343 8.20282 16.6555 7.78956L15.0945 6.08666C14.7157 5.6734 14.1808 5.43811 13.6202 5.43811H8.25ZM16.1475 12.4381L18.8305 15.5362L20.6475 13.4381L23.2455 16.4381H19.6116L20.0446 16.9381H12.2503L16.1475 12.4381Z"
            fill="#fff" />
        </svg>
          Resources</NavLink><img src="images/Arrow.svg" alt="" className="dropdownli" ref={dropDownRef} onClick={handleDropdownClick}/>
          <div className="dropdown">
            <ul>
            <li><NavLink to="#" activeClassName="active">Sample</NavLink></li>
  <li><NavLink to="#" activeClassName="active">sample</NavLink></li>
            </ul>
          </div>

        </li> */}
        <li className="font700"><NavLink to="/gallery" activeClassName="active"><svg width="30" height="31" viewBox="0 0 30 31"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" className="svgColor"
            d="M3.25005 4.18811C3.94041 4.18811 4.50005 4.74776 4.50005 5.43811L4.5 23.3328C4.5 23.6659 4.60409 23.9207 4.71383 24.0651C4.78652 24.1607 4.83735 24.1835 4.85347 24.1881L23.25 24.1881C23.9404 24.1881 24.5 24.7478 24.5 25.4381C24.5 26.1285 23.9404 26.6881 23.25 26.6881L4.84999 26.6881C3.93361 26.6881 3.19347 26.1963 2.72342 25.5778C2.25408 24.9602 2 24.1623 2 23.3328L2.00005 5.43811C2.00005 4.74775 2.5597 4.18811 3.25005 4.18811ZM4.85893 24.189C4.85889 24.1892 4.85716 24.1891 4.85386 24.1882C4.85732 24.1884 4.85897 24.1888 4.85893 24.189ZM25.75 10.9381H18.1298C16.8684 10.9381 15.665 10.4087 14.8126 9.47887L13.4002 7.93811H8.75V19.9381H25.75V10.9381ZM8.25 5.43811C7.14543 5.43811 6.25 6.33354 6.25 7.43811V20.4381C6.25 21.5427 7.14543 22.4381 8.25 22.4381H26.25C27.3546 22.4381 28.25 21.5427 28.25 20.4381V10.4381C28.25 9.33354 27.3546 8.43811 26.25 8.43811H18.1298C17.5692 8.43811 17.0343 8.20282 16.6555 7.78956L15.0945 6.08666C14.7157 5.6734 14.1808 5.43811 13.6202 5.43811H8.25ZM16.1475 12.4381L18.8305 15.5362L20.6475 13.4381L23.2455 16.4381H19.6116L20.0446 16.9381H12.2503L16.1475 12.4381Z"
            fill="#fff" />
        </svg>
          Gallery</NavLink><img src="images/Arrow.svg" alt="" className="dropdownli"
            style={{display: "none"}} />


        </li>
        <li className="font700"><NavLink to="/contact" activeClassName="active"><svg width="30" height="31" viewBox="0 0 30 31"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M29.9983 23.3045V29.1979C29.9985 29.6198 29.8387 30.0262 29.551 30.3349C29.2634 30.6436 28.8693 30.8317 28.4484 30.8612C27.7201 30.9112 27.1252 30.9379 26.6652 30.9379C11.9377 30.9379 0 18.9995 0 4.2712C0 3.8112 0.0249986 3.2162 0.0766624 2.48787C0.106198 2.06694 0.294286 1.67288 0.602972 1.38521C0.911659 1.09754 1.31796 0.937675 1.7399 0.937867H7.63291C7.83963 0.937657 8.03905 1.0143 8.19243 1.1529C8.3458 1.2915 8.44219 1.48217 8.46286 1.68787C8.50119 2.0712 8.53619 2.3762 8.56952 2.60787C8.90073 4.9194 9.57947 7.16759 10.5827 9.2762C10.7411 9.60953 10.6377 10.0079 10.3378 10.2212L6.74129 12.7912C8.94026 17.9153 13.0235 21.9988 18.1473 24.1979L20.7139 20.6079C20.8188 20.4612 20.9718 20.356 21.1463 20.3106C21.3208 20.2652 21.5057 20.2825 21.6688 20.3595C23.777 21.3611 26.0245 22.0382 28.3351 22.3679C28.5667 22.4012 28.8717 22.4362 29.2517 22.4745C29.4571 22.4956 29.6473 22.5922 29.7856 22.7455C29.9238 22.8988 29.9986 23.0981 29.9983 23.3045Z"
            className="svgColor" fill="#fff" />
        </svg>
          Contact Us</NavLink><img src="images/Arrow.svg" alt="" className="dropdownli"
            style={{display: "none"}} />
        </li>
      </ul>
    </nav>
  </div>
  </React.Fragment>
  )
}

export default Navbar