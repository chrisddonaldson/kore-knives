import { Link } from "gatsby"
import React, { useDebugValue } from "react"
import { Button } from "../Button"

export const CallToAction = ({data})=> {
    // console.log(data.attrs)
    let label1, url1, label2, url2 = ""
try{
    label1 = data.attrs["label-1"]
    url1 = data.attrs["url-1"]
    label2 = data.attrs["label-2"]
    url2 = data.attrs["url-2"]
}catch(e){
    console.log(e)
}
    return(
        <div className={"mx-auto  w-full flex justify-center max-w-screen-sm  my-5"}>
            <Link to={url1} className={"mx-auto inline-block"}>
                <Button label={label1} />
            </Link>
            {label2 ? (        
            <Link to={url2} className={"mx-auto inline-block"}>
                <Button label={label2} />
            </Link>
            ):(
                null
                )}
    </div>
    )
}