import { createContext, useContext } from "react"

const UserContext = createContext({
    user: {
        name: "vijayakumar",
        email: "vijayakumar@gmail.com",
    }
})


export default UserContext




