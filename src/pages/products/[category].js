import RootLayout from "@/components/Layouts/RootLayout";
import { useRouter } from "next/router";

const Products = ({ products }) => {
  const router = useRouter();
  console.log("router", router.query.category);
  console.log("products", products);
  return <div></div>;
};

export default Products;

Products.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  const paths = data.data.map((product) => {
    return {
      params: { category: product.category.toString() },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log("params", params);
  const res = await fetch(`http://localhost:5000/products?category=${params.category}}`);
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
