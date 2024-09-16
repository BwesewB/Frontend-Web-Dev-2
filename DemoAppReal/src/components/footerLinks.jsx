export default function footerLinks(props) {

    const {title,links} = props
    const linkedList = links.map(link => <li><a href="">{link}</a></li>)

    return(
        <div>
            <h3>{title}</h3>
            <ul>
                {linkedList}
            </ul>
        </div>
    )
}