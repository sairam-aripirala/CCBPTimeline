// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, duration, description, tagsList} = courseDetails

  return (
    <div className="course-card-container">
      <div className="course-card-header">
        <h1 className="course-title">{courseTitle}</h1>
        <p className="duration-text">
          <AiFillClockCircle className="clock-icon" />
          {duration}
        </p>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-list-container">
        {tagsList.map(each => (
          <li key={each.id}>
            <p className="tags">{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
