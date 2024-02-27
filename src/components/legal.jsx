

const Legal = (props) => {
  return (
    <div className = "border-b md:pt-[30px] pt-[15px] border-[#C4C4C4]">
      <h1 className = "font-bold md:text-[36px] text-[24px]">{props.title}</h1>
      <p className = "pb-[32px]">{props.text}</p>
      <span>
        <span className = "font-bold">
            {props.subtitle}
        </span>
        <span>
            {props.subtext}
        </span>
      </span>
      <p className = "pb-[32px]">{props.text1}</p>
    </div>
  )
}

export default Legal
