let result = 0;
export default function calc1(number, sign){
	switch(sign){
		case '+':
			return result += number;
		case '-':
			return result -= number;
		case '*':
			return result *= number;
		case '/':
			return result /= number;
		default: 
			return result;
	}
}