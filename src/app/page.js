import ProductItem from '@/components/Productitem'
import { data } from '@/utils/data'
// import RootLayout from './layout'

export default function Home() {
  const { products } = data
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}