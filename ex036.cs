using System;

class Program
{
    static void Main()
    {
        int totalPessoas = 6;
        int somaIdades = 0;
        int maioresDeIdade = 0;
        int menoresDeIdade = 0;
        int mulheresMaioresDeIdade = 0;

        for (int i = 1; i <= totalPessoas; i++)
        {
            // Lendo a idade
            Console.Write("Digite a idade da pessoa " + i + ": ");
            int idade = int.Parse(Console.ReadLine());

            // Lendo o sexo
            Console.Write("Digite o sexo da pessoa " + i + " (M/F): ");
            char sexo = char.Parse(Console.ReadLine().ToUpper());

            // Acumula a soma das idades
            somaIdades += idade;

            // Verificando se é maior ou menor de idade
            if (idade >= 18)
            {
                maioresDeIdade++;
                if (sexo == 'F')
                {
                    mulheresMaioresDeIdade++;
                }
            }
            else
            {
                menoresDeIdade++;
            }
        }

        // Calculando a média das idades
        double mediaIdade = (double)somaIdades / totalPessoas;

        // Calculando as porcentagens
        double porcentagemMaiores = (double)maioresDeIdade / totalPessoas * 100;
        double porcentagemMenores = (double)menoresDeIdade / totalPessoas * 100;
        double porcentagemMulheresMaiores = (double)mulheresMaioresDeIdade / totalPessoas * 100;

        // Exibindo os resultados
        Console.WriteLine("\nMédia das idades: " + mediaIdade);
        Console.WriteLine("Porcentagem de maiores de idade: " + porcentagemMaiores + "%");
        Console.WriteLine("Porcentagem de menores de idade: " + porcentagemMenores + "%");
        Console.WriteLine("Porcentagem de mulheres maiores de idade: " + porcentagemMulheresMaiores + "%");
    }
}
