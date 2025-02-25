import Footer from "../components/footer/Footer"



function Home() {
    return (
        <>
            <div className="flex justify-center bg-gray-300 py-2">
                <div className='grid grid-cols-2 text-teal-800 container'>
                    <div className="flex flex-col justify-center items-center gap-4 py-4">
                        <h2 className='font-bold text-5xl'>
                            Seja bem vindo!
                        </h2>
                        <p className='text-xl text-teal-900'>Medicamentos e Manipulados é aqui!!</p>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://ik.imagekit.io/c2hajdacu/Farmacia/logo_transparent__1_-removebg-preview.png?updatedAt=1740485524702"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
          
            <Footer />
            
        </>
    )
}

export default Home