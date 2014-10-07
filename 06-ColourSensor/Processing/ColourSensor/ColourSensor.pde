import processing.serial.*;

Serial myPort; // create new serial connection named myPort  
int r;
int g; 
int b;
int[] serialInArray = new int[3];
int serialCount = 0;

void setup() {
  size(500,500);
  smooth();
  myPort = new Serial(this, Serial.list()[17], 9600);
}

void draw() {
  int inByte = myPort.read();
  serialInArray[serialCount] = inByte;
  serialCount++;
  if(serialCount>2) {
    r = serialInArray[0];
    g = serialInArray[1];
    b = serialInArray[2];
    serialCount = 0;
    background(r,g,b);
    println(r + "-" + g + "-" + b);
    delay(3500);
  }
}
