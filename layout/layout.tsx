import MainHeader from "../components/mainheader/mainheader";



export async function Layout({children}:any) {
   
    return(
        
    <>
       <MainHeader/>
        {children}
        
    </>

    )
}