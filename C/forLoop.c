//sum of 1 to 10

#include<stdio.h>

int main() {
int num;
    printf("Please enter your required number: ");
    scanf("%d", &num);
    int i, result = 0;
    for(i = 0; i <= num; i++) {
        result = result + i;
    }
    printf("The sum of 1 to %d is: %d", num, result);
}

