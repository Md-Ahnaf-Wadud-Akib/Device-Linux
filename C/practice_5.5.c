//#include<stdio.h>
//
//int main() {
//    int num;
//    printf("Please enter your required number: ");
//    scanf("%d", &num);
//    if(num % 2 == 0) {
//        printf("%d is an even number", num);
//    }
//    else {
//    printf("%d is a odd number", num);
//}
//}

#include<stdio.h>

int main() {
    int a, b, result = 0;
    char op;
    printf("please enter your event: ");
    scanf("%d %c %d", &a, &op, &b);
    switch(op) {
    case '+':
        result = a + b;
        printf("The result is: %d", result);
        break;
    case '-':
        result = a - b;
        printf("The result is %d", result);
        break;
    case '*':
        result = a * b;
        printf("The result is: %d", result);
        break;
    case '/':
        if(b == 0) {
            printf("Can not divide by 0");
        } else {
            result = a / b;
            printf("The result is: %d", result);
        }
        break;
    case ' %':
        if(b == 0){
            printf("Can not divide by 0");
        } else {
            result = a % b;
            printf("The reminder is: %d", result);
        }
        break;
    }
}












