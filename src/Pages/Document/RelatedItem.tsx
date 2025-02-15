import item from "../../assets/icons/relatedItem.svg"

interface RelatedItemProps{
    text: string;
}

export default function RelatedItem({text}: RelatedItemProps) {
    return(
        <div className="flex flex-row gap-2 items-center bg-background-550 py-2 px-4">
            <img src={item} alt="" />
            <p className="text-sm text-text-500 font-myYekanRegular text-clip line-clamp-2">{text}</p>
        </div>
    )
}