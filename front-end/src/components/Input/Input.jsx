import "./Input.css";

export const Input = ({
  label,
  classLabel,
  type,
  placeholder,
  classInput,
  name,
  id,
  onChange,
}) => {
  return (
    <>
      {label ? (
        <>
          <label htmlFor={id} className={classLabel}>{label}</label>
          <input
            type={type}
            placeholder={placeholder}
            className={classInput}
            name={name}
            id={id}
            onChange={onChange}
            required
          />
        </>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={classInput}
          name={name}
          id={id}
          onChange={onchange}
          required
        />
      )}
    </>
  );
};
