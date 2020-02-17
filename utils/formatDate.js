// const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// @desc use to add leading zero if the date length only 1 char
// @param string
// @return string
function addLeadingZero(string) {
  const isOneChar = string.length == 1
  const convertedString = isOneChar ? `0${string}` : string
  return convertedString
}

function formatDate(date){
  const theDate = new Date(date)

  const day = theDate.getDate()
  const convertedDate = addLeadingZero(day)

  const month = theDate.getMonth().toString()
  const convertedMonth = addLeadingZero(month)

  const year = theDate.getFullYear().toString().slice(-2)

  return `${convertedDate}.${convertedMonth}.${year}`
}

export { formatDate }