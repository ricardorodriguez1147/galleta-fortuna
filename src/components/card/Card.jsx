import '..card/Card.css';

function Card({ phrase }) {

        return (
            <>
                <div className='container-phrase' style={{ backgroundColor: phrase.colorfondo }}>
                    <h2 style={{ color: phrase.colorletra }}>Frase</h2>
                    <p style={{ color: phrase.colorletra }}>{phrase.phrase}</p>
                    <h2 style={{ color: phrase.colorletra }}>Autor</h2>
                    <p style={{ color: phrase.colorletra }}>{phrase.author}</p>
                </div>
            </>
    
        );

}


export default Card;