#include<stdio.h>
#include<stdlib.h> 
#include<ctype.h> 
#include<string.h>
#include "include/mul.h"
#include "include/div.h"
#include "include/addition.h"
#include "include/sub.h"
#include "validation/validate.h"



#define SIZE 1000
char expe[200][100];
char operator[4]={'*','/','-','+'};


void expression_solve(int j)
{
	int i,m,flg=0;
	for(i=0;i<4;i++)
	{
		for(m=1;m<j;)
		{
			char temp[20];
			flg=0;
			if(operator[i]==expe[m][0] && i==0)
			{
				flg=1;
				int re=multiplication(expe[m-1],expe[m+1]);
				sprintf(temp,"%d",re);
			}
			else if(operator[i]==expe[m][0] && i==1)
			{
				flg=1;
				if(atoi(expe[m+1])==0)
				{
					printf("invalid expression..! any no not divided by 0\n");
					exit(1);
				}
				int re=division(expe[m-1],expe[m+1]);
				sprintf(temp,"%d",re);
			}
			else if(operator[i]==expe[m][0] && i==3)
			{
				flg=1;
				int re=addition(expe[m-1],expe[m+1]);
				sprintf(temp,"%d",re);
			}
			else if(operator[i]==expe[m][0] && i==2)
			{
				flg=1;
				int re=substraction(expe[m-1],expe[m+1]);
				sprintf(temp,"%d",re);
			}

			if(flg==1)
			{
				int kk;
				for(kk=0;kk<strlen(temp);kk++)
				{
					expe[m-1][kk]=temp[kk];
				}
				expe[m-1][kk]='\0';
				int len_m=m;
				for(kk=m+2;kk<j;kk++)
				{
					int n;
					for(n=0;n<strlen(expe[kk]);n++)
					{
						expe[len_m][n]=expe[kk][n];
					}
					expe[len_m][n]='\0';
					len_m++;
				}
			}
			if(flg==1)
				j=j-2;
			else
				m=m+2;

		}
	}
}


int is_operator(char symbol)
{
	if(symbol == '*')
		return 1;
	else if(symbol == '/')
		return 2;
	else if(symbol == '-')
		return 3;
	else
		return 4;
	
}


void stor_in_exp_and_validate_exp(char *infix_exp)
{ 
	int i,j,m;
	char value;
	i=0;
	j=0;
	m=0;
	value=infix_exp[i];	/* initialize before loop*/
	if(value=='+')
	{
		i++;
		value=infix_exp[i];
	}
	while(value != '\0')        /* run loop till end of infix expression */
	{
		if((value=='+' || value=='-' || value=='*' || value=='/') && i==0)
		{
			printf("Invalid expression....\n");
			exit(1);
		}
		if(value==' ')
		{
			i++;
			value=infix_exp[i];
		}
		else if(isdigit(value))
		{
			  int k=0;
       			  char a[6];
			  for(m=0;m<7;m++)
			  {
				  if(value==' ')
				  {
					  i++;
					  value=infix_exp[i];
				  }
				  else if(isdigit(value))
				{
					a[k]=value;
					k++;
				 	i++;
					value=infix_exp[i];
				}
				else
				{
					a[k]='\0';
					for(m=0;m<strlen(a);m++)
					expe[j][m]=a[m];

					expe[j][m]='\0';
					j++;
					break;
				}
			}
		}
		else
		{
			m=0;
		      	if(is_operator(value) == 1)        /* means symbol is operator */
				expe[j][m]='*';
			else if(is_operator(value)==2)
				expe[j][m]='/';
			else if(is_operator(value)==3)
				expe[j][m]='-';
			else
				expe[j][m]='+';

			expe[j][m+1]='\0';
			j++;
			i++;
			value=infix_exp[i];
		}
	}
	expression_solve(j);

}

/* main function begins */
int main()
{
	char infix[SIZE];         /* declare infix string and postfix string */
	printf("\nEnter infix expression : ");
	scanf("%[^\n]s",infix);
	if(validate_exp(infix))
	{
		stor_in_exp_and_validate_exp(infix);	/* call to convert */
		printf("%s\n",expe[0]);
	}
	else
	{
		printf("Invalid Expression.....\n");
		exit(1);
	}
	return 0;
}
