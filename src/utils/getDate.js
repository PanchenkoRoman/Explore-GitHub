let options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const getDate = (date) => {
  let d = new Date(Date.parse(date));
  return d.toLocaleString("en-US", options)
};

export default getDate;