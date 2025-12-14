const Roadmaps = () => {
  const steps = ["HTML", "CSS", "JavaScript", "React", "Projects"];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Web Development Roadmap</h1>

      <ul className="space-y-3">
        {steps.map((step, i) => (
          <li
            key={i}
            className="bg-white border rounded-xl p-4 flex justify-between"
          >
            <span>{step}</span>
            <span className="text-sm text-gray-400">Pending</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roadmaps;
