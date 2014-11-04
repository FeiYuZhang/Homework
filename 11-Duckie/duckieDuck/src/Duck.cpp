//
//  Duck.cpp
//  duckieDuck
//
//  Created by Cat on 11/3/14.
//
//

#include "Duck.h"

Duck::Duck() {
    posX = ofGetWindowHeight() * 0.5;
    posY = ofGetWindowHeight() * 0.5;
}

void Duck::setup() {
    size = (50, 50);
    
    velX = ofRandom(-5, 5);
    velY = ofRandom(-4, 4);
}

void Duck::move(float mPX, float mPY) {
    posX = posX + velX;
    posY += velY;
    
    if (posX > ofGetWindowWidth() || posX < 0 || posX < mPX + 25) {
        velX = velX * (-1);
    }
    
    if (posY > ofGetWindowHeight() || posY < 0 || posY < mPY + 25) {
        velY = velY * (-1);
    }
}

void Duck::display() {
    
    // head
    ofSetColor(255, 228, 0);
    ofCircle(posX, posY, size);
    
    // wings
    
    // right wings
    ofBeginShape();
        ofVertex(posX + 40, posY - 20);
        ofVertex(posX + 80, posY + 20);
        ofVertex(posX + 40, posY + 25);
    ofEndShape();
    
    // left wings
    ofBeginShape();
    ofVertex(posX - 40, posY - 20);
    ofVertex(posX - 80, posY + 20);
    ofVertex(posX - 40, posY + 25);
    ofEndShape();
    
    // eyes
    ofSetColor(0);
    ofCircle(posX + 20, posY, 5); // right eye
    ofCircle(posX - 20, posY, 5); // left eye
    
    // beak
    ofSetColor(255, 126, 0);
    ofSetPolyMode(OF_POLY_WINDING_NONZERO);
    ofBeginShape();
        ofVertex(posX + 20, posY + 10);
        ofVertex(posX - 20, posY + 10);
        ofVertex(posX, posY + 30);
    ofEndShape();
    
}