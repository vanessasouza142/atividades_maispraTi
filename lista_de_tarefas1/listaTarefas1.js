const prompt = require('prompt-sync')();

/* -----------------------------------------------------------
Instruções para configurar e executar a lista de exercícios localmente:
1. Certifique-se de ter o Node.js instalado em seu sistema. Se não tiver, você pode baixá-lo e instalá-lo a partir do site oficial: https://nodejs.org/
2. Clone ou baixe os arquivos da lista de exercícios para um diretório local em seu computador.
3. Navegue até o diretório onde você salvou os arquivos da lista de exercícios no terminal.
4. Inicialize um novo projeto Node.js no diretório usando o comando `npm init -y` para criar automaticamente um arquivo package.json.
   Este arquivo é útil para gerenciar dependências e outras configurações do projeto.
5. Instale a biblioteca 'prompt-sync' executando o seguinte comando no terminal dentro do diretório do seu projeto: npm install prompt-sync
6. Para executar o código, navegue até o diretório do seu projeto e execute o arquivo usando node nomeDoArquivo.js no terminal.
   Isso iniciará o programa e você poderá interagir com ele através do terminal, fornecendo as entradas necessárias conforme solicitado pelo código.
*/

let questao = parseInt(prompt("Escolha a questão que você quer analisar (1-16): "))

switch (questao) {
  case 1:

  // 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.
  let temp_celsius = prompt("Digite a temperatura em graus Celsius: ")
  if (!isNaN(temp_celsius)) {
    let temp_farenheit = (9 * temp_celsius)/5 + 32
    console.log(`${temp_celsius} graus Celsius corresponde a ${temp_farenheit} graus Fahrenheit.`)
  } else {
    console.log("Por favor, digite um número válido.")
  }
  break;

  case 2:

  // 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
  //    em relação ao total de eleitores.
  console.clear()
  let num_eleitores = prompt("Digite o número de eleitores do município: ")
  let num_votos_brancos = prompt("Digite o número de votos brancos do município: ")
  let num_votos_nulos = prompt("Digite o número de votos nulos do município: ")
  let num_votos_validos = prompt("Digite o número de votos válidos do município: ")

  if (!isNaN(num_eleitores) && !isNaN(num_votos_brancos) && !isNaN(num_votos_nulos) && !isNaN(num_votos_validos)) {
    if (num_eleitores > 0) {
    let percentual_votos_brancos = (num_votos_brancos / num_eleitores) * 100
    let percentual_votos_nulos = (num_votos_nulos / num_eleitores) * 100
    let percentual_votos_validos = (num_votos_validos / num_eleitores) * 100

    console.log(`O percentual de votos brancos é: ${percentual_votos_brancos.toFixed(2).replace('.', ',')}%`)
    console.log(`O percentual de votos nulos é: ${percentual_votos_nulos.toFixed(2).replace('.', ',')}%`)
    console.log(`O percentual de votos válidos é: ${percentual_votos_validos.toFixed(2).replace('.', ',')}%`)
    } else {
      console.log("O número de eleitores deve ser maior que zero.")
    }
  } else {
    console.log("Você digitou algum dado inválido. Por favor, digite um número válido.")
  }
  break;

  case 3:

  /* 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
        ● Some 25 ao primeiro inteiro;
        ● Triplique o valor do segundo inteiro;
        ● Modifique o valor do terceiro inteiro para 12% do valor original;
        ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
        dos primeiros três inteiros.
  */
  let num1 = parseInt(prompt("Digite o primeiro número inteiro: "))
  let num2 = parseInt(prompt("Digite o segundo número inteiro: "))
  let num3 = parseInt(prompt("Digite o terceiro número inteiro: "))
  let num4 = parseInt(prompt("Digite o quarto número inteiro: "))

  if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && !isNaN(num4)) {
    let operacao1 = num1 + 25
    let operacao2 = num2 * 3
    let operacao3 = num3 * 0.12
    num4 = (num1 + num2 + num3)

    console.log("Resultado operacao 1:", operacao1 )
    console.log("Resultado operacao 2:", operacao2 )
    console.log("Resultado operacao 3:", operacao3 )
    console.log("Resultado operacao 4:", num4 )
  } else {
    console.log("Você digitou algum dado inválido. Por favor, digite um número válido.")
  }
  break;

  case 4:
  /* 4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
        aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).
  */
  let nota1 = parseFloat(prompt("Digite a nota da primeira avaliação do aluno: "))
  let nota2 = parseFloat(prompt("Digite a nota da segunda avaliação do aluno: "))

  if (!isNaN(nota1) && !isNaN(nota2)) {
    let media = (nota1 + nota2) / 2
    if (media >= 6.0) {
      console.log(`PARABÈNS, você foi aprovado. Sua média do semestre foi ${media.toFixed(2)}`)
    }
  } else {
    console.log("Você digitou algum dado inválido. Por favor, digite notas válidas.")
  }
  break;

  case 5:

  // 5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a média calculada seja menor que 6,0
  let outraNota1 = parseFloat(prompt("Digite a nota da primeira avaliação do aluno: "))
  let outraNota2 = parseFloat(prompt("Digite a nota da segunda avaliação do aluno: "))

  if (!isNaN(outraNota1) && !isNaN(outraNota2)) {
    let outraMedia = (outraNota1 + outraNota2) / 2
    if (outraMedia >= 6.0) {
      console.log(`PARABÈNS! Você foi aprovado. Sua média do semestre foi ${outraMedia.toFixed(2)}`)
    } else {
      console.log(`Você foi REPROVADO! Estude mais! Sua média do semestre foi ${outraMedia.toFixed(2)}`)
    }
  } else {
    console.log("Você digitou algum dado inválido. Por favor, digite notas válidas.")
  }
  break;

  case 6:

  /* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
        Isósceles, escaleno ou eqüilátero. Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
        Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
        Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
        Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
  */
  let lado1 = parseInt(prompt("Digite o lado 1 do triângulo: "))
  let lado2 = parseInt(prompt("Digite o lado 2 do triângulo: "))
  let lado3 = parseInt(prompt("Digite o lado 3 do triângulo: "))

  if (!isNaN(lado1) && !isNaN(lado2) && !isNaN(lado3)) {
    if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
      if ((lado1 + lado2 > lado3) || (lado2 + lado3 > lado1) || (lado3 + lado1 > lado2)) {
        if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
          console.log(`Os lados fornecidos formam um triângulo ISÓSCELES.`)
        }else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
          console.log(`Os lados fornecidos formam um triângulo ESCALENO.`)
        } else if (lado1 == lado2 && lado2 == lado3 && lado3 == lado1) {
          console.log(`Os lados fornecidos formam um triângulo EQUILÁTERO.`)
        }
      } else {
        console.log("Os lados fornecidos não formam um triângulo.")
      }
    } else {
      console.log("O lado de um triângulo deve ter comprimento maior que zero.")
    }
  } else {
    console.log("Você digitou algum lado inválido. Por favor, digite lados válidos.")
  }
  break;

  case 7:
  /* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
  compradas, calcule e escreva o valor total da compra.
  */
  let num_macas = parseInt(prompt("Digite o número de maçãs: "))

  if (!isNaN(num_macas) && (num_macas >= 0)) {
    if (num_macas < 12) {
      let valor = num_macas * 0.30
      console.log(`Valor total igual a R$ ${valor.toFixed(2).replace('.', ',')}`)
    } else {
      let valor = num_macas * 0.25
      console.log(`Valor total igual a R$ ${valor.toFixed(2).replace('.', ',')}`)
    }
  } else {
    console.log("Por favor, digite um número válido.")
  }
  break;

  case 8:
  // 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
  let v1 = prompt("Digite o primeiro valor: ")
  let v2 = prompt("Digite o segundo valor: ")

  if (!isNaN(v1) && !isNaN(v2)) {
    if (v1 > v2) {
      console.log(`Resultado em ordem crescente: ${v2}, ${v1}`)
    } else {
      console.log(`Resultado em ordem crescente: ${v1}, ${v2}`)
    }
  } else {
    console.log("Por favor, digite apenas números.")
  }
  break;

  case 9:
  /* 9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região do mesmo, conforme a tabela abaixo:
        1-Sul, 2-Norte, 3-Leste, 4-Oeste, 5 ou 6-Nordeste, 7,8 ou 9-Sudeste, 10 até 20-Centro-Oeste, 25 até 50-Noroeste
        Fora dos intervalos - Produto Importado
  */
  let codigo_origem = parseInt(prompt("Digite o código de origem do produto: "))

  if (!isNaN(codigo_origem) && (codigo_origem >= 0 )) {
    if (codigo_origem == 1) {
      console.log("Região do Produto: Sul")
    } else if (codigo_origem == 2) {
      console.log("Região do Produto: Norte")
    } else if (codigo_origem == 3) {
      console.log("Região do Produto: Leste")
    } else if (codigo_origem == 4) {
      console.log("Região do Produto: Oeste")
    } else if (codigo_origem == 5 || codigo_origem == 6) {
      console.log("Região do Produto: Nordeste")
    } else if (codigo_origem >= 7 && codigo_origem <= 9) {
      console.log("Região do Produto: Sudeste")
    } else if (codigo_origem >= 10 && codigo_origem <= 20) {
      console.log("Região do Produto: Centro-Oeste")
    } else if (codigo_origem >= 25 && codigo_origem <= 50) {
      console.log("Região do Produto: Noroeste")
    } else {
      console.log("Produto Importado")
    }
  } else {
    console.log("Por favor, digite um número positivo.")
  }
  break;

  case 10:
  // 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
  let num_inteiro = parseInt(prompt("Digite um número inteiro: "))

  let i = 0
  if (!isNaN(num_inteiro)) {
    while (i < 10) {
      console.log(num_inteiro)
      i++
    }
  } else {
    console.log("Por favor, digite um número inteiro.")
  }
  break;

  case 11:
  /* 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
         ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.
  */

  let continuar = "s"
  while (continuar == "s") {
    let inteiro = parseInt(prompt("Digite um número inteiro: "))
      if (isNaN(inteiro)) {
        console.log("Por favor, digite um número inteiro positivo.")
      } else if (inteiro == 0 || inteiro < 0) {
        console.log("Algoritmo encerrado!")
        continuar = "n"
      } else if (inteiro % 2 == 0) {
        console.log(`O número ${inteiro} é PAR.`)
      } else {
        console.log(`O número ${inteiro} é ÍMPAR.`)
      }
  }
  break;

  case 12:
  // 12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que, divididos por 11, dão resto igual a 5.

  let j = 1000
  while (j < 2000) {
    if ( j % 11 == 5) {
      console.log(j)
    }
    j++
  }
  break;

  case 13:
  /* 13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles, calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
    1 x N = N
    2 x N = 2N
    3 x N = 3N
  */
 
  x = 0
  while (x < 5) {
    let N = parseInt(prompt("Digite o valor de N: "))
    if (isNaN(N) || N <= 0) {
      console.log("Por favor, digite um número inteiro positivo.")
    } else {
      for (let q = 1; q <= N; q++) {
        console.log(`${q} x ${N} = ${q*N}`)
      }
      x++
    }
  }
  break;

  case 14:
  // 14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
  let continuar2 = "s"
  let soma_decimais = 0
  let qtd = 0
  while (continuar2 == "s") {
    let num_decimal = parseFloat(prompt("Digite um número decimal: "))
    if (isNaN(num_decimal)) {
      console.log("Por favor, digite um número decimal.")
    } else if (num_decimal != 0) {
      soma_decimais += num_decimal
      qtd++
    } else if (num_decimal == 0) {
      console.log(`A média dos valores é: ${(soma_decimais / qtd).toFixed(2)}`)
      console.log("Algoritmo encerrado!")
      continuar2 = "n"
    }
  }
  break;

  case 15:
  // 15. Fazer um algoritmo para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.
  let continuar3 = "s"
  let soma_produto = 0
  let soma_pesos = 0
  while (continuar3 == "s") {
    let num_decimal = parseFloat(prompt("Digite um número decimal: "))
    let peso = parseInt(prompt("Digite o peso do número decimal: "))
    if (isNaN(num_decimal) || (isNaN(peso))) {
      console.log("Por favor, digite um número válido.")
    } else if (num_decimal != 0 && peso != 0) {
      soma_produto += (num_decimal * peso)
      soma_pesos += peso
    } else if (num_decimal == 0 || peso == 0) {
      console.log(`A média ponderada dos valores é: ${(soma_produto / soma_pesos).toFixed(2)}`)
      console.log("Algoritmo encerrado!")
      continuar3 = "n"
    }
  }
  break;

  case 16:
  // 16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100. Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
  let num = 101
  let qtde = 0
  while (qtde < 50 ) {
    let eh_primo = true

    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        eh_primo = false
        break
      }
    }  
    if (eh_primo) {
          console.log(num);
          qtde++;
    }
    num++;
  }
  break;

  default:
    console.log("Questão inválida.")
}