# Idle Game Prototypes

A handful of targetted prototypes for a sample project.

Not yet at a point where these are being publicly hosted -- run `npm run start` within a folder to build and serve it.

I'm primarily doing dev in a Codespace, haven't tested local dev.

# Prototyping Plans

I have a handful of targetted prototypes planned.

## 1. Juice Test (Web)
The idea of an idle game that feels juicy -- at the level of individual taps, rather than showing pretty animations in secondary response to your taps -- is relatively (but not completely) novel. 

**Deliverable:** a web app, optimized for mobile, that looks like a vintage Windows desktop. Tapping the Start Menu spawns a random window; tapping the window closes it. It should feel "juicy".

**Questions answered:**
* Does this subjectively feel like a fidget toy that can sustain interest over weeks to months of long-term interaction?
* How long does this take to build and tune, including art assets, using web tech?

## 2. Juice Test (Unity)
The previous prototype will be in web for speed of iteration and my comfort. However, education goals suggest we should build this in Unity. 

**Deliverable:** A functionally-identical prototype to #1, but implemented in Unity instead of web tech. Bonus points for generating an iOS build, instead of just WebGL, that integrates the iOS vibration APIs.

**Questions Answered:**
* For base-level functionality, how does Unity dev time compare to web?
* Web prototype will likely be using CSS and the DOM for many/most graphics instead of images, so this will ensure we have a good baseline for time needed to generate static image assets instead of dynamic ones

## 3. Economy Test
The current tentative design of this game involves ~4 different sub-"games", each with a widely different UI and core idle game loop. There are idle games with complex interconnected economies (see: Kittens Game), and there are idle games that ask you to manage your time across multiple parallel economies (AdVenture Capitalist, AdVenture Communist). I'm curious to explore how viable it is to design four parallel economies that are standalone functioning systems, and yet interconnect in a way that requires the player to bounce between them for a mechanical reason other than "they exist".

**Deliverable:** The first deliverable will likely be some sort of economy graph, charting the economic faucet-and-drain relationships within and across each mini-game. https://lostgarden.home.blog/2021/12/12/value-chains/ is likely a good reference point.

From there, this will likely (but not necessarily) evolve into a light playable prototype, built using solely text with web tech.

**Questions answered:**
* Is it feasibly possible to build the sort of interconnected economy I'm imagining?
* How complex will such an economy need to be in order to be minimally interesting and compelling to players?

# Brainstorming Plans
These items will likely yield prototyping plans, but need more initial high-level brainstorming first.

## 1. Narrative Flow
I'm interested in exploring how a long-term narrative can play out over the course of weeks or months playing this game. What might that look like? What model for dripping narrative content can/should we use to ensure the game stays interesting for both highly-engaged and lightly-engaged players? How do we prevent highly-engaged players from rushing through the story? How do live or seasonal events play into this, and what's the relationship between an upfront authored narrative and a live service component to the game?

## 2. ARG-like Secrets
I'd love for this game to have the feeling of a puzzle box, with secrets slowly unfurling over time and revealing new aspects to the game. Games like Universal Paperclips and A Dark Room do this within the context of a solo game played over a short period of time; how does this adapt to a longer-term idle game with playtime measured in weeks or months? Does it necessarily need to include puzzles that require an entire community to solve? What is the relationship between this and a live service component? How much do we want to require players to engage with a broader community of player as opposed to creating a self-contained thing?