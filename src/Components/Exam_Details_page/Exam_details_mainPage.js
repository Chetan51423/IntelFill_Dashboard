import Back from './Back'
import Exam_details from './Exam_details/Exam_details'
// import Details from '../Exam_Details_page/Details_/Detail'
import Details1 from '../Exam_Details_page/Details_/Detail'
import Exam_suggestion from './Exam_Suggestions/Exam_suggestion'

const Exam_details_mainPage = () => {
  return (
    <div className="exam-detail-mainpage">
        <div className='exam-detail-mainpage-col1'>
        <Back/>
        <Exam_details/>
        <Details1/>
        </div >
        <Exam_suggestion/>
    </div>
  )
}

export default Exam_details_mainPage
