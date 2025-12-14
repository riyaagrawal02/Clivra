const Button = ({ children, variant = "primary", ...props }) => {
  const styles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500",
    outline: "border border-gray-300 hover:bg-gray-100",
  };

  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-xl transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
