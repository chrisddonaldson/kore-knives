import React from "react"

interface HorizontalCardsInterface {
  data: any
}

export const HorizontalCards: React.FC<HorizontalCardsInterface> = ({
  data,
}) => {

  const decoded = decodeURI(data.attrs.cards)
  const parsed = JSON.parse(decoded)
 
  return (
    <div className={"max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 py-10 gap-5 px-5"}>
      {parsed.map((v,i) => {
        return (
          <div className="rounded-lg shadow-lg overflow-hidden" key={"horizontal-card-"+i}>
            
            <div className="h-64 overflow-hidden flex bg-cover" style={{backgroundImage: `url(${v.image.url})`}}>
              {/* <img src={v.image.url} alt={v.image.alt} className={" w-auto bg-cover "}></img> */}
            </div>
        
             <div className={"p-5 h-64 bg-white "}>

              <h2 className={"text-gray-800 text-center h-32 "}>{v.heading}</h2>
              <p className={"text-gray-800 text-center"}>{v.subheading}</p>
             </div> 
          </div>
        )
      })}
    </div>
  )
}
