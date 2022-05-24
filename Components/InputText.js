

const InputText = ({color, setColor}) => {
    

    return (
        <label htmlFor="colorInput">
        <input
          type="text"
          name="colorInput"
          id="colorInput"
          placeholder="Type a color name"
          required
          autoFocus
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </label> 
    );
}

export default InputText;