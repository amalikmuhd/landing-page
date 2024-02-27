/* eslint-disable react/prop-types */

const Solution = (props) => {
  return (
    <>
      <div className = " text-black bg-[#F1F6FF] font-space-grotesk font-Open-sans ">
      <div className={props.margin}>
      <div className = " justify-center flex ">
        <p className = "text-center font-bold border-0 rounded-full bg-[#9BBFF01A] px-[19px] py-[6px]">{props.main}</p>
      </div>
        <h1 className = 'font-bold md:text-[36px] text-[24px] py-[24px] justify-center text-center flex lg:leading-[48px]'>{props.sub}</h1>
        <div className = "flex justify-center">
            <p className = "text-[18px] px-auto flex lg:w-[699px] text-center md:pb-0 pb-[60px]">{props.text}</p>
        </div>
        {/* Card */}
        <div className = {`flex ${props.style} right-0 flex-col items-center`}>
        <div className="flex flex-col">
        <div className = " align-left flex lg:pt-[64px] pt-[40px] lg:px-[120px] px-[20px]">
            <p className = "text-center font-bold border-0 rounded-full bg-[#9BBFF01A] text-[#1565D8] px-[19px] py-[6px]">{props.card}</p>
        </div>
        <h1 className = ' lg:px-[120px] px-[20px] font-bold md:text-[36px] text-[24px] py-[24px] align-left flex lg:leading-[48px]'>{props.title}</h1>
            <div className = "flex align-left">
                <p className = "text-[18px] px-auto flex lg:w-[699px] lg:px-[120px] px-[20px]">{props.subtitle} </p>
            </div>
            <div className = "lg:px-[120px] pt-[24px] px-[20px]">
                <button className = 'bg-[#1565D8] font-bold text-white rounded-[8px] px-[24px] py-[10px] border border-[#1565D8]'>{props.button}</button>
            </div>
        </div>
        <div className="lg:pt-[64px] pt-[40px]">
                <img width = {425} height = {463} src ={props.Image}/>
            </div>
        </div>
        
      </div> 
      </div>
    </>
  )
  }

export default Solution
