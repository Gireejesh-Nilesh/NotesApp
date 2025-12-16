# Card Stack Manager

live link : https://gireejesh-nilesh.github.io/NotesApp/

A simple and interactive card stack web application that allows users to create cards using a form, store them in localStorage, and display them in a stacked card UI where only the top cards are visible.

## Features

📄 Create cards using a form

💾 Persistent storage using localStorage

🃏 Stacked card layout (top 3 visible)

🔄 Dynamic card ordering (back card can move to top)

🎨 Clean and responsive UI

✅ Form validation before submission

## Technologies Used

HTML5

CSS3 (Flexbox, positioning)

Vanilla JavaScript

Browser LocalStorage

## Project Structure

├── index.html
├── style.css
├── script.js
└── README.md

## How It Works

User fills the form with:

Theme (image URL)

Topic

Description

Category

Form validation ensures all fields are filled

Data is saved to localStorage

Cards are dynamically created using JavaScript

Only the top 3 cards are shown using stacking logic

Z-index, transform, and opacity create a layered effect

## Card Stacking Logic

Cards are rendered dynamically from stored data

Only the first 3 cards are visible

Z-index, translateY, and opacity control stacking order

Extra cards remain hidden until brought to the top

## Form Validation

All input fields are required

One category must be selected

Submission is prevented if validation fails

## Sample Stored Data Format

{
"theme": "https://image-url.com",
"topic": "Coffee",
"desc": "A casual discussion over coffee",
"category": "casual"
}

## How to Run

Clone or download the project

Open index.html in any modern browser

Start creating cards 🎉

## Future Improvements

Swipe or drag interaction for cards

Edit / delete card functionality

Smooth animations between card transitions

Custom tooltip UI

Backend integration

## Learning Outcomes

This project helps in understanding:

DOM manipulation

Form handling & validation

localStorage usage

UI stacking logic

Clean JavaScript architecture

## License

This project is open-source and free to use for learning purposes.
