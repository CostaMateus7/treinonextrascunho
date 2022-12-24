import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Comentário() {
  const router = useRouter();
  const { todoId } = router.query;
  const { comentId } = router.query;
  return (
    <>
      <h1>
        Comentário:
        {comentId}
        <br />
        Todo:
        {todoId}
      </h1>
      <Link href={`/todos/${todoId}`}>Voltar</Link>
    </>
  );
}
