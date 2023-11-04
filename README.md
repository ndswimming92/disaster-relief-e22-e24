# React/Next.js Django Auth Template

## Topics
- [Get Started](#getting-started)
- [Starting the Project](#starting-the-project)
___
## Getting Started
### Use Template
#### 1. To get started, click the GREEN "Use this Template" button at the top of the repo
<img width="915" alt="Screen Shot 2022-07-06 at 12 54 01 PM" src="https://user-images.githubusercontent.com/29741570/177612998-4aac9237-5a1e-4f13-8ae0-468587521564.png">

#### 2. Make sure YOUR github account is selected in the dropdown and name your project
<img width="763" alt="Screen Shot 2022-07-06 at 12 54 48 PM" src="https://user-images.githubusercontent.com/29741570/177613126-dd38f678-7553-4f27-8a4a-75680f14d71e.png">

#### 3. Clone your new repo to your local machine
#### 4. Go to the **NEXT** section

## Starting the Project
1. Create a Firebase project and set up authentication. Use [these videos](https://vimeo.com/showcase/codetracker-firebase) as a refresher if needed.
1. Create a `.env` file at the root of the project
1. Copy/Paste the contents of the `.env.sample` file to your newly created `.env` file.
1. Copy over all of your Firebase values into the `.env` file.
1. Open the `package.json` file and change the `name` property to the name of your application, and `author` to  your name.
1. From your command line, be in the root directory and run `npm install` OR `npm i` for short.
1. Next, run `npm run prepare`. This command sets up husky to track eslint errors on commit that will make your deploy fail on Netlify.
1. To start your application, run `npm run dev`. THIS IS THE COMMAND YOU WILL USE TO RUN YOUR DEVELOPMENT SERVER FROM NOW ON.
1. Open [http://localhost:3000](http://localhost:3000) with your browser.

### If you see this, you are set to go!
<img width="450" alt="Screen Shot 2022-07-06 at 1 07 27 PM" src="https://user-images.githubusercontent.com/29741570/177615077-9b6a75bc-0260-4d29-bb88-bd95a3140687.png">


You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

**NOTES:** 
- If you see the following error, you did not follow all the setup steps correctly and failed to add your Firebase creds. Go back and do that NOW.

<img width="1043" alt="Screen Shot 2022-07-06 at 11 18 45 AM" src="https://user-images.githubusercontent.com/29741570/177612501-c2628f18-4bbd-4de9-aae6-27ffba1172d6.png">
        
## Learn More about Next.js
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


About Project:
Our page serves as an online platform that provides essential information, resources, and support to individuals and communities affected by natural disasters. Its primary functions include:
-Disaster Information: Providing up-to-date information about ongoing disasters, such as hurricanes, earthquakes, or wildfires including their severity, location, and impact.
-Donation Collection: Facilitating the collection of monetary and in-kind donations to support disaster relief efforts, which can include funds for rebuilding, medical supplies, or clothing.
Overall, a disaster relief page plays a critical role in coordinating and mobilizing resources and aid during crises, ensuring affected individuals and communities receive the assistance they need while promoting preparedness and resilience in the face of disasters.

BE GitHub URL: https://github.com/SteveCButler/disasterrelief-be
FE GitHub URL: https://github.com/ndswimming92/disaster-relief-e22-e24

Site Pages: 

![Home Page](image.png)
![Disasters Page Admin user](image-1.png)
![Home Page Non Admin User](image-7.png)
![About Page](image-2.png)
![Giving Page](image-3.png)
![Admin Console](image-4.png)
![Disaster Details](image-5.png)
![Disasters Edit](image-6.png)

Stack Used: 
HTML
CSS
React
dbdiagram
Figma
pgADmin
Swagger
