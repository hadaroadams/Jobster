interface DashInput<T> {
  ({}: {
    name: T;
    type: T;
    value: T;
    label: T;
    profile?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }): JSX.Element;
}

const DashInput: DashInput<string> = ({
  name,
  type,
  value,
  profile,
  label,
  onChange,
}) => {
  return (
    <div className="">
      <label htmlFor={name}>{label}</label>
      {profile ? (
        <input
          type={type}
          onChange={onChange}
          name={name}
          defaultValue={value}
        />
      ) : (
        <input type={type} onChange={onChange} name={name} value={value} />
      )}
    </div>
  );
};

export default DashInput;
