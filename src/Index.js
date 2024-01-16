import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav_Bar from './Components/Nav_Bar'
import Foooter from './Components/Footer/Foooter'
import Add from './Components/Add/Add'
const Homepage = ()=>
{
    return (
        <div className='page'>
            <Nav_Bar/>
            <div className='page-body'>
                <Add/>
            </div>
            <Foooter/>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Homepage/>);