import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Logout=()=>{
const navigate=useNavigate();

const logout = () => {
    localStorage.setItem("token", "");
  navigate("/");
  }
return(<div>

<Button variant="primary" onClick={logout}>
        Logout
      </Button>


</div>)
}
export default Logout;