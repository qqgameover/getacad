using System;

namespace getacad
{
	class Program
	{
		static void Main(string[] args)
		{
			int firstNum;
			int secondNum;
			string operation;
			int answer;

			Console.WriteLine("Enter a number");
			firstNum = Convert.ToInt32(Console.ReadLine());
			Convert.ToInt32(firstNum);

			Console.WriteLine("Enter an operator");
			operation = Console.ReadLine();

			Console.WriteLine("Enter another number");
			secondNum = Convert.ToInt32(Console.ReadLine());
			Convert.ToInt32(secondNum);
			if (operation == "/")
			{
				answer = firstNum / secondNum;
				Convert.ToString(answer);
				Console.WriteLine("Your answer is " + answer);
			}
			else if (operation == "+")
			{
				answer = firstNum + secondNum;
				Convert.ToString(answer);
				Console.WriteLine("Your answer is " + answer);
			}
			else if (operation == "-")
			{
				answer = firstNum - secondNum;
				Convert.ToString(answer);
				Console.WriteLine("Your answer is " + answer);
			}
			else if (operation == "*")
			{
				answer = firstNum * secondNum;
				Convert.ToString(answer);
				Console.WriteLine("Your answer is " + answer);
			}
		}
	}
}
