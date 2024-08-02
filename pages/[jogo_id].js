import { useRouter } from 'next/router';
import placaresData from '../data/placares.json';

const Jogo = ({ jogo }) => {
  if (!jogo) {
    return <div>Jogo não encontrado</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
        <h1>Placar do Jogo {jogo.jogo_id}</h1>
        <p>Times: {jogo.jogo_times.join(' vs ')}</p>
        <p>Placar: {jogo.jogo_placar.join(' - ')}</p>
        <p>Vencedor: {jogo.jogo_vencedor}</p>
        <p>Horário: 15:00</p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = placaresData.placares.map((jogo) => ({
    params: { jogo_id: jogo.jogo_id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const jogo = placaresData.placares.find(jogo => jogo.jogo_id === params.jogo_id);

  return { props: { jogo } };
}

export default Jogo;
