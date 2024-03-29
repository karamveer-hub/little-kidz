import React from 'react'
import { useState } from 'react'
import '../App.scss'
import { Link } from 'react-router-dom'


function WhatsNew() {
    let stylingParent = {
        height: '300px',
        maxWidth: '360px',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow:'#00000014 0px 0px 20px 2px'
    }
    let h2Styling = {
        position: "absolute", top: 0, background: "white", zIndex: 10, width: '100%', padding: '20px 0', textAlign: 'left'
    }
    const [animationPaused, setAnimationPaused] = useState(false);

    const handleMouseEnter = () => {
        setAnimationPaused(true);
    };

    const handleMouseLeave = () => {
        setAnimationPaused(false);
    };


    return (
        <React.Fragment>
            <div style={stylingParent} className='display_flex_col whatsnew_parent my-10px'>
                <h3 style={h2Styling}>What's New</h3>
                <div id="div1" style={{ animationPlayState: animationPaused ? 'paused' : '' }}>
                    <Link to="/eventShow/diwalifest"
                    >Diwali Fest</Link>
                    <Link to="/eventShow/christmas">Chritmas event</Link>
                    <Link to="/eventShow/annualfunction"
                        >Annual Function</Link>
                </div>
                <div id="div2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ animationPlayState: animationPaused ? 'paused' : '' }}>
                <Link to="/eventShow/diwalifest"
                    >Diwali Fest</Link>
                    <Link to="/eventShow/christmas">Chritmas event</Link>
                    <Link to="/eventShow/annualfunction"
                        >Annual Function</Link>
                </div>
            </div>
        </React.Fragment>
    )

}

export default WhatsNew