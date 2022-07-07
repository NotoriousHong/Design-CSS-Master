const quotes = [ 
    {
        quote: "Miracles happen to only those who believe in them.",
    },
    {
        quote: "Think like a man of action and act like man of thought.",
    },
    {
        quote: "Courage is very important. Like a muscle, it is strengthened by use.",
    },
    {
        quote: "Life is the art of drawing sufficient conclusions from insufficient premises.",
    },
    {
        quote: "By doubting we come at the truth.",
    },
    {
        quote: "A man that has no virtue in himself, ever envies virtue in others.",
    },
    {
        quote: "When money speaks, the truth keeps silent.",
    },
    {
        quote: "Better the last smile than the first laughter.",
    },
    {
        quote: "Painless poverty is better than embittered wealth.",
    },
    {
        quote: "Error is the discipline through which we advance.",
    },
    {
        quote: "Faith without deeds is useless.",
    },
    {
        quote: "We give advice, but we cannot give conduct.",
    },
    {
        quote: "Weak things united become strong.",
    },
    {
        quote: "Nature never deceives us; it is always we who deceive ourselves.",
    },
    {
        quote: "Forgiveness is better than revenge. ",
    },
    {
        quote: "We never know the worth of water till the well is dry.",
    },
    {
        quote: "Pain past is pleasure. ",
    },
    {
        quote: "Books are ships which pass through the vast seas of time.",
    },
    {
        quote: "Who begins too much accomplishes little.",
    },
    {
        quote: "Envy and wrath shorten the life.",
    },
    {
        quote: "Appearances are deceptive. ",
    },
    {
        quote: "All fortune is to be conquered by bearing it.",
    }
    
]


const quote = document.querySelector("#quote span:first-child")
const translated = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.round(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
translated.innerText = todaysQuote.translated;