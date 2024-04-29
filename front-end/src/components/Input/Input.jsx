import './Input.css';

export const Input = ({ label, type, placeholder, className, name, id, onChange }) => {
  return (
    <>
      {label ? (
        <>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            placeholder={placeholder}
            className={className}
            name={name}
            id={id}
            onChange={onChange}
          />
        </>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={className}
          name={name}
          id={id}
          onChange={onchange}
          />
        )}
    </>
  );
};
