const timeConverter = (timestamp) => {
  const d = new Date(timestamp);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const year = d.getFullYear();
  const month = months[d.getMonth()];
  const date = d.getDate();
  const time = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  
  return `${month} ${date}, ${year}, ${time}`
}

module.exports = {
  timeConverter
}