import { createUserFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"

const Login = () => {

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserFromAuth(user)
  }

  return (
    <div>
        <h1>This is signin page</h1>
        <button type="submit" onClick={logGoogleUser}>Sign IN</button>
    </div>
  )
}

export default Login
