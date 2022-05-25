const DisplayColor = ({ color }) => {

    return (
        <div className="square" style={{backgroundColor:color}}>
            <p>{color}</p>
        </div>
    );
}

export default DisplayColor;