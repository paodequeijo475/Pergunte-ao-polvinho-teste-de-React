import './App.css';

function App() {
  var numero = 0
  function funcoes () {
  adivinha()
  contagemlick()
  }

  window.onload = function carregar () {
      let msg = document.getElementById('msg')
      let data = new Date()
      let horariohora = data.getHours()
      let horas = String(data.getHours()).padStart(2, '0')
      let minutos = String(data.getMinutes()).padStart(2, '0')
      msg.innerHTML = `Agora são ${horas}:${minutos}`
      if (horariohora < 12) {
        document.getElementById('App').style  = 'background-image : url(https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?auto=compress&cs=tinysrgb&w=600)'
    } else if (horariohora < 18) {
        document.getElementById('App').style  = 'background-image : url(https://images.pexels.com/photos/48207/sunset-sky-sun-cloud-48207.jpeg?auto=compress&cs=tinysrgb&w=600)'
    } else {
        document.getElementById('App').style  = 'background-image : url(https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?auto=compress&cs=tinysrgb&w=600)' 
    }

};
        function adivinha () {
            let random = (min,max) => Math.floor(Math.random() * (max - min) + min);
            let option1 = document.getElementById('Opcao1')
            let option2 = document.getElementById('Opcao2')
            let res = document.getElementById('res')
            let aleatoriedade = [`${option1.value}`,`${option2.value}`]
            let escolhafinal = (aleatoriedade[random(0,aleatoriedade.length)])
            res.innerHTML = `O polvo escolheu a opção : ${escolhafinal}`
        };
        function contagemlick () {
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
          <div id="App">
          <div id="primeiraparte" className='primeiraparte'>
          <div id="foto">
          </div>
          <div className='msg' id="msg">Agora são horas</div>
          </div>
          <div id="segundaparte" className='segundaparte'>
          <img className='img' id="img" src="https://pergunteaopolvo.com.br/static/media/polvo.3253b186.webp" alt=""/>     
          <p id='paragrafo'>Escreva duas palavras para o polvo escolher</p>  
          <input type="text" id="Opcao1"/> vs.
          <input type="text" id="Opcao2"/> <br/>
          <button type="button" id="botaodeativar" onClick={funcoes}>Adivinhar</button>  
          <div id="res" className='resultado'>Clica no botão de adivinhar</div>
          <div id="pontuacao" className='resultado'>Clique no botão de adivinhar</div>
          </div>
          </div>
        );
};
        export default App;