#pragma once
#include "ofMain.h"

class Duck {
public:
    // constructor
    Duck();
    
    // variables
    float posX, posY;
    float velX, velY;
    float size;
    
    void setup();
    void move(float mPX, float mPY);
    void display();
    
//    void reset(float newPosX, float newPosY);
    
};
