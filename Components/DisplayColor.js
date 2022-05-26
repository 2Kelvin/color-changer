const DisplayColor = ({ color }) => {

    return (
        <div className="square" style={{backgroundColor:color}}>
            <p>{color ? color : "No Color"}</p>
        </div>
    );
}

export default DisplayColor;