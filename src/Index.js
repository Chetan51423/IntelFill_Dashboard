import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav_Bar from './Components/Nav_Bar'
import Group390_icons from './Components/Footer/Group390_icons'

const Homepage = ()=>
{
    return (
        <div>
            <Nav_Bar/>
            <Group390_icons/>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Homepage/>);