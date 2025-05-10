#include <iostream>
#include <conio.h>
#include <windows.h>
#include <algorithm>
std::string username;
bool gameRunning = false;
char snake = '8';
char food = 'E';
int numberofSnake = 0;
int previousY = 1;
int previousX = 1;
int foodPositionY = 5;
int foodPositionX = 5;
int snakePositionY = 1;
int snakePositionX = 1;
int previouspositionsY[10];
int previouspositionsX[10];
int ix = 0;
void gameUpdate(){
    system("cls");
    std::cout << "Hello " << username << "!\n";
    for(int i = 1; i <= 13; i++){
        for(int j = 1; j <= 10; j++){
            if(snakePositionY == i && snakePositionX == j){
                std::cout << "| " << "X" << " ";
            }
            else if(foodPositionY == i && foodPositionX == j){
                std::cout << "| " << food << " ";
            }
            // I have to fix here. The index for both have to be same.
            else if(std::find(std::begin(previouspositionsY), std::end(previouspositionsY), i) != std::end(previouspositionsY) && std::find(std::begin(previouspositionsX), std::end(previouspositionsX), j) != std::end(previouspositionsX)){
                std::cout << "| " << snake << " ";
            }
            else{
                std::cout << "|   ";
            }
        }
        std::cout << '\n';
    }
}
int main(){
    std::cout << "Snake\n";
    while(username.empty()){
        std::cout << "Enter a username to start playing:\n";
        std::getline(std::cin, username);
    }
    if(!username.empty()){
        gameRunning = true;
        gameUpdate();
    }
    while(gameRunning){
        if(_kbhit()){
            previousY = snakePositionY;
            previousX = snakePositionX;
            switch(_getch()){
                case 'w': --snakePositionY; gameUpdate(); break;
                case 's': ++snakePositionY; gameUpdate(); break;
                case 'a': --snakePositionX; gameUpdate(); break;
                case 'd': ++snakePositionX; gameUpdate(); break;
            }
            // New plan put new inputs in a overwriting array based on a length equal to number of foods eaten, then put the entire array into another array 1 by one. 
            previouspositionsY[ix] = previousY;
            previouspositionsX[ix] = previousX;
            ++ix;
            if(ix > numberofSnake){
                ix = 0;
            }
            gameUpdate();
        }
        if(snakePositionY <= 0 || snakePositionY >= 14 || snakePositionX >= 11 || snakePositionX <= 0){
            gameRunning = false;
        }
        if(snakePositionX == foodPositionX && snakePositionY == foodPositionY){
            foodPositionY = (rand() % 13) + 1;
            foodPositionX = (rand() % 10) + 1;
            ++numberofSnake;
            gameUpdate();
        }
        Sleep(200);
    }
    return 0;
}