declare module "jalaali-js" {
    export function gregorianToJalali(
      gYear: number,
      gMonth: number,
      gDay: number
    ): number[];
  
    export function jalaliToGregorian(
      jYear: number,
      jMonth: number,
      jDay: number
    ): number[];

  export function toJalaali(gYear: number, gMonth: number, gDay: number): { jy: any; jm: any; jd: any; } {
    throw new Error('Function not implemented.');
  }
  }
  