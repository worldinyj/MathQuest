import Link from "next/link";

const grades = [
  { id: "elementary", name: "초등", description: "1~6학년" },
  { id: "middle", name: "중등", description: "1~3학년" },
  { id: "high", name: "고등", description: "1~3학년" },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center text-gray-800">학년을 선택해주세요</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {grades.map((grade) => (
          <Link
            key={grade.id}
            href={`/map/${grade.id}`}
            className="block p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <h3 className="text-2xl font-semibold text-blue-600">{grade.name}</h3>
            <p className="text-gray-500 mt-2">{grade.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
