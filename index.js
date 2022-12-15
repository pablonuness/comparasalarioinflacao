import escolha from 'readline-sync'

let array_salario=[510,545,622,678,724,788,880,937,954,998,1045];
let array_IPCA=[5.91,6.5,5.84,5.91,6.41,10.67,6.29,2.95,3.75,4.31,4.52];
let label_ano= 'Ano';
let label_salariomin= 'Salário Mínimo';
let label_inflacao= 'Inflação IPCA';
let label_crescimento= 'Crescimento Salarial';
let opcao='';

do {
    console.log('\n');
    console.log('Escolha uma das alternativas:')
    console.log('\n');
    console.log("1 - Listar os salários mínimos de 2010 à 2020");
    console.log("2 - Listar o índice IPCA de 2010 à 2020");
    console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");
    console.log("4 - Finalizar o programa");
    console.log('\n');
    opcao = escolha.question("Digite o numero de sua escolha: ");

    switch(Number(opcao)){
        case 1:
            for(let contador=0;contador<11;contador++){
                if(contador<10){
                console.log(label_ano.padEnd(20,".")+': 201'+contador);
                console.log(label_salariomin.padEnd(20,".")+': R$ '+array_salario[contador]);
                console.log('\n');
                }else{
                console.log(label_ano.padEnd(20,".")+': 2020');
                console.log(label_salariomin.padEnd(20,".")+': R$ '+array_salario[contador]);
                console.log('\n');
                }
            }
            break;
        case 2:
            for(let contador=0;contador<11;contador++){
                if(contador<10){
                console.log(label_ano.padEnd(20,".")+': 201'+contador);
                console.log(label_inflacao.padEnd(20,".")+': '+array_IPCA[contador]);
                console.log('\n');
                }else{
                console.log(label_ano.padEnd(20,".")+': 2020');
                console.log(label_inflacao.padEnd(20,".")+': '+array_IPCA[contador]);
                console.log('\n');
                } 
            }
            break;
        case 3:
            for(let contador=0;contador<11;contador++){
                if(contador==0){
                    console.log(label_ano.padEnd(20,".")+': 201'+contador);
                    console.log(label_salariomin.padEnd(20,".")+': R$'+array_salario[contador]);
                    console.log(label_inflacao.padEnd(20,".")+': -');
                    console.log(label_crescimento.padEnd(20,".")+': -');
                    console.log('\n'); 
                }else if(contador<10){
                    console.log(label_ano.padEnd(20,".")+': 201'+contador);
                    console.log(label_salariomin.padEnd(20,".")+': R$'+array_salario[contador]);
                    console.log(label_inflacao.padEnd(20,".")+': '+((((array_IPCA[contador]-array_IPCA[contador-1])/array_IPCA[contador-1])*100).toFixed(2)+"%"));
                    console.log(label_crescimento.padEnd(20,".")+': '+((((array_salario[contador]-array_salario[contador-1])/array_salario[contador-1])*100).toFixed(2)+"%"));
                    console.log('\n');
                }else{
                    console.log(label_ano.padEnd(20,".")+': 2020');
                    console.log(label_salariomin.padEnd(20,".")+': R$'+array_salario[contador]);
                    console.log(label_inflacao.padEnd(20,".")+': '+((((array_IPCA[contador]-array_IPCA[contador-1])/array_IPCA[contador-1])*100).toFixed(2)+"%"));
                    console.log(label_crescimento.padEnd(20,".")+': '+((((array_salario[contador]-array_salario[contador-1])/array_salario[contador-1])*100).toFixed(2)+"%"));
                    console.log('\n');
                }

            }
            break;
        case 4:
            process.exit();
            break;
        default:
            console.log('Opção invalida, digite valores entre 1 e 3!');
            break;
}
}while((Number(opcao)!=1)||(Number(opcao)!=2)||(Number(opcao)!=3));