export default function getPostPublishPeriod(isoTime: string): string {
  const currentTime = new Date();
  const pastTime = new Date(isoTime);
  const periodDifference = currentTime.getTime() - pastTime.getTime();

  const seconds = Math.floor(periodDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if(seconds < 30) {
    return "just now";
  } else if(seconds > 30 && minutes < 1) {
    return `${seconds} ago`;
  }

  if(hours <= 36) {
    const remMinutes = minutes % 60;
    const hourPortion = `${hours} hour${hours !== 1 ? "s" : ""}`;
    const minutesPortion = remMinutes > 0 ? `, ${remMinutes} min${remMinutes !== 1 ? "s" : ""}` : "";

    if(hours < 1) {
      return minutesPortion.replace(", ",'');
    }

    return `${hourPortion}${minutesPortion} ago`;
  } else {
    const remHours = hours % 24;
    const daysPortion = `${days} day${days !== 1 ? "s" : ""}`;
    const hoursPortion = remHours > 0 ? `, ${remHours} hour${remHours !== 1 ? "s" : ""}` : "";

    return `${daysPortion}${hoursPortion} ago`;
  }
}