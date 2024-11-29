//sum of 1 to 10

//#include<stdio.h>
//
//int main() {
//int num;
//    printf("Please enter your required number: ");
//    scanf("%d", &num);
//    int i, result = 0;
//    for(i = 0; i <= num; i++) {
//        result = result + i;
//    }
//    printf("The sum of 1 to %d is: %d", num, result);
//}


//Sum of even number from 1 to n

#include<stdio.h>
int main() {
    int num, result = 0, i;
    printf("Please enter your number: ");
    scanf("%d", &num);

    for(i = 0; i <= num; i+=2) {

        printf("%d\n", i);
        result = result + i;
    }
    printf("%d", result);
}
