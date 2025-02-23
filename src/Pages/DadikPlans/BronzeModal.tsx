import BoldShoppingCard from "./BoldShoppingCard";
import ShoppingCard from "./ShoppingCard";

export default function BronzeModal() {
  return (
    <div className='flex flex-row gap-6 mx-auto'>
      <ShoppingCard planType={"bronze"} price={"15000000"} duration={"یکماهه"} sale={false}></ShoppingCard>
      <BoldShoppingCard planType={"bronze"} price={"30000000"} duration={"شش ماهه"} sale={false}></BoldShoppingCard>
      <ShoppingCard planType={"bronze"} price={"50000000"} duration={"دوازده ماهه"} sale={true} salePercentage={"%15"}></ShoppingCard>
    </div>
  )
}
