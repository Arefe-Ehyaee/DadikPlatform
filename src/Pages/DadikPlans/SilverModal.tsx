import BoldShoppingCard from "./BoldShoppingCard";
import ShoppingCard from "./ShoppingCard";

export default function SilverModal() {
  return (
    <div className='flex flex-row gap-6 mx-auto'>
      <ShoppingCard planType={"silver"} price={"300000000"} duration={"یکماهه"} sale={false}></ShoppingCard>
      <BoldShoppingCard planType={"silver"} price={"150000000"} duration={"شش ماهه"} sale={false}></BoldShoppingCard>
      <ShoppingCard planType={"silver"} price={"300000000"} duration={"دوازده ماهه"}  sale={true} salePercentage={"%15"}></ShoppingCard>
    </div>
  )
}
