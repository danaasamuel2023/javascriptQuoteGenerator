let btn = document.querySelector('#new-qoute');
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill"
    },
    {
      quote: "Innovation distinguishes between a leader and a follower.",
      person: "Steve Jobs"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      person: "John Lennon"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      person: "Wayne Gretzky"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill"
    },
    {
      quote: "Innovation distinguishes between a leader and a follower.",
      person: "Steve Jobs"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      personr: "John Lennon"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      person: "Wayne Gretzky"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
     quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
     quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    // Additional quotes
    {
     quote: "The only true wisdom is in knowing you know nothing.",
      person: "Socrates"
    },
    {
     quote: "If you want to shine like the sun, first burn like the sun.",
      person: "A. P. J. Abdul Kalam"
    },
    {
     quote: "The only thing we have to fear is fear itself.",
      person: "Franklin D. Roosevelt"
    },
    {
     quote: "No one can make you feel inferior without your consent.",
      person: "Eleanor Roosevelt"
    },
    {
     quote: "Be yourself; everyone else is already taken.",
      person: "Oscar Wilde"
    }
    // Add more quotes as needed
  ];

  btn.addEventListener('click', function(){


    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;

    person.innerText = quotes[random].person;
  })
  