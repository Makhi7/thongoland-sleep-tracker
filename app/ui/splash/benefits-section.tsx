import Image from "next/image";

export default function BenefitsSection(){
    return(
        <div className="grid grid-cols-12 gap-4 py-5">
            <div className="col-span-10 col-start-2">
                <h1 className="text-headingTxtColr text-4xl font-semibold text-center">
                    Here Are The Benefits Of Tracking Your Sleep With Thongo Land
                </h1>
            </div>

            <div className="col-span-8 col-start-3 my-8">
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
                                className="rounded-full p-4"
                            />
                        </div>

                        {/* card body */}
                        <div className="card-body">
                            <h2 className="card-title text-headingTxtColr">
                                Benefit Number One
                            </h2>
                            <p className="text-cardTxtColr">
                                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                                cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                                galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                                No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos 
                                electrónicos, quedando esencialmente igual al original.
                            </p>
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
                                className="rounded-full p-4"
                            />
                        </div>

                        {/* card body */}
                        <div className="card-body">
                            <h2 className="card-title text-headingTxtColr">
                                Benefit Number Two
                            </h2>
                            <p className="text-cardTxtColr">
                                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                                cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                                galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                                No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos 
                                electrónicos, quedando esencialmente igual al original.
                            </p>
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
                                className="rounded-full p-4"
                            />
                        </div>

                        {/* card body */}
                        <div className="card-body">
                            <h2 className="card-title text-headingTxtColr">
                                Benefit Number Three
                            </h2>
                            <p className="text-cardTxtColr">
                                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                                cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                                galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                                No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos 
                                electrónicos, quedando esencialmente igual al original.
                            </p>
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
                                className="rounded-full p-4"
                            />
                        </div>

                        {/* card body */}
                        <div className="card-body">
                            <h2 className="card-title text-headingTxtColr">
                                Benefit Number Four
                            </h2>
                            <p className="text-cardTxtColr">
                                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                                cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                                galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                                No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos 
                                electrónicos, quedando esencialmente igual al original.
                            </p>
                        </div>
                    </div>
                </div>

        </div>  
    )
}