import dadikHeader from "../../assets/images/newBack.png";

export default function BannerOne() {

  return (
    <div className="relative flex justify-center">
    <img
      src={dadikHeader}
      alt="dadikHeader"
      className="w-full min-w-[1104px] h-[152px]"
    />
      <div className="absolute inset-0 flex flex-col text-primary-800 items-start">
        <h1 className="text-xl font-myYekanDemibold mt-1 mr-[315px] lg-xl:mr-[640px]">
        طرح های متنوع اشتراک با توجه به نیاز شما
        </h1>
        <div className="mr-[333px] lg-xl:mr-[640px] mb-5">
          <p className="text-sm font-myYekanRegular mt-4 ">
          ویژه وکلا ، ویژه مدیران مالی ، ویژه مشاوران ، ویژه شرکت ها 
          </p>
          <p className="text-sm font-myYekanRegular mt-4">
          اشتراک به صورت ماهانه ، دوره ای ، سالانه
          </p>
          <button className='w-[70px] h-6 bg-primary-500 font-myYekanRegular text-sm text-white rounded-[4px] mt-2 relative z-20'>خرید طرح</button>
        </div>


      </div>

      <div className='absolute font-myYekanMedium text-sm text-white inset-0 mr-[19px] mt-2'>
      سکوی حقوقی دادیک
      </div>

    {/* <div className="absolute inset-0 flex justify-between items-center px-4">
      <button className="w-12 h-12 rounded-full bg-white text-white flex items-center justify-center shadow-lg mr-12 ">
        <Moreright></Moreright>
      </button>

      <button className="w-12 h-12 rounded-full bg-white text-white flex items-center justify-center shadow-lg ml-12">
        <MoreLeft></MoreLeft>
      </button>
    </div> */}
  </div>
  )
}
