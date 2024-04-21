export const Input = ({ label, type, placeholder, className }) => {
  return (
    <>
      <label htmlFor={className}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        id={className}
      />
    </>
  );
};
