// Random Quotes for Header
headerQuotes = [
    { hText: "\" A good quote is the spark that ignites a thought, an idea, or a revolution. \"" },
    { hText: "\" In a world full of noise, a well-crafted quote is a moment of clarity. \"" },
    { hText: "\" A single quote has the potential to change a perspective, a decision, or a life. \"" },
    { hText: "\" Quotes are proof that even a few words can carry the weight of profound wisdom. \"" },
    { hText: "\" Great quotes are timeless treasures that connect us to the wisdom of the ages. \"" }
];

const qHeader = document.querySelector(".q-header");
const randomIndex = Math.floor(Math.random() * headerQuotes.length);
const randomQuote = headerQuotes[randomIndex];
qHeader.textContent = `${randomQuote.hText}`;


// Add event listeners to all copy buttons
document.querySelectorAll('.copy-btn').forEach((button) => {
    button.addEventListener('click', () => {
        // Get the text associated with the button
        const quoteText = button.previousElementSibling.textContent.trim();
        
        // Copy the text to the clipboard
        navigator.clipboard.writeText(quoteText)
            .then(() => {
                const originalText = button.textContent;
                button.textContent = 'Copied';
                setTimeout(() => {
                    button.textContent = originalText;
                }, 1000);
            })
            .catch((error) => {
                console.error('Failed to copy text: ', error);
            });
    });
});


// Displaying the Hidden Container
const hiddenCont = document.querySelector(".hidden-cont");
document.querySelector(".generate").addEventListener("click", function() {
    hiddenCont.style.display = "block";
});
document.querySelector(".cancel-btn").addEventListener("click", function() {
    hiddenCont.style.display = "none";
});


// Arrays for each Quote category
const motivational = [
    { hText: "\" Believe you can and you're halfway there. \" – Theodore Roosevelt" },
    { hText: "\" The only way to do great work is to love what you do. \" – Steve Jobs" },
    { hText: "\" Wake up with determination. Go to bed with satisfaction. \" – Anonymous" },
    { hText: "\" Push yourself, because no one else is going to do it for you. \" – Anonymous" },
    { hText: "\" Success doesn't just find you. You have to go out and get it. \" – Anonymous" },
    { hText: "\" The harder you work for something, the greater you'll feel when you achieve it. \" – Anonymous" },
    { hText: "\" Don't stop when you're tired. Stop when you're done. \" – Anonymous" },
    { hText: "\" Do something today that your future self will thank you for. \" – Anonymous" },
    { hText: "\" Sometimes we're tested not to show our weaknesses, but to discover our strengths. \" – Anonymous" },
    { hText: "\" The key to success is to focus on goals, not obstacles. \" – Anonymous" }
];
const courage = [
    { hText: "\" It takes courage to grow up and become who you really are. \" – E.E. Cummings" },
    { hText: "\" Courage is grace under pressure. \" – Ernest Hemingway" },
    { hText: "\" Life shrinks or expands in proportion to one's courage. \" – Anais Nin" },
    { hText: "\" You can choose courage, or you can choose comfort, but you cannot choose both. \" – Brene Brown" },
    { hText: "\" Do the thing you fear most, and the death of fear is certain. \" – Mark Twain" },
    { hText: "\" All our dreams can come true if we have the courage to pursue them. \" – Walt Disney" },
    { hText: "\" Courage is the first of human qualities because it is the quality that guarantees all the others. \" – Aristotle" },
    { hText: "\" You can't be brave if you've only had wonderful things happen to you. \" – Mary Tyler Moore" },
    { hText: "\" Courage is resistance to fear, mastery of fear—not absence of fear. \" – Mark Twain" },
    { hText: "\" The greatest test of courage on earth is to bear defeat without losing heart. \" – Robert G. Ingersoll" }
];
const education = [
    { hText: "\" Education is the most powerful weapon which you can use to change the world. \" – Nelson Mandela" },
    { hText: "\" An investment in knowledge pays the best interest. \" – Benjamin Franklin" },
    { hText: "\" Education is not preparation for life; education is life itself. \" – John Dewey" },
    { hText: "\" The purpose of education is to replace an empty mind with an open one. \" – Malcolm Forbes" },
    { hText: "\" The roots of education are bitter, but the fruit is sweet. \" – Aristotle" },
    { hText: "\" Develop a passion for learning. If you do, you will never cease to grow. \" – Anthony J. D'Angelo" },
    { hText: "\" Learning is not attained by chance, it must be sought for with ardor and diligence. \" – Abigail Adams" },
    { hText: "\" Education's purpose is to replace an empty mind with an open one. \" – Malcolm Forbes" },
    { hText: "\" A person who won't read has no advantage over one who can't read. \" – Mark Twain" },
    { hText: "\" Education breeds confidence. Confidence breeds hope. Hope breeds peace. \" – Confucius" }
];
const success = [
    { hText: "\" Success is not final, failure is not fatal: It is the courage to continue that counts. \" – Winston Churchill" },
    { hText: "\" Don't be afraid to give up the good to go for the great. \" – John D. Rockefeller" },
    { hText: "\" I find that the harder I work, the more luck I seem to have. \" – Thomas Jefferson" },
    { hText: "\" Success usually comes to those who are too busy to be looking for it. \" – Henry David Thoreau" },
    { hText: "\" Success is walking from failure to failure with no loss of enthusiasm. \" – Winston Churchill" },
    { hText: "\" If you really look closely, most overnight successes took a long time. \" – Steve Jobs" },
    { hText: "\" Success seems to be connected with action. Successful people keep moving. \" – Conrad Hilton" },
    { hText: "\" The way to get started is to quit talking and begin doing. \" – Walt Disney" },
    { hText: "\" Success is getting what you want. Happiness is wanting what you get. \" – W. P. Kinsella" },
    { hText: "\" Success is the sum of small efforts, repeated day in and day out. \" – Robert Collier" }
];
const friendship = [
    { hText: "\" A friend is someone who knows all about you and still loves you. \" – Elbert Hubbard" },
    { hText: "\" True friendship multiplies the good in life and divides its evils. \" – Baltasar Gracian" },
    { hText: "\" Friendship is the only cement that will ever hold the world together. \" – Woodrow Wilson" },
    { hText: "\" The only way to have a friend is to be one. \" – Ralph Waldo Emerson" },
    { hText: "\" A real friend is one who walks in when the rest of the world walks out. \" – Walter Winchell" },
    { hText: "\" Friendship is the golden thread that ties the heart of all the world. \" – John Evelyn" },
    { hText: "\" There is nothing on this earth more to be prized than true friendship. \" – Thomas Aquinas" },
    { hText: "\" Friends show their love in times of trouble, not in happiness. \" – Euripides" },
    { hText: "\" A true friend never gets in your way unless you happen to be going down. \" – Arnold H. Glasow" },
    { hText: "\" Friendship is always a sweet responsibility, never an opportunity. \" – Khalil Gibran" }
];
const life = [
    { hText: "\" Life is what happens when you're busy making other plans. \" – John Lennon" },
    { hText: "\" You only live once, but if you do it right, once is enough. \" – Mae West" },
    { hText: "\" In three words I can sum up everything I've learned about life: it goes on. \" – Robert Frost" },
    { hText: "\" To live is the rarest thing in the world. Most people exist, that is all. \" – Oscar Wilde" },
    { hText: "\" Life is really simple, but we insist on making it complicated. \" – Confucius" },
    { hText: "\" Life is a succession of lessons which must be lived to be understood. \" – Ralph Waldo Emerson" },
    { hText: "\" Your time is limited, so don't waste it living someone else's life. \" – Steve Jobs" },
    { hText: "\" Life isn't about finding yourself. It's about creating yourself. \" – George Bernard Shaw" },
    { hText: "\" Do what you can, with what you have, where you are. \" – Theodore Roosevelt" },
    { hText: "\" Life is about making an impact, not making an income. \" – Kevin Kruse" }
];
const happiness = [
    { hText: "\" Happiness is not something ready-made. It comes from your own actions. \" – Dalai Lama" },
    { hText: "\" For every minute you are angry you lose sixty seconds of happiness. \" – Ralph Waldo Emerson" },
    { hText: "\" Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort. \" – Franklin D. Roosevelt" },
    { hText: "\" Happiness can be found even in the darkest of times if one only remembers to turn on the light. \" – J.K. Rowling" },
    { hText: "\" The best way to cheer yourself is to try to cheer someone else up. \" – Mark Twain" },
    { hText: "\" Count your age by friends, not years. Count your life by smiles, not tears. \" – John Lennon" },
    { hText: "\" Happiness is the secret to all beauty. There is no beauty without happiness. \" – Christian Dior" },
    { hText: "\" Happiness is a direction, not a place. \" – Sydney J. Harris" },
    { hText: "\" True happiness arises, in the first place, from the enjoyment of oneself. \" – Joseph Addison" },
    { hText: "\" Be happy for this moment. This moment is your life. \" – Omar Khayyam" }
];
const family = [
    { hText: "\" Family is not an important thing. It's everything. \" – Michael J. Fox" },
    { hText: "\" In every conceivable manner, the family is the link to our past, bridge to our future. \" – Alex Haley" },
    { hText: "\" Happiness is having a large, loving, caring, close-knit family in another city. \" – George Burns" },
    { hText: "\" A family doesn't have to be perfect; it just needs to be united. \" – Anonymous" },
    { hText: "\" The strength of a family, like the strength of an army, lies in its loyalty to each other. \" – Mario Puzo" },
    { hText: "\" Family means no one gets left behind or forgotten. \" – David Ogden Stiers" },
    { hText: "\" You don't choose your family. They are God's gift to you, as you are to them. \" – Desmond Tutu" },
    { hText: "\" To us, family means putting your arms around each other and being there. \" – Barbara Bush" },
    { hText: "\" Rejoice with your family in the beautiful land of life. \" – Albert Einstein" },
    { hText: "\" What can you do to promote world peace? Go home and love your family. \" – Mother Teresa" }
];
const leadership = [
    { hText: "\" Leadership is not about being in charge. It is about taking care of those in your charge. \" – Simon Sinek" },
    { hText: "\" A leader is one who knows the way, goes the way, and shows the way. \" – John C. Maxwell" },
    { hText: "\" The art of leadership is saying no, not yes. It is very easy to say yes. \" – Tony Blair" },
    { hText: "\" Leadership is the capacity to translate vision into reality. \" – Warren Bennis" },
    { hText: "\" A genuine leader is not a searcher for consensus but a molder of consensus. \" – Martin Luther King Jr." },
    { hText: "\" Leadership is unlocking people's potential to become better. \" – Bill Bradley" },
    { hText: "\" Innovation distinguishes between a leader and a follower. \" – Steve Jobs" },
    { hText: "\" The function of leadership is to produce more leaders, not more followers. \" – Ralph Nader" },
    { hText: "\" True leaders don't create followers; they create more leaders. \" – Anonymous" },
    { hText: "\" Leaders think and talk about the solutions. Followers think and talk about the problems. \" – Brian Tracy" }
];
const wisdom = [
    { hText: "\" Knowing yourself is the beginning of all wisdom. \" – Aristotle" },
    { hText: "\" The only true wisdom is in knowing you know nothing. \" – Socrates" },
    { hText: "\" Wisdom is not a product of schooling but of the lifelong attempt to acquire it. \" – Albert Einstein" },
    { hText: "\" Do not seek to follow in the footsteps of the wise; seek what they sought. \" – Matsuo Basho" },
    { hText: "\" Honesty is the first chapter in the book of wisdom. \" – Thomas Jefferson" },
    { hText: "\" The invariable mark of wisdom is to see the miraculous in the common. \" – Ralph Waldo Emerson" },
    { hText: "\" Wisdom comes from experience. Experience is often a result of lack of wisdom. \" – Terry Pratchett" },
    { hText: "\" Knowledge speaks, but wisdom listens. \" – Jimi Hendrix" },
    { hText: "\" Wisdom is not wisdom when it is derived from books alone. \" – Horace" },
    { hText: "\" The wise man does at once what the fool does finally. \" – Baltasar Gracian" }
];


// Map buttons to their respective arrays
const categories = {
    "Motivational": motivational,
    "Courage": courage,
    "Education": education,
    "Success": success,
    "Friendship": friendship,
    "Life": life,
    "Happiness": happiness,
    "Family": family,
    "Leadership": leadership,
    "Wisdom": wisdom
};


// Add event listeners to buttons
const btns = document.querySelectorAll(".btns");
const generation = document.querySelector(".generation");

btns.forEach((button) => {
    button.addEventListener("click", () => {
        const categoryName = button.textContent.trim(); // Get category from button text
        const quotesArray = categories[categoryName]; // Find the array for the category
        if (quotesArray && quotesArray.length > 0) {
            const randomIndex = Math.floor(Math.random() * quotesArray.length);
            generation.textContent = quotesArray[randomIndex].hText; // Update the text
        } else {
            generation.textContent = "No quotes available for this category !";
        }
    });
});


// Copy button functionality for Hidden Container
document.querySelectorAll('.copy-btn-2').forEach((button) => {
    button.addEventListener('click', () => {
        // Get the text associated with the button
        const quoteText = button.previousElementSibling.textContent.trim();
        
        // Copy the text to the clipboard
        navigator.clipboard.writeText(quoteText)
            .then(() => {;
                const originalText = button.textContent;
                button.textContent = 'Copied';
                setTimeout(() => {
                    button.textContent = originalText;;
                }, 1000);
            })
            .catch((error) => {
                console.error('Failed to copy text: ', error);
            });
    });
});
