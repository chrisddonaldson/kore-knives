import React from "react"
import { DisplayArticles } from "./DisplayArticles"
import { HomePageHeader } from "./HomepageHeader"
import { HorizontalCards } from "./HorizontalCards"

export const LazyBlock = {
  "core/paragraph": (v: any) => (
    <div
      className={"max-w-screen-xl mx-auto px-5 my-5"}
    >
      <div className={"max-w-xl"} dangerouslySetInnerHTML={{ __html: v.innerContent }}></div>

    </div>
  ),
  "core/heading": (v: any) => (
    <div
      dangerouslySetInnerHTML={{ __html: v.innerContent }}
      className={"max-w-screen-xl mx-auto px-5"}
    ></div>
  ),
  "core/image": (v: any) => (
    <div
      dangerouslySetInnerHTML={{ __html: v.innerContent }}
      className={"max-w-screen-xl mx-auto px-5"}
    ></div>
  ),
  "core/separator": (v: any) => (
    <hr className={"my-5 max-w-screen-xl mx-auto"} />
  ),
  "core/list": (v: any) => (
    <div
      dangerouslySetInnerHTML={{ __html: v.innerContent }}
      className={"max-w-screen-xl mx-auto px-5"}
    ></div>
  ),
  "lazyblock/homepage-header": (v: any) => <HomePageHeader data={v} />,
  "lazyblock/horizontal-cards": (v: any) => <HorizontalCards data={v} />,
  "lazyblock/display-articles": (v: any) => <DisplayArticles data={v}/>,

  null: () => <></>,
}
