import colorNames from "colornames";

const InputText = ({ color, setColor, setHexValue, blackFont, setBlackFont }) => {

    return (
      <form >
        <label htmlFor="colorInput">
          <input
            type="text"
            name="colorInput"
            placeholder="Type a color name"
            autoFocus
            required
            value={color}
            onSubmit={(e) => e.preventDefault}
            onChange={(e) => {
              setColor(e.target.value);
              setHexValue(colorNames(e.target.value));
            }}
          />
        </label> 
        <button
          type="button"
          onClick={ () => setBlackFont(!blackFont) }
        >Change Text Color</button>
      </form>
    );
}

export default InputText;