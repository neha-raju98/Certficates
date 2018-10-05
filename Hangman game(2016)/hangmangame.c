//hangmangame.c
//Neha Raju
//

#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include <string.h>
#include <time.h>

#define MAX_SIZE 100

#define MAX_WRONG_GUESS 8

#define TRUE 1
#define FALSE 0

char *appointWord (char *message, int len);
char *setUpFound (int len);

int main (int argc, char *argvp[]) {
	
	srand(time(NULL));

	FILE *fp;
	fp = fopen("./wordList.txt", "r");
	//fp = fopen("wordList.txt", "r");
	int index = 0;

	//printf("works\n");

	char message[60];
	int randomiser = rand()%21;

	//printf("works2\n");

	
	//gets random line from wordlist
	while (index < randomiser) {
		
		fgets(message,60,fp);
		//printf("works1\n");
		
		index++;
	}

	//printf("works3\n");

	fclose(fp);
	
	//printf("message: %s\n", message);

	int len = strlen(message) - 2;

	printf("length: %d\n", len);

	char *selectedWord = appointWord (message, len);


	//printf("selected Word is NOW : %s\nand length is now: %d\n", selectedWord, len);


	int counter;
	int correct;
	char playerInput;
	int wrongGuess = MAX_WRONG_GUESS;
	
	int lost = FALSE;
	char *found = setUpFound (len);

	//compare found letters with selected word to see if they match
	while (strcmp(found,selectedWord) != 0 && lost == FALSE) {

		//checks if player has run out of guesses
		if (wrongGuess == 0) {
			printf ("You lost!\n");
			printf("The word was %s\n", selectedWord);
			lost = TRUE;
		} else {
			correct = FALSE;
			counter = 0;
			scanf ("%c", &playerInput);

			//makes sure playerInput is alphabet
			if (playerInput >= 'a'&& playerInput <= 'z') {
				while (counter < len) {

					//checks if player input is in selectedWord
					if (playerInput == message[counter]) {
						found[counter] = playerInput;
						correct = TRUE;
						printf("You found a letter!\n\n");
						printf("%s\n\n", found);
					}
					counter++;
				}

				//if playerInput is not in selected word then 
				//subtract from wrong guesses available
				if (correct == FALSE) {
					wrongGuess--;
					printf("%s\n\n", found);
					printf("Wrong guesses left: %d\n\n", wrongGuess);
				}

				printf("Please type in a letter\n");
			}
			
		}
		
	}

	if (lost == FALSE) {
		//this is if the player wins
		printf("\nYou got it!\n");
		printf("You had %d more wrong guesses left\n", wrongGuess);
	}
		

	return EXIT_SUCCESS;
}

//appoints selected word
char *appointWord (char *message, int len) {
	char *selectedWord = malloc(len);
	int x = 0;

	while (x < len) {
		selectedWord[x] = message[x];
		x++;
	}

	return selectedWord;
}

//sets up found for game
char *setUpFound (int len) {
	int i = 0;
	char *found = malloc(len);

	while (i < len) {
		found[i] = '-';
		i++;
	}
	return found;
}