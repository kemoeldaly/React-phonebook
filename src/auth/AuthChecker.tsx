import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, providers } from '../config/firebase'

interface props {
    children: React.ReactNode;
}

const AuthChecker = ({ children }: props) => {
    const navigate = useNavigate();
// This will just check if the user is logged in, if so, it returns tghe children
// (which are passed as props- it's just whatver component protected or not)
useEffect(() => {
    if (!auth.currentUser) {
        navigate("../")
        signInWithPopup(auth, providers.google)
    }
}, [])
return (
    <>{children}</>
  )
}

export default AuthChecker