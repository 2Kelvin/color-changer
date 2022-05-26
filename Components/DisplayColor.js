const DisplayColor = ({ color, hexValue, blackFont }) => {

    return (
        <div
            className="square"
            style={{
                backgroundColor: color,
                color: blackFont ? "black" : "white"
            }}
        >
            <p>{color ? color : "Add a Color"}</p>
            <p>{ hexValue ? hexValue : null }</p>
        </div>
    );
}

DisplayColor.defaultProps = {
    color: "Type in a color"
};

export default DisplayColor;