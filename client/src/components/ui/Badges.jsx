const Badge = ({ children }) => {
  return (
    <span className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-600">
      {children}
    </span>
  );
};

export default Badge;
