import { Link } from 'react-router-dom'; 

export default function Layout() {
  return (
    <div className="container">
      <h1>Laboratorium 9</h1>
      <Link to="https://frabjous-gaufre-d861ec.netlify.app" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
        LAB7
      </Link>
      <Link to="https://gilded-taffy-eec9e9.netlify.app" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
        LAB8
      </Link>
      <Link to="/interests" style={{ marginRight: '10px' }}>Zainteresowania</Link>
      <Link to="/about" style={{ marginRight: '10px' }}>O mnie</Link>
      <Link to="/film" style={{ marginRight: '10px' }}>Mój ulubiony film</Link>
      <Link to="/contact" style={{ marginRight: '10px' }}>Kontakt</Link>
      <div className="links" style={{marginTop: '10px'}}>
        <Link to="https://github.com/desirecutieqb/airClone" style={{display: 'Block',fontSize: '20px'}} target="_blank" rel="noopener noreferrer">Link do repozytorium LAB7</Link>
        <Link to="https://github.com/desirecutieqb/desirecutieqb.github.io" style={{display: 'Block',fontSize: '20px'}} target="_blank" rel="noopener noreferrer">Link do repozytorium LAB8</Link>
      </div>
    </div>
  );
}
