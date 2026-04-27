Angular Project - Functional Guide

1. Application Purpose
   The goal of the application is to allow users to share and browse through travel ideas (Travel Tales).

2. User Roles

   2.1. Guest (Not Authenticated User)
   
        - Can view the home page
        - Can browse the catalog of travel tales
        - Can view details of individual tales
        - Can register or log in

   2.2. Authenticated User
   
        - Can create new travel tales
        - Can edit their own tales
        - Can delete their own tales
        - Can like other users' tales
        - Can view a personal 'My Tales' section with only their own tales
   
3. Public Features

   3.1. The following features are available to all users (including guests):
   
        - Home page (landing page with introduction)
        - Catalog page displaying all travel tales
        - Details page for each travel tale
        - Login page
        - Register page

   3.2. Authenticated User Features - After login, users can:
   
        - Create new travel tales
        - Edit only their own travel tales
        - Delete only their own travel tales
        - Like other users' travel tales
        - View their own created tales in 'My Tales'
        - Logout
   
4. Main Application Flow
   - User opens the Home page.
   - User navigates to the Tales catalog.
   - User selects a travel tale and opens the Details page.
   - Guest user may register or log in.
   - Authenticated user can create a new travel tale.
   - User's created tales appear in the catalog and 'My Tales'.
   - User may edit or delete their travel tale
   - Users can like other users' posts.

5. Data Structure

   5.1. TravelTale Object
   
        - _id – unique identifier
        - _ownerId – ID of the user who created the tale
        - img – image URL of the destination
        - title – title of the travel idea
        - country – country visited
        - city – city visited
        - cost – estimated travel cost
        - timeNeeded – duration of stay
        - bestTimeToVisit – recommended season/time
        - myExperiance – personal experience description
        - valuableTips – travel tips and advice

   5.2. Like Object
   
        - _id – like unique identifier
        - _ownerId – ID of the user who liked it
        - taleId – ID of the liked travel tale
   
6. Project Architecture
   - components/ – UI components (home, tales, details, create, edit, register, login, my-tales)
   - services/ – API communication (data service, auth service)
   - types/ – TypeScript interfaces (TravelTale, User, Like)
   - guards/ – Route protection (authGuard, ownerGuard, guestGuard)
   - pipes/ – custom pipes (pipe for shortening the sentence and pipe for transforming a sentence)
   - environments/ – API configuration
   - interceprots/ - HTTP interceptor

7. Technologies Used
   - Angular
   - TypeScript
   - RxJS
   - REST Service - SoftUni Practice Service
   - CSS (custom styling)

8. How to run the project
   
   8.1. Clone the repository
   
   8.2. Install dependencies for and run client
   
        npm install
        ng serve
   
   8.3. Install and run backend
   
        npm install
        npm run client
        npm run build
        node index.js
   
   8.4. Open the application on http://localhost:4200
