import Swal from "sweetalert2";

export const showProgress = () => {
  return Swal.fire({
    title: 'Loading...',
    backdrop: true,
    html: '', 
    width: 500,
    allowEscapeKey: false,
    allowOutsideClick: false,
    timerProgressBar: true,
    allowEnterKey: false,
    didOpen: () => {
      Swal.getContainer().style.zIndex = '9999'; // ajusta este valor según sea necesario
      Swal.showLoading();
    },
  }).then((result) => { });
};


export const SwalAlert = (title,text,icon)=>{
    return(
        Swal.fire({
            title:`${title}`,
            icon:`${icon}`,
            text:`${text}`,
            didOpen: () => {
                const container = document.querySelector('.swal2-container');
            
                container.style.zIndex = '9999';
              }
        })
    )
}

