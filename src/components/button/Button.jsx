import './Button.css'

const Button = ({handlerChange}) => {

    return (
        <div>
            <button type="button" onClick={() => { handlerChange() }}>Dame una frase</button>
        </div>
    );

}

export default Button;