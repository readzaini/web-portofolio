export default function ItemPage({itemKey,itemContent}){
    return(
        <div className="bg-white rounded-xl flex flex-row" key={itemKey}>
            {/* image */}
            <img src={itemContent.url} className="object-full rounded-l-lg w-1/2  "/>
            {/* content */}
            <div className="px-2 py-2 flex flex-col gap-2 w-1/2">
                {/* title */}
                <h1 className="text-lg md:(text-lg) font-bold">{itemContent?.title}</h1>
                <p className="text-[14px] leading-4 text-left md:(text-[8pt] leading-4)">{itemContent?.description}</p>
                <p className="text-[14px] text-left md:(text-[8pt])"><b>Project Url : </b> 
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
                {itemContent.file &&
                <p className="text-[12px] text-left md:(text-xs)"><b>File : </b> 
                    <a 
                        className="underline hover:text-blue-400" 
                        href={itemContent.file}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Click Here
                    </a>
                </p>
                
                }

            </div>
        </div>
    )
}