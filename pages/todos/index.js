import Link from 'next/link';
import Styles from '../../styles/Todos.module.css';

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos');
  const response = await data.json();
  return {
    props: { response },
  };
}

export default function Todos({ response }) {
  return (
    <>
      <h1>Todos</h1>
      <ul className={Styles.todos}>
        {response.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <Link href={`/todos/${todo.id}`}>Entrar</Link>
          </li>
        ))}
      </ul>
    </>

  );
}
