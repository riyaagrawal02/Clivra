import Button from "../components/ui/Button";

const AskDoubt = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-2">Ask a Doubt</h1>
      <p className="text-gray-500 mb-6">
        No judgement. Seniors are here to help 🌱
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Doubt title"
          className="w-full border rounded-xl px-4 py-3"
        />

        <textarea
          rows="6"
          placeholder="Explain your doubt clearly"
          className="w-full border rounded-xl px-4 py-3"
        />

        <input
          type="text"
          placeholder="Tags (comma separated)"
          className="w-full border rounded-xl px-4 py-3"
        />

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" />
          Ask anonymously
        </label>

        <Button>Submit Doubt</Button>
      </form>
    </div>
  );
};

export default AskDoubt;
