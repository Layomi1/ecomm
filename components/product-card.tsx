import Link from "next/link";
import React from "react";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;
  // const navigate = useNavigate();

  const handleViewDetails = () => {
    console.log("gong");
    // navigate;
  };

  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <Card className="group hover:shadow-2xl transition duration-300 py-2 h-full flex flex-col border-gray-300 gap-0">
        {product.images && product.images[0] && (
          <div className="relative h-100 w-100 ">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="group-hover:opacity-90 transition-opacity duration-300  object-cover rounded-t-lg"
            />
          </div>
        )}

        <CardHeader className="px-4 mt-2">
          <CardTitle className="text-xl font-bold text-gray-800 px-4 capitalize">
            {product.name}
          </CardTitle>
          <CardContent className="flex-grow flex  justify-between items-center">
            {product.description && (
              <p className="text-gray-600 text-sm ">{product.description}</p>
            )}
            {price && price.unit_amount && (
              <p className="text-lg font-semibold text-gray-900">
                ${(price.unit_amount / 100).toFixed(2)}
              </p>
            )}
          </CardContent>
          <Button
            className="mt-4 bg-black text-white"
            onClick={handleViewDetails}
          >
            View Details
          </Button>
        </CardHeader>
      </Card>
    </Link>
  );
};
