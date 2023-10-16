import { Footer } from './Footer'
import {Header} from './Header'
import {MainContent} from './MainContent'
import { Trending } from './Trending'
import React from 'react'

export function MainFunction(){
    return(
        <div>
            <Header />
            <Trending />
            <MainContent />
            <MainContent />
            <MainContent />
            <MainContent />
            <MainContent />
            <Footer />
        </div>
    )
}