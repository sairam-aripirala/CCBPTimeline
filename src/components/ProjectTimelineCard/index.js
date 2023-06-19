// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    projectUrl,
    imageUrl,
    duration,
  } = projectDetails

  return (
    <div className="course-card-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="course-card-header">
        <h1 className="course-title">{projectTitle}</h1>
        <p className="duration-text">
          <AiFillCalendar className="clock-icon" />
          {duration}
        </p>
      </div>

      <p className="description">{description}</p>
      <a
        className="project-link"
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
