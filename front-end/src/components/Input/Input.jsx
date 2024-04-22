import './Input.css';

export const Input = ({ label, type, placeholder, className, id }) => {
  return (
    <>
      {label ? (
        <>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            placeholder={placeholder}
            className={className}
            id={id}
          />
        </>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={className}
          id={id}
          />
        )}
    </>
  );
};
