const prompt = require('prompt-sync')();

let questao = parseInt(prompt("Escolha a questão que você quer analisar (1-16): "))

switch (questao) {
  case 1:

  // 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.
  let temp_celsius = prompt("Digite a temperatura em graus Celsius: ")
  if (!isNaN(temp_celsius)) {
    temp_farenheit = (9 * temp_celsius)/5 + 32
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
    percentual_votos_brancos = (num_votos_brancos / num_eleitores) * 100
    percentual_votos_nulos = (num_votos_nulos / num_eleitores) * 100
    percentual_votos_validos = (num_votos_validos / num_eleitores) * 100

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
  operacao1 = num1 + 25
  operacao2 = num2 * 3
  operacao3 = num3 * 0.12
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
    media = (nota1 + nota2) / 2
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
    outraMedia = (outraNota1 + outraNota2) / 2
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
      valor = num_macas * 0.30
      console.log(`Valor total igual a R$ ${valor.toFixed(2).replace('.', ',')}`)
    } else {
      valor = num_macas * 0.25
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

  if (!isNaN(codigo_origem) && (codigo_origem )) {
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
    } else if (codigo_origem == 7 || codigo_origem == 8 || codigo_origem == 9) {
      console.log("Região do Produto: Sudeste")
    } else if (codigo_origem == 10 || codigo_origem == 20) {
      console.log("Região do Produto: Centro-Oeste")
    } else if (codigo_origem == 25 || codigo_origem == 50) {
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

  break;

  default:
    console.log("Questão inválida.")
}