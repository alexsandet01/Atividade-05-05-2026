const produtos = [
{ nome: "HQ The Boys", descricao: "Uma história brutal e realista onde heróis são corruptos e um grupo de humanos enfrenta esses 'deuses' sem limites.", preco: 50000000, imagem: "./Imagens/the-boys-11.webp" },

{ nome: "HQ Maskara", descricao: "Comédia insana com um cara comum que encontra uma máscara mágica que transforma ele em um ser totalmente louco e poderoso.", preco: 1578, imagem: "./Imagens/Maskara.jpg" },

{ nome: "HQ Spawn", descricao: "Um anti-herói sombrio que voltou do inferno com poderes demoníacos buscando vingança e redenção.", preco: 106, imagem: "./Imagens/Spawn.webp" },

{ nome: "HQ Batman", descricao: "O Cavaleiro das Trevas combate o crime em Gotham usando inteligência, tecnologia e pura determinação.", preco: 207, imagem: "./Imagens/Batman.webp" },

{ nome: "HQ Deadpool", descricao: "Um mercenário tagarela e imortal que mistura ação insana com humor totalmente sem filtro.", preco: 809, imagem: "./Imagens/Deadpool.webp" },

{ nome: "HQ Invincible", descricao: "A jornada de um jovem herói descobrindo seus poderes enquanto enfrenta desafios brutais no mundo dos super-humanos.", preco: 1276, imagem: "./Imagens/Invincible-144-000.jpg" },

{ nome: "HQ Justiceiro", descricao: "Um vigilante implacável que combate o crime com métodos extremos após perder tudo para a violência.", preco: 2589, imagem: "./Imagens/Justiceiro.webp" },

{ nome: "HQ Liga da Justiça", descricao: "Os maiores heróis do planeta se unem para proteger a Terra de ameaças gigantescas.", preco: 1599, imagem: "./Imagens/Liga Justica.jpg" },

{ nome: "HQ Superman", descricao: "O herói mais poderoso da Terra luta pela justiça, esperança e proteção da humanidade.", preco: 367, imagem: "./Imagens/SuperMan.jpg" },

{ nome: "HQ Watchmen", descricao: "Uma visão sombria e realista dos heróis, explorando moralidade, política e o verdadeiro custo do poder.", preco: 413, imagem: "./Imagens/Watchmen.jpg" },

{ nome: "HQ Sandman", descricao: "Uma história profunda e poética sobre sonhos, realidade e o universo místico que conecta tudo.", preco: 320, imagem: "./Imagens/SandMan.jpg" },

{ nome: "HQ Hellboy", descricao: "Um demônio criado por humanos que luta contra forças sobrenaturais para proteger o mundo.", preco: 180, imagem: "./Imagens/HellBoy.webp" },

{ nome: "HQ V de Vingança", descricao: "Uma história revolucionária sobre liberdade e luta contra um governo opressor.", preco: 100, imagem: "./Imagens/V de Vingança.jpg" },

{ nome: "HQ X-Men", descricao: "Mutantes com habilidades incríveis lutam por aceitação em um mundo que os teme.", preco: 700, imagem: "./Imagens/X-Men.jpg" },

{ nome: "HQ Titas", descricao: "Um grupo de jovens heróis que aprendem a trabalhar em equipe enquanto enfrentam grandes ameaças.", preco: 800, imagem: "./Imagens/Titas.jpg" },

{ nome: "HQ Lobo", descricao: "O anti-herói mais insano do universo, conhecido por sua força absurda e personalidade caótica.", preco: 3200, imagem: "./Imagens/Lobo.jpg" },
   
];

let carrinho = [];

const listaProdutos = document.getElementById("produtos");
const listaCarrinho = document.getElementById("listaCarrinho");
const total = document.getElementById("total");

// Mostrar produtos
produtos.forEach((produto, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${produto.imagem}">
        <h4>${produto.nome}</h4>
        <p>R$ ${produto.preco}</p>
        <button onclick="adicionar(${index})">Adicionar</button>
    `;

    listaProdutos.appendChild(card);
});

// Adicionar produto
function adicionar(index) {
    carrinho.push(produtos[index]);
    atualizarCarrinho();
}

// Remover produto
function remover(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Atualizar carrinho
function atualizarCarrinho() {
    listaCarrinho.innerHTML = "";

    carrinho.forEach((item, index) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <img src="${item.imagem}" width="50">
            ${item.nome} - R$ ${item.preco}
            <button onclick="remover(${index})">Remover Produto</button>
        `;

        listaCarrinho.appendChild(div);
    });

    calcularTotal();
}

// Calcular total
function calcularTotal() {
    const soma = carrinho.reduce((acc, item) => acc + item.preco, 0);
    total.textContent = soma;
}