import ShoppingCard from "./ShoppingCard";

export default function GoldModal() {
  return (
    <div className='flex flex-row gap-6 mx-auto'>
      <ShoppingCard planType={"gold"} price={"15000000"} duration={"یکماهه"} sale={false}></ShoppingCard>
      <ShoppingCard planType={"gold"} price={"300000000"} duration={"شش ماهه"} sale={false}></ShoppingCard>
      <ShoppingCard planType={"gold"} price={"500000000"} duration={"دوازده ماهه"} sale={false}></ShoppingCard>
    </div>
  )
}
