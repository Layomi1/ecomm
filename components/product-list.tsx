import Stripe from "stripe";
import { ProductCard } from "./product-card";

interface Props {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Search products ..." />
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
