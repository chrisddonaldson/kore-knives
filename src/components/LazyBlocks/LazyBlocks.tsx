import React from "react"
import { DisplayArticles } from "./DisplayArticles"
import { HomePageHeader } from "./HomepageHeader"
import { HorizontalCards } from "./HorizontalCards"
import { ImageFooter } from "./ImageFooter"
import { v4 as uuidv4 } from 'uuid';
import { ShoppingCart } from "./ShoppingCart"

export const LazyBlock = {
  "core/paragraph": (v: any) => (
    <div
      className={"max-w-screen-xl mx-auto px-5 my-5"}
      key={uuidv4()}
    >
      <div className={"max-w-xl"} dangerouslySetInnerHTML={{ __html: v.innerContent }}></div>

    </div>
  ),
  "core/heading": (v: any) => (
    <div
    key={uuidv4()}
      dangerouslySetInnerHTML={{ __html: v.innerContent }}
      className={"max-w-screen-xl mx-auto px-5"}
    ></div>
  ),
  "core/image": (v: any) => (
    <div
    key={uuidv4()}
      dangerouslySetInnerHTML={{ __html: v.innerContent }}
      className={"max-w-screen-xl mx-auto px-5"}
    ></div>
  ),
  "core/separator": (v: any) => (
    <hr className={"my-5 max-w-screen-xl mx-auto"} key={uuidv4()}/>
  ),
  "core/list": (v: any) => (
    <div
    key={uuidv4()}
      dangerouslySetInnerHTML={{ __html: v.innerContent }}
      className={"max-w-screen-xl mx-auto px-5"}
    ></div>
  ),
  "lazyblock/homepage-header": (v: any) => <HomePageHeader data={v} key={uuidv4()}/>,
  "lazyblock/horizontal-cards": (v: any) => <HorizontalCards data={v} key={uuidv4()}/>,
  "lazyblock/display-articles": (v: any) => <DisplayArticles data={v} key={uuidv4()}/>,
  "lazyblock/image-footer": (v: any) => <ImageFooter data={v} key={uuidv4()}/>,
  "lazyblock/shopping-cart": (v: any) => <ShoppingCart data={v} key={uuidv4()}/>,

  null: () => <div key={uuidv4()}></div>,
}
