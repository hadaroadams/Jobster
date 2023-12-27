const Selection = ({ name, items, label }: {label:string, items: string[]; name: string }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name}>
        {items.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Selection;
