const int ledPin = 9; 
const int buttonPin = 8;
int buttonState = LOW; 
int ledState = -1; 

void setup(){
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT);
}
 
void loop(){
 
buttonState = digitalRead(buttonPin);
 
if( (buttonState == HIGH) && (ledState < 0) ){
     digitalWrite(ledPin, HIGH); //turn LED on
     ledState = -ledState; //now the LED is on, we need to change the state
     lastDebounceTime = millis(); //set the current time
  }
 
    else if( (buttonState == HIGH) && (ledState > 0) ){
      digitalWrite(ledPin, LOW); //turn LED off
      ledState = -ledState; //now the LED is off, we need to change the state
      lastDebounceTime = millis(); //set the current time
    }
}
