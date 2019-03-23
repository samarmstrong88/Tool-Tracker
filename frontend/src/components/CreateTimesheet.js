import React, { Component } from 'react';
import convertTime from '../utils/convertTime';
import styles from './styles/CreateTimesheet.scss';

class CreateTimesheet extends Component {
  constructor(props) {
    super(props);

    //reference to first element, to shift focus back after submit
    this.selectInput = React.createRef();
  }

  state = {
    labourType: 'Standard Labour',
    labourTime: '0:00',
    labourNotes: '',
    collapsed: true,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  toggleCollapsed = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  //shift focus to select/first input
  focus = () => {
    this.selectInput.current.focus();
  }

  handleSubmit = async () => {
    const job = this.props.job.jobData;
    const timesheetData = {
      ...this.state,
      labourTime: convertTime(this.state.labourTime),
    };
    console.log(timesheetData);

    const postUrl = `${API_URL}/job/${job.job_no}/addTimesheet`;
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
      this.props.requestJob(job.job_no);
    }
    this.setState({
      labourType: 'Standard Labour',
      labourTime: '0:00',
      labourNotes: '',
    });
    this.focus();
  };

  render() {
    const { collapsed, labourTime, labourType, labourNotes } = this.state;
    const { labourTypes } = this.props;
    return (
      <div className={styles.CreateTimesheet}>
        <div className = {styles.AccordionBar} onClick={this.toggleCollapsed}>
          <div className = {styles.AccordionButton}>
          {collapsed ? '+' : ' - '}
          </div>
          <h4> Add new Timesheet </h4> 
        </div>

        {!collapsed && (
          <form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              this.handleSubmit();
            }}
          >
            <fieldset>
              <label htmlFor="labourType">
                Labour type
                </label>
                <select
                  name="labourType"
                  value={labourType}
                  onChange={this.handleChange}
                  ref = {this.selectInput}
                >
                {labourTypes &&
                  labourTypes.map(val => (
                    <option value={val} key={val}>
                      {val}
                    </option>
                  ))}
              </select>

              <label htmlFor="labourTime">
                Time
              </label>
              <input
                className = {styles.numInput}
                type="text"
                default="0:00"
                name="labourTime"
                value={labourTime}
                onChange={this.handleChange}
                />
              <label htmlFor="labourNotes">
                Notes
              </label>
              <textarea
                name="labourNotes"
                value={labourNotes}
                onChange={this.handleChange}
                />
                <button type="submit">Submit</button>
            </fieldset>
          </form>
        )}
      </div>
    );
  }
}

export default CreateTimesheet;
