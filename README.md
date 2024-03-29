# Club-Website
Website for the UBC Jazz Club

# Changelog
### 2020-Jul-7
- Changed quarantunez photo and desc on events page.
- Fixed height issue for regular events on smaller screens.
- Added underline to menu on involvement page.
### 2020-Jun-27
- Removed a colon on events page in cozy christmas entry
- Added quarantunes entry on events page
- Changed from "to be announced" to "upcoming"
- Overhauled main title to use no font-spacing
    * maybe find a way around text-spacing for last character
- Section titles have margin at the end removed to compensate font-spacing
- Added scroll menu to involvement.html
- Added smooth scrolling code to main.js
    * need jquery import on page to work
### 2020-Jun-16
- Moved execs to another page
- Updated navbar and mobile navbar
- Added resizing of exec descriptions in main.css
- Changed first title on events page to "Regular Events"
- Added parallax divider for flagship events
- Added awards section to about us
- Changed the colours of some of the classes and ids to use primary and secondary colour
- Added the logic for the featured gallery -ish
### 2020-Jun-09
- Added shirt photo to resources images
- Added merch information to involvement page
- Added shirt photo to involvement page
### 2020-Jun-08
- Added three separate photos in featured instead of a slideshow
- Added flagship events to top of events page
- Added events page section to main.css
- Added involvement page section to main.css
- Added flowchart to involvement page
- Fixed involvement page title
- Fixed mobile navbar links
- Fixed contact page mobile resizing issues
### 2020-Jun-07
- Changed timeline to be reverse order (Most Recent First)
- Added timeline photos
### 2020-Jun-02
- Added a featured photos section to the gallery page
- Split the main.js code into two classes, one for slideshow, one for modal
- Included slideshow.css in gallery.html
- Changed slideshow slides variable name from mySlides to slide_show_Slides
- Included fading into slide_show_Slides class style to prevent bootstrap from overriding.
- Cheesed modal errors on index.html by rendering slideshow first.
    * Need to fix
### 2020-Jun-01
- Added a sample timeline on the events page
- Fixed bottom icon styles
- Added code to timeline in order to override _reboot.scss

<details>
    <summary>May 2020</summary>

    ### 2020-May-31
    - Added Dylan to exec section
    ### 2020-May-29
    - Updated Exec Descriptions and removed flip cards
    ### 2020-May-28
    - Added favicon to all pages
    - Changed "FAQ" page to "GET INVOLVED"
    - Changed "JAM SESSION" page to "EVENTS"
    ### 2020-May-25
    - Added exec photos
    - Added placeholder descriptions
    - Added flipcards with description on the back
    - Made the images responsive according to screen width
    ### 2020-May-23
    - Added bootstrap to gallery page
    - Added css to overwrite bootstrap link colour
    - Created thumbnails for albums and formatted
    - Moved index slideshow css into separate file (slideshow.css)
    - Moved lightbox slides css into separate file (lightbox.css)
    - Made hard-coded idea version of lightbox, still need to change to dynamic
    - ToDo:
        * Dynamic detection of album selected
        * Dynamic photo selection
    ### 2020-May-19
    - Set up "direct" contact on the contact page
    - Added execs section to about page
    - Included bootstrap in about and contact pages
    - Changed up css to fit with bootstrap
    - Added sendMail function in js file
    - ToDo: 
        * Incorporate firebase automated messaging
        * Select images for gallery
    ### 2020-May-12
    - Updated information on About Section
    - Updated footer facebook and instagram links
    - Removed index placeholder text
    - Formatted and updated contact page
    - Removed navbar about page icon
    - Added link to gallery page on index photo gallery [might remove gallery]
    - Added index gallery to gallery page as a starting point
</details>
