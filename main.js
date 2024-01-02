let adicionados = 0;

function adicionar(){

    let item = document.getElementById("item").value;
    let descri = document.getElementById("descri").value;
    let und = document.getElementById("und").value;
    let qtd = document.getElementById("QTD").value;
    let valorUnitario = document.getElementById("Vunit").value;
    let valorTotal = (valorUnitario * qtd);
    
    adicionados += 1;

    let tabela = document.querySelector(".table tbody"); 
    
    let novaLinha = `<tr id="${adicionados}">
                        <th>${item}</th>
                        <th>${descri}</th>
                        <th>${und}</th>
                        <th>${qtd}</th>
                        <th>${valorUnitario}</th>
                        <th>R$ ${valorTotal}</th>
                    </tr>`;

    tabela.insertAdjacentHTML('beforeend', novaLinha);

    exibirItens();    
}


function coletarValoresCorpo(){
    let numeroReq = document.getElementById("numeroReq").value; 
    let tipoEmpenho = document.getElementById("tipo-empenho").value; 
    let RSP = document.getElementById("RSP").value;
    let orgaoGerenciador = document.getElementById("OrgaoGerenciador").value;
    let condicao = document.getElementById("condicao").value;

    let nomeEmpresa = document.getElementById("nomeEmpresa").value;
    let cnpj = document.getElementById("CNPJ").value;
    let tel = document.getElementById("tel").value;
    let mail = document.getElementById("mail").value;

    let nomeAprov = document.getElementById("nomeAprov").value;
    let cpfAprov = document.getElementById("cpfAprov").value;
    let postoAprov = document.getElementById("postoAprov").value;

    let nomeFiscal = document.getElementById("nomeFiscal").value;
    let cpfFiscal = document.getElementById("cpfFiscal").value;
    let postoFiscal = document.getElementById("postoFiscal").value;

    let nomeOd = document.getElementById("nomeOd").value;
    let cpfOd = document.getElementById("cpfOd").value;
    let postoOd = document.getElementById("postoOd").value;

    let pi = document.getElementById("PI").value;
    let nc = document.getElementById("NC").value;
    let np = document.getElementById("NP").value;

    console.log(numeroReq);
    console.log(tipoEmpenho);
    console.log(RSP);
    console.log(orgaoGerenciador);
    console.log(condicao);
    console.log(nomeEmpresa);
    console.log(cnpj);
    console.log(tel);
    console.log(mail);
    console.log(nomeAprov);
    console.log(cpfAprov);
    console.log(postoAprov);
    console.log(nomeFiscal);
    console.log(cpfFiscal);
    console.log(postoFiscal);
    console.log(nomeOd);
    console.log(cpfOd);
    console.log(postoOd);
    console.log(pi);
    console.log(nc);
    console.log(np);
}

function removerItem(){
    let itemARemover = document.getElementById(`${adicionados}`);
    itemARemover.remove();
    adicionados -= 1;
}

function exibirItens(){
    let tabelaCorpo = document.querySelector(".table");
    tabelaCorpo.classList.remove("naoAdicionado");

    let valorTotalReq = document.querySelector("#valor-total");
    valorTotalReq.classList.remove("naoAdicionado");

    let botaoRemover = document.querySelector("#button-remover");
    botaoRemover.classList.remove("naoAdicionado");
}