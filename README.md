Project 1 Requirements
<!-- Overview: During this project you will build a React application whose data is exclusively sourced by external APIs. -->


Group requirements:

<!-- Project concept must be approved by an instructor by the end of day 1. -->
<!-- You will pair program to build your app. You must swap pairs at least once per day. -->
<!-- Refer to the pairing rubric  for providing feedback to partners. -->


Run Agile ceremonies:

<!-- stand-up, stand-down, retro -->
<!-- track story completion on a running backlog using a tool of your choice (GitHub Projects, Trello, Pivotal Tracker, etc.) -->
<!-- Your application must be pushed up to a single, public GitHub repository -->
<!-- Use Git feature/branch  workflow as your team collaborates on the application. -->
<!-- Invite all instructors as collaborators on your repository -->


Project Requirements:

<!-- Use React.js. -->
<!-- Your application should use React Router for displaying different views -->
<!-- You are free to use class-based components or Hooks throughout your application -->
<!-- Submit a description of the component architecture of your front-end application, which can come in the form of a README in your repo. -->
<!-- Use Flexbox and CSS Grid for the layout of your application -->
<!-- Use CSS Modules, Styled Components, or Material-UI to style your application. -->


Extras:

<!-- Test Drive your application using Cypress and Jest / React Testing library -->
<!-- Deploy your applications on Heroku or AWS -->

---------------------------------------------------------------------------------------------------------------------------------------------------------------------
APIS IN USE
Curiosity REMS (Rover Environmental Monitoring Station) (Weather)
Mars Rover Photos
APOD (Astronomy Photo of the Day)

LINKS:
NASA API Homepage: https://api.nasa.gov
APOD : https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
Insight Documenation : https://api.nasa.gov/assets/insight/InSight%20Weather%20API%20Documentation.pdf


---------------------------------------------------------------------------------------------------------------------------------------------------------------------

This app is hosted on Amazon Web Services at the link below.

AWS Link: https://master.d1wt84g8gd7ox8.amplifyapp.com/

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

Component Architecture Breakdown:

App.js            -- This is only used for React Router puproses.  All routing is done here.

Nav.js            -- This component hosts our site-wide navigation bar.  All navigation is done using React Router.

PhotoOfTheDay.js  -- THis component is our "Home" page.  This is what users see when first arriving to the site.  The linked API (APOD) pulls the daily "Astronomy Photo of the Day" along with its description.  If users do not like the photo, they are able to click a button which replaces the APOD and description with a photo of a pitbull puppy.

Weather.js        -- This is the main weather page.  All weather data is pulled in from the Curiosity weather API.  This data is displayed in a friendly readable format, with data changing in respect to what Sol is returned.  Users are able to view previous Sols by clicking the "Previous Day" button.

ISSLiveStream.js  -- This page allows to view the ISS Livestream via an embeded iframe code.

RoverPhotos.js    -- This is the top-level host page for our Rover Photos.  Each rover is a sub-component of this page.  Users are able to select an inital rover from this page.

-- Curiosity      -- This page displays Curiosity's most recent photos.  The linked API pulls the latest photos automatically. This is done using the Mars Rover Photos API.
-- Opportunity    -- This page displays Curiosity's most recent photos.  The linked API pulls the latest photos automatically. Opportuinty is no longer active, so the photos displayed are the last ones it sent.  This is done using the Mars Rover Photos API.
-- Perseverence   -- This page displays Curiosity's most recent photos.  The linked API pulls the latest photos automatically. This is done using the Mars Rover Photos API.
-- Spirit         -- This page displays Curiosity's most recent photos.  The linked API pulls the latest photos automatically. Spirit is no longer active, so the photos displayed are the last ones it sent.  This is done using the Mars Rover Photos API.




