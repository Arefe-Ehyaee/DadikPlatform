
import {ReactComponent as More} from "../assets/icons/newIcons/chevron-leftMore.svg";

interface ShowMoreButtonProps {
  onClick?: () => void;
}

export default function ShowMoreButton({onClick}:ShowMoreButtonProps) {
  return (
<button className='flex flex-row gap-1 items-center p-[3px] w-[112px] h-[26px]' onClick={onClick}>
    <div className='font-myYekanRegular text-sm text-primary-500'>مشاهده بیشتر</div>
    <More></More>
</button>
  )
}
