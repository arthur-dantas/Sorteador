function sortear() {



    // 1ª passo pegar o total de resultados

    const totalResultados = Number(document.querySelector('#totalValorInput').value)
    console.log(totalResultados)

    // 2ª passo pegar o menor valor

    const menorValor = Number(document.querySelector('#menorValorInput').value)
    console.log(menorValor)

    // 3ª passo pegar o maior valor 

    const maiorValor = Number(document.querySelector('#maiorValorInput').value)
    console.log(maiorValor)

    //limpar resultados antigos para executar a subistituição de resultados 
    const elementoResultValues = document.querySelector('.result-values')
    elementoResultValues.innerHTML = ''


    for (let i = 0; i < totalResultados; i++) {
        // 4ª passo gerar um número aleatório entre o menor e maior valor 
        const resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor


        // Gerar elemento HTML através do JS

        const elementoHtml = document.createElement('div')
        elementoHtml.classList.add('result-value')
        elementoHtml.innerText = resultado


        // adcionar o elemento criado ao html existente

        elementoResultValues.append(elementoHtml)

    }

}