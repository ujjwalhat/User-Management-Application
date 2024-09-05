Task: User Management Application
Create a CRUD (Create, Read, Update, Delete) application using React to manage users. Use a publicly available API like JSONPlaceholder (https://jsonplaceholder.typicode.com/) to fetch a list of users. You will perform the following tasks:
1.	Fetch Users: Fetch a list of users from the JSONPlaceholder API and display them on the page in a list or table format. Each user should display basic information like name, email, and phone.
2.	Create User: There should be a form to create a new user. You should POST the new user data to the JSONPlaceholder API (although it won't actually create a new user, it will simulate the action and return the data you sent).
3.	Update User: Each user should have an 'Edit' button. When this is clicked, a form should be displayed with the user's data pre-filled. Changes can be made and submitted. Perform a PUT request to the JSONPlaceholder API to simulate updating the user data.
4.	Delete User: Each user should have a 'Delete' button. When clicked, this should perform a DELETE request to the JSONPlaceholder API to simulate deleting the user.
Additional Requirements:
1.	Use React functional components and React Hooks (like useState and useEffect) in your project.
2.	Use react-router to create different views in the application, such as a home view and a detailed view for each user.
3.	The application must be styled, and the layout should be responsive (looks good on both desktop and mobile).
4.	Proper error handling should be implemented. For example, users should be notified if the API request fails.
5.	Comment your code to make it easy to understand.
6.	The user interactions with the app should be smooth and intuitive.
Optional Advanced Feature (Bonus Points):
1.	Implement a loading spinner or skeleton screen while the API request is in progress.
2.	Use typescript.
Once the application is done, create a GitHub repository and share the code there. Also host the application using a service like Vercel or Netlify and provide the live URL.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
