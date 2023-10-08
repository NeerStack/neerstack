import Swal from "sweetalert2"

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
})

export const ToastAlert = (msg, icon)=>{
    if(msg || icon){
         return Toast.fire({
            title: msg,
            icon: icon
        })
    }

}
