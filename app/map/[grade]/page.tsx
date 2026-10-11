import Link from "next/link";

const sampleUnits = [
  { id: "add", title: "덧셈", order: 1 },
  { id: "sub", title: "뺄셈", order: 2 },
  { id: "mul", title: "곱셈", order: 3 },
  { id: "div", title: "나누셈", order: 4 },
];

export default function UnitMap({ params }: { params: { grade: string } }) {
  const gradeName =
    params.grade === "elementary"
      ? "초등"
      : params.grade === "middle"
      ? "중등"
      : "고등";

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{gradeName} 단원 맵</h2>
      <div className="space-y-3">
        {sampleUnits.map((unit) => (
          <Link
            key={unit.id}
            href={`/quiz/${params.grade}/${unit.id}`}
            className="block p-4 bg-white rounded-xl shadow hover:bg-blue-50 transition"
          >
            <span className="font-medium">{unit.order}. {unit.title}</span>
          </Link>
        ))}
      </div>
      <Link href="/" className="text-blue-600 underline">
        ← 학년 선택으로
      </Link>
    </div>
  );
}
