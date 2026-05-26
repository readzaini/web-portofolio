export default function ItemPage({itemKey,itemContent}){
    return(
        <div className="bg-white rounded-xl flex flex-row md:(max-h-[180px]) min-h-[180px]" key={itemKey}>
            {/* image */}
            <img
                src={itemContent.url}
                className="w-1/2 h-[180px] md:(object-full) rounded-l-lg"
            />
            
            {/* content */}
            <div className="px-2 py-2 flex flex-col gap-2 w-1/2">
                {/* title */}
                <h1 className="text-sm md:(text-[9pt]) font-bold">{itemContent?.title}</h1>
                <p className="text-[10pt] leading-4 text-left md:(text-[7pt] leading-3)">{itemContent?.description}</p>
                <p className="text-[10pt] text-left md:(text-[8pt])"><b>Project Url : </b> 
                    <a 
                        className="underline hover:text-blue-400" 
                        href={itemContent.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    > 
                        
                        Click Here

                    </a>
                </p>
                <p className="text-[10pt] text-left md:(text-[8pt])"><b>Article : </b> 
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
                <p className="text-[10pt] text-left md:(text-xs)"><b>File : </b> 
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