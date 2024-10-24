
import Link from "next/link";
import './globals.css'
import { Icon } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Products from "./products/page";
import SpaceGrid from "../components/ui/space-grid";
import { getProducts } from "../util/datafetch";
import ProductGrid from "../components/products/products-grid";


export default async function Home() {

  const products:any=await getProducts();
  return (
    <>
  <div className="arc">
  <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#10b981" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,122.7C672,96,768,96,864,122.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
  <div className="home-container">
  <section className="title">
   <div id="github" >
    <button ><Link id="github-link" href={`https://github.com/iwbkratos`}> <Icon><GitHubIcon></GitHubIcon></Icon><span className="git-name">Github</span></Link></button>
    </div>
    <div className="content">
    <h1>An open source e-commerce project built by <span id="name">Guna</span></h1>
    <h3>Buy and sell skateboarding gears from independent brands and stores around the world with ease</h3>
    </div>
    <div className="buy-sell">
     <Link href={`/products`}> <button>Buy now</button></Link>
      <div></div>
      <Link href={`/dashboard/stores`}><button id="sell">Sell now</button></Link>
    </div>
  </section>
  <section className="hero"><img src="/hero.jpg" alt="hero" width={500} height={500}/></section>
  </div>
 
  </div>
   <div id="featured-categories">
    <div id="featured-categories-content">
   <h1>
   Featured Categories
   </h1>
   <div id="featured-content">
    <span id="fc-1">Find the best skateboarding gears from stores around the world</span>
    <span id="fc-2"><Link id="shop-link" href={`/products`}>Shop the collection <Icon><ArrowForwardIcon/></Icon></Link></span>
   </div>
   <div>
    <SpaceGrid/>
   </div>
   </div>
   </div>
   <div id="popular-product">
    <h1>Popular Products</h1>
    <div id="popular-product-content">
      <p>Explore all products we offer from around the world</p>
      <span><Link href={`/products`}>Shop the collection<div><ArrowForwardIcon/></div></Link></span>
    </div>
    <ProductGrid products={products}/>
    <div id="product-link-container">
      <Link id="product-link" href={`/products`}>View all products <Icon><ArrowForwardIcon/></Icon></Link>
    </div>
   </div>
   </>
  );
}

