import './App.css';
import React from 'react';

function App() {
  var numero = 0
  function funcoes () {
    adivinha()
    contagemlick()
  };
 function carregar () {
    let imagem = document.getElementById('imagemaleatoria')
    let msg = document.getElementById('msg')
    let data = new Date()
    let mensagemdehora = data.getHours() + ':' + data.getMinutes()
    let horario = data.getHours
    msg.innerHTML = `Agora são as ${mensagemdehora}`

    if (horario >= 0 && horario < 12) {
        imagem.src = 'https://drgabrielazzini.com.br/wp-content/uploads/2020/06/cfae8-1.jpg'
        msg.innerHTML = `Agora são as ${mensagemdehora} Bom dia`
    } else if (horario < 18) {
        imagem.src = 'https://media-cdn.tripadvisor.com/media/photo-s/0f/34/3b/10/fim-de-tarde.jpg'
        msg.innerHTML = `Agora são as ${mensagemdehora} Boa tarde`
    } else {
        imagem.src = 'https://static8.depositphotos.com/1052928/951/i/600/depositphotos_9517937-stock-photo-moon.jpg'
        msg.innerHTML = `Agora são as ${mensagemdehora} Boa noite`
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
          <body id="App" onLoad={carregar}>
          <div id="primeiraparte">
          <div className='msg' id="msg">Agora são horas</div>
          <div id="foto">
          <img className='imagemaleatoria' id="imagemaleatoria" src="imagem" alt='imagem'/>
          </div>
          </div>
          <div id="segundaparte">
          <img className='img' id="img" src="https://pergunteaopolvo.com.br/static/media/polvo.3253b186.webp" alt=""/>     
          <h1>Escreva duas palavras nos blocos de texto para o polvo escolher</h1>  
          <input type="text" id="Opcao1"/> vs.
          <input type="text" id="Opcao2"/> <br/>
          <button type="button" id="botaodeativar" onClick={funcoes}>Adivinhar</button>  
          <div id="res">Clica no botão de adivinhar</div>
          <div id="pontuacao">Clique no botão de adivinhar</div>
          </div>
          </body>
        );
}



export default App;
