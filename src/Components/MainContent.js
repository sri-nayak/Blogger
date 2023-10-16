import '../Css/MainContent.css'
import React from 'react'


export function MainContent() {
    return (
        <div className='container'>

            <div className='row g-5 posts'>
                <div className='col-5 bigImg'>
                    <img src='ph1.jpeg' alt='logo' />
                </div>
                <div className='col-7 content'>
                    <h3>Business, Travel — July 2, 2020</h3>
                    <div>
                        <h3>
                        Your most unhappy customers are your greatest source of learning.
                        </h3>
                    </div>
                    <div>
                        <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                         there live the blind texts.</p>
                    </div>
                    <div>
                        <div>
                            Sergy Campbell
                        </div>
                        <div>JULY 2, 2020</div>
                    </div>
                </div>
            </div>

        </div>
    )
}