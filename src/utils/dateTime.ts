export const formatDateTime = (dateTimeString: string) => {
  const dateTime = new Date(dateTimeString);
  const year = dateTime.getUTCFullYear();
  const month = ('0' + (dateTime.getUTCMonth() + 1)).slice(-2);
  const day = ('0' + dateTime.getUTCDate()).slice(-2);
  const hours = ('0' + dateTime.getUTCHours()).slice(-2);
  const minutes = ('0' + dateTime.getUTCMinutes()).slice(-2);
  const seconds = ('0' + dateTime.getUTCSeconds()).slice(-2);
  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
};
