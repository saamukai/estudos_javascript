#include <stdio.h>
#include <stdlib.h>

int main (){

    for(int i=1; i<=25; i++){
        // printf("<script src=\"./ex%d.js\"></script>\n", i); 
        printf("<button onclick=\"ex%d()\">Exercicio %d</button>&nbsp;&nbsp;&nbsp;&nbsp;\n", i, i);
        if((i==5) || (i==10) || (i==15) || (i==20) || (i==25))
            printf("\n<br><br><br>\n");
    }

}