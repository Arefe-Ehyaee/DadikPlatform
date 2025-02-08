interface NotificationProps{
    title: string;
    time: string;
    icon: string;
}

export default function NotifMessage({title, icon, time}:NotificationProps) {
  return (
    <button className="py-[10px] px-[7px] hover:bg-neutral-50 rounded-lg">
        <div className='flex flex-row gap-2'>
            <img src={icon} alt="" className="w-10 h-10" />
            <div className="flex flex-col">
                <p className="font-myYekanRegular text-black text-sm">{title}</p>
                <p className="font-myYekanRegular text-sm text-text-200 text-right mt-[5px]">{time}</p>
            </div>
        </div>
      
    </button>
  )
}
