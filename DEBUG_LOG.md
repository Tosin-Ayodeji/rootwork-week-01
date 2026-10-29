# DEBUG_LOG.md

## Problem 1: Removing the `displayStatistics()` function

**Problem:** I removed the `displayStatistics()` function and replaced it with `console.log("Display statistic")`.

**What I observed:** The program no longer performed the statistics calculation. If the program still called `displayStatistics()`, JavaScript reported a `ReferenceError` because the function was no longer defined.

**What I checked:** I checked the function definition, the code that calls it, and the difference between defining a function and printing a message.

**Cause:** I replaced a function that calculates and displays task statistics with a `console.log()` statement that only prints a message.

**Fix:** I restored the `displayStatistics()` function and kept its counting logic. I used `displayStatistics()` to call the function and `console.log()` to print the results.



## Problem 2: Incorrect condition for high-priority pending tasks

**Problem:** I deliberately changed the condition for finding high-priority pending tasks so that it checked for completed tasks instead.

**What I observed:** The program displayed high-priority completed tasks rather than high-priority pending tasks. If no high-priority completed tasks existed, it displayed the message indicating that no matching tasks were found.

**What I checked:** I checked the `if` condition and compared the task's `completed` value with the intended requirement.

**Cause:** The condition used `tasks[i].completed === true` instead of `tasks[i].completed === false`.

**Fix:** I restored the condition to `tasks[i].completed === false`, saved the file, and ran the program again to verify the output.