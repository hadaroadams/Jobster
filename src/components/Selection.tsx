
interface SelectPops{
    name:string,
    items: string[],
    value:string,
    label:string,
    onChange:(e:React.ChangeEvent<HTMLSelectElement>)=>void
}

const Selection = ({ name, items, label,value, onChange}:SelectPops) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} value={value} onChange={onChange}>
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
