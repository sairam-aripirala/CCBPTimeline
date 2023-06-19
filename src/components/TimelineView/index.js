import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const items = timelineItemsList.map(each => ({
    title: each.title,
  }))
  return (
    <div>
      <h1 className="main-heading">
        MY JOURNEY OF <br />
        <span className="main-heading-sub-part">CCBP 4.0</span>
      </h1>
      <Chrono
        items={items}
        slideShow
        allowDynamicUpdate
        scrollable={{scrollbar: true}}
        theme={{
          secondary: 'white',
        }}
        classNames={{
          title: 'my-title',
        }}
        slideItemDuration={5000}
        mode="VERTICAL_ALTERNATING"
      >
        {timelineItemsList.map(each => {
          if (each.categoryId === 'COURSE') {
            return <CourseTimelineCard courseDetails={each} key={each.id} />
          }
          return <ProjectTimelineCard projectDetails={each} key={each.id} />
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
