# Strimanga

Strimanga is a simple task scheduling library for JavaScript, allowing you to schedule tasks to run at specific intervals.

## Installation

To install Strimanga, you can use npm:

```
npm install strimanga
```

## Usage

```javascript
const Strimanga = require('strimanga');

// Create a new instance of Strimanga
const scheduler = new Strimanga();

// Define a task function
function task() {
  console.log('Task executed');
}

// Schedule the task to run every 1 second
scheduler.scheduleTask(task, 1000);

// Stop the scheduler after some time
setTimeout(() => {
  scheduler.stop();
  console.log('Scheduler stopped');
}, 10000); // Stop the scheduler after 10 seconds
```

## API

### `scheduleTask(task, interval)`

Schedules a task to run at a specific interval.

- `task`: Function to be executed at the specified interval.
- `interval`: Interval (in milliseconds) at which the task should run.

### `stop()`

Stops the scheduler, preventing any further execution of scheduled tasks.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
