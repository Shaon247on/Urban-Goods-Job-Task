import { FaGithub, FaSquareXTwitter, FaGoogle } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from '../Hooks/useAuth';


const SocialLogin = () => {
    const { googleLogin, githubLogin, twitterLogin } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    const handleTwitterLogin = () => {
        twitterLogin()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    return (
        <div className='flex gap-10 justify-center items-center'>
            <button onClick={handleGoogleLogin} className='hover:bg-blue-400/40 duration-[400ms] ease-in-out rounded-full'><FaGoogle className='text-[50px]'></FaGoogle></button>
            <button onClick={handleGithubLogin} className='hover:bg-blue-400/40 duration-[400ms] ease-in-out rounded-full'><FaGithub className='text-[50px]'></FaGithub></button>
            <button onClick={handleTwitterLogin} className='hover:bg-blue-400/40 duration-[400ms] ease-in-out rounded-lg'><FaSquareXTwitter className='text-[50px]'></FaSquareXTwitter></button>


        </div>
    );
};

export default SocialLogin;