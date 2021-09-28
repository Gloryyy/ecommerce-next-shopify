import type { InferGetStaticPropsType } from "next"
import {getAllProducts} from '@framework/product'
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"
import { ProductCard } from "@components/product"
import { Grid, Hero, Marquee } from "@components/ui"

export async function getStaticProps() {
  const config = getConfig()

  const products = await getAllProducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}


export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {
  
  return (
    <>
      <Grid>
        {products.slice(0,3).map(product => 
        <ProductCard
          key={product.id}
          product={product} />
        )}
      </Grid>
      <Hero
        headline="Cookies"
        description="Sugar plum pie biscuit jelly lollipop lollipop tart. Sweet jelly-o caramels brownie marshmallow. Cake pastry jelly beans sugar plum chocolate bar chocolate cake. Liquorice lollipop powder biscuit carrot cake. Cookie croissant pastry cookie muffin jelly beans. Danish jelly ice cream brownie sweet roll sweet. Macaroon donut sesame snaps biscuit marzipan dessert macaroon. Candy canes sesame snaps dragée liquorice liquorice tart croissant tart cotton candy."
      />
      <Marquee>
        {products.slice(0,3).map(product => 
        <ProductCard
          key={product.id}
          variant="slim"
          product={product} />
        )}
      </Marquee>
      <Grid layout="B">
        {products.slice(0,3).map(product => 
        <ProductCard
          key={product.id}
          product={product} />
        )}
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0,3).map(product => 
        <ProductCard
          key={product.id}
          variant="slim"
          product={product} />
        )}
      </Marquee>
    </>
  )
}

Home.Layout = Layout