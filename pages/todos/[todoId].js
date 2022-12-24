import Link from 'next/link';
// Precisa de duas funções para a navegação dinâmica:
// 1- Renderização total dos dados 2-Renderização de cada página

// Entra nos disponíveis --> Dinâmico
export async function getStaticProps(context) {
  const { params } = context;
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`);
  const todo = await data.json();
  return {
    props: { todo },
  };
}

// Saber o que tem disponível
export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  const paths = data.map((todo) => ({
    params: {
      todoId: `${todo.id}`,
    },
  }));
  return { paths, fallback: false };
}
export default function Todo({ todo }) {
  return (
    <>
      <h1>
        Todo:
        {' '}
        {todo.title}
      </h1>
      <p>
        Comentário: blá blá blá...
        <Link href={`/todos/${todo.id}/coments/1`}>Detalhes</Link>
      </p>
      <p>
        Comentário: blé blé blé...
        <Link href={`/todos/${todo.id}/coments/2`}>Detalhes</Link>
      </p>
      <p>
        Comentário: blí blí blí...
        {' '}
        <Link href={`/todos/${todo.id}/coments/3`}>Detalhes</Link>
      </p>
      <Link href="/todos">Voltar</Link>

    </>
  );
}
