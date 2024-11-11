import Image from "next/image"

export default function Logo(){
    return(
        <div>
           <Image
                src="/thongo-graphic-resized.png"
                width={90}
                height={78}
                alt="logo"
                className="rounded-lg"
            /> 
        </div>
    )
}