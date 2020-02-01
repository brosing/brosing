const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function formatDate(date){
  const theDate = new Date(date)
  // const day = theDate.getDate()
  // const month = months[theDate.getMonth()]
  // const year = theDate.getFullYear()

  const day = theDate.getDate()
  const month = theDate.getMonth()
  const year = theDate.getFullYear().toString().slice(-2)

  return `${day}/${month}/${year}`
}

export { formatDate }