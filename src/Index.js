import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav_Bar from './Components/Nav_Bar'
import Foooter from './Components/Footer/Foooter'
import Add from './Components/Adds/Add'
import Recommended_Exams from './Components/Recommended_Exams/Recommended_Exams'
import Recent_Exams from './Components/Recent_Exams/Recent_Exams'
import Exam_details_mainPage from './Components/Exam_Details_page/Exam_details_mainPage'
const Homepage = ()=>
{
    return (
        <>
        <div className="main">
            <Nav_Bar/>
                <div className='page-body'>
                    <Add/>
                    <Recommended_Exams/>
                    <Recent_Exams/>
                </div>
                <div className="Exam-detail_page">
                    <Exam_details_mainPage/>
                    
                </div>
            <Foooter/>
        </div>
            
        </>
        // <div className=''>
        //     <Nav_Bar/>
        //     <div className='page-body'>
        //         <Add/>
        //         <Recommended_Exams/>
        //         <Recommended_Exams/>
        //     </div>
        //     <Foooter/>
        // </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Homepage/>);