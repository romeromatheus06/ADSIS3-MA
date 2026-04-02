const produtos = {
	"123": {"nome": "lepo", "preco": 9.90},
	"456": {"nome": "vapo", "preco": 19.90},
	"789": {"nome": "la-ele", "preco": 29.90},
	"147": {"nome": "ai dentu", "preco": 39.90}
};

let carrinho = [];

const audio = new Audio("bip.mp3");

window.onload = () => {
	document.getElementById("cod").focus();
};

function addProduto() {
	const codElement = document.getElementById("cod");
	const qtdElement = document.getElementById("qtd");

	const codValue = codElement.value;
	const qtdValue = Number(qtdElement.value);

	if (!produtos[codValue]) {
		alert("Produto não cadastrado");
		return;
	}

	const produtoBase = produtos[codValue];

	const item = {
		nome: produtoBase.nome,
		preco: produtoBase.preco,
		quantidade: qtdValue,
		subTot: produtoBase.preco * qtdValue
	};

	carrinho.push(item);

	audio.currentTime = 0;
	audio.play();

	codElement.value = "";
	qtdElement.value = 1;

	atualizaTela();
}

function atualizaTela() {
	const lista = document.getElementById("lista");
	const totalElement = document.getElementById("total");

	lista.innerHTML = "";

	let total = 0;

	carrinho.forEach((item) => {
		total += item.subTot;

		const li = document.createElement("li");
		li.className = "list-group-item";

		li.innerHTML = `
			<div class="d-flex justify-content-between">
				<div>
					<strong>${item.nome}</strong><br>
					<small>${item.quantidade} x R$ ${item.preco}</small>
				</div>
				<strong>R$ ${item.subTot.toFixed(2)}</strong>
			</div>
		`;

		lista.appendChild(li);
	});

	totalElement.innerText = `Total: R$ ${total.toFixed(2)}`;
}