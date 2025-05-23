Welcome! 👋
Thanks for purchasing this premium Frontend Mentor coding challenge.

Frontend Mentor challenges help you improve your coding skills by building realistic projects. These premium challenges are perfect portfolio pieces, so please feel free to use what you create in your portfolio to show others.

To do this challenge, you need a strong understanding of HTML, CSS, and JavaScript.

The challenge
Your challenge is to build out this Hangman game and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

We provide the data in a local data.json file for you to use for word selections.

Your users should be able to:

Learn how to play Hangman from the main menu.
Start a game and choose a category.
Play Hangman with a random word selected from that category.
See their current health decrease based on incorrect letter guesses.
Win the game if they complete the whole word.
Lose the game if they make eight wrong guesses.
Pause the game and choose to continue, pick a new category, or quit.
View the optimal layout for the interface depending on their device's screen size.
See hover and focus states for all interactive elements on the page.
Navigate the entire game only using their keyboard.
Want some support on the challenge? Join our community and ask questions in the #help channel.

Expected behaviour
You can make the default screen the main menu or the in-game board. Note that we're using the in-game design for the design screenshot, so if you choose the main menu, it won't match up in the design comparison slider. This isn't a big deal, but it is something worth considering. We recommend using the in-game page as the default for solution submission so that the screenshot matches and then switching your code to make the main menu the default screen for new players.
Pick a random word from the chosen category to start a game. You'll need to work out the spacing for words and when to break to a new line, as some names/titles are (intentionally) long.
If the player guesses a letter correctly, fill in all relevant spaces and disable the letter on the keyboard.
If the player guesses incorrectly, disable the letter on the keyboard and reduce the health meter. The health meter should empty after eight wrong guesses. The player loses at this point, and the menu appears.
Selecting "play again" on the menu starts a new game with the same category. Selecting "new category" navigates to the "pick a category" screen. Quitting navigates back to the main menu.
Players should never be shown the same name/title multiple times if they play more than one game in a visit. The JSON data has a "selected" boolean to help you filter already played options.
Clicking the hamburger menu during a game should show the "paused" menu.
Where to find everything
Your task is to build out the project to the design file provided. We provide both Sketch and Figma versions of the design, so you can choose which tool you prefer to use. You can download the design file on the platform. Please be sure not to share them with anyone else. The design download comes with a README.md file as well to help you get set up.

All the required assets for this project are in the /assets folder. The images are already exported for the correct screen size and optimized. Some are reusable at multiple screen sizes. So if you don't see an image in a specific folder, it will typically be in another folder for that page.

We also include variable and static font files for the required fonts for this project. You can choose to either link to Google Fonts or use the local font files to host the fonts yourself. Note that we've removed the static font files for the font weights that aren't needed for this project.

The design system in the design file will give you more information about the various colors, fonts, and styles used in this project. Our fonts always come from Google Fonts.

Building your project
Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

Separate the starter-code from the rest of this project and rename it to something meaningful for you. Initialize the codebase as a public repository on GitHub. Creating a repo will make it easier to share your code with the community if you need help. If you're not sure how to do this, have a read-through of this Try Git resource. ⚠️ IMPORTANT ⚠️: There are already a couple of .gitignore files in this project. Please do not remove them or change the content of the files. If you create a brand new project, please use the .gitignore files provided in your new codebase. This is to avoid the accidental upload of the design files to GitHub. With these premium challenges, please be sure not to share the design files in your GitHub repo. Thanks!
Configure your repository to publish your code to a web address. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, and we provide some recommendations below.
Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
Write out the base styles for your project, including general content styles, such as font-family and font-size.
Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.
Deploying your project
As mentioned above, there are many ways to host your project for free. Our recommend hosts are:

GitHub Pages
Vercel
Netlify
You can host your site using one of these solutions or any of our other trusted providers. Read more about our recommended and trusted hosts.

Create a custom README.md
We strongly recommend overwriting this README.md with a custom one. We've provided a template inside the README-template.md file in this starter code.

The template provides a guide for what to add. A custom README will help you explain your project and reflect on your learnings. Please feel free to edit our template as much as you like.

Once you've added your information to the template, delete this file and rename the README-template.md file to README.md. That will make it show up as your repository's README file.

Submitting your solution
Submit your solution on the platform for the rest of the community to see. Follow our "Complete guide to submitting solutions" for tips on how to do this.

Remember, if you're looking for feedback on your solution, be sure to ask questions when submitting it. The more specific and detailed you are with your questions, the higher the chance you'll get valuable feedback from the community.

⚠️ IMPORTANT ⚠️: With these premium challenges, please be sure not to upload the design files to GitHub when you're submitting to the platform and sharing it around. If you've created a brand new project, the easiest way to do that is to copy across the .gitignore provided in this starter project.

Sharing your solution
There are multiple places you can share your solution:

Share your solution page in the #finished-projects channel of our community.
Tweet @frontendmentor and mention @frontendmentor, including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.
Share your solution on other social channels like LinkedIn.
Blog about your experience building your project. Writing about your workflow, technical choices, and talking through your code is a brilliant way to reinforce what you've learned. Great platforms to write on are dev.to, Hashnode, and CodeNewbie.
We provide templates to help you share your solution once you've submitted it on the platform. Please do edit them and include specific questions when you're looking for feedback.

The more specific you are with your questions the more likely it is that another member of the community will give you feedback.

Got feedback for us?
We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please email hi[at]frontendmentor[dot]io.

Have fun building! 🚀
