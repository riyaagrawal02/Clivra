const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4 hidden md:block">
      <h2 className="font-semibold mb-4">Topics</h2>
      <ul className="space-y-2 text-sm text-gray-600">
        <li className="hover:text-indigo-600 cursor-pointer">Web Dev</li>
        <li className="hover:text-indigo-600 cursor-pointer">DSA</li>
        <li className="hover:text-indigo-600 cursor-pointer">AI / ML</li>
        <li className="hover:text-indigo-600 cursor-pointer">Career</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
