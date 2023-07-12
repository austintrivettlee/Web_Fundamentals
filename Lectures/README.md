# Web_Fundamentals_codingdojo_july2023

## First day notes

HTTP : Hyper Text Transfer Protocol
: procedures for a given situation

[google](www.google.com)

HTML : Hyper Text Markup Language
: 

## Day Two Notes

CSS
: Cascading Style Sheets

The first thing that happens is a http request when you enter a website URL. 
opening page should be called index.html
The web is made up of computers that we call clients and servers.

Clients are the computers and other internet-connected devices that use the internet.
Servers are computers that store web pages or applications. They are computers, just like the machine you are on right now, but typically without the keyboard, trackpad, or screen.

This is how you comment out in HTML

You can select all occurances with CTRL + SHIFT + L or CTRL + D for each next one.

Descendant Selector

Sometimes we know the element we want to select is inside of another element. If the "parent" element is one we can easily select (maybe it has a class on it), then we can use this to our advantage to access the child element easily.

Direct Descendant Selector
Similar to the Descendant Selector, we can select a child element with the Direct Descendant Selector `>`, but unlike the Descendant Selector it won't select grandchildren. 

for example 

.header > img {
    height: 50px;
}

Selectors

selector | strength
-------------------
div      | +1
#game    | +100
p        | +1
.score   | +10
-------------------
combined | 112

Attribute Selector
Sometimes we have a situation where we want to style two similar elements that rely on an attribute for how they behave. For instance if we are making a form we likely use `<input type="text">` for the user to input data into and `<input type="submit">` which acts as the button the user clicks to submit the form. CSS we would want to use on one we might not want to use on the other. While we *could* use a class to differentiate between the two we could also use a selector that looks at the attribute.

input {
    padding: 5px;
    border-color: rebeccapurple;
}
input[type="text"] {
    border: none;
    border-bottom: 2px solid rebeccapurple;
}
input[type="submit"] {
    color: white;
    background-color: rebeccapurple;
}

Tags for CSS - Using a '*' selects everything on the file

background-color

color

text-align

font-style

font-weight

text-decoration

font-family

### day three notes - Flexbox





