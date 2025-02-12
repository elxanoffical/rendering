import { Suspense } from "react";
import { Product } from "../components/product";
import { Reviews } from "../components/review";

export default function ProductDetail() {
  return (
    <div>
      <h1>ProductDetail Page</h1>
      <Suspense fallback={<p>Loading Product detail...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading Reviews detail...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
