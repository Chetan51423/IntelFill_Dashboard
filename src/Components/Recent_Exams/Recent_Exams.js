import Group_376 from './Group_376'
import Group_375 from './Group_375'
import Group_60 from '../Recent_Exams/Group_60/Group_60'
import Group_61 from '../Recent_Exams/Group_61/Group_61'
import Group_62 from '../Recent_Exams/Group_62/Group_62'
import Group_63 from '../Recent_Exams/Group_63/Group_63'

const Recent_Exams = () => {
  return (
    <div className="recent-exam-main">
        <Group_376/>
        <Group_375/>
        <div className="recommended-exams">
            <Group_60/>
            <Group_61/>
            <Group_62/>
            <Group_63/>
            
            
            
        </div>
    </div>
  )
}

export default Recent_Exams
