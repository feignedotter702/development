# Development

### Link to Deployed Website
##### If you used the stencil code, this is `https://feignedotter702.github.io/development/`

### Goal and Value of the Application
#####  The goal for this application is a page of some imbd most rated movies. It provide users with the ability to filter the movies by genre and sort by score or the year the movie released, so that they can select a movie that they're interted to watch.

### Usability Principles Considered

#####  The usibility principle I considered here is try to make the sorting and filter easy to understand and to use. I design the webpage so the user can easily find what genre they want to use to filter the movie list and by which property they want to sort the movie so that they can find the most ideal movie without much trouble. 
#####  The sorting and filtering bar doesn't scroll with the movie list so it's easier for user to operate.
#####  The user can sellect the quantity of the movie ticket to buy and hit submit to add the movie to my favorite. They can also remove the movie and modify the qunatity.
### Organization of Components

#####  The sorting by year or by score is in the sorting block stays still on the left bar, the filter by genre and filter by rating are under the sorting and stays still ad user scroll down the movie list.
#####  The moddile the body of the movie card list, it contains a movie image, movie information and add to favorite feature. There is button on the right side of each movie card that can adjust the quantity and submit to favorite list. 
#####  The My favorite section on the top right of the page enables the user to see what is in the favorite list by clicking on it.
### How Data is Passed Down Through Components
#####  I have ListComponent representing the movie card list, OperationComponent representing the sorting and filter operations when selected on the left navibar. The ScoreList component to calculate total score added to the favorite.
#####  The props pass down from app to the sub component using function like setSort, setGenre. The function are implemented in the sub component with useEffect.

### How the User Triggers State Changes
#####  Use useState to track the state of the sorting method, genre for filter, score for filter and list of favorite movies.
#####  Use useEffect to update the filtered array list of movies after the user checked the check box on the left operation bar. After the user checked the checkbox for a genre to filte or a rating to filte, the array to render changed.