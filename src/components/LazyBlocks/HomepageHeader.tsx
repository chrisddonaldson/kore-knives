import React from "react"

interface HomePageHeaderInterface {
  data: any
}

export const HomePageHeader: React.FC<HomePageHeaderInterface> = ({ data }) => {
  const decoded = decodeURI(data.attrs.image)
  const parsedImage = JSON.parse(decoded)
  console.log(parsedImage)
  return (
    <div className={"max-w-screen-xl mx-auto grid grid-cols-2 my-10"}>
      <div className={"z-10"}>
        <h1 className={"text-9xl my-5"}>{data.attrs.heading}</h1>
        <p className={"ml-2"}>{data.attrs.subheading}</p>
      </div>
      <img src={parsedImage.url} alt={parsedImage.alt} />
    </div>
  )
}
