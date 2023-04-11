# Galactic Companion
Twilight Imperium companion app and stats tracker project for cb-wd-23/24

# Introduction

This website has two main functions, to track the points of each player during an active game of Twilight Imperium and to display the stats pertaining to this tracking once the game is published to the website.

# Landing Page Section

The landing page of the website is a prompt to sign in with Auth0 as no feature is accessible without being logged in.

![Landing Page Image](/client/src/Images/LandingPage.png)

Once signed in, the home page changes to display links to the two main features of the website: the live games and the statistics:

![Home Page Image](/client/src/Images/HomePage.png)

# Live Games Section

## Live Games List

Once Live Games is clicked, it sends the user to the list of live games which are hosted by the account signed in to Auth0.

![Live Game List Image](/client/src/Images/LiveGameList.png)

The user can either click on one of the games to send them directly to the game board, or they can create a  new game with a form.

![Live Game Form Image](/client/src/Images/LiveGameForm.png)

## Live Game Board

The game board contains all of the information needed to track the points: 

![Live Game Board Image](/client/src/Images/LiveGameBoard.png)

# Statistics Section

The statistics section displays six graphs with data from either all games or games where the logged in user has participated.

![Stats Landing Image](/client/src/Images/Stats.png)

The faction subsection displays three graphs pertaining to the specific faction.

![Stats Faction Image](/client/src/Images/StatsFaction.png)

# Profile Section

The profile displays the name of the user as well as four statistics pertaining to all the games they have played.

![Profile Image](/client/src/Images/Profile.png)