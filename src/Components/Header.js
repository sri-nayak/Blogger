import './../Css/Header.css'
import React from 'react'


export function Header(){
    return(
        <div className='header'>
            <div className="row">
                <div className="col-3 searchbar">
                    <div className='searchIcon'>
                        <span className="bi bi-search"></span>
                    </div>
                    <div className='searchplace'>
                        <input type="text" placeholder='Search Here'/>
                    </div>
                </div>
                <div className="col-6">
                    <div className='title'>
                        MAGDESIGN
                    </div>
                </div>
                <div className="col-3">
                    <div className='d-flex socials'>
                        <div className='bi bi-twitter'></div>
                        <div className='bi bi-instagram'></div>
                        <div className='bi bi-facebook'></div>
                        <div className='bi bi-github'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}