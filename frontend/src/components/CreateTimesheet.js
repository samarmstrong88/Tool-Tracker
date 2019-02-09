import React, { Component } from 'react';
import convertTime from '../utils/convertTime';

class CreateTimesheet extends Component {
  state = {
    labourType: 'Standard Labour',
    labourTime: '0:00',
    labourNotes: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async () => {
    const timesheetData = {
      ...this.state,
      labourTime: convertTime(this.state.labourTime),
    };
    console.log(timesheetData);

    const postUrl = `/api/job/${this.props.job.job_no}/addTimesheet`;
    const postConfig = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(timesheetData),
    };

    const res = await fetch(postUrl, postConfig);
    if (res.ok) {
      // return json
      return res;
    }
  };

  render() {
    const { labourTime, labourType, labourNotes } = this.state;
    const { labourTypes } = this.props;
    return (
      <div>
        <form
          method="post"
          onSubmit={async e => {
            e.preventDefault();
            this.handleSubmit();
          }}
        >
          <fieldset>
            <h3>Add new Timesheet</h3>
            <select
              name="labourType"
              value={labourType}
              onChange={this.handleChange}
            >
              {labourTypes &&
                labourTypes.map(val => (
                  <option value={val} key={val}>
                    {val}
                  </option>
                ))}
            </select>
            <input
              type="text"
              default="0:00"
              name="labourTime"
              value={labourTime}
              onChange={this.handleChange}
            />
            <textarea
              name="labourNotes"
              value={labourNotes}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default CreateTimesheet;
