import React, { useEffect, useState } from 'react'
import SideMenu from '../../homeMentor/components/SideMenu'
import { GetHeroe, getAwards } from '../../../store/Slices/Awards/AwardSlice';
import { useDispatch, useSelector } from 'react-redux';
import AwardsList from '../../../common/components/AwardsList';
import { buyAward } from '../../../store/Slices/Heroe/HeroeSlice';
import Swal from 'sweetalert2';

const TemplateAwardHero = () => {

    const  dispatch = useDispatch();

    const { awards,heroe } = useSelector((state) => ({
        awards: state.Award.awards,
        heroe: state.Award.heroe
      }))

      useEffect(()=>{
        console.log("awards y hero",awards,heroe)
      },[awards,heroe])

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = (isOpen) => {
      setIsMenuOpen(isOpen);
    };

    useEffect(()=>{
        dispatch(getAwards())
        dispatch(GetHeroe())
      },[])


      const buyAwardFun = (titulo,descripcion,coronas)=>{

        Swal.fire({
            text: `¿Estas seguro de \n comprar "${titulo}"?`,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            reverseButtons: true,
            customClass: {
              popup: 'large-text',
              cancelButton: "cancelButtonSwal",
              confirmButton:"confirmButtonSwalHeroe" // Aplica la clase de tamaño de fuente al cuadro de diálogo
            },
            didOpen: () => {
              const container = document.querySelector('.swal2-container');
              container.style.zIndex = '9999';
            }
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(buyAward({
                    Titulo: titulo,
                    Descripcion: descripcion,
                    Coronas: coronas
                }))
            } 
          });
      }

  return (
    <div className="min-h-full w-full flex bg-no-repeat bg-cover box-border bg-[#f4f4f4]"

    >
      <SideMenu onToggle={handleToggleMenu} />
      <div
        className={`transition-all duration-300 w-full h-auto ${isMenuOpen ? "ml-64" : "ml-0 w-full"
          }`}

      >
        <main className="w-full">
          <div className="h-screen overflow-y-auto w-full  flex flex-col justify-start items-center">
            {/* <div className='w-full h-[10vh] text-center flex items-center justify-center'><p className=' text-4xl font-bold'>Tienda</p></div> */}
            <div className='w-full h-[10vh] flex justify-center items-center box-border px-[5%] py-6'>
                <p className=' text-3xl font-medium ml-9'>Tienda</p>
               <span className=' ml-auto flex justify-center items-center'>
                <p className=' text-2xl font-medium'> {heroe ? (heroe.crowns ? heroe.crowns:0):null}</p>
                    <img
                    src="/Images/HomeMentor/crown.png"
                    alt="Corona"
                    className="w-[70px] h-[70px] inline-block mr-[40px]"
                />
               </span>
            </div>
            <div className='w-full h-auto box-border px-[5%] py-6 flex flex-col-reverse md:flex-row justify-center items-center'>
             {awards && awards.length > 0 ? (<AwardsList buyAward={buyAwardFun} listado={awards}/>):"Tu mentor todavia no registra premios"}
             <div className='w-full md:w-[40%] flex justify-center items-center box-border m-4'>
                    <img
                        src="/Images/HomeMentor/MentorTienda.png"
                        alt="Corona"
                        className=" min-h-[250px] max-h-full inline-block mr-[40px]"
                    />
                </div>
            </div>

            
          </div>
        </main>
      </div>
    </div>
  )
}

export default TemplateAwardHero