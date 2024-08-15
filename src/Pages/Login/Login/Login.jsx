import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
    const {signInUsingGoogle,setUser,setError,setLoading} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state)

    const handleGoogleSignIn = () =>{
        signInUsingGoogle()
        .then((result) => {
            setUser(result.user)
            navigate(location.state)
          }).catch((error) => {
           setError(error.message)
          }).finally(()=> setLoading(false))
          ;
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-primary">Sign In With Google</button>

        </div>
    );
};

export default Login;