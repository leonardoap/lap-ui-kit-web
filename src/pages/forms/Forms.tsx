import React from 'react';
import './Forms.css';
import '../../app/App.css';

function Forms() {
  return (
    <div className="container">
      <fieldset>
        <legend>Fieldset</legend>

        <label htmlFor="fname">First Name</label>

        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label htmlFor="lname">Last Name</label>

        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

        <label htmlFor="country">Country</label>

        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
        <br />
        <input type="submit" value="Submit" />

      </fieldset>
    </div>

  );
}

export default Forms;
