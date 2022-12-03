import ActivityConstant from "./ActivityConstant";
import './Activity.css'

const Activity = () => {
  return (
    <div class="activity-container">
      <ul class="timeline">
        {
          ActivityConstant.timelines.map((timeline, i) => (
            <li class={i % 2 != 0 ? 'timeline-inverted' : ''}>
              <div class="timeline-badge"><i class="glyphicon glyphicon-credit-card"></i></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="timeline-title">{timeline.title}</h4>
                  <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>{timeline.subtitle}</small></p>
                </div>
                <div class="timeline-body">
                  <p>{timeline.description}</p>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Activity;