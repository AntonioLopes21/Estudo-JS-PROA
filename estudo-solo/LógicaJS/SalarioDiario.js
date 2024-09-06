/*
 * verificar qual o valor recebido diariamente de um funcionário
 */

const salarioPorHorasTrabalhadas = (salario) => {
    //salário da diária tirando finais de semana
    const diasMes = 30
    const diasFinaisDeSemana = 8
    
    salarioDiaria = salario / (diasMes - diasFinaisDeSemana);
    //salário das horas trabalhadas no
    salarioHora = salarioDiaria / 12
    
    return `O valor da sua diária é de:R$${salarioHora.toFixed(2)}`
    
    //toFixed ajusta as casas decimais
}

console.log(salarioPorHorasTrabalhadas(3000))
//