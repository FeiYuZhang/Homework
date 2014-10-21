#include <AccelStepper.h> // You need the AccelStepper library for this.
#define HALFSTEP 8

// Motor pin definitions
#define motorPin1  3     // IN1 on the ULN2003 driver 1
#define motorPin2  4     // IN2 on the ULN2003 driver 1
#define motorPin3  5     // IN3 on the ULN2003 driver 1
#define motorPin4  6     // IN4 on the ULN2003 driver 1

// Motor pin definitions
#define motorPin5  8     // IN1 on the ULN2003 driver 1
#define motorPin6  9     // IN2 on the ULN2003 driver 1
#define motorPin7  10     // IN3 on the ULN2003 driver 1
#define motorPin8  11     // IN4 on the ULN2003 driver 1

int s1 = 7;
int s2 = 12; 

//// Initialize with pin sequence IN1-IN3-IN2-IN4 for using the AccelStepper with 28BYJ-48
AccelStepper stepper1(HALFSTEP, motorPin1, motorPin3, motorPin2, motorPin4);
AccelStepper stepper2(HALFSTEP, motorPin5, motorPin7, motorPin6, motorPin8);

void setup() {
  Serial.begin(9600);
  
  pinMode(s1, INPUT);
  pinMode(s2, INPUT);
  
  stepper1.setMaxSpeed(1000);
  stepper1.setAcceleration(10);
  stepper1.setSpeed(9  00);
  stepper1.moveTo(20000);
  
  stepper2.setMaxSpeed(1000);
  stepper2.setAcceleration(10);
  stepper2.setSpeed(900);
  stepper2.moveTo(20000);

}//--(end setup )---

void loop() {
  
  motor1();
  motor2();
  
}

void motor1() {
  int state1 = digitalRead(s1);
  
  if (state1 == HIGH) {
    stepper1.stop();
    Serial.println("STOPPED");
  }
  
  else {
   if (stepper1.distanceToGo() == 0) {
     stepper1.moveTo(-stepper1.currentPosition());
    }
    stepper1.run();
    Serial.println("FLYING");
   }
}

void motor2() {
   int state2 = digitalRead(s2); 
   
   if (state2 == HIGH) {
    stepper2.stop();
    Serial.println("TWO STOPPED");
  }

   else {
    if (stepper2.distanceToGo() == 0) {
      stepper2.moveTo(-stepper2.currentPosition());
    }
    stepper2.run();
    Serial.println("TWO FLYING");
  }
  
  
}
