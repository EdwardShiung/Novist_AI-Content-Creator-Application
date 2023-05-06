# Novist: An Interactive To-Do List App


## Description

The Novist To-Do List app addresses the common problem of users losing interest and abandoning traditional to-do list apps, which lack interactive features. To combat this Novist incorporates various interactive features, such as a creative writing component function and an intelligent chat box with the system, to encourage users to be more engaged with the app. The app aims to provide an innovative and interactive way of managing tasks that is not limited to software engineers, but can be used by anyone who wants to track their tasks efficiently and creatively. With its unique features, Novist offers a significant improvement over traditional to-do list apps, providing users with a special way to stay on track and accomplish their tasks on time.


## Features

- To-Do List: Novist has a simple and intuitive to-do list that allows users to create, organize, and prioritize their tasks.
- Writing Component: Novist includes a creative writing component that can help users write simple and high-quality assignments. (Still Need To Complete)
- User-Friendly Interface: Novist has a clean and user-friendly interface that makes it easy to navigate and use.


## Installation

In order to build the environment, please follow the steps.

- Clone the Repository to Local Machine.

```bash
  git clone https://github.com/gladiatormaximusty/SE_Novist.git
```

- Enter to the Frontend and Backend File

- Install the Required Dependencies by Running
```bash
  npm install
```

- Build the Frontend
```bash
  npm run serve
```

- Build the Backend Server
```bash
  npm start
```


## Tech Stack

**Client:** HTML 5, CSS 3, Bootstrap 5, Vue.js 2.0

**Server:** Node, Express Framework

**Database:** MongoDB


## Testing

In order to create a secure application, we have to test our authentication with JWT token.

To run tests, run the following command.

```bash
  npm test
```


## Use Case

Use Case: User Login with JWT Token

Actors: User, Server

Preconditions:

- The User has a valid account on the Server.
- The Server generates and verifies JWT tokens.

Main Flow:

- The User provides their login credentials to the Server.
- The Server verifies the credentials and generates a JWT token.
- The Server sends the JWT token back to the User.
- The User stores the JWT token locally (e.g. in browser local storage).
- The User includes the JWT token in all subsequent requests to the Server's protected endpoints.
- The Server verifies the JWT token on each request and allows or denies access to the requested resource.

Expected Behavior:

- If the User provides invalid login credentials, the Server returns an error response and prompts the User to provide valid credentials.
- If the JWT token is invalid or has expired, the Server returns an error response and prompts the User to login again and obtain a new JWT token.


## Project Schedule
[Kanban Records](https://docs.google.com/spreadsheets/d/1IH-8hq_Svc34SFyP2USQ0QsJGWKLluRK/edit#gid=54235150)


## Authors

- [TY - Tian Yu - stianyu99](https://github.com/gladiatormaximusty)
- [YL - Yung-Lin Chiu - jimmychiu](https://www.github.com/jchiu0626)
- [HL - Huayu Liang - huayu98](https://www.github.com/huayu1998 )
- [UM - Usama Munir - musama](https://www.github.com/usvma1)


## Acknowledgements


We would also like to extend our thanks to the OpenAI team for their development and support of the GPT-3 language model, which served as the foundation for our Novist app. Their contributions to the field of natural language processing have paved the way for innovative applications like ours.
