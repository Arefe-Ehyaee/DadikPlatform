import jalaliMoment, { Moment } from "jalali-moment";

// Set the locale to Persian (fa)
jalaliMoment.locale("fa");

// Helper: check if a given date is “today” in Jalali
export function isToday(date: Moment): boolean {
  return date.isSame(jalaliMoment(), "day");
}

// Helper: convert a 24-hour number (0..23) to a Persian AM/PM (ق.ظ/ب.ظ) format
export function formatPersianTime(hour: number): string {
  // Example: 0 => 12 ق.ظ | 1 => 1 ق.ظ | ... | 12 => 12 ب.ظ | 13 => 1 ب.ظ
  const amPm = hour < 12 ? "ق.ظ" : "ب.ظ";
  let displayHour = hour % 12;
  if (displayHour === 0) displayHour = 12; // 0 => 12, 12 => 12
  return `${displayHour} ${amPm}`;
}

// Helper: Convert Jalali date and hour to ISO 8601 UTC string without milliseconds
export function generateISODateTime(date: Moment, hour: number): string {
  // Clone the date to avoid mutating the original Moment object
  const gregorianMoment = date
    .clone()
    .locale("en") // Ensure Gregorian locale for accurate conversion
    .startOf("day") // Set time to 00:00
    .add(hour, "hour") // Add the specified hour
    .utc(); // Convert to UTC

  // Format the date-time in UTC with 'Z'
  return gregorianMoment.format("YYYY-MM-DDTHH:mm:ss[Z]");
}

// Helper: Convert Jalali date string to Gregorian date string
export function convertJalaliToGregorian(jalaliDate: string): string {
  const m = jalaliMoment(jalaliDate, "jYYYY-jMM-jDD", true);
  if (!m.isValid()) {
    // Depending on your confidence, you can either throw an error or handle it gracefully
    console.error(`Invalid Jalali date format: ${jalaliDate}`);
    // Optionally, return a fallback date or handle as per your application's requirement
    return "Invalid Date";
  }
  return m.locale("en").format("YYYY-MM-DD");
}
