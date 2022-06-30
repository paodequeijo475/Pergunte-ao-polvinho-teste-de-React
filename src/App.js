import './App.css';
import React from 'react';

function App() {
  var numero = 0
  function funcoes () {
    adivinha()
    contagemlick()
  };
 function carregar () {
    let corpo = document.getElementById('App')
    let imagem = document.getElementById('imagemaleatoria')
    let msg = document.getElementById('msg')
    let data = new Date()
    let horariohora = data.getHours
    let horas = String(data.getHours()).padStart(2, '0')
    let minutos = String(data.getMinutes()).padStart(2, '0')
    msg.innerHTML = `Agora são ${horas}:${minutos}`

    if (horariohora < 12) {
        imagem.src = 'https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?auto=compress&cs=tinysrgb&w=600'
        corpo.style =  'background-image: linear-gradient(45deg,rgb(255, 228, 77),rgb(255, 159, 32))'
    } else if (horariohora < 18) {
        imagem.src = 'https://images.pexels.com/photos/48207/sunset-sky-sun-cloud-48207.jpeg?auto=compress&cs=tinysrgb&w=600'
        corpo.style =  'background-image: linear-gradient(45deg,rgb(233, 150, 27),rgb(238, 62, 9))'
    } else {
        imagem.src = 'https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?auto=compress&cs=tinysrgb&w=600' 
        corpo.style =  'background-image: linear-gradient(45deg,rgb(121, 186, 216),rgb(7, 53, 97))'
    }
};
        const adivinha = () => {
            let random = (min,max) => Math.floor(Math.random() * (max - min) + min);
            let option1 = document.getElementById('Opcao1')
            let option2 = document.getElementById('Opcao2')
            let res = document.getElementById('res')
            let input1 = (option1.value)
            let input2 = (option2.value)
            let aleatoriedade = [`${input1}`,`${input2}`]
            let escolhafinal = (aleatoriedade[random(0,aleatoriedade.length)])
            res.innerHTML = `O polvo escolheu a opção : ${escolhafinal}`
        };
        const contagemlick = () => {
            let img = document.getElementById('img')
            numero++
            let pontuacao = document.getElementById("pontuacao")
            if (numero === 1) {
                pontuacao.innerHTML = (`Voce clicou para escolher , ${numero} vez `)
            } else if (numero < 10){
                pontuacao.innerHTML = (`Voce clicou para escolher , ${numero} vezes `)
                img.src = 'https://pergunteaopolvo.com.br/static/media/polvo.3253b186.webp'
            } else {
                numero = 0
                pontuacao.innerHTML = (`Para de clicar por favor , vai acabacar a memoria`)
                img.src = 'https://http2.mlstatic.com/D_NQ_NP_838051-MLB45759777186_042021-O.jpg'
            }
        };
        return (
          <div id="App" onLoad={carregar}>
          <div id="primeiraparte" className='primeiraparte'>
          <div id="foto">
          <img className='imagemaleatoria' id="imagemaleatoria"  src="imagem" alt='imagem' />
          </div>
          <div className='msg' id="msg">Agora são horas</div>
          </div>
          <div id="segundaparte" className='segundaparte'>
          <img className='img' id="img" src="https://pergunteaopolvo.com.br/static/media/polvo.3253b186.webp" alt=""/>     
          <h1>Escreva duas palavras nos blocos de texto para o polvo escolher</h1>  
          <input type="text" id="Opcao1"/> vs.
          <input type="text" id="Opcao2"/> <br/>
          <button type="button" id="botaodeativar" onClick={funcoes}>Adivinhar</button>  
          <div id="res">Clica no botão de adivinhar</div>
          <div id="pontuacao" className='final'>Clique no botão de adivinhar</div>
          </div>
          </div>
        );
}



export default App;
