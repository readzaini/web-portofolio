import contents from "../data/content"
import ItemPage from "../components/ItemPage"
export default function PortoLayout(){

    return(
        <div className="bg-[#021247] flex flex-col gap-4 max-w-screen min-h-screen">
            {/* header */}
            <div className="flex flex-col gap-8 md:(gap-12)">
                <h1 className="text-white font-bold md:(text-2xl w-80) text-xl h-10 px-2 py-4">Hello Welcome to Zaini Ahmad Project's</h1>
                <p className="px-2 text-white md:(text-lg) text-[13px]"> For more detailed information :  
                    <a 
                        href="https://github.com/readzaini"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 underline"
                    >https://github.com/readzaini</a> 
                
                </p>
            </div>
            <div className="w-full grid grid-cols-1 md:(grid-cols-4) gap-4 px-2 py-2 items-start">
                {
                    contents.map((item) => (
                        <ItemPage  itemKey={item.id} itemContent={item}/>
                    ))
                }
            </div>
            

        </div>
    )
}