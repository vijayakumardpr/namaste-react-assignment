import { useRouteError } from "react-router-dom"

const Error =() =>{
    console.log(useRouteError());
    const err = useRouteError()
    return (
        <div>
            <h2>{err.status} - {err.statusText}</h2>
        </div>
    )
}

export default Error