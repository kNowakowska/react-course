const Item = (props) => {
    return(
        <li style={props.active ? {fontWeight: 'bold'} : {color: 'gray'}}>{props.name}</li>
    )
}