import userRepository from "./userRepository"


interface IAuthOk{
    status: "ok",
    user: {
        id: number,
        username: string,
        email: string,
        password: string,
        // role?: string
        role: string | null
    }
}

interface IAuthError{
    status:"error",
    message: string,
}

interface IUserData{
    username: string,
    email: string,
    password: string,
    role: string 
}




async function authLogin(password:string, email: string): Promise<IAuthOk | IAuthError> {
    const user = await userRepository.findUserByEmail(email)

    if (!user) {
        return {status:"error", message: "no user"}
    }
    if (user.password != password) {
        return {status:"error", message: "paroli ne podhodyat"}
    }
    
    console.log(user)
    console.log(typeof user)
    return {status : "ok" , user: user}
}

async function authRegistration(userData: IUserData): Promise<IAuthOk | IAuthError> {
    const user = await userRepository.findUserByEmail(userData.email)

    if (user){
        return { status:"error", message:"user exists" }
    }

    const newUser = await userRepository.createUser(userData)

    if (!newUser){
        return{ status:"error", message:"err user" }
    }
    return{ status:"ok" , user: newUser}

}

const userService = {
    authLogin: authLogin,
    authRegistration: authRegistration
}

export default userService

