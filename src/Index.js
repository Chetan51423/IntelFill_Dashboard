import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav_Bar from './Components/Nav_Bar'

const Homepage = ()=>
{
    return (
        <div>
            <Nav_Bar/>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Homepage/>);