# BADABING-hotrestaurant

* Front-End
    1. what UI elements are there?
    index.html: reservation btn, view tables btn
        footer: API Table Link/API Waitlist link
    reservation.html: form with submit btn, home btn, view table btn
        footer: API Table Link/API Waitlist link
    table.html: cards with booked table info, reservation btn, home btn
        footer: clear table/API Table Link/API Waitlist link
    *each html with footer control panel*
    2. what information does the user need?
    link to website
    Name, Phone#, EMail, ID
    3. can we leverage any bootstrap components in our design
    jumbotron, btn, form, card, icon

* Back-End
    1. What data needs to be stored?
    Reservation Array with the following info: Name, Phone#, Email, ID
    Waitlist Array
    2. What routes are we going to need?
    GET: all three html
    POST: view, render html, render json
    3. HTML routes? (how many different pages will there be?)
    index.html
    reservation.html
    table.html
    4. API Routes? (GET/POSTS)
    index.html: GET 
    table.html: Jquery AJAX
    reservation.html: POST (oneway)

user lands on index.html (req) - response: render html
sends request by hitting btn to either:
    * make reservation - response: html renders 
    - user can input details and hit submit (request)- response: server responses by POST (adding information)
    * check tables - response: JQuery AJAX to call information and render HTML