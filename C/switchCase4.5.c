////#include<stdio.h>
////
////int main() {
////    int num1, num2, result;
////    char operation;
////    printf("Please enter your event: ");
////    scanf("%d %c %d", &num1, &operation, &num2);
////    if(operation == '+') {
////        result = num1 + num2;
////        printf("%d", result);
////    } else
////        if(operation == '-') {
////            result = num1 - num2;
////            printf("%d", result);
////        } else
////            if(operation == '*') {
////                result = num1 * num2;
////                printf("%d", result);
////            } else
////                if(operation == '/') {
////                    result = num1 / num2;
////                    printf("%d", result);
////                } else {
////                    printf("Error");
////                }
////}
//
//#include<stdio.h>
//int main() {
//    int num1, num2, result;
//    char op;
//    printf("Please enter your desired operation: ");
//    scanf("%d %c %d", &num1, &op, &num2);
//    switch(op) {
//    case '+':
//        result = num1 + num2;
//        printf("%d", result);
//        break;
//    case '-':
//        result = num1 - num2;
//        printf("%d", result);
//        break;
//    case '*':
//        result = num1 * num2;
//        printf("%d", result);
//        break;
//    case '/':
//        result = num1 / num2;
//        printf("%d", result);
//        break;
//    }
//}

#include<stdio.h>

int main() {
    int abs, num;
    printf("Please enter your value: ");
    scanf("%d", &num);
    abs = (num > 0 ? num : -num);
    printf("%d", abs);
}












