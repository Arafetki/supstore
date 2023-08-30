import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"

const Login = () => {

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    console.log(response.user)
  }

  return (
    <div>
        <h1>This is signin page</h1>
        <button type="submit" onClick={logGoogleUser}>Sign IN</button>
    </div>
  )
}

export default Login
