export default function getFormatDataForComment() {
  const DATE = new Date();
  const day = DATE.getDate().toString().padStart(2, '0');
  const month = (DATE.getMonth() + 1).toString().padStart(2, '0');
  const year = DATE.getFullYear();
  const hour = DATE.getHours().toString().padStart(2, '0');
  const minute = DATE.getMinutes().toString().padStart(2, '0');

  return `${hour}:${minute} ${day}.${month}.${year}`;
}
