Feature: I'm going to validate my Calc app

@CalcGroupOnly
Scenario: Calculator ADD functionality testing

Given I will navigate to Calc site
When I add two number "3" and "5"
Then the output displayed should be "8"

Given I will navigate to Calc site
When I add two number "2" and "7"
Then the output displayed should be "9" 


Scenario Outline: Calculator ADD functionality testing through parameterization

Given I will navigate to Calc site
When I add two number "<value1>" and "<value2>"
Then the output displayed should be "<result>" 

Examples:
|value1|value2|result|
|3|5|7|
|2|7|9|