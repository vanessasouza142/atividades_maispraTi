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

let questao = parseInt(prompt("Escolha a questão que você quer analisar (1-50): "))

switch (questao) {
  case 1:
  /* 1. Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
      Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.
  */
  let cigarettes = parseInt(prompt("Quantos cigarros você fuma por dia? "))
  let years = parseInt(prompt("A quantos anos você fuma? "))

  function timeLostInDays(cigarettes, years) {
    if (!isNaN(cigarettes) && !isNaN(years) && cigarettes >= 0 && years >= 0) {
      let total_cigarettes = cigarettes * 365 * years
      let time_lost_in_min = total_cigarettes * 10
      let time_lost_in_days = time_lost_in_min / (24 * 60)
  
      console.log(`Você perdeu ${time_lost_in_days.toFixed(0)} dias de vida!`)
    } else {
      console.log("Por favor, digite valores válidos.")
    }
  }
  timeLostInDays(cigarettes, years);
  break;

  case 2:
   /* 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
        multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
  */
  let speed = parseInt(prompt("Qual a velocidade do carro em km/h? "))
  if (!isNaN(speed) && speed > 0) {
    if (speed > 80) {
      let multa = (speed - 80) * 5
      console.log(`Você ultrapassou a velocidade máxima permitida e foi multado em R$ ${multa.toFixed(2).replace('.', ',')}`)
    }
  } else {
    console.log("Por favor, digite um valor válido.")
  }
  break;

  case 3:
  /* 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
    R$ 0.45 para viagens mais longas.
  */
  let distance = parseInt(prompt("Qual a distância que você deseja percorrer em km? "))
  if (!isNaN(distance) && distance > 0) {
    if (distance <= 200) {
      let price = distance * 0.5
      console.log(`O preço da passagen é igual a R$ ${price.toFixed(2).replace('.', ',')}`)
    } else {
      let price = distance * 0.45
      console.log(`O preço da passagen é igual a R$ ${price.toFixed(2).replace('.', ',')}`)
    }
  } else {
    console.log("Por favor, digite um valor válido.")
  }
  break;

  case 4:
  /* 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos 
  formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.
  */
  let segmento1 = parseInt(prompt("Digite o tamanho do primeiro segmento de reta: "))
  let segmento2 = parseInt(prompt("Digite o tamanho do segundo segmento de reta: "))
  let segmento3 = parseInt(prompt("Digite o tamanho do terceiro segmento de reta: "))

  if (!isNaN(segmento1) && !isNaN(segmento2) && !isNaN(segmento3) && segmento1 > 0 && segmento2 > 0 && segmento3 > 0) {
    if ((segmento1 < (segmento2 + segmento3)) && (segmento2 < (segmento1 + segmento3)) && (segmento3 < (segmento1 + segmento2))) {
      console.log("Matematicamente os três segmentos de reta podem formar um triângulo.")
    } else {
      console.log("Matematicamente os três segmentos de reta não podem formar um triângulo.")
    }
  } else {
    console.log("Por favor, digite valores válidos.")
  }
  break;

  case 5:
  // 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
  let newPlay = 's'

  while (newPlay === 's') {
    let player1 = parseInt(prompt("Digite 1 para pedra, 2 para papel e 3 para tesoura: "))
    let player2 = parseInt(Math.random() * 3) + 1
    if (!isNaN(player1) && (player1 === 1 || player1 === 2 || player1 === 3)) {
      if (player1 === player2) {
        console.log("Empate!")
      } else if (player1 == 1 && player2 == 2) {
        console.log("Papel enrola pedra, você perdeu!")
      } else if (player1 == 2 && player2 == 1) {
        console.log("Papel enrola pedra, você venceu!")
      } else if (player1 == 1 && player2 == 3) {
        console.log("Pedra quebra tesoura, você venceu!")
      } else if (player1 == 3 && player2 == 1) {
        console.log("Pedra quebra tesoura, você perdeu!")
      } else if (player1 == 2 && player2 == 3) {
        console.log("Tesoura corta papel, você perdeu!")
      } else if (player1 == 3 && player2 == 2) {
        console.log("Tesoura corta papel, você venceu!")
      }
      newPlay = prompt("Deseja jogar novamente? Digite s caso sim e n caso não: ")
    } else {
      console.log("Por favor, digite valores válidos (1, 2 ou 3).")
    }
  }
  console.log("Jogo Encerrado!")
  break;

  case 6:
  // 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.
  let playAgain = 's'

  while (playAgain === 's') {
    let numberPc = parseInt(Math.random() * 5) + 1
    let numberPerson = parseInt(prompt("Qual o número que o computador sorteou (entre 1 e 5)? "))

    if (!isNaN(numberPerson) && (numberPerson >= 1 && numberPerson <= 5)) {
      if (numberPerson === numberPc) {
        console.log(`Parabéns! Você acertou! O número sorteado foi ${numberPc}`)
      } else {
        console.log(`Você errou! O número sorteado foi ${numberPc}`)
      }
    playAgain = prompt("Deseja jogar novamente? Digite s caso sim e n caso não: ")
    } else {
      console.log("Por favor, digite valores válidos (entre 1 e 5).")
    }
  }
  console.log("Jogo Encerrado!")
  break;

  case 7:
  /* 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
    cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
    mostre o preço a ser pago de acordo com os dados a seguir:
    Carros populares
    - Até 100 Km percorridos: R$ 0,20 por Km
    - Acima de 100 Km percorridos: R$ 0,10 por Km
    Carros de luxo
    - Até 200 Km percorridos: R$ 0,30 por Km
    - Acima de 200 Km percorridos: R$ 0,25 por Km
  */

  let car = parseInt(prompt("Digite qual o tipo de carro alugado (1 para popular e 2 para de luxo: "))
  let days = parseInt(prompt("Digite quantos dias alugou o carro: "))
  let km = parseInt(prompt("Digite quantos quilômetros foram percorridos com o carro: "))

  if (!isNaN(car) && !isNaN(days) && !isNaN(km) && car > 0 && days > 0 && km > 0) {
    if (car === 1 && km <= 100) {
      value = (90 * days) + (0,2 * km)
    } else if (car === 1 && km > 100) {
      value = (90 * days) + (0,1 * km)
    } else if (car === 2 && km <= 200) {
      value = (150 * days) + (0,3 * km)
    } else if (car === 2 && km > 200) {
      value = (150 * days) + (0,25 * km)
    }
    console.log(`O preço a ser pago é de R$ ${value.toFixed(2).replace('.', ',')}`) 
  } else {
    console.log("Por favor, digite valores válidos.")
  }
  break;

  case 8:
  /* 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
    sistema funciona assim:
    - até 10 h de atividade no mês: ganha 2 pontos por hora
    - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
    - acima de 20 h de atividade no mês: ganha 10 pontos por hora
    - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
    Faça um programa que leia quantas horas de atividade uma pessoa teve por mês. Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
  */
  const myFitness = (timeActivity) => {
    if (!isNaN(timeActivity) && timeActivity > 0) {
      if (timeActivity <= 10) {
        points = 2 * timeActivity
      } else if (timeActivity > 10 && timeActivity <= 20){
        points = 5 * timeActivity
      } else if (timeActivity > 20) {
        points = 10 * timeActivity
      }
      money = points * 0.05
      console.log(`Você ganhou ${points} pontos e faturou R$ ${money.toFixed(2).replace('.', ',')}`)
    } else {
      console.log("Por favor, digite um valor válido.")
    }
  }

  let timeActivity = parseInt(prompt("Digite quantas horas você praticou atividade física nesse mês: "))
  myFitness(timeActivity)
  break;

  case 9:
  /* 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
     perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.
  */
  let askAgain = 's'
  sumSalaryFemale = 0
  sumSalaryMale = 0


  while (askAgain === 's') {
    let salary = parseInt(prompt("Digite o seu salário: "))
    let gender = parseInt(prompt("Diite o seu sexo (1 para feminino e 2 para masculino): "))

    if (!isNaN(salary) && !isNaN(gender) && salary > 0 && (gender === 1 || gender === 2)) {
      if (gender === 1) {
        sumSalaryFemale += salary
      } else if (gender === 2) {
        sumSalaryMale += salary
      }
      console.log(`Total de salário pago às mulheres R$ ${sumSalaryFemale.toFixed(2).replace('.', ',')} / Total de salário pago aos homens R$ ${sumSalaryMale.toFixed(2).replace('.', ',')}`)
      askAgain = prompt("Deseja continuar? Digite s caso sim e n caso não: ")
    } else {
      console.log("Por favor, digite um valor válido.")
    }
  }
  console.log("Aplicativo Encerrado!")
  break;

  case 10:
  /* 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
      cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
      a) O somatório entre todos os valores;
      b) Qual foi o menor valor digitado;
      c) A média entre todos os valores;
      d) Quantos valores são pares.
  */

  let anotherNumber = 's'
  let sumNumbers = 0
  let minNumber = Infinity
  let odd = 0
  let i = 0
  
  do {
    let number = parseInt(prompt("Digite um número: "))
    
    if (!isNaN(number)) {
      sumNumbers += number
      i++
      if (number % 2 === 0) {
        odd++
      }
      if (number < minNumber) {
        minNumber = number
      }
      anotherNumber = prompt("Deseja continuar? Digite s caso sim e n caso não: ").toLowerCase()
    } else {
      console.log("Por favor, digite um valor válido.")
    }
  } while (anotherNumber === 's')
  
  let average = (sumNumbers / i).toFixed(2);
  console.log(`O somatório de todos os valores é ${sumNumbers}`);
  console.log(`O menor número digitado foi ${minNumber}`);
  console.log(`A média entre todos os valores é ${average}`);
  console.log(`Quantidade de valores pares: ${odd}`);
  break;

  case 11:
  /* 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
     valores da sequência.
  */

  let firstTerm = parseFloat(prompt("Digite o primeiro termo da PA: "))
  let ratio = parseFloat(prompt("Digite a razão da PA: "))
  let sumTermsPA = 0

  if (!isNaN(firstTerm) && !isNaN(ratio)) {
    for (let n = 1; n <= 10; n++) {
      term = firstTerm + ((n - 1) * ratio)
      sumTermsPA += term
      console.log(`${n}° Termo: ${term}`)
    }
    console.log(`Soma dos 10 primeiros termos da PA: ${sumTermsPA}`)
  } else {
    console.log("Por favor, digite valores válidos.")
  }
  break;

  case 12:
  // 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci. Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
  function fibonacci(numElements) {
    if (!isNaN(numElements) && numElements > 0) {
      const sequency = []
      for (let i = 0; i < numElements; i++) {
        if (i === 0 || i === 1) {
          term = 1
        } else {
          term = sequency[sequency.length - 1] + sequency[sequency.length - 2]
        }
        sequency.push(term)
      }
      console.log(`${numElements} primeiros elementos da Sequência de Fibonacci: ${sequency}`)
    } else {
      console.log("Por favor, digite um valor válido.")
    }
  }
  fibonacci(10)
  break;

  case 13:
  /* 13. Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
     da sequência de Fibonacci.
  */
  function fibonacci(numElements) {
    if (!isNaN(numElements) && numElements > 0) {
      const sequency = []
      for (let i = 0; i < numElements; i++) {
        if (i === 0 || i === 1) {
          term = 1
        } else {
          term = sequency[sequency.length - 1] + sequency[sequency.length - 2]
        }
        sequency.push(term)
      }
      console.log(`${numElements} primeiros elementos da Sequência de Fibonacci: ${sequency}`)
    } else {
      console.log("Por favor, digite um valor válido.")
    }
  }
  fibonacci(15)
  break;

  case 14:
  /* 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
     que eles foram informados.
  */
  function nameSave(times) {
    if (!isNaN(times) && times > 0){
      const nameList = []
      for (let i = 0; i < times; i++) {
        let name = prompt("Digite o nome de uma pessoa: ")
        nameList.push(name)
      }
      console.log(`Lista com todos os nomes na ordem inversa: ${nameList.reverse()}`)
    } else {
      console.log("Por favor, digite um valor válido.")
    }
  }
  nameSave(7)
  break;

  case 15:
  /* 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles
     estão armazenados.
  */
  function evenNumbers(times) {
    if (!isNaN(times) && times > 0){
      const numbers = []
      for (let i = 0; i < times; i++) {
        let number = parseInt(prompt("Digite um número inteiro: "))
        numbers.push(number)
      }

      numbers.forEach(function(number, index) {
        if (number % 2 === 0) {
          console.log(`Número par: ${number}, índice: ${index}`)
        }
      })
    } else {
      console.log("Por favor, digite um valor válido.")
    }
  }
  evenNumbers(10)
  break;

  case 16:
  /* 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
     depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
  */
  function randomNumbers(times) {
    if (!isNaN(times) && times > 0){
      const numbers = []
      for (let i = 0; i < times; i++) {
        let number = Math.floor(Math.random() * 100)
        numbers.push(number)
      }
      console.log(`Números em ordem aleatória: ${numbers}`)
      let ordenedNumbers = numbers.sort((a, b) => a - b)
      console.log(`Números em ordem crescente: ${ordenedNumbers}`)
    } else {
      console.log("Por favor, digite um valor válido.")
    }
  }
  randomNumbers(20)
  break;

  case 17:
  /* 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
     os dados das pessoas menores de idade.
  */
  function personData(times) {
    if (!isNaN(times) && times > 0){
      const names = []
      const ages = []
      const peopleLegalAge = []
      for (let i = 0; i < times; i++) {
        let name = prompt("Digite o nome da pessoa: ")
        names.push(name)
        let age = prompt("Digite a idade da pessoa: ")
        ages.push(age)
      }
      ages.forEach(function(age, index) {
        if (age < 18) {
          peopleLegalAge.push(`${names[index]}-${age} anos`)
        }
      })
      console.log(`Lista contendo apenas os dados das pessoas menores de idade: ${peopleLegalAge}`)
    } else {
      console.log("Por favor, digite um valor válido.")
    }
  }
  personData(9)
  break;

  case 18:
  // 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final escreva o conteúdo do registro.
  const professional = {
    name: 'Ricardo Silva',
    role: 'operador',
    salary: 3000.00
  }
  const professionalData = (professional) => {
    console.log(`Nome: ${professional.name}`)
    console.log(`Cargo: ${professional.role}`)
    console.log(`Salário: ${professional.salary.toFixed(2).replace('.', ',')}`)
  }
  professionalData(professional)
  break;

  case 19:
  // 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS.
  function schedules(times) {
    if (!isNaN(times) && times > 0){
      const schedules = []
      const timePattern = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/
      for (let i = 0; i < times; i++) {
        let schedule = prompt("Digite um horário no formato HH:MM:SS: ")
        if (timePattern.test(schedule)) {
          schedules.push(schedule)
        }
      }
      console.log(`Horários válidos: ${schedules}`)
    } else {
      console.log("Por favor, digite um valor válido.")
    }
  }
  schedules(5)
  break;

  case 20:
  /* 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
    salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
    Matrícula:
    Nome:
    Salário bruto:
    Dedução INSS:
    Salário líquido:
    (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS).
  */

  const tableDataProfessionals = [
                                    {
                                      Matricula: 895623,
                                      Nome: 'Carlos Andrade',
                                      salarioBruto: 5000
                                    },
                                    {
                                      Matricula: 485715,
                                      Nome: 'Maria Clara Silva',
                                      salarioBruto: 6000
                                    },
                                ]
  
  let deduction = 12
  for (const professional of tableDataProfessionals) {
    console.log(`Matrícula: ${professional.Matricula}`)
    console.log(`Nome: ${professional.Nome}`)
    console.log(`Salário Bruto: R$ ${professional.salarioBruto.toFixed(2).replace('.', ',')}`)
    console.log(`Dedução INSS: ${deduction}%`);
    console.log(`Salário Líquido: R$ ${(professional.salarioBruto - (professional.salarioBruto * deduction / 100)).toFixed(2).replace('.', ',')}`);
    console.log('---');
  }
  break;

  case 21:
  /* 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
        = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
  */
  function idealWeight(height, gender) {
    if (!isNaN(height) && height > 0 && (gender == "homem" || gender == "mulher")) {
      if (gender == "homem") {
        weight = 72.7 * height - 58
      } else if (gender == "mulher") {
        weight = 62.1 * height - 44.7
      }
      console.log(`O seu peso ideal é ${weight.toFixed(2)} kg`)
    } else {
      console.log("Por favor, digite valores válidos para altura e sexo.")
    }
  }

  const userHeight = parseFloat(prompt("Digite sua altura: "))
  const userGender = (prompt("Digite seu sexo (homem ou mulher): ")).toLowerCase()
  idealWeight(userHeight, userGender)
  break;

  case 22:
  /* 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
    número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$ 350,00.
  */

  function populationData() {
    let sumSalary = 0
    let sumChildren = 0
    let higherSalary = 0
    let i = 0
    let j = 0

    let run = 's'
    while (run === 's') {
      let salary = parseFloat(prompt("Informe seu salário mensal em R$: "))
      let childrenNumber = parseInt(prompt("Informe quantos filhos você tem: "))

      if (!isNaN(salary) && !isNaN(childrenNumber) && salary >= 0 && childrenNumber >= 0) {  
        sumSalary += salary
        sumChildren += childrenNumber
        i++
        averageSalary = (sumSalary / i)
        averageChildren = (sumChildren / i)
        if (salary > higherSalary) {
          higherSalary = salary
        } else if (salary <= 350) {
          j++
        }

        run = prompt("Deseja continua? Digite s ou n: ")
        if (run === 'n') {
          console.log("Pesquisa encerrada!")
          console.log(`A média de salário da população é R$ ${averageSalary.toFixed(2).replace('.',',')}`)
          console.log(`A média de número de filhos é ${averageChildren}`)
          console.log(`O maior salário da pesquisa foi R$ ${higherSalary.toFixed(2).replace('.',',')}`)
          console.log(`O percentual de pessoas com salário até R$ 350,00 é de ${(j/i)*100}%`)
        }
      } else {
        console.log("Por favor, digite valores válidos para salário e número de filhos.")
      }
    }
  }

  populationData()
  break;

  case 23:
  // 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos.
  function identityMatriz(rows, columns) {
    for(let i = 0; i < rows; i++) {
      const row = []
      for (let j = 0; j < columns; j++) {
        if (i === j) {
          row.push(1)
        } else {
          row.push(0)
        }
      }
      console.log(row.join(' '))
    }
  }
  identityMatriz(7, 7)
  break;

  case 24:
  // 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M.
  const M = [ [ 1, -1,  3,  4, -2,  6,  7, -8],
              [-1, -2,  3, -4,  5, -6,  7,  8],
              [ 9, 10, 11, 12, 13, 14, 15, 16],
              [-1, -1, -1, -1, -1, -1, -1, -1],
              [ 1,  2,  3,  4,  5,  6,  7,  8],
              [ 0, -1,  2, -3,  4, -5,  6, -7] ]

  function negativeElementsMatriz(matriz) {
    const C = []
    for(let i = 0; i < matriz.length; i++) {
      let negativeCount = 0
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] < 0) {
          negativeCount++
        }
      }
    C.push(negativeCount)
    }
    console.log(C)
  }
  negativeElementsMatriz(M)
  break;

  case 25:
  // 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente.
  function sumColumnsMatriz(rows, columns) {
    const matriz = []
    for(let i = 0; i < rows; i++) {
      const row = []
      for (let j = 0; j < columns; j++) {
        let randomRealNumber = (Math.random() * 20 - 10).toFixed(2)
        row.push(parseFloat(randomRealNumber))
      }
      matriz.push(row)
    }
    console.log("Matriz:");
    matriz.forEach(row => console.log(row.join(', ')));

    const columnSums = new Array(columns).fill(0)

    for (let j = 0; j < columns; j++) {
      for (let i = 0; i < rows; i++) {
        columnSums[j] += matriz[i][j];
      }
    }

    const formattedSums = columnSums.map(sum => sum.toFixed(2));
    console.log(`Soma de cada coluna da matriz: ${formattedSums}`)
  }
  sumColumnsMatriz(15, 20)
  break;

  case 26:
  // 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5].

  const A = [ [ 1,  2,  3,  4,  5],
              [ 6,  7,  8,  9,  10],
              [ 11, 12, 13, 14, 15] ]

  const B = [ [ 1,  2,  3,  4,  5],
              [ 6,  7,  8,  9,  10],
              [ 11, 12, 13, 14, 15] ]

  function productMatriz(matrizA, matrizB) {
    let rows = matrizA.length
    let columns = matrizA[0].length
    let product = []
  
    for (let i = 0; i < rows; i++) {
      product[i] = []
      for (let j = 0; j < columns; j++) {
        product[i][j] = matrizA[i][j] * matrizB[i][j]
      }
    }  
    console.log("Matriz Produto P: ", product)
  }

  productMatriz(A, B)
  break;

  case 27:
  /* 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
    um vetor V(36). Escrever o vetor V no final.
  */
  const matrizM = [ [ 1,  2,  3,  4,  5,  6],
                    [ 7,  8,  9,  10, 11, 12],
                    [ 13, 14, 15, 16, 17, 18],
                    [ 19, 20, 21, 22, 23, 24],
                    [ 25, 26, 27, 28, 29, 30],
                    [ 31, 32, 33, 34, 35, 36] ]
  const valueA = 2

  const vector = []
  matrizM.forEach(row => {
    row.forEach(element => {
      vector.push(element * valueA)
    })
  })
  console.log(vector)
  break;

  case 28:
  /* 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
      a) a soma dos elementos acima da diagonal principal;
      b) a soma dos elementos abaixo da diagonal principal;
  */
  const M10 = [
                [ 1,   2,   3,   4,   5,   6,   7,   8,   9,   10],
                [ 11,  12,  13,  14,  15,  16,  17,  18,  19,  20],
                [ 21,  22,  23,  24,  25,  26,  27,  28,  29,  30],
                [ 31,  32,  33,  34,  35,  36,  37,  38,  39,  40],
                [ 41,  42,  43,  44,  45,  46,  47,  48,  49,  50],
                [ 51,  52,  53,  54,  55,  56,  57,  58,  59,  60],
                [ 61,  62,  63,  64,  65,  66,  67,  68,  69,  70],
                [ 71,  72,  73,  74,  75,  76,  77,  78,  79,  80],
                [ 81,  82,  83,  84,  85,  86,  87,  88,  89,  90],
                [ 91,  92,  93,  94,  95,  96,  97,  98,  99,  100]
              ]

  function diagonal(matriz) {
    let rows = matriz.length
    let columns = matriz[0].length

    let sumAboveDiagonal = 0
    let sumBelowDiagonal = 0
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (j > i) {
          sumAboveDiagonal += matriz[i][j]
        } else if (j < i) {
          sumBelowDiagonal += matriz[i][j]
        }
      }
    }
    console.log("Soma dos elementos acima da diagonal principal: ", sumAboveDiagonal)
    console.log("Soma dos elementos abaixo da diagonal principal: ", sumBelowDiagonal)
  }

  diagonal(M10)
  break;

  case 29:
  /* 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
      a) da linha 4 de M;
      b) da coluna 2 de M;
      c) da diagonal principal;
      d) todos os elementos da matriz M.
      Escrever essas somas e a matriz.
  */
  const M5 = [
              [ 1,  2,  3,  4,  5],
              [ 6,  7,  8,  9,  10],
              [ 11, 12, 13, 14, 15],
              [ 16, 17, 18, 19, 20],
              [ 21, 22, 23, 24, 25]
             ]

  M5.forEach(function(row, index) {
    if (index === 3) {
      console.log("Soma dos elemntos da linha 4 da matriz: ", row.reduce((acc, currentValue) => acc + currentValue, 0))
    }
  })

  const column2 = []
  M5.forEach(function(row) {
    column2.push(row[1])
  })
  console.log("Soma dos elemntos da coluna 2 da matriz: ", column2.reduce((acc, currentValue) => acc + currentValue, 0))

  let row = M5.length
  let column = M5[0].length
  const sumDiagonal = []
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (i === j) {
        sumDiagonal.push(M5[i][j])
      }
    }
  }
  console.log("Soma dos elemntos da diagonal principal da matriz: ", sumDiagonal.reduce((acc, currentValue) => acc + currentValue, 0))

  const todosElementos = []
  M5.forEach(row => {
    row.forEach(element => {
      todosElementos.push(element)
    })
  })
  console.log("Soma de todos os elementos da matriz: ", todosElementos.reduce((acc, currentValue) => acc + currentValue, 0))
  break;

  case 30:
  /* 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
      e os vetores criados.
  */
  const M5x5 = [
                [ 1,  2,  3,  4,  5],
                [ 6,  7,  8,  9,  10],
                [ 11, 12, 13, 14, 15],
                [ 16, 17, 18, 19, 20],
                [ 21, 22, 23, 24, 25]
               ]

  const SL = []
  M5x5.forEach(row => {
    SL.push(row.reduce((acc, currentValue) => acc + currentValue, 0))
  })
  console.log("Vetor com a soma dos elementos de cada linha da matriz: ", SL)


  const SC = new Array(5).fill(0)
  console.log(SC)
  M5x5.forEach(row => {
    row.forEach(function(element, index) {
      SC[index] += element
    })
  })
  console.log("Vetor com a soma dos elementos de cada coluna da matriz: ", SC)
  break;

  case 31:
  /* 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros. Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
    todos os elementos de V diferentes de A. Mostre os resultados.
  */
  let numberA = 3
  const matrizV = []
  let num = 1

  for (let i = 0; i < 30; i++) {
    matrizV[i] = []
    for (let j = 0; j < 30; j++) {
      matrizV[i][j] = num++
    }
  }

  let count = 0
  const matrizX = []
  matrizV.forEach((row, i) => {
    matrizX[i] = []
    row.forEach((element) => {
      if (element !== numberA) {
        matrizX[i].push(element)
      } else {
        count += 1
      }
    })
  })
  console.log("Quantos valores iguais a A estão na matriz V: ", count)
  console.log("Matriz X: ", matrizX)
  break;

  case 32:
  /* 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
    matriz lida e a modificada.
  */
  const M12x13 = [[45, 67, 23, 1,  34, 78, 12, 56, 89, 22, 47, 35, 90],
                  [55, 22, 90, 15, 79, 43, 76, 58, 11, 45, 33, 29, 84],
                  [66, 32, 49, 17, 25, 60, 98, 30, 77, 62, 28, 91, 13],
                  [55, 76, 55, 80, 44, 45, 73, 19, 21, 68, 95, 37, 54],
                  [2, 76, 55, 80, 44, 67, 73, 19, 21, 7, 95, 37, 301],
                  [24, 76, 55, 80, 44, 67, 73, 19, 4, 68, 95, 37, 54],
                  [7, 76, 12, 80, 44, 67, 73, 19, 21, 31, 12, 37, 89],
                  [3, 76, 55, 80, 44, 67, 73, 19, 21, 68, 97, 37, 54],
                  [24, 76, 87, 80, 8, 67, 73, 19, 23, 68, 17, 37, 23],
                  [24, 76, 55, 80, 44, 67, 73, 19, 21, 2, 95, 37, 54],
                  [12, 76, 55, 27, 44, 67, 73, 19, 21, 68, 104, 37, 54],
                  [9, 76, 55, 80, 44, 36, 73, 19, 21, 68, 95, 37, 54],
                  [24, 76, 55, 80, 44, 67, 73, 19, 21, 68, 95, 37, 54]]

  const matrizModified = []
  M12x13.forEach((row, i) => {
    matrizModified[i] = []
    let maxNumber = Math.max(...row)
    row.forEach((element, j) => {
      matrizModified[i].push(parseFloat(element / maxNumber).toFixed(2))
    })
  })
  console.log("Matriz modificada:")
  matrizModified.forEach(row => console.log(row.join("\t")))
  break;

  case 33:
  // 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária.
  const M3x3 = [
                [ 1, 2, 3],
                [ 4, 5, 6],
                [ 7, 8, 9]
               ]

  let rowMatrix = M3x3.length
  let columnMatrix = M3x3[0].length - 1
  const elementsDiagSecondary = []
  for (let i = 0; i < rowMatrix; i++) {
     elementsDiagSecondary.push(M3x3[i][columnMatrix] - i)
  }
  let averageDiagSecondary = (elementsDiagSecondary.reduce((acc, currentValue) => acc + currentValue, 0)) / elementsDiagSecondary.length
  console.log("Média da diagonal secundária: ", averageDiagSecondary)

  const elementsDiagPrimary = []
  for (let i = 0; i < rowMatrix; i++) {
    for (let j = 0; j < columnMatrix + 1; j++) {
      if (i === j) {
        elementsDiagPrimary.push(M3x3[i][j] * averageDiagSecondary)
      }
    }
  }
  console.log("Elementos da diagonal primária multiplicados pela média dos elementos da diagonal secundária: ", elementsDiagPrimary)
  break;

  case 34:
  // 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as multiplicações.
  const matriz50x50 = []
  let numero = 1

  for (let i = 0; i < 5; i++) {
    matriz50x50[i] = []
    for (let j = 0; j < 5; j++) {
      matriz50x50[i][j] = numero++
    }
  }

  const elementosDiagPrincipal = []
  for (let i = 0; i < matriz50x50.length; i++) {
    for (let j = 0; j < matriz50x50[0].length + 1; j++) {
      if (i === j) {
        elementosDiagPrincipal.push(matriz50x50[i][j])
      }
    }
  }

  matriz50x50Modificada = []
  for (let i = 0; i < matriz50x50.length; i++) {
    matriz50x50Modificada[i] = []
    for (let j = 0; j < matriz50x50[0].length; j++) {
      matriz50x50Modificada[i].push(matriz50x50[i][j] * elementosDiagPrincipal[i])
    }
  }

  console.log("Matriz modificada:")
  matriz50x50Modificada.forEach(row => console.log(row.join("\t")))
  break;

  case 35:
  /* 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
    estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias.
  */
  const values = [12, 5, 55, 76, 55, 80, 44, 45, 73, 19, 21, 68, 95, 37, 54, 45, 67, 23, 1,  34, 78, 12, 56, 89, 22, 47, 35, 90, 85, 32]
  let vetorOdd = []
  let vetorEven = []

  values.forEach(element => {
    if (element % 2 === 0) {
      vetorEven.push(element)
      if (vetorEven.length === 5) {
        console.log("Vetor par: ", vetorEven)
        vetorEven = []
      }
    } else {
      vetorOdd.push(element)
      if (vetorOdd.length === 5) {
        console.log("Vetor ímpar: ", vetorOdd)
        vetorOdd = []
      }
    }
  })
  if (vetorEven.length > 0) {
    console.log("Vetor par restante: ", vetorEven)
  }  
  if (vetorOdd.length > 0) {
    console.log("Vetor ímpar restante: ", vetorOdd)
  }
  break;

  case 36:
  /* 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
    do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
    o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR".
  */
  const v13 = [12, 5, 17, 23, 2, 58, 44, 45, 36, 15, 18, 24, 9]
  const bets = {}
  for (let i = 1; i < 101; i++) {
    let correctAnswers = 0
    for (let n = 0; n < 13; n++) {
      let randomNumber = parseInt(Math.random() * 60) + 1
      if (v13.includes(randomNumber)) {
        correctAnswers += 1
      }
      bets[i] = correctAnswers
    }
  }
  for (let key in bets) {
    if (bets[key] === 13) {
      console.log(`Parabéns jogador ${key}, você foi o GANHADOR`)
    } else {
      console.log(`Jogador ${key} teve ${bets[key]} acertos.`)
    }
  }
  break;

  case 37:
  /* 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
    respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
    e mostre uma mensagem de “REPROVADO”, caso contrário.
  */
    const vG = ['A', 'D', 'E', 'C', 'A', 'A', 'D', 'E', 'D', 'B', 'B', 'A', 'A', 'A', 'E', 'E', 'C', 'A', 'B', 'D']
  const answers = {}
  for (let i = 1; i < 51; i++) {
    let correctAnswers = 0
    for (let n = 0; n < 20; n++) {
      const letters = 'ABCDE';
      const randomLetter = letters[Math.floor(Math.random() * letters.length)]
      if (vG[n] === randomLetter) {
        correctAnswers += 1
      }
      answers[i] = correctAnswers
    }
  }
  for (let key in answers) {
    if (answers[key] >= 12) {
      console.log(`Aluno ${key}: APROVADO com ${answers[key]} acertos.`);
    } else {
      console.log(`Aluno ${key}: REPROVADO com ${answers[key]} acertos.`);
    }
  }
  break;

  case 38:
  /* 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora que calcule a operação conforme a informação contida nesta variável:
      1- soma dos elementos;
      2- produto dos elementos;
      3- média dos elementos;
      4- ordene os elementos em ordem crescente;
      5- mostre o vetor.
  */
  const v6 = [23, 2, 58, 15, 18, 24]
  let operation = parseInt(prompt("Escolha a operação que deseja realizar. Digite 1-Soma dos Elementos; 2-Produto dos elementos; 3-Média dos elementos; 4-Ordenar elementos em ordem crescente; 5-Mostrar o vetor"))

  if (!isNaN(operation) && operation >= 1 && operation <= 5) {
    if (operation === 1) {
      console.log("A soma dos elementos do vetor é: ", (v6.reduce((acc, currentValue) => acc + currentValue, 0)))
    } else if (operation === 2) {
    console.log("O produto dos elementos do vetor é: ", (v6.reduce((acc, currentValue) => acc * currentValue, 1)))
    } else if (operation === 3) {
      let average = (v6.reduce((acc, currentValue) => acc + currentValue, 0)) / v6.length
      console.log("A média dos elementos do vetor é: ", average.toFixed(2))
    } else if (operation === 4) {
      let ordenedV6 = v6.sort((a, b) => a - b)
      console.log("O vetor com os elementos em ordem crescente é: ", ordenedV6)
    } else if (operation === 5) {
      console.log("O vetor é: ", v6)
    }
  }
  break;

  case 39:
  // 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
  const vetorA = [-5,  0, -18,  27, -4,  0, -3,  50, -6,  0,   7, -19,  0, -34,  14, 0, -20,  25,  0, -22, 12,  0, -11,  45, -16,
                  0,  31, -9,  0,  20, -8,  0, -10,  39, -12, 0, -23,  5,  0,  18, -13,  0, -7,  28, -1,  0, -15,  6,   0,  40, 
                 -21, 0,  -5,  33, -2,  0,  11, -17, 0,  -24, 8,  0, -14,  36, -3,  0, -19,  10,  0,  13, -6,  0, -25,  22, -10,  
                  0,  19, -2,  0,  15, -12,  0, -9,  30, -4,  0,  27, -1,  0,  35, -20,  0, -7,  24,  1,  0,  -8,  16,  0,  -3]

  const vetorB = []
  vetorA.forEach(elemento => {
    if (elemento > 0) {
      vetorB.push(elemento)
    }
  })
  console.log("Vetor B: ", vetorB)
  break;

  case 40:
  /* 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
    cada), representando as apostas feitas. Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao resultado oficial. 
    (Observação: não é necessário procurar por ternos e quadras, apenas por quinas.)
  */
  const v5 = [21, 5, 8, 25, 9]
  const betsLoto = {}
  for (let i = 1; i < 51; i++) {
    let correctAnswers = 0
    for (let n = 0; n < 5; n++) {
      let randomNumber = parseInt(Math.random() * 25) + 1
      if (v5.includes(randomNumber)) {
        correctAnswers += 1
      }
      betsLoto[i] = correctAnswers
    }
  }
  for (let key in betsLoto) {
    if (betsLoto[key] === 5) {
      console.log(`Parabéns jogador ${key}, você foi o GANHADOR`)
    } else {
      console.log(`Jogador ${key} teve ${betsLoto[key]} acertos.`)
    }
  }
  break;

  case 41:
  // 41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade.
  const pessoa = { nome: "Igor Andrade",
                   idade: 35
                 }
  console.log(pessoa.idade)
  pessoa.email = "igorandrade@gmail.com"
  console.log(pessoa)
  break;

  case 42:
  // 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays.
  const dados = { nome: "Ana Silva",
                  idade: 28,
                  email: "ana.silva@example.com",
                  endereco: {
                    rua: "Rua das Flores",
                    numero: 123,
                    cidade: "São Paulo",
                    estado: "SP"
                  },
                  hobbies: ["ler", "viajar", "nadar"],
                  habilidades: {
                    linguas: ["português", "inglês", "espanhol"],
                    programacao: ["JavaScript", "Python", "Java"]
                  },
                  status: true,
                  notas: [85, 90, 78, 92]
                }

  function returnObjectWithArrays(object) {
    const result = {}
    for (let key in object) {
      if (Array.isArray(object[key])) {
        result[key] = object[key]
      }
    }
    console.log(result)
  }

  returnObjectWithArrays(dados)
  break;

  case 43:
  /* 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
    sobre as do obj1 em caso de conflitos.
  */
  const obj1 = { nome: "Clara",
                 idade: 28,
                 email: "clara@example.com",
                 profissao: "dentista",
                 status: true
               }
  const obj2 = { nome: "Regina",
                 idade: 25,
                 email: "regina@example.com",
                 profissao: "chef"
               } 

  function objectsJoin(object1, object2) {
    const combinedObj = {}
    for (let key in obj1) {
      combinedObj[key] = obj1[key];
    }
  
    for (let key in obj2) {
      combinedObj[key] = obj2[key];
    }
    console.log(combinedObj)
  }
  objectsJoin(obj1, obj2)
  break;

  case 44:
  // 44. Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número.
  const dados1 = { nome: "Ana Silva",
                  idade: 28,
                  email: "ana.silva@example.com",
                  profissao: "desenvolvedor",
                  endereco: {
                    rua: "Rua das Flores",
                    numero: 123,
                    cidade: "São Paulo",
                    estado: "SP"
                  },
                  hobbies: ["ler", "viajar", "nadar"],
                  habilidades: {
                    linguas: ["português", "inglês", "espanhol"],
                    programacao: ["JavaScript", "Python", "Java"]
                  },
                  status: true,
                  notas: [85, 90, 78, 92]
                }

  function stringObjectCount(object) {
    count = 0
    for (let key in object) {
      if (typeof object[key] === 'string') {
        count++
      }
    }
    console.log(`Quantidade de propriedades do objeto do tipo string: ${count}`)
  }

  stringObjectCount(dados1)
  break;

  case 45:
  // 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array.
  const arrayFruits = ["banana", "uva", "morango", "banana", "melao", "banana"]
  
  const countFruits = {}

  arrayFruits.forEach(fruit => {
    if (countFruits[fruit]) {
      countFruits[fruit]++;
    } else {
      countFruits[fruit] = 1;
    }
  });
  
  console.log(countFruits)
  break;

  case 46:
  // 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor.
  const sales = [ { vendedor: "Claudio",
                    valor: 430
                   },
                   { vendedor: "Renata",
                     valor: 560
                   },
                   { vendedor: "Julia",
                     valor: 840
                   },
                   { vendedor: "Renata",
                     valor: 290
                   },
                   { vendedor: "Claudio",
                     valor: 120
                   }
                ]
  
  function sumSales(array) {
    const sumSales = {}
    array.forEach(sale => {
      if(sumSales[sale.vendedor]) {
        sumSales[sale.vendedor] += sale.valor
      } else {
        sumSales[sale.vendedor] = sale.valor
      }
    })
    console.log(sumSales)
  }
  sumSales(sales)
  break;

  case 47:
  // 47. Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os resultados.
  const names = { name1: "flavia",
                  name2: "julia",
                  name3: "renato",
                  name4: "Carlos",
                  name5: "fernanda"
                }

  function uppercaseNames(object) {
    transformObject = {}
    for(let key in object) {
      transformObject[key] = object[key].toUpperCase()
    }
    console.log(transformObject)
  }
  uppercaseNames(names)
  break;

  case 48:
  /* 48. Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
    item em estoque. Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades.
  */
    const inventarioLojaA = { relogio: 10,
                              caneta: 25,
                              caderno: 56
                            }
    const inventarioLojaB = { mouse: 108,
                              teclado: 58,
                              monitor: 42,
                              webcam: 18,
                              caneta: 80
                            }

    function combineInventory(object1, object2) {
      const combinedObj = {}
      for (let key in object1) {
        combinedObj[key] = object1[key]
      }
    
      for (let key in object2) {
        if (combinedObj[key]) {
          combinedObj[key] = combinedObj[key] + object2[key]
        } else {
          combinedObj[key] = object2[key]
        }
      }
      console.log(combinedObj)
    }
    combineInventory(inventarioLojaA, inventarioLojaB)
    break;

  case 49:
  /* 49. Você recebe um array de objetos representando transações financeiras. Cada transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
    onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
  */
  const financialTransaction = [ {id: 1904,
                                  amount: 5600,
                                  date: "20/03/2024",
                                  category: "ted"
                                  },
                                  {id: 5689,
                                  amount: 1256,
                                  date: "21/03/2024",
                                  category: "pix"
                                  },
                                  {id: 8745,
                                  amount: 15000,
                                  date: "22/03/2024",
                                  category: "doc"
                                  },
                                  {id: 3256,
                                  amount: 200,
                                  date: "22/03/2024",
                                  category: "ted"
                                  },
                                  {id: 4689,
                                  amount: 1400,
                                  date: "22/03/2024",
                                  category: "pix"
                                  }
                               ]

  function objectOrdenedByCategory(arrayTransactions) {
    const result = {}
    const amountByCategory = {}

    arrayTransactions.forEach(transaction => {
      const category = transaction.category
      if(!result[category]) {
        result[category] = []
      }
      result[category].push(transaction)
    })

    arrayTransactions.forEach(transaction => {
      if(amountByCategory[transaction.category]) {
        amountByCategory[transaction.category] += transaction.amount
      } else {
        amountByCategory[transaction.category] = transaction.amount
      }
    })

    console.log("Transações por categoria: ", result)
    console.log("Subtotal de valores por categoria: ", amountByCategory)
  }
  objectOrdenedByCategory(financialTransaction)
  break;

  case 50:
  /* 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema deverá ser capaz de interagir com o usuário através do console do navegador e manter
    um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
    1. Estrutura de Dados:
    Hotel: Cada hotel deve ser um objeto com propriedades para id, nome, cidade, quartos totais e quartos disponiveis.
    Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e nomeCliente.
    2. Funcionalidades:
    Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
    Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis disponíveis em uma cidade específica.
    Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel.
    Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente.
    Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.
    3. Regras de Negócio:
    Um hotel só pode aceitar reservas se houver quartos disponíveis.
    As reservas devem ser identificadas por um ID único e associadas a um único hotel.
    4. Desafios Adicionais (Opcionais):
    Implementar uma função de check-in e check-out que atualize a disponibilidade de quartos.
    Gerar relatórios de ocupação para um hotel.
    Permitir que o usuário avalie o hotel após a estadia, e armazenar essas avaliações dentro do objeto do hotel.
  */
  const listaHoteis = [{id: 8978, nome: "Hotel Magia", cidade: "Recife", total_quartos: 20, quartos_disp: 12},
                      {id: 5689, nome: "Hotel Praiano", cidade: "Natal", total_quartos: 35, quartos_disp: 5},
                      {id: 2354, nome: "Marina Hotel", cidade: "Ipojuca", total_quartos: 15, quartos_disp: 8},
                      {id: 4578, nome: "Hotel dos Passaros", cidade: "Rio de Janeiro", total_quartos: 10, quartos_disp: 4}]

  const listaReservas = [{idReserva: 123, idHotel: 5689, nomeCliente: "Juliana da Silva"},
                       {idReserva: 456, idHotel: 4578, nomeCliente: "Ricardo Ramos Pereira"}]

  function cadastrarHotel(listaHoteis) {
    prompt("=====Cadastrar novo hotel=====")
    const id = parseInt(prompt("Digite o id do hotel: "))
    const nome = prompt("Digite o nome do hotel: ")
    const cidade = prompt("Digite a cidade do hotel: ")
    const total_quartos = parseInt(prompt("Digite a quantidade total de quartos do hotel: "))
    const quartos_disp = parseInt(prompt("Digite a quantidade de quartos disponíveis do hotel: "))

    const novoHotel = {
      id: id,
      nome: nome,
      cidade: cidade,
      total_quartos: total_quartos,
      quartos_disp: quartos_disp
    }
  
    listaHoteis.push(novoHotel)
    console.log("Hotel cadastrado!")
    console.log(listaHoteis)
  }

  function listagemHotel(listaHoteis) {
    prompt("=====Listar hoteis por cidade=====")
    const cidade = prompt("Listar todos os hotéis disponíveis em: ")

    const hoteisNaCidade = []
    listaHoteis.forEach(hotel => {
      if (hotel.cidade === cidade) {
        hoteisNaCidade.push(hotel.nome)
      }
    })
    console.log(hoteisNaCidade)
  }

  function cadastrarReserva(listaReservas) {
    prompt("=====Cadastrar nova reserva=====")
    const idReserva = parseInt(prompt("Digite o id da reserva: "))
    const idHotel = parseInt(prompt("Digite o id do hotel: "))
    const nomeCliente = prompt("Digite o nome da cliente: ")

    listaHoteis.forEach(hotel => {
      if(hotel.id === idHotel) {
        if (hotel.quartos_disp > 0) {
          const novaReserva = {
            idReserva: idReserva,
            idHotel: idHotel,
            nomeCliente: nomeCliente,
          };
          listaReservas.push(novaReserva)
          hotel.quartos_disp -= 1
          console.log("Reserva cadastrada!")
        } else {
          console.log("O hotel não tem quartos disponíveis no momento")
        }
      }
    })

    console.log(listaReservas)
    console.log(listaHoteis)
  }

  function cancelarReserva(listaReservas) {
    prompt("=====Cancelar Reserva=====")
    const idReservaBusca = parseInt(prompt("Digite o id da reserva: "))

    const index = listaReservas.findIndex(reserva => reserva.idReserva === idReservaBusca)
    if (index !== -1) {
      const reservaCancelada = listaReservas.splice(index, 1)[0]
  
      const hotel = listaHoteis.find(hotel => hotel.id === reservaCancelada.idHotel)
      if (hotel) {
        hotel.quartos_disp += 1
      }  
      console.log("Reserva cancelada!")
      console.log(listaReservas);
      console.log(listaHoteis);
    } else {
      console.log("Reserva não encontrada!")
    }
  }

  function listagemReservas(listaReservas) {
    prompt("=====Listar Reservas=====")

    listaReservas.forEach(reserva => {
      const hotel = listaHoteis.find(hotel => hotel.id === reserva.idHotel)

      if (hotel) {
        console.log({
          idReserva: reserva.idReserva,
          nomeCliente: reserva.nomeCliente,
          idHotel: hotel.id,
          nomeHotel: hotel.nome,
          cidadeHotel: hotel.cidade
        })
      } else {
        console.log("Hotel não encontrado")
      }
    })
  }

  cadastrarHotel(listaHoteis)
  listagemHotel(listaHoteis)
  cadastrarReserva(listaReservas)
  cancelarReserva(listaReservas)
  listagemReservas(listaReservas)
  break;

  default:
    console.log("Questão inválida.")
}