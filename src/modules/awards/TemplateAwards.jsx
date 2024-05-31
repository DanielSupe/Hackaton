import React, { useEffect, useState } from "react";
import SideMenu from "../homeMentor/components/SideMenu";
import { Description } from "@mui/icons-material";
import TableH from "./components/TableH";
import { Button, Input } from "reactstrap";
import Popup from "./components/Popup";
import { Avatar } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateAwards, getAwards } from "../../store/Slices/Awards/AwardSlice";
import { SwalAlert } from "../../helpers/swals";
import AwardsList from "../../common/components/AwardsList";
import StoreIcon from '@mui/icons-material/Store';
import Swal from "sweetalert2";
export function TemplateAwards() {


  const dispatch = useDispatch();
  // Función SiteMenu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const handleToggleMenu = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  const { awards } = useSelector((state) => ({
    awards: state.Award.awards,
  }))

  const [form, setForm] = useState({ Titulo: "", Coronas: "", Descripcion: "", UrlImage: "" });

  const handleForm = (namekey, change) => {
    setForm({
      ...form,
      [namekey]: change
    })
  }

  const encabezados = ["Coronas", "Titulo", "Descripcion", "UrlImage"]



  const deleteFile = (titleFile) => {

    Swal.fire({
      text: `¿Estas seguro de \n borrar el premio "${titleFile}"?`,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: true,
      customClass: {
        popup: 'large-text',
        cancelButton: "cancelButtonSwal",
        confirmButton:"confirmButtonSwal" // Aplica la clase de tamaño de fuente al cuadro de diálogo
      },
      didOpen: () => {
        const container = document.querySelector('.swal2-container');
        container.style.zIndex = '9999';
      }
    }).then((result) => {
      if (result.isConfirmed) {
        let list = [...awards];
        const newArray = list.filter(item => item.Titulo !== titleFile);
        dispatch(UpdateAwards(newArray));
      } 
    });
  }

  const onClonePopup = () => {
    setPopUp(false);
  }


  useEffect(() => {
    const { Titulo, Coronas, Descripcion, UrlImage } = form;
    if (Titulo && Coronas && Descripcion && UrlImage) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [form])

  useEffect(()=>{
    dispatch(getAwards())
  },[])

  const existeTitulo = (lista, tituloBuscado) => {
    return lista.some(item => item.Titulo === tituloBuscado);
  };


  const createAward = () => {
    console.log(awards,"llegaron awards")
    if(awards){
      let list = awards;
      if(existeTitulo(list,form.Titulo)){
        SwalAlert("Error",`Ya existe este titulo en los premios`,"error")
      }else{
        console.log("entro resto de veces",list)
        const newAwards = [...awards, form];
        dispatch(UpdateAwards(newAwards));
        setForm({ Titulo: "", Coronas: "", Descripcion: "", UrlImage: "" })
        onClonePopup()
      }
      
    }else{
      console.log("entro primera vez")
      dispatch(UpdateAwards([form]))
      setForm({ Titulo: "", Coronas: "", Descripcion: "", UrlImage: "" })
      onClonePopup()
    }
  }


  return (
    <div className="min-h-full w-full flex bg-no-repeat bg-cover box-border bg-[#f4f4f4]"
    >
      <SideMenu onToggle={handleToggleMenu} />
      <div
        className={`transition-all duration-300 flex-grow h-auto ${isMenuOpen ? "ml-64" : "ml-0 w-full"
          }`}
      >
        <main className="w-full">
            <div className="h-auto w-full box-border px-[5%] py-6 ">
              <div className='w-full max-h-[70vh] flex flex-col overflow-hidden'>
                <div className="flex justify-end items-center box-border m-4 ">
                  <Button onClick={() => { setPopUp(true) }} className="p-4 bg-gray-800 rounded-md text-white">Añadir Premio</Button>
                </div>
                {awards && awards.length > 0 ? (<TableH deleteFile={deleteFile} headers={encabezados} data={awards} />):<p>No tienes premios asignados</p>}
              </div>
              <div className="w-full h-auto mt-10 flex flex-col md:flex-row justify-center items-center">
                <div className=" w-[40%] h-auto box-border md:mr-12"><Avatar src="/Images/HomeMentor/Familia.png"/></div>
                <div className="w-[60%] h-auto">
                  <span className=" text-start font-medium text-2xl flex">Vista Previa <StoreIcon/></span>
                  {awards && awards.length > 0 ? (<AwardsList listado={awards}/>):"Agrega unos premios para tu heroe y podras verlos aqui!"}
                </div>
              </div>
            </div>
        </main>
      </div>

      <Popup onClose={onClonePopup} isOpen={popUp}>
        <div className=" flex-grow box-border p-4 w-full flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 gap-6 max-h-[40%]">
            {encabezados.map((campo) => {
              return (
                <Input type={campo != "Coronas" ? "text" : "number"} className=" border-b-2 border-gray-600 p-2" placeholder={campo} onChange={(e) => { handleForm(campo, e.target.value) }} value={form[campo]} key={`${campo}-inputs`} />
              )
            })}
          </div>
          <div className="w-full box-border p-2 flex justify-end items-center">
            <Button disabled={disabled} onClick={() => { createAward() }} className="p-4 bg-gray-800 rounded-md text-white">Agregar</Button>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default TemplateAwards;