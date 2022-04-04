const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const getDateAndMonth = (date: Date) => {
  const strDate = monthNames[date.getMonth()] + " " + date.getDate();
  return strDate;
}