import {Outlet,Navigate } from 'react-router-dom';
const ProtectedRouter=()=>{
    const tokenExists = () => {
        const token = localStorage.getItem("token");
        return token !== "";
      };
    
      // Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que
      // Importa es que valide si el usuario está loggeado o no
      if (tokenExists()) {
        return <Outlet />;
      } else {
        return <Navigate to="/" />;
      } 



}
export default ProtectedRouter;