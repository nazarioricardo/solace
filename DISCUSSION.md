# Notes on Deliverables

I made most of the work on the branch `feat/assignment`. So I made PR against main: [https://github.com/nazarioricardo/solace/pull/2](https://github.com/nazarioricardo/solace/pull/2)

The final project with db implementation is on `feat/db`. So I made a PR against `feat/assignment`: [https://github.com/nazarioricardo/solace/pull/3](https://github.com/nazarioricardo/solace/pull/3)

# Process

My approach was to focus mainly on functionality and performance, starting with the obvious things first, such as the hydration error. Then noticed hot reload wasn't working, and that led me to do some refactoring.

I had a few hiccups with the database config, so I left that for last. Also left styling for last, since I wanted it to be functional first.

My main priority was for the form to feel and function as a user expects on the web. This includes making all fields searchable in the same way. And using the FormData api instead of setting state as text changes.

I kept styling minimal but chose some key points that I felt made the entire thing more readible -- in part cause it made working on it easier.

# Improvements

- General UX improvements

  - Error Handling. Proper messaging for the user when things go wrong.
  - Improving form copy
  - Improving input field. The cursor doesn't display at first and this is confusing
  - "Reset Search" copy and button styling. It doesn't really look like a button
  - Fetching indicator
  - Saving search value state in the URL

- Database
  - I need to workout how to query by specialty
