Note : Home page - page 2 code was used from assignment 1. As well as my Javascript files were used on the 3 pages and style.css file from assignment 1 and 2 

Home page: 
File Structure:
index.html   - Main homepage file
page1.html  - Works page
page2.html  - Aspirations page
favicon-16x16.png  - Favicon image 
portrait.JPG - Portrait image
night-in-kyoto-avbe-main-version-21302-01-57.mp3 -  Audio file

Content:
- Name and navigation links are displayed in the header.
- Personal introduction and information about professional background.
- Image (<img>) displaying a portrait with text.
- Audio (<audio>) player for playing audio files which in this case is a lofi song.
- Contact information in the footer.

Functionality:
- Navigation links allow access between pages.
- Portrait image and accompanying text provide personal information.
- Audio player allows for playing the audio file.

References: 
Favicon image -
[1]Pin de Debora Villarroel en tattoo | Ideas para logotipo, Tatuaje inicial, Disenos de unas. Retrieved February 10, 2024 from https://www.pinterest.ca/pin/351912463420573/

[1]2024. Night In Kyoto by AVBE • Uppbeat. Retrieved February 10, 2024 from https://uppbeat.io/

Page 1:
File Structure:
index.html   -  Main HTML file
thinkSimple.jpeg  - Think Simple logo image
think_simple.jpeg  - Image of workplace

Content:
- Name and navigation links are displayed in the header.
- Information about Think Simple including a logo image and internship dates.
- Job responsibilities listed in bullet points.
- Workplace image displayed.
- Embedded YouTube video.
- Contact information in the footer.

Functionality:
- Navigation links allow access between pages.
- Images provide visual content.
- Embedded YouTube video allows playing the video directly on the webpage.
- Contact information is displayed in the footer.

- External dependencies:
    - YouTube video: Embedded using an <iframe> tag with the video URL.
    - Think Simple logo image: Linked using an <img> tag.
    - Workplace image: Linked using an <img> tag.

References :
Think Simple logo & Image of workplace
[1]Think Simple | LinkedIn. Retrieved February 10, 2024 from https://www.linkedin.com/company/think-simple
Think Simple - Youtube Video
[1]YouTube. Retrieved February 10, 2024 from https://www.youtube.com/embed/HyPIldjyfuE?si=DGRp4ZJ4adQs9CoJ

Page 2:
File Structure:
index.html  - Main HTML file
page1.html  - Works page HTML file
page2.html  -  Aspirations page HTML file

Content:
- Name and navigation links are displayed in the header.
- Aspirations and career goals are stated in a centred paragraph.
- Embedded YouTube video showcasing relevant content.
- Daily tasks related to cybersecurity are listed.
- Contact information is displayed in the footer.

Functionality:
- Navigation links allow navigation between pages.
- Embedded YouTube video allows playing the video directly on the webpage.
- Contact information is displayed in the footer.

External dependencies:
YouTube video: Embedded using an <iframe> tag with the video URL.
[1]2024. YouTube. Retrieved February 10, 2024 from https://www.youtube.com/embed/Yr0xPVFcf-U?si=xfFqQ8F9aL5bGIZ9
Cyber security tasks
[1]2024. Key Roles and Responsibilities of Cyber Security Professionals. Retrieved February 10, 2024 from https://www.simplilearn.com/it-security-professionals-key-roles-responsibilities-article


Page 3:
File Structure:
index.html  - Main HTML file
page1.html  - Works page HTML file
page2.html  -  Aspirations page HTML file



Style.css: 
Body:
 Defines the font-family, background colour, margin, and padding for the entire document.
All elements within the body will inherit these styles unless overridden.

Universal Selector (*):
Adds padding to all elements.

Header:
Uses flexbox to create a horizontal layout with elements spaced evenly.
 The header contains  h1 and a navigation bar.

h1 + nav:
Adds margin between the h1 and nav elements.

h3, .page2Content:
Styles the text alignment for h3 headings and elements with the class "page2Content" to be centred.

Nav:
Aligns the text within the navigation bar to the right.

Image (img):
 Floats images to the left with a margin-right of 10px and padding of 5px.

Audio:
 Sets the width to 100% and adds margins for spacing.

Navbar:
Uses flexbox to centre the elements horizontally within the navbar.

Nav-links:
Displays navigation links as flex items with space evenly between them.
 Aligns items to the right and sets padding for spacing.
 Sets list-style-type to none to remove default bullet points from the list.

Anchor Links within Nav-links:
 Changes link colour to black and adds padding for spacing.
On hover, link colour changes to grey.
 Applies a different colour to links with href starting with "http".

Anchor Links within Main:
 Changes link colour to grey on hover.

Main > p:
 Sets text alignment to justify and adds padding for spacing.

 p::first-line:
Makes the first line of paragraphs bold.

Images:
 Adds a border, margin, and padding to images.

Footer:
 Sets background colour, padding, and text alignment.
Fixes the footer position at the bottom of the viewport with a width of 100%.

Flexbox Page (.flexbox):
Specific styles for elements within a flexbox layout.

Grid Page (.grid):
Specific styles for elements within a grid layout.
Defines grid-template-rows for header, main content, and footer.

Grid Areas Page (.grid-area):
Specific styles for elements within a grid area layout.
Defines grid-template-areas for header, main content, and footer.
Sets grid-template-columns for column widths.
Uses a centre-content class to centre content horizontally and vertically.

Specific styles for elements within each page:
 Grid-area header, main, and footer are positioned using grid-area.

ul, ol : 
sets the left padding of these lists to 20px
 
Table : 
sets the width of the table to 100% of its container

Hover Styles for Submit Button
Changes background color to light blue and cursor to a pointer when hovered
Dark Mode toggle
Provides styles for original mode, dark mode, and colorful scheme.
Changes background and text colors based on applied class (dark-mode or colorful-scheme).
Header, Footer, and Nav styles
Sets padding and colors for header and footer sections.
Defines styles for navigation links and hover effects.
Adjusts link color for dark mode.
Responsive Design with Media Queries:
Defines styles for different screen sizes using media queries.
Adjusts container width, padding, and background color for desktops, tablets, and mobile devices.


Relative Paths:
The HTML files and the CSS file, Style.css, are located in the same directory.
The HTML files are located in the same directory as the images (portrait.JPG, thinkSimple.jpeg, think_simple.jpeg), and other resources.
The favicon (favicon-16x16.png) can be found in the website's root directory.

SCRIPT.JS
Alert Fucntion - To display a message
Purpose: To display a welcome alert message when the page is loaded, specifically on the index.html page.
Input: None.
Output: Displays an alert message.
Example: When the user opens the index.html page, they will see an alert saying "Welcome! Thanks for visiting!"
Dependent Code Structures: Relies on the window.onload event to trigger the alert message.

Change color function
Purpose: To change the background color of a button when invoked.
Input: None (button ID is hardcoded in the function).
Output: Changes the background color of the specified button.
Example: When changeColor() is called, it changes the background color of the button with ID "submitButton" to blue.
Dependent Code Structures: Relies on the existence of an HTML button with ID "submitButton".
     - Change color scheme function and toggle between them
Purpose: To toggle between different color schemes (e.g., dark mode and colorful scheme) on the webpage.
Input: Mode (either 'dark-mode' or 'colorful-scheme').
Output: Toggles the body's class to switch between color schemes.
Example: When the user clicks on the "Dark Mode" or "Colorful Scheme" button, it toggles the webpage's color scheme accordingly.
Dependent Code Structures: Relies on specific button IDs ("dark-mode-button" and "colorful-scheme-button") and CSS styles for different color schemes.

SCRIPT2.JS
Validate form function
Purpose: to perform validation on a form before submission. It checks if the required form fields are filled, validates the email format, and checks the phone number format.
Input: The function doesn't take any explicit input parameters. It relies on the HTML structure of the form and its input fields to perform validation.
 Output : The function returns true if all validations pass, indicating that the form can be submitted. It returns false if any validation fails, preventing form submission and prompting the user with appropriate error messages.
Dependent Code Structures: Event Listener: The function sets up an event listener on the submit button to trigger the validation logic when the button is clicked.
Dom Manipulation: it uses DOM methods like getElementById to retrieve form elements and their values for validation
Regular ExpressionL The function utilizies a regular expression to validate the phone number format
Conditional Statements: it uses if-else statements to check form field values and display appropriate error messages using altert
