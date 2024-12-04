"use client";
export default function SubscribeToMailSection(){

    function subscribe(formData){
        const name = formData.get("name");
        const lastName = formData.get("lastname");
        const email = formData.get("email");

        alert(`You searched for '${name}'`);
        alert(`You searched for '${lastName}'`);
        alert(`You searched for '${email}'`);

    }

    return (
        <div className="grid grid-cols-12 gap-4 py-10">
            <div className="col-span-6 flex flex-col">
                <h1 className="text-headingTxtColr text-4xl font-semibold">
                    Get Updates of Latests Published Blogs 
                </h1>

                <p 
                    className="text-txtColr mt-[23px] text-base"
                >
                    Lorem Ipsum, y al seguir leyendo distintos textos del latín, 
                    descubrió la fuente indudable. Lorem Ipsum viene de las secciones 
                    1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del 
                    Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.
                    Este libro es un tratado de teoría de éticas, muy popular durante el 
                    Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
                    viene de una linea en la sección 1.10.32
                </p>
            </div>

            <form
                action={subscribe} 
                className="col-start-8 col-span-6"
             >
                <div className="flex flex-row">
                    <input type="text" name="name" placeholder="Type Name" className="input input-bordered input-lg w-full max-w-xs text-buttonTxtColr" />
                    <input type="text" name="lastname" placeholder="Type Lastname" className="input input-bordered input-lg w-full max-w-xs text-buttonTxtColr" />  
                </div>

                <div className="mt-[32px]">
                    <input type="email" name="email" placeholder="Type Email" className="input input-bordered input-lg w-full text-buttonTxtColr" />
                </div>

                <div className="mt-[39px] w-full">
                    <button className="btn btn-block text-buttonTxtCol">
                        Subscribe to Mail
                    </button>
                </div>
            </form>
            
        </div>
    )
}
