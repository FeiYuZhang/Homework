#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){

    xPos = 0;
    xVel = 3;
    yPos = 0;
    yVel = 3;

}

//--------------------------------------------------------------
void ofApp::update(){
    
    if(xPos > ofGetWidth() || xPos < 0) {
        xVel = -xVel;
    }
    if(yPos > ofGetHeight() || yPos < 0) {
        yVel = -yVel;
    }

    xPos += xVel;
    yPos += yVel;
    
}

//--------------------------------------------------------------
void ofApp::draw(){
    
    ofEllipse(xPos, yPos, 60, 60);

}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}