import Link from 'next/link';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Escolha um Jogo</h1>
      <Link href="/01">
        <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>Jogo 1</button>
      </Link>
      <Link href="/02">
        <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>Jogo 2</button>
      </Link>
    </div>
  );
};

export default Home;
