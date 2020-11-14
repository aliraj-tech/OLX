import React from 'react';
import './header.css'
import logo from './Ui/OLXNav.png'
import logo2 from './Ui/Chat.png'
import logo3 from './Ui/chat2.png'
import logo4 from './Ui/chat3.png'
import logo5 from './Ui/Button.png'
import logo6 from './Ui/down.png'
import logo7 from './Ui/Try.png'







function Header() {
  return (

    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
        <a className="navbar-brand logo" href="#">
          <img src={logo} alt="Logo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav flex-2 pr-3">
            <li className="input-group input-group-lg location mr-4 flex-1">
              <input type="text" className="form-control" placeholder="Pakistan" />
              <div className="input-group-btn">

              </div>
            </li>
            <li className="input-group input-group-lg search flex-2">

              <input type="text" className="form-control" placeholder="Find Mobile, Car , Laptop" />
              <div className="input-group-btn">
              </div>
            </li>
            <li>
              <a href="#" >  <img className="Chat" src={logo2} /> </a>

            </li>

            <li>
              <a href="#" >   <img className="Chat2" src={logo3} /> </a>
            </li>

            <li>
              <a href="#" >   <img className="Chat2" src={logo4} /> </a>
            </li>
            <li>
              <a href="#" >   <img className="Chat2" src={logo5} /> </a>
            </li>

          </ul>
          <form className="form-inline my-2 my-lg-0">
            <h6 className="mr-sm-2 login">Login</h6>
            {/* <button className="my-2 my-sm-0 fas fa-plus sell">&nbsp; SELL</button> */}
          </form>
        </div>
      </nav>
      <div className="bg-white MarGin">
        <nav className="navbar navbar-expand-lg navbar-light  Tada">
          <a className="navbar-brand" href="#">OLX</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Mobile Phones <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cars</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Motorcycles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Houses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">TV-Video-Audio</a>

              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tablets</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Land & Plots</a>
              </li>
              {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li> */}
            </ul>
          </div>
        </nav>


      </div>

      <div> <img className="Banner" src={logo7} /></div>

     
     

    </div>





  );
}

export default Header;