import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return(
        <div className="grid grid-cols-12 gap-4 py-7">
            <div className="col-start-1 col-span-5 mt-12 flex flex-col">
                <h1 
                    className="text-headingTxtColr text-4xl font-semibold"
                >
                    Embrace Quality Sleep with Thongo Land
                </h1>

                <p 
                    className="text-txtColr mt-6 text-base leading-relaxed"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida hendrerit 
                    sem, sed gravida mi ultricies a. Integer non purus ac purus volutpat volutpat. Orci 
                    varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Ut vitae pharetra libero, quis tincidunt felis. Sed sit amet ipsum mauris. 
                    Nunc cursus sem egestas dapibus tempus. Fusce est lacus, tempus eu dolor et, 
                    vestibulum. quis tincidunt felis.Sed sit amet ipsum mauris. 
                    Nunc cursus sem egestas dapibus tempus. Fusce est lacus, tempus eu dolor et, 
                    vestibulum. quis tincidunt felis.
                </p>
            </div>

            <div className="col-start-7 col-span-6 mt-12">
                <Image
                    src="/h-sec-pic-two-resized.png"
                    width={650}
                    height={300}
                    alt="hero-section-pic"
                    className="rounded-lg shadow-lg"
                />
            </div>
            
            <div className="col-start-1 col-span-3 mt-6">
                <Link
                    href="/sign-up"
                    className="btn btn-block text-buttonTxtColr"
                >
                    Get Started
                </Link>
            </div>
        </div>
    )
}