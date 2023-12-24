// params is an object with the route parameters with id as a string

export default function QuizPage({ params }: { params: { id: string } }) {
  return (
    <section>
      <h1>Quiz {params.id}</h1>
    </section>
  );
}
