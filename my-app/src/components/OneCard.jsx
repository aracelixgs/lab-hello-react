function OneCard(props) {
    console.log("HOLA", props)

    const { image, title, description } = props

    const containerStyle = {
        color: "#282c34",
        display: "flex",
        
    }


return (
    <div style={containerStyle} id="container-icon">
        <img src={image} alt="Image" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
)
}


export default OneCard;