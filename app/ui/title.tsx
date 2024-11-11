import Image from "next/image"

export default function WebTitle(){
    return(
        <div>
            <Image
                src="/thongoland-title-banner.png"
                width={300}
                height={67}
                alt="name of site"
                className="rounded-lg"
            />    
        </div>
    )
} 