import Fees from './asets2/fees.png'
import Applicants from './asets2/applicants.png'
import View_details from './View_details'
const Group_58 = () => {
    const field_ = ["Engineering","IIT","PCM"];
    return (
      <div className='frame-58'>
        <div className="aspirants-money">
          <img src={Applicants} alt="" className="group-58-img" />
          <span className="group-58-text">More than 20 lakhs</span>
        </div>
        <div className="aspirants-money">
          <img src={Fees} alt="" className="group-58-img" />
          <span className="group-58-text">₹ 1200</span>
        </div>
        <div className="group-56">
            <div className="field-div"><span className="field-name">Engineering</span></div>
            <div className="field-div"><span className="field-name">IIT</span></div>
            <div className="field-div"><span className="field-name">PCM</span></div>
        </div>
        <div className="view-details"><View_details/></div>
      </div>
    )
  }
  
  export default Group_58


