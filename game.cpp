#include <iostream>
#include <conio.h>
#include <windows.h>
void gameUpdate(bool gameRunning, int snakePositionY, int snakePositionX, char snake, std::string username, int foodPositionY, int foodPositionX, char food, int numberofSnake, int previousY, int previousX){
    std::cout << "Hello " << username << "!\n";
    for(int i = 1; i <= 13; i++){
        for(int j = 1; j <= 10; j++){
            if(snakePositionY == i && snakePositionX == j){
                std::cout << "| " << snake << " ";
            }
            if(foodPositionY == i && foodPositionX == j){
                std::cout << "| " << food << " ";
            }
            if(previousY == i && previousX == j){
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
    std::string username;
    bool gameRunning = false;
    char snake = '8';
    char food = 'E';
    int numberofSnake = 1;
    int previousY = 0;
    int previousX = 0;
    int foodPositionY = 5;
    int foodPositionX = 5;
    int snakePositionY = 1;
    int snakePositionX = 1;
    std::cout << "Snake\n";
    while(username.empty()){
        std::cout << "Enter a username to start playing:\n";
        std::getline(std::cin, username);
    }
    if(!username.empty()){
        gameRunning = true;
        gameUpdate(gameRunning, snakePositionY, snakePositionX, snake, username, foodPositionY, foodPositionX, food, numberofSnake, previousY, previousX);
    }
    while(gameRunning){
        if(_kbhit()){
            switch(_getch()){
                case 'w': previousY = snakePositionY; --snakePositionY; gameUpdate(gameRunning, snakePositionY, snakePositionX, snake, username, foodPositionY, foodPositionX, food, numberofSnake, previousY, previousX); break;
                case 's': previousY = snakePositionY; ++snakePositionY; gameUpdate(gameRunning, snakePositionY, snakePositionX, snake, username, foodPositionY, foodPositionX, food, numberofSnake, previousY, previousX); break;
                case 'a': previousX = snakePositionX; --snakePositionX; gameUpdate(gameRunning, snakePositionY, snakePositionX, snake, username, foodPositionY, foodPositionX, food, numberofSnake, previousY, previousX); break;
                case 'd': previousX = snakePositionX; ++snakePositionX; gameUpdate(gameRunning, snakePositionY, snakePositionX, snake, username, foodPositionY, foodPositionX, food, numberofSnake, previousY, previousX); break;
            }
        }
        if(snakePositionY <= 0 || snakePositionY >= 14 || snakePositionX >= 11 || snakePositionX <= 0){
            gameRunning = false;
        }
        if(snakePositionX == foodPositionX && snakePositionY == foodPositionY){
            foodPositionY = (rand() % 13) + 1;
            foodPositionX = (rand() % 10) + 1;
            numberofSnake += 1;
            gameUpdate(gameRunning, snakePositionY, snakePositionX, snake, username, foodPositionY, foodPositionX, food, numberofSnake, previousY, previousX);
        }
        Sleep(250);
    }
    return 0;
}