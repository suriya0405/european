import React from 'react';
import { Table } from 'react-bootstrap';
import '../css/course.css';



export const Course = () => {
  return (

    <div className='container-course-details' >
      <h2 className="course-details-h2">Course Overview Details</h2>
      <div className="content-container">
        <div className="content-text">
          <div className="mt-2 table-container">

            <Table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th >Name of Degree</th>
                  <td >Medical Doctor (MD)</td>
                </tr>
                <tr>
                  <th >Course Starts</th>
                  <td >April month</td>
                </tr>
                <tr>
                  <th >Duration</th>
                  <td >6 years</td>
                </tr>
                <tr>
                  <th >Medium of Instructions</th>
                  <td >English</td>
                </tr>
                <tr>
                  <th>Entrance Exams</th>
                  <td>Not required</td>
                </tr>
                <tr>
                  <th >NEET Score Required</th>
                  <td >Yes</td>
                </tr>
                <tr>
                  <th>Annual Tuition Fee</th>
                  <td>4.40 lakhs INR</td>
                </tr>
                <tr>
                  <th>University Rank</th>
                  <td>4</td>
                </tr>
                <tr>
                  <th>Recognition</th>
                  <td>WHO, NMC, etc. approved</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="content-text">
          <div
            className="img-container img-fluid rounded w-100"
            role="img"
            aria-label="course-details"
            loading="lazy"
          ></div>
        </div>
      </div>

    </div>

  )
}
