


import PropTypes from 'prop-types'
import "./styles.css"

const SuccessCard = ({storyitem}) => {
    const {name,testimonial,role}= storyitem;
  return (
    <div>
        <div className="card w-full bg-base-100 shadow-xl carousel__cell">
  <div className="card-body">
    <h2 className="card-title"> {name}</h2>
    <p>{testimonial}</p>
    <div className="card-actions justify-end">
      {
        role ? <p>{role}</p> : ''
      }
    </div>
  </div>
</div>
    </div>
  )
}

SuccessCard.propTypes = {
    storyitem:PropTypes.object,
}

export default SuccessCard