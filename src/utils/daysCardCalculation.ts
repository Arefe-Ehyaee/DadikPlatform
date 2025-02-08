import jalaali from 'jalaali-js';

export const calculatePassedDays = (startDate: string | null): number => {
  if (!startDate) return 0;
  const start = new Date(startDate);
  const today = new Date();

  if (today < start) return 0; // Start date is in the future

  const diffTime = today.getTime() - start.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays >= 0 ? diffDays : 0;
};

export const calculateRemainingDays = (endDate: string | null): number => {
  if (!endDate) return 0;
  const end = new Date(endDate);
  const today = new Date();

  if (today > end) return 0; // End date is in the past

  const diffTime = end.getTime() - today.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays >= 0 ? diffDays : 0;
};

export const toJalali = (isoDate: string | null): string => {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  const gYear = date.getUTCFullYear();
  const gMonth = date.getUTCMonth() + 1; // Months are zero-based
  const gDay = date.getUTCDate();

  const { jy, jm, jd } = jalaali.toJalaali(gYear, gMonth, gDay);
  return `${jy}/${jm.toString().padStart(2, '0')}/${jd.toString().padStart(2, '0')}`;
};