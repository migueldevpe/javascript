/*var velocidade = 65;

console.log(`Você está a ${velocidade}km/h.`);

if (velocidade >= 60) {
    console.log('Dirija com cuidado! VOCÊ SERÁ AUTUADO.');
} else {
    console.log('Boa! Você está dirigindo com cuidado.');
}

var país = 'BRASIL';

console.log(`Vivendo em ${país}`);

if (país == 'BRASIL') {
    console.log('Você é Brasileiro.');
} else {
    console.log('Você é Estrangeiro.')
}

var idade = 66;

if (idade < 16) {
    console.log('Não vota.');
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional.');
} else {
    console.log('Voto obrigatório.')
} 
 
var agora = new Date();
var horario = agora.getHours();

if (horario >= 12 && horario < 18) {
    console.log(`Agora são exatamente ${horario} horas da tarde.`);
    console.log('Boa tarde!')
} else if (horario >= 18 && horario < 24) {
    console.log(`Agora são exatamente ${horario} da noite.`)
    console.log('Boa noite!')
} else if (horario >= 0 && horario < 6) {
    console.log(`Agora são exatamente ${horario} da madrugada.`)
    console.log('Boa madrugada!')
} else {
    console.log(`Agora são exatamente ${horario} da manhã.`)
    console.log('Bom dia!')
} */

    /*
var horaAtual = new Date();
var hora = horaAtual.getHours();

var minutoAtual = new Date();
var minuto = minutoAtual.getMinutes();

if (hora >= 6 && hora < 12) {
    console.log(`Bom dia! São ${hora}:${minuto}.`)
} else if (hora > 12 && hora <= 18) {
    console.log(`Boa tarde! São ${hora}:${minuto}.`)
} else if (hora > 18 && hora < 24) {
    console.log(`Boa noite! São ${hora}:${minuto}.`)
} else {
    console.log(`Boa madrugada! São ${hora}:${minuto}.`)
}

var diaAtual = new Date();
var dia = diaAtual.getDay();

var nDiaAtual = new Date();
var nDia = nDiaAtual.getDate();

var mêsAtual = new Date();
var mês = mêsAtual.getMonth();

var anoAtual = new Date();
var ano = anoAtual.getFullYear();

switch(mês) {
    case 0:
        mês = 'Janeiro';
        break
    case 1:
        mês = 'Fevereiro';
        break
    case 2:
        mês = 'Março';
        break
    case 3:
        mês = 'Abril';
        break
    case 4:
        mês = 'Maio';
        break
    case 5:
        mês = 'Junho';
        break
    case 6:
        mês = 'Julho';
        break
    case 7:
        mês = 'Agosto';
        break
    case 8:
        mês = 'Setembro';
        break
    case 9:
        mês = 'Outubro';
        break
    case 10:
        mês = 'Novembro';
        break
    case 11:
        mês = 'Dezembro';
        break
}

switch(dia) {
    case 0:
        console.log(`Tenha um ótimo Domingo. ${nDia} de ${mês}, ${ano}.`);
        break
    case 1:
        console.log(`Tenha uma ótima Segunda-Feira. ${nDia} de ${mês}, ${ano}.`);
        break
    case 2:
        console.log(`Tenha uma ótima Terça-Feira. ${nDia} de ${mês}, ${ano}.`);
        break
    case 3:
        console.log(`Tenha uma ótima Quarta-Feira. ${nDia} de ${mês}, ${ano}.`);
        break
    case 4:
        console.log(`Tenha uma ótima Quinta-Feira. ${nDia} de ${mês}, ${ano}.`);
        break
    case 5:
        console.log(`Tenha uma ótima Sexta-Feira. ${nDia} de ${mês}, ${ano}.`);
        break
    case 6:
        console.log(`Tenha um ótimo Sábado. ${nDia} de ${mês}, ${ano}.`);
        break
    default:
        console.log('[ERRO] Dia inválido.')
        break
}

var contador = 1

while (contador <= 10) {
    console.log(`testando ${contador}. MÉTODO WHILE`) //teste lógico no início
    contador++
}

do {
    console.log(`testando ${contador}. MÉTODO DO/WHILE`) //teste lógico no final
    contador++
} while (contador <= 10)

var pHora = new Date();
var hora = pHora.getHours();

hora = hora < 10 ? '0' + hora : hora;

var pMinutos = new Date();
var minutos = pMinutos.getMinutes();

minutos = minutos < 10 ? '0' + minutos : minutos;

console.log(`${hora}:${minutos}`); 

for (var c = 1; c <= 10; c++) {
    console.log(c)
} 

        var pInicio = 1;
        var pFinal = 5;
        var pPasso = 1;

            if (Number(pPasso.value) == 0 ) {
                alert('[ERRO] Passo não pode ser 0.')
            } else {
                var valorInicial = Number(pInicio.value)
                var valorFinal = Number(pFinal.value)
                var valorPasso = Number(pPasso.value)

                for (var x = valorInicial; x <= valorFinal; x += valorPasso) {
                    console.log(x);
                }
            } 

let num = [5, 8, 4, 5, 8, 4];
num[6] = 7;
num.push(1);

console.log(`VETOR: ${num}.`);
console.log(`VETOR EM ORDEM: ${num.sort()}.`);
console.log(`QUANTIDADE DE VETORES: ${num.length}.`);
console.log(`Tem o número 4? Se sim, onde ele está? R: ${num.indexOf(4)}.`);

// FORMA PADRÃO

for (let pos = 0; pos < num.length; pos++) {
    console.log(`O índice ${pos} tem o valor ${num[pos]}.`);
}

// FORMA SIMPLIFICADA

for (let pos in num) {
    console.log(`O índice ${pos} tem o valor ${num[pos]}.`);
}1

let posValor = num.indexOf(1);

if (posValor == -1) {
    console.log('Valor não encontrado.')
} else {
    console.log(`O valor é ${posValor}.`)
} 

*/ /*

function parImpar(n) {
    if (n % 2 == 0) {
        return 'Par!';
    } else {
        return 'Impar!';
    }
}

console.log(parImpar(4));

// OU
// let respota = parImpar(5);
// console.log(resposta);

function soma(n1=0, n2=0) { //"=0" para caso não inserir o número, não dar "NaN". Aí ficaria n1 + 0
    return n1 + n2;
}

console.log(soma(10, 25));

function fatorial(n) {
    let fat = 1;
    for (let x = n; x > 1; x--) {
        fat *= x;
    }
    return fat;
}

console.log(fatorial(5));

function rFatorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * rFatorial(n-1);
    }
}

console.log(rFatorial(5)); */

let array = [1, 2, 3]

const object = {nome: 'MIGUEL', idade: 19, peso: 70.0, engordar(p=0){
    console.log('Engordou')
    this.peso += p;
}}


object.engordar(2)
console.log(`O ${object.nome} engordou ${object.peso}kg.`)