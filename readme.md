# Trigger.dev (v3) + Fileforge

---

The easiest way to generate documents, reports, and presentations from your data!
**This example is free for most use cases.**

Advantages of using [Trigger.dev](https://trigger.dev) + [Fileforge](https://fileforge.com):

- Stack agnostic: Trigger.dev runs your functions in a runtime compatible with Fileforge. You can trigger your functions from any language or platform, including Python, Node.js, Ruby, Go, Java, and more.
- No infrastructure: rendering documents is a heavy task that requires a lot of resources. Trigger.dev and Fileforge take care of all the infrastructure for you.
- Use React: even if you do not have a React stack, you can use React to generate your documents.
- Easy to monitor: Trigger.dev provides a dashboard where you can see the status of your functions and logs.

## Getting started

### Create a Trigger.dev account

Head to [Trigger.dev](https://trigger.dev) and create an account. You will also be prompted to create a project. If you already are a Trigger.dev user, you can just create a project or use an existing one.

### Create a Fileforge account

Head to [Fileforge](https://fileforge.com) and create an account. Your API key will be displayed on the dashboard.

![Fileforge dashboard](/images/fileforge-dashboard.jpg)

### Configure the repository

Start by cloning this repository:

```bash
git clone https://github.com/onedoclabs/fileforge-triggerdev.git
cd fileforge-triggerdev
```

Then, install the dependencies:

```bash
npm install
```

### Configure the environment variables

You can copy and rename the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Then, open the `.env` file and fill in the `TRIGGERDEV_API_KEY`, `TRIGGER_PROJECT_ID` and `FILEFORGE_API_KEY` variables.

Your `TRIGGERDEV_API_KEY` can be found in the Trigger.dev dashboard, on the left hand side, under `API Keys`.
Your `TRIGGER_PROJECT_ID` can be found in the Trigger.dev dashboard, on the left hand side, under `Project Settings`. It is named `Project ref`.
Your `FILEFORGE_API_KEY` can be found in the Fileforge dashboard, in the dark box at the top.

## Run the example

### Start the Trigger dev server

This command will start the Trigger dev server. This server will respond to test requests from the Trigger.dev dashboard.

```bash
npm run dev
```

Then, head over to the Trigger.dev dashboard and click on the `Test` button. You should see the function.

![Trigger.dev test](/images/triggerdev-functions.jpg)

### Run a test request

When clicking on the function, you can set a payload value and run the test.

![Trigger.dev test run](/images/triggerdev-run.jpg)

### View the logs

You can now view the logs and your generated document by using the URL logged in the console.

![Trigger.dev URL result](/images/triggerdev-result.jpg)

NB: the URL in the return preview is truncated. You should use the console URL to view the full document.
