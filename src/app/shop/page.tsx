import Link from "next/link";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import Footer from "../../components/footer";
import Pagination from "@/components/pagination";

const Products = [
  {
    id: 1,
    title: "Modern sofa",
    image: "Rectangle 26.png",
    image2: "Star2.png",
    price: "$73.99",
  },
  {
    id: 2,
    title: "Modern sofa",
    image: "Rectangle 27.png",
    image2: "Star2.png",
    price: "$73.99",
  },
  {
    id: 3,
    title: "Modern sofa",
    image: "Rectangle 28.png",
    image2: "Star2.png",
    price: "$73.99",
  },
  {
    id: 4,
    title: "Modern sofa",
    image: "Rectangle 29.png",
    image2: "Star2.png",
    price: "$73.99",
  },
  {
    id: 5,
    title: "Modern sofa",
    image: "Rectangle 30.png",
    image2: "Star2.png",
    price: "$73.99",
  },
  {
    id: 6,
    title: "Modern sofa",
    image: "Rectangle 31.png",
    image2: "Star2.png",
    price: "$73.99",
  },
  {
    id: 7,
    title: "Modern sofa",
    image: "Rectangle 32.png",
    image2: "Star2.png",
    price: "$73.99",
  },
  {
    id: 8,
    title: "Modern sofa",
    image: "Rectangle 33.png",
    image2: "Star2.png",
    price: "$73.99",
  },
  {
    id: 9,
    title: "Modern sofa",
    image: "Rectangle 34.png",
    image2: "Star2.png",
    price: "$73.99",
  },
];
export default function Shop() {
  return (
    <section>
      {/* Navbar */}
      <div className="flex justify-between mt-3 w-full">
        <div className="logo-section text-2xl font-extrabold pt-5 pl-14 ">
          <p>soudemy</p>
        </div>
        <div className="menus-section text-xl font-bold flex gap-x-8 mt-6 mr-auto ml-20">
          <Link href="/">Home</Link>
          <Link href="./shop">Shop</Link>
          <Link href="./about">About us</Link>
          <Link href="./blog">Blog</Link>
        </div>
        <div className="menu-icons flex gap-x-10 p-6 mr-8 h-[70px]">
          <img src="search-normal.png" alt="search" className="filter grayscale brightness-50"/>
          <img src="bag-2.png" alt="bag" className="filter grayscale "/>
          <img src="menu.png" alt="menu" className="filter grayscale brightness-50"/>

        </div>
      </div>

      <div className="text-gray-500 flex justify-between items-center mx-14 space-y-10">
        <p className="pt-10">Showing 1-9 of 57 results</p>
        <div className="flex space-x-3 mr-80 pr-2">
          <p className="">Sort by popularity</p>
          <img
            className="h-5 w-5 filter grayscale-0 brightness-50"
            src="arrow-down.png"
            alt="arrow"
          />
        </div>

      </div>
      <main className="flex">
        <div className="left-side grid grid-cols-3 m-10 space-x-8 gap-y-6 pr-5">
          {Products.map((product) => (
            <div className="flex flex-col items-center space-y-2">
              <img src={product.image} />
              <h1 className="text-gray-950 font-bold">{product.title}</h1>
              <div className="flex gap-x-2">
                {[...Array(4)].map((_, index) => (
                  <img
                    key={index}
                    className="filter grayscale brightness-100 h-4 w-4"
                    src={product.image2}
                  />
                ))}
              </div>
              <p
                className="
              text-gray-400"
              >
                {product.price}
              </p>
            </div>
          ))}
        </div>

        <div className="right-side space-y-12 flex-col items-center mr-10">
          <div className="space-y-7 mb-8">
          <div className="search-btn relative flex justify-between items-center pb-6 mt-[-34px]">
          <input
            className="border border-gray-400 w-72 px-6 p-3 pl-2"
            type="text"
            placeholder="Search.."
          ></input>
          <img
            className="absolute right-4 filter grayscale brightness-50"
            src="search-normal.png"
          />
        </div>


            <h1 className="text-xl font-bold">Category</h1>
            <ul className="text-gray-500 space-y-6">
              <li>Ceiling (25)</li>
              <li>Floor (25)</li>
              <li>Led (25)</li>
              <li>Modern (25)</li>
              <li>Retro (25)</li>
              <li>Wood (25)</li>
            </ul>
          </div>

          <div className="space-y-7">
            <h1 className="text-xl font-bold">Color</h1>
            <ul className="text-gray-500 space-y-6">
              <li>Black (25)</li>
              <li>Blue (25)</li>
              <li>Red (25)</li>
              <li>Green (25)</li>
              <li>Yellow (25)</li>
              <li>Grey (25)</li>
            </ul>
            <br />
            <div />
            <div className="pt-5">
              <div className="relative w-64 h-1 bg-gray-900">
                <div className="absolute w-4 h-4 bg-gray-800 rounded-full -left-2 top-1/2 transform -translate-y-1/2"></div>
                <div className="absolute w-4 h-4 bg-gray-800 rounded-full -right-2 top-1/2 transform -translate-y-1/2"></div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-6">
              <p className="text-gray-500">Price $4-$800</p>
              <button className="bg-gray-800 text-gray-200 px-6 py-1 ml-20">
                Filter
              </button>
            </div>
          </div>
        </div>
      </main>
      <Pagination />
      <Footer />
    </section>
  );
}
