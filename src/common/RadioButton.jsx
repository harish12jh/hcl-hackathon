export const RadioButton = ({ options, onChange }) => {
  const onSiteChanged = (e) => onChange(e.currentTarget.value);
  return options.map((label) => (
    <>
      <input
        type="radio"
        id={label.name}
        name={label.name}
        value={label.value}
        onChange={onSiteChanged}
      />
      {label.value}
    </>
  ));
};
