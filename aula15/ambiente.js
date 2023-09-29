let num = [5, 8, 2, 9, 3]

num[5] = 6 //Assim adiciono um valor no vetor na chave 5
num.push(7)//O comando .push adiciona um valor na ultima posição do vetor (array) nao importando o seu tamanho
//num.length // mostra o tamanho do array (vetor) ou seja quantos elementos ele possui
//num.sort() // muda a ordem do array ou seja a posição de cada elemento dentro do array, colocando-os em ordem crescente
console.log(`Nosso vetor é o ${num}`);
console.log(`E este vetor tem ${num.length} posioções de tamanho!`);
console.log(`O primeiro valor do vetor e ${num[0]}`);

let pos = num.indexOf(4)
console.log(`O valor 8 esta na posação ${pos}`);