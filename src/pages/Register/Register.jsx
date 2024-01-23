import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from "lottie-react";
import register from "../../assets/register.json"
import Swal from "sweetalert2";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { createUser, handleUpdateProfile } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        setRegisterError('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase character.');
            return;
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
            setRegisterError('Your password should have at least one special character');
            return;
        }

        // Create user
        createUser(email, password)
            .then(() => {
                handleUpdateProfile(name, photo);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setRegisterError(errorMessage);
            });
    };

    return (
        <div className="flex flex-col md:flex-row">
            {/* Left Column with Animation (Replace with your animation content) */}
            <div className="md:w-1/2 lg:w-1/2 hidden md:flex lottie flex-1  mx-20" >
                <Lottie animationData={register} loop={false}></Lottie>
            </div>

            {/* Right Column */}
            <div className="md:w-1/2 lg:w-1/2 p-6">
                <h2 className="text-6xl font-bold my-10 text-center">Please Register</h2>
                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <div className="mb-4 relative">
                            <input className="input input-bordered w-full"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id=""
                                placeholder="Password"
                                required
                            />
                            <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                            </span>
                        </div>
                        {registerError && <p className="text-red-700">{registerError}</p>}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

                <p className="text-center mt-4">
                    Already have an account?{" "}
                    <Link className="text-blue-800 font-bold" to="/login">
                        Login
                    </Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
