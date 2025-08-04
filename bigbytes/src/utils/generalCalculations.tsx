export default function getPostPublishPeriod(isoTime: string): string {
  const currentTime = new Date();
  const pastTime = new Date(isoTime);
  const periodDifference = currentTime.getTime() - pastTime.getTime();

  const seconds = Math.floor(periodDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if(seconds < 30) {
    return "just now";
  } else if(seconds > 30 && minutes < 1) {
    return `${seconds} sec${seconds !== 1 ? "s" : ""} ago`;
  }

  if(hours <= 36) {
    const remMinutes = minutes % 60;
    const hourPortion = `${hours} hour${hours !== 1 ? "s" : ""}`;
    const minutesPortion = remMinutes > 0 ? `, ${remMinutes} min${remMinutes !== 1 ? "s" : ""}` : "";

    if(hours < 1) return minutesPortion.replace(", ", '');
    else return `${hourPortion}${minutesPortion} ago`;
  } else if(days < 7) {
    const remHours = hours % 24;
    const daysPortion = `${days} day${days !== 1 ? "s" : ""}`;
    const hoursPortion = remHours > 0 ? `, ${remHours} hour${remHours !== 1 ? "s" : ""}` : "";
    
    return `${daysPortion}${hoursPortion} ago`;
  } else if(weeks < 5) {
    const remDays = days % 7;
    const weeksPortion = `${weeks} week${weeks !== 1 ? "s" : ""}`;
    const daysPortion = remDays > 0 ? `, ${remDays} day${remDays !== 1 ? "s" : ""}` : "";
    
    return `${weeksPortion}${daysPortion} ago`;
  } else if(months < 12) {
    const remWeeks = Math.floor((days % 30) / 7);
    const monthsPortion = `${months} month${months !== 1 ? "s" : ""}`;
    const weeksPortion = remWeeks > 0 ? `, ${remWeeks} week${remWeeks !== 1 ? "s" : ""}` : "";
    
    return `${monthsPortion}${weeksPortion} ago`;
  } else {
    const remMonths = months % 12;
    const yearsPortion = `${years} year${years !== 1 ? "s" : ""}`;
    const monthsPortion = remMonths > 0 ? `, ${remMonths} month${remMonths !== 1 ? "s" : ""}` : "";
    
    return `${yearsPortion}${monthsPortion} ago`;
  }
}