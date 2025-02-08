interface DepartmentBadgeProps{
    department: string;
}


export default function DepartmentBadge({department}:DepartmentBadgeProps) {
  return (
    <div className='bg-secondary-100 text-text-500 font-myYekanRegular text-sm rounded px-[7px] py-[2px]'>
      {department}
    </div>
  )
}
