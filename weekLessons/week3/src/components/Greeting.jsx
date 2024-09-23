
export default function Greeting(props){

    const {name, occupation} = props.person;

    return <p>Hello! My name is {name}
    and I am a {occupation}
    </p>
}