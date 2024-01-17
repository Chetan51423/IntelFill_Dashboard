import Exam_description from "./Exam_description"
import Eligibility from "./Eligibility"
import Important_details from "./Important_details"
import Line from "../Exam_details/Line"
import Social_media from '../asets3/Social_Media_cons.png'
const Group_398 = () => {
  return (
    <div className="group-398">
      <Exam_description/>
      <Eligibility/>
      <Important_details/>
      <Line/>
      <img src={Social_media} alt="" className="social-media"/>
    </div>
  )
}

export default Group_398
