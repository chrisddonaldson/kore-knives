import React from 'react';

interface ImageFooterInterface {
    data: any
}

export const ImageFooter:React.FC<ImageFooterInterface> = ({data}) =>{
    let parsed = null
    console.log(data.attrs)
    try{
        const decoded = decodeURI(data.attrs.image)
        parsed = JSON.parse(decoded)
        console.log(parsed)
    }
    catch(e){
        // console.error("No feature image for: " + data.title)
    }

    return(
  
        <div
    
            className={"max-w-screen-2xl mx-auto px-5 bg-gray-900 py-10 bg-no-repeat bg-contain shadow-xl"} style={{backgroundImage: `url(${parsed.url})`}}
        >
          <div className={"grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto"}> 
          <div className="h-64 w-64 overflow-hidden flex" ></div>
   
        <form className={"text-gray-100"}>
        <h3>
                Stay in touch
            </h3>
            <p className={"py-5"}>
                Join our mailing list for
            </p>
            <label>
                email
            </label>
            <br/>
            <input type={"text"} />
            <input type={"submit"} title={"Sign Up"} className={"ml-5"}/>
        </form>

      </div>  

      </div>
  
    )
}