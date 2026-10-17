export const blogPosts = [
  {
    title: "From HTML to Python: My 8-Year Coding Journey",
    excerpt: "From discovering HTML tags at age 9 to building complex Python applications, here's how curiosity and consistency shaped my programming skills over the years.",
    date: "2024-03-10",
    readTime: "6 min read",
    category: "Journey",
    image: "/assets/coding-journey.jpg",
    slug: "from-html-to-python-my-8-year-coding-journey",
    author: "Utsab Mukharjee",
    content: `My coding journey began in 2016 when I was just curious about how websites worked. What started as a simple question has evolved into an 8-year adventure that has shaped who I am today.

## The Beginning: HTML at Age 9

It all started with HTML in 2017. I remember the excitement of creating my first webpage with just a few tags. The ability to make text appear on a screen with simple commands felt like magic. I spent countless hours experimenting with different tags, creating colorful pages, and learning about the structure of the web.

## Discovering Turtle Graphics

In 2018, I discovered turtle graphics in Python. This was my first real introduction to programming logic. Drawing shapes and patterns with code opened my eyes to the mathematical beauty of programming. I remember staying up late, creating intricate designs and animations, each more complex than the last.

## The Python Revolution

2022 marked a turning point in my coding journey when I seriously started learning Python. The transition from simple HTML to a full programming language was challenging but incredibly rewarding. Python's syntax felt natural, and I quickly fell in love with its versatility.

I started with basic concepts like variables and loops, gradually moving to more complex topics like object-oriented programming and data structures. Every day brought new discoveries, and I found myself constantly amazed by what I could create with just a few lines of code.

## Current Learning and Future Goals

Today, I continue to learn Python every day. From web development with frameworks like Flask and Django to data analysis and machine learning, Python has become my go-to language for almost everything.

My journey from a curious 9-year-old playing with HTML tags to a passionate programmer has taught me that consistency and curiosity are the keys to success in programming. Every challenge I've faced has made me a better coder and problem solver.

The best part about this journey? It's just the beginning. With emerging technologies like AI and machine learning, there's always something new to learn and explore.`,
  },
  {
    title: "Balancing PCM Studies with Programming Passion",
    excerpt: "How I manage my Class 12th Physics, Chemistry, and Mathematics while pursuing my love for coding. Tips for students juggling academics and programming.",
    date: "2024-02-25",
    readTime: "4 min read",
    category: "Education",
    image: "/assets/studies-programming.jpg",
    slug: "balancing-pcm-studies-with-programming-passion",
    author: "Utsab Mukharjee",
    content: `Currently pursuing Class 12th with Physics, Chemistry, and Mathematics (PCM), I often get asked how I manage to balance my academic studies with my passion for programming. Here's my approach to making both work together.

## The Challenge

Managing PCM subjects while maintaining a consistent coding practice isn't easy. Physics requires understanding complex concepts, Chemistry demands memorization of reactions and formulas, and Mathematics needs continuous practice. Add programming to this mix, and you have a full schedule.

## Time Management Strategies

### Morning Routine
I start my day early, dedicating the first two hours to programming when my mind is fresh. This ensures I make progress on my coding projects before academic responsibilities take over.

### Study Blocks
I use the Pomodoro Technique, dedicating specific time blocks to each subject. For example:
- 8-10 AM: Programming
- 10-12 PM: Physics
- 2-4 PM: Chemistry
- 4-6 PM: Mathematics
- 8-10 PM: Programming projects

### Weekend Projects
Weekends are when I dive deep into larger programming projects, allowing me to apply concepts I've learned during the week.

## Synergy Between Math and Code

One realization that transformed my perspective is how interconnected Mathematics and Computer Science are. Working with vectors, calculus, and algebra directly helps with algorithms, machine learning concepts, and logic building.`,
  },
  {
    title: "Building Interactive Web Games with Pure JavaScript",
    excerpt: "Creating Tic-Tac-Toe and Snake & Ladder games taught me the fundamentals of DOM manipulation, game logic, and user interaction design.",
    date: "2024-01-18",
    readTime: "8 min read",
    category: "Projects",
    image: "/assets/web-games.jpg",
    slug: "building-interactive-web-games-with-pure-javascript",
    author: "Utsab Mukharjee",
    content: `Creating web games has been one of the most rewarding aspects of my programming journey. From simple Tic-Tac-Toe to complex Snake & Ladder implementations, building interactive experiences taught me essential software development principles.

## Why Build Games?

Games are exceptional for learning because they require:
- Strict state management
- Real-time user feedback loops
- Turn handling and race condition prevention
- Algorithmic win-condition detection

## Tic-Tac-Toe State Logic

The 3x3 grid can be represented as an array of 9 elements. By checking the 8 possible winning lines after every move, we create an instantaneous evaluation system:

\`\`\`javascript
const winningLines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];
\`\`\`

## The Complexity of Snake & Ladder

Implementing a 100-cell board with snakes and ladders requires mapping numerical tile IDs to coordinate grids that reverse every other row (boustrophedon layout). Adding dynamic dice rolling, step clamping, and event notifications creates an engaging mini-game directly in the portfolio.`,
  },
  {
    title: "Learning C Language: Back to the Basics",
    excerpt: "After mastering Python, diving into C programming opened my eyes to memory management, pointers, and the beauty of low-level programming concepts.",
    date: "2024-04-02",
    readTime: "5 min read",
    category: "Learning",
    image: "/assets/c-programming.jpg",
    slug: "learning-c-language-back-to-the-basics",
    author: "Utsab Mukharjee",
    content: `Coming from a Python background where memory management is automatic and garbage collection happens under the hood, writing C was like looking into the engine of an automobile.

## The Shock of Pointers

In Python, everything is an object reference. In C, you directly manage memory addresses. Learning syntax like \`*ptr\` and \`&var\` gave me a visceral understanding of how the computer's CPU and RAM collaborate.

## Why Every Developer Should Learn C

1. **Appreciation of Abstraction**: You realize what high-level languages do for you.
2. **Deterministic Performance**: No runtime bloat, minimal footprint.
3. **Foundation for Cybersecurity**: Understanding buffer overflows, stack smashing, and memory corruption is vital for ethical hacking and penetration testing.`,
  },
  {
    title: "Adobe Office Visit: A Glimpse into Tech Innovation",
    excerpt: "My experience visiting Adobe's Noida office through an NGO program. What I learned about design thinking, creativity, and the tech industry's future.",
    date: "2023-11-15",
    readTime: "7 min read",
    category: "Experience",
    image: "/assets/adobe-office.jpg",
    slug: "adobe-office-visit-a-glimpse-into-tech-innovation",
    author: "Utsab Mukharjee",
    content: `In 2022, I had the privilege of visiting Adobe's Noida campus through an NGO educational outreach program. Stepping into a global technology giant's headquarters was a pivotal moment in my journey.

## Experiencing a World-Class Tech Campus

The campus was a bustling ecosystem of innovation, collaborative workspaces, design labs, and engineering teams working on products used by millions of creatives worldwide.

## Key Takeaways

- **Collaboration over Isolation**: Software isn't built in a silo; design and engineering must have a continuous feedback dialogue.
- **User-Centric Thinking**: Every technical decision must ultimately serve the human using the tool.
- **Continuous Learning**: Senior engineers emphasized that tools change constantly, but strong fundamentals and curiosity endure.`,
  },
  {
    title: "Scoring 91% in Class 10: Study Strategies That Worked",
    excerpt: "The methods and mindset that helped me achieve 91% in my board exams while maintaining my passion for programming and technology.",
    date: "2024-05-20",
    readTime: "6 min read",
    category: "Academic",
    image: "/assets/academic-success.jpg",
    slug: "scoring-91-percent-in-class-10-study-strategies-that-worked",
    author: "Utsab Mukharjee",
    content: `Achieving 91% in the Class 10 board examinations was a milestone that proved that academic excellence and deep extracurricular passion can reinforce one another rather than conflict.

## Principles of Execution

1. **Concept First, Formula Second**: Understanding the derivation of formulas made problem-solving intuitive rather than memorization-dependent.
2. **Active Recall**: Testing myself with past year papers under timed conditions.
3. **Structured Downtime**: Coding was never a distraction; it was my creative outlet and reward after completing rigorous study goals.`,
  },
];
