import React from 'react';
import './Schedule.css'
import ScheduleConstant from './ScheduleConstant';

const Schedule = () => {
  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Mata Kuliah</th>
            <th scope="col">Tanggal</th>
            <th scope="col">Jam</th>
          </tr>
        </thead>
        <tbody>
          {
            ScheduleConstant.schedules.map((schedule, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{schedule.subject}</td>
                <td>{schedule.date}</td>
                <td>{schedule.time}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Schedule;