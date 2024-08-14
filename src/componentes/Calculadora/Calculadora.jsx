import { useState } from 'react';

import './estilo.css'

function calcula () {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calculaIMC = () => {
        const resultado = peso / (altura * altura);
        setImc (resultado.toFixed(2));

        let categoriaIMC = '';
        if (resultado < 18.5) {
            categoriaIMC = 'Abaixo do peso';
        } else if (resultado >= 18.5 && resultado < 24.9){
            categoriaIMC = 'Peso normal';
        } else if (resultado >= 25 && resultado < 29.9){
            categoriaIMC = 'Sobrepeso';
        } else {
            categoriaIMC = 'Obesidade';
        }
        setClassificacao(categoriaIMC);
    };

    return (
        <div className="Calculadora">
            <h1>Calculadora IMC</h1>
            <label>Peso(kg):</label>
            <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)}/>
            <label>Altura(m):</label>
            <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)}/>
            <button onClick={calculaIMC}>Calcular IMC</button>
            {imc && (
                <div>
                    <h2>Seu IMC é: {imc}</h2>
                    <p>Na categoria: {classificacao}</p>
                </div>
            )}
        </div>
    );
}

export default calcula;