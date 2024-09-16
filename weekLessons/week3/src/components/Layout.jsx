import Greeting from "./Greeting";

export default function Layout({children}){

    // const {children} = props
    return (
        <div className="layout">
            {children}
        </div>
    )
}