function adicionar(){
    let nome = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    let amigo = document.createElement('p');
    amigo.innerHTML = nome.value;
    lista.appendChild(amigo);
    nome.value = '';
}

function sortear(){
    let lista = document.getElementById('lista-amigos');
    let listaSorteio = document.getElementById('lista-sorteio');
    let total = lista.children.length;
    let index = Math.floor(Math.random() * total);
    let amigo = lista.children[index];
    listaSorteio.innerHTML = '';
    listaSorteio.appendChild(amigo);
}
function reiniciar(){
    let lista = document.getElementById('lista-amigos');
    let listaSorteio = document.getElementById('lista-sorteio');
    lista.innerHTML = '';
    listaSorteio.innerHTML = '';
}