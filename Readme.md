### Part 1: Plain English

The Rootwork Tech Scholarship has three possible decisions: Priority candidate, Eligible, and Not eligible.

To qualify, an applicant must be at least 18 years old, score 60 or above, have access to a laptop and the internet, and complete the application.

If an applicant meets all these requirements and scores 85 or above, the program should print "Priority candidate".

If an applicant meets all the normal requirements but scores below 85, the program should print "Eligible".

If an applicant fails any of the normal requirements, the program should print "Not eligible", even if their score is very high.



### Part 2: Pseudocode

1. Start.
2. Store the applicant's age, score, laptop access, internet access, and application completion status.
3. Check whether the applicant is at least 18, has a score of at least 60, has completed the application, has a laptop, and has internet access.
4. If all these requirements are satisfied and the score is at least 85, print "Priority candidate".
5. Otherwise, if all the normal requirements are satisfied, print "Eligible".
6. Otherwise, print "Not eligible".
7. End.

### Part 4: Test Cases

**Test Case 1: Applicant younger than 18**

Input: age = 16, score = 90, hasLaptop = true, hasInternet = true, completedApplication = true

Expected result: Not eligible

Actual result: Not eligible

**Test Case 2: Applicant with a score below 60**

Input: age = 21, score = 59, hasLaptop = true, hasInternet = true, completedApplication = true

Expected result: Not eligible

Actual result: Not eligible

**Test Case 3: Applicant without internet access**

Input: age = 21, score = 80, hasLaptop = true, hasInternet = false, completedApplication = true

Expected result: Not eligible

Actual result: Not eligible

**Test Case 4: Applicant with an incomplete application**

Input: age = 21, score = 80, hasLaptop = true, hasInternet = true, completedApplication = false

Expected result: Not eligible

Actual result: Not eligible

**Test Case 5: Applicant without laptop access**

Input: age = 21, score = 80, hasLaptop = false, hasInternet = true, completedApplication = true

Expected result: Not eligible

Actual result: Not eligible

**Test Case 6: Applicant aged exactly 18**

Input: age = 18, score = 75, hasLaptop = true, hasInternet = true, completedApplication = true

Expected result: Eligible

Actual result: Eligible

**Test Case 7: Applicant scoring exactly 60**

Input: age = 21, score = 60, hasLaptop = true, hasInternet = true, completedApplication = true

Expected result: Eligible

Actual result: Eligible

**Test Case 8: Priority candidate**

Input: age = 21, score = 90, hasLaptop = true, hasInternet = true, completedApplication = true

Expected result: Priority candidate

Actual result: Priority candidate

### Part 5: Logic explanation

Variables: age stores the applicant's age; score stores their score; the other three Boolean variables record laptop access, internet access, and application completion.

Conditions: The first if checks all normal requirements plus the priority score. The else if checks only the normal requirements. The else handles everyone who fails the normal requirements.

Logical operator &&: Requires every condition connected by it to be true.

Condition order: The priority condition must come first so that applicants scoring 85 or higher who meet all requirements are not classified merely as eligible.

High scores: A high score cannot compensate for being underage, having an incomplete application, or lacking a required resource.

Difference between && and ||: &git commit -a& means all connected conditions must be true; || means at least one connected condition must be true.

No bug was encountered during this assignment
