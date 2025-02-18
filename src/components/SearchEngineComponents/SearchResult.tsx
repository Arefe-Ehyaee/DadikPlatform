import search from "../../assets/icons/Frame.svg";
import { ReactComponent as SearchIcon } from '../../assets/icons/searchEngine.svg';

interface SearchResultProps {
    text: string;
    onClick?: () => void;
}

const SearchResult = ({ text, onClick} : SearchResultProps) => {
    return (
        <button className="flex flex-row items-center text-right min-h-10 gap-2 w-full hover:bg-neutral-50 rounded-lg px-4" onClick={onClick} dir="rtl">
            {/* <img src={search} alt="search" className="h-4 w-4"/> */}
            <SearchIcon className="text-text-500 w-[15px] h-[15px]"></SearchIcon>
            <div className="font-myYekanRegular text-text-500 text-sm">{text}</div>
        </button>
    );
}

export default SearchResult;