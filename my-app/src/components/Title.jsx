import ironhackLogo from "../images/ironhack-logo-xs.png"

function Title() {

    const titleStyle = {
        backgroundColor: "#282c34",
        color: "white",
        padding: "100px",
        width: "800px",
        height: "400px",
    }


    return (
        <div style={titleStyle} id="title">

            <img src={ironhackLogo} alt="Ironhack" />
            <h1>Say hello to <br />
                ReactJS</h1>
            <p>You will learn to use <br />
                the most popular fronted library, <br />
                and become a super Ninja developer.
            </p>
            <button>Awesome!</button>
        </div>
    )
}

export default Title;