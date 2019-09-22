## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `Functionality implemented`
1. On page load web application retrieves first five launches by making an All launches api call.
2. Further, more launches can be loaded by clicking `load more button` at the bottom of the page.
3. There is a hidden drawer implemented on the left side of the page which will toggle by clicking
   the toggle button available on the top left cornor of the page.
4. Inside drawer three radio buttons are available and by selecting one of them changes the API.
5. Selecting 1st will call `all launches api` and will retrieve all the launches available.
6. Selecting 2nd will make call to `past occured launches`.
7. Selecting 3rd option will retrieve all the `upcoming launches`. 
8. Apart from these radio buttons two filtering option is also provided. 
9. Filter will retrieve all the unique field values corresponding to that field (e.g successful_launches 
   can have two agreeded values true/false) from the data fetched from api till that time  and will add them in a dropdown, user can select a value from the dropdown list and depending upon that filter further data will be retrieved by API call.
10. Application will render two components in line for bigger devices having screen width > 700px and 
   one component per line for smaller width devices.(responsiveness).
11. Application shows few information in a container that includes image,flight number,launch year,
   mission name, Rocket Name, Rocket type, details.
12. Test cases are written just to check if the component is rendered or not. Test casea are not written
   for 100% test coverage.