//#include<stdio.h>
//
//int main() {
//    int i;
//    for(i = 1; i != 10; i+=2) {
//        printf("%d\n", i);
//    }
//}


#include<stdio.h>
int main() {
    int i, j;
    for(i = 1, j = 9; i <= j; i++, j--) {
        printf("%d %d\n", i, j);
    }
}
