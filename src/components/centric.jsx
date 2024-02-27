/* eslint-disable react/prop-types */

const Centric = (props) => {
    return (
      <>
        <div className = " text-white bg-[#000] font-space-grotesk font-Open-sans ">
        <div className= "py-[146px]">
        
          {/* Card */}
          <div className = {`flex ${props.style} flex-col items-center`}>
          <div className="flex flex-col">
          
          <h1 className = ' lg:px-[120px] px-[20px] font-bold md:text-[36px] text-[24px] py-[24px] align-left flex lg:leading-[48px]'>{props.title}</h1>
              <div className = "flex align-left">
                  <p className = "text-[18px] px-auto flex lg:w-[699px] lg:px-[120px] px-[20px]">{props.subtitle} </p>
              </div>
              <div className = "flex flex-col lg:px-[120px] px-[20px] lg:pt-[40px] pt-[20px] pb-[12px] ">
                <div className = 'flex flex-row lg:pb-[12px]'>
                    <img  src ="./icon.svg"/>
                    <p className = "lg:pl-[12px] pl-4">Embedded widget or redirect options</p>
                </div>
                <div className = 'flex flex-row lg:pb-[12px] '>
                    <img  src ="./icon.svg"/>
                    <p className = "lg:pl-[12px] pl-4">Flexible APIs</p>
                </div>
                <div className = 'flex flex-row'>
                    <img  src ="./icon.svg"/>
                    <p className = "lg:pl-[12px] pl-4">Expansive configuration options</p>
                </div>
              </div>
              <div className = "lg:px-[120px] pt-[24px] px-[20px]">
                  <button className = 'font-bold text-white rounded-[8px] px-[24px] py-[10px] border border-[#fff]'>{props.button}</button>
              </div>
          </div>
          <div className="lg:pt-[64px] pt-[40px]">
                  <img src ={props.Image}/>
              </div>
          </div>
          
        </div> 
        </div>
      </>
    )
    }
  
  export default Centric
  