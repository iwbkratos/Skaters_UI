import ItemDetails from "../../../../components/product-detail/product-detail";

export default async function Product({params}:any){

//    console.log(params.productId);
    return(
        <ItemDetails productId={params.productId}/>
    );
    
}