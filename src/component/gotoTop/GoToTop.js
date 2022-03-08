import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from "react-scroll";

function GoToTop(props) {
    const [scrollY, setScrollY] = useState('')
    useEffect(() => {
        const handleScrollY = (() => {
            setScrollY(window.scrollY)
        })
        window.addEventListener('scroll', handleScrollY)
    }, [])
    const handleTop = () => {
        scroll.scrollToTop()

    }
    return (
        <div onClick={handleTop} style={(scrollY > 400) ? { visibility: 'visible' } : { visibility: 'hidden' }} >
            <div style={{
                height: '50px',
                width: '50px',
                background: 'black', zIndex: '102',
                position: 'fixed',
                right: '20px',
                bottom: '20px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '50%'
            }}>

                <i style={{ color: '#fff', margin: '0 auto', fontSize: '30px' }} className="fa-solid fa-circle-up"></i>
            </div>
        </div >
    );
}

export default GoToTop;