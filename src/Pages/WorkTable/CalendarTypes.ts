export interface Task {
    id: number;
    title: string;
    date: string; // Jalali format, e.g., jYYYY-jMM-jDD
    gregorianDate?: string; // Optional Gregorian date in "YYYY-MM-DD"
    startHour?: number;
    // endHour?: number;
    isoDateTime: string; // ISO 8601 formatted date-time
  }
  
  // Task structure for posting to the backend
  export interface TaskPost {
    title: string;
    isoDateTime: string; // ISO 8601 formatted date-time
  }
  
  // Task structure received from the backend
  export interface TaskResponse {
    id: string;
    title: string;
    isoDateTime: string; // ISO 8601 formatted date-time
  }