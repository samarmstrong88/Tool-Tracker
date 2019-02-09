const convertTime = timeString => {
  const regex1 = /^\d{0,3}:\d{2}$/;
  const regex2 = /^\d{0,3}.\d{1,2}$/;

  if (regex1.test(timeString)) {
    const time = timeString.split(':');
    return parseInt(time[0]) * 60 + parseInt(time[1]);
  }

  if (regex2.test(timeString)) {
    const time = parseFloat(timeString);
    return Math.round(time * 60);
  }

  return 0;
};

export default convertTime;
