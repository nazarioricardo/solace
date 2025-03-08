# Notes on Deliverables

I created pull requests where it made sense, but the work started stacking on itself so there are two main PRs to check. The branches being `feat/assignment` and `feat/db`.

The bulk of the work was on `feat/assignment` so that PR is against `main`.

The `feat/db` PR is against `feat/assignment`, since I implemented db functionality against `feat/assignment`.

# Process

My approach was to focus mainly on functionality, starting with the obvious things first, such as the hydration error. Then noticed hot reload wasn't working.

I had a few hiccups with the database config, so left that and styling for last. And in styling tried to pick the biggest readability wins

The main priority for me was the experience of searching being consistent, and what a user might expect in terms of how the web typically works.

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
