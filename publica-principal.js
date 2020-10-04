//adicionar botao
var botaoAdicionar = document.querySelector("#adicionar-jogo");
botaoAdicionar.addEventListener("click",function(event){  // a função tem que receber como parametro o próprio evento
		event.preventDefault(); // faz com que nao recarregue a pagina quando clica no botão
		console.log("oi fui clicado");

		var form = document.querySelector("#form-adiciona");  //trás todo o formulario do html para o js

		var jogo = form.jogo.value;    //pego o name do imput junto com o valor;
		var placar = form.placar.value;
		
		var jogoTr = document.createElement("tr");     // cria um elemento no html que  será uma tr ( mas pode ser qualquer outra tag)
		
		var jogoTd = document.createElement("td");
		var placarTd = document.createElement("td");
		var minTemporadaTd = document.createElement("td");
		var maxTemporadaTd = document.createElement("td");
		var recordeMinTd = document.createElement("td");
		var recordeMaxTd = document.createElement("td");

		jogoTd.textContent = jogo;     //pega da variavel o valor do imput
		placarTd.textContent = placar;
		

		jogoTr.appendChild(jogoTd);   // coloca o td dentro do tr igual no hrml
		jogoTr.appendChild(placarTd);
		jogoTr.appendChild(minTemporadaTd);
		jogoTr.appendChild(maxTemporadaTd);
		jogoTr.appendChild(recordeMinTd);
		jogoTr.appendChild(recordeMaxTd);

		var tabela = document.querySelector("#tabela-jogo"); //pega a tabela pacientes do <tbody>

		tabela.appendChild(jogoTr);//coloca o pacienteTr que foi acabado de criar dentro da tabela
});




var random = [12, 24, 10, 32];

// Funcao para retornar o menor valor de um array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};

// Funcao para retornar o maior valor de um array
Array.max = function(array) {
    return Math.max.apply(Math, array);
};

// Agora e so pegar os resultados
// Váriavel contento menor e maior valor
var menorValor = Array.min(random); 
var maiorValor = Array.max(random); 
// testando
console.log(menorValor);
console.log(maiorValor);


var jogos = document.querySelector("#primeiro-jogo");

var tdMinTemporada = jogos.querySelector(".info-min-temporada"); //pego toda a linha do peso
var minTemporada = tdMinTemporada.textContent; //pego somente o texto do peso

var tdMaxTemporada = jogos.querySelector(".info-max-temporada"); 
var maxTemporada = tdMaxTemporada.textContent; 







