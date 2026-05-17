export default function ItemPage({itemKey,itemContent}){
    return(
        <div className="bg-white rounded-xl flex flex-row" key={itemKey}>
            {/* image */}
            <img src={itemContent.url} className="onject-cover rounded-l-lg w-1/2"/>
            {/* content */}
            <div className="px-2 py-4 flex flex-col gap-2 w-1/2">
                {/* title */}
                <h1 className="text-lg md:(text-xl) font-bold">{itemContent?.title}</h1>
                <p className="text-[12px] text-left md:(text-xs)">{itemContent?.description}</p>
                <p className="text-[12px] text-left md:(text-xs)"><b>Project Url : </b> 
                    <a 
                        className="underline hover:text-blue-400" 
                        href={itemContent.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    > 
                        
                        Click Here

                    </a>
                </p>
                <p className="text-[12px] text-left md:(text-xs)"><b>Article : </b> 
                    <a 
                        className="underline hover:text-blue-400" 
                        href={itemContent.article}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Click Here
                    </a>
                </p>

            </div>
        </div>
    )
}