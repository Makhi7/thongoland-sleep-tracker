import Image from "next/image";

export default function BenefitsSection(){
    return(
        <div className="grid grid-cols-12 gap-[15px] py-[72px] ">
            <div className="col-span-10 col-start-2">
                <h1 className="text-headingTxtColr text-4xl font-semibold text-center">
                    Here Are The Benefits Of Tracking Your Sleep With Thongo Land
                </h1>
            </div>

            <div className="col-span-8 col-start-3 my-[53px]">
                <p className="text-txtColr text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida hendrerit 
                    sem, sed gravida mi ultricies a. Integer non purus ac purus volutpat volutpat. Orci 
                    varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
            </div>

            
                <div className="col-span-3"> 
                    <div className="card card-compact bg-cardColr w-30 shadow-xl">
                        {/* image here */}
                        <div className="flex flex-row justify-start">
                            <Image
                                src="/benefit-sec-card image-resized.png"
                                width={90}
                                height={83}
                                alt="benefit-one"
                                className="rounded"
                            />
                        </div>

                        {/* card body */}
                        <div className="card-body">
                            <h2 className="card-title text-headingTxtColr">
                                Benefit Number One
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="card card-compact bg-cardColr w-30 shadow-xl">
                        {/* image here */}
                        <div className="flex flex-row justify-start">
                            <Image
                                src="/benefit-sec-card image-resized.png"
                                width={90}
                                height={83}
                                alt="benefit-one"
                                className="rounded"
                            />
                        </div>

                        {/* card body */}
                        <div className="card-body">
                            <h2 className="card-title text-headingTxtColr">
                                Benefit Number Two
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                <div className="card card-compact bg-cardColr w-30 shadow-xl">
                        {/* image here */}

                        {/* card body */}
                        <div className="card-body">
                            <h2 className="card-title text-headingTxtColr">
                                Benefit Number Three
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="card card-compact bg-cardColr w-30 shadow-xl">
                        {/* image here */}

                        {/* card body */}
                        <div className="card-body">
                            <h2 className="card-title text-headingTxtColr">
                                Benefit Number Four
                            </h2>
                        </div>
                    </div>
                </div>
           
        </div>  
    )
}