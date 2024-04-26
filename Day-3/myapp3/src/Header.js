import React from 'react'

function Header() {
  return (
    <header>
        <div className="logo">
            <img src="https://hubhtml.liquid-themes.com/assets/images/demo/company/hub-svg-logo.svg" alt="" />
        </div>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="" id='number'>+1 714 7788</a></li>
            </ul>
        </nav>
    </header>
    
  )
}

export default Header