int ledPin = 9; 
int buttonPin = 8;
int buttonState = LOW; 
int ledState = -1; 

void setup(){
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT);
}
 
void loop(){
 
buttonState = digitalRead(buttonPin);
 
if( (buttonState == HIGH) && (ledState < 0) ){
     digitalWrite(ledPin, HIGH); 
     ledState = -ledState;
  }
 
    else if( (buttonState == HIGH) && (ledState > 0) ){
      digitalWrite(ledPin, LOW); 
      ledState = -ledState;
    }
}
