import React from 'react';
import styles from './AlertModal.module.css';

export default class AlertModal extends React.Component {

  componentDidMount() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementById("close");

    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    document.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  render() {
    return (
      <div>

        <div id="myModal" className={`${styles["modal"]}`}>

          <div className={`${styles["modal-content"]} ${styles["alert"]}`}>
            <span id="close" className={`${styles["close"]} ${styles["closebtn"]}`}>&times;</span>
            <p>Due to COVID-19 our schedule of services and class structure has changed. We appreciate your patience as we work through these changes.
            Below is the current start time of services (last updated 5/3/2021):
            </p>
            <ul>
              <li>Sunday Morning Worship - 10:00 AM</li>
              <li>Sunday Evening Bible Class - 6:00 PM</li>
              <li>Wednesday Morning Ladies Bible Class - 10:30 AM</li>
              <li>Wednesday Evening Bible Class - 7:00 PM</li>
            </ul>
            <p>Any service not noted above has been cancelled for the time being. Also, as of right now, we are not having separate classes for the various age groups, but one common class to better maintain social distancing guidelines.</p>
            <p>Feel free to contact us to confirm the most recent schedule or reach out if you have any questions or concerns.</p>
          </div>

        </div>

      </div>
    )
  }
}