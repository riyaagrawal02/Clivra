import Badge from "../components/ui/Badge";

const Feed = () => {
  const questions = [
    {
      id: 1,
      title: "How to start DSA as a beginner?",
      tags: ["DSA", "Beginner"],
      author: "Anonymous",
    },
    {
      id: 2,
      title: "React vs Next.js for placements?",
      tags: ["React", "Career"],
      author: "Senior Mentor",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold mb-4">Community Feed</h1>

      {questions.map((q) => (
        <div
          key={q.id}
          className="bg-white border rounded-2xl p-5 hover:shadow transition"
        >
          <h2 className="font-semibold">{q.title}</h2>

          <div className="flex gap-2 mt-2">
            {q.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-3">
            Asked by {q.author}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
