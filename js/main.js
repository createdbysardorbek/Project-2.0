const people = [
    {
        name: "Steve Jobs",
        quote: `“Remembering that I'll be dead soon is the most important tool I've ever encountered to help me
            make the big choices in life.Because almost everything - all external expectations, all pride,
            all fear of embarrassment or failure - these things just fall away in the face of death, leaving
            only what is truly important.”`,
        occupation: "Founder of Apple",
        img: "./../img/steve__jobs.jpeg"

    },
    {
        name: "Bill Gates",
        quote: `“I can understand wanting to have millions of dollars, there’s a certain freedom, meaningful
            freedom, that comes with that. But once you get much beyond that, I have to tell you, it’s the
            same hamburger.”`,
        occupation: "Founder of Microsoft",
        img: "./../img/bill__gates.jpg"

    },
    {
        name: "Mark Zuckerberg",
        quote: `“I made so many mistakes in running the company so far, basically any mistake you can think of I
            probably made. I think, if anything, the Facebook story is a great example of how if you're
            building a product that people love you can make a lot of mistakes”`,
        occupation: "Founder of Facebook",
        img: "./../img/mark_zuckerberg.webp"

    },
    {
        name: "Eduardo Saverin",
        quote: `“ I am obligated and I will pay hundreds of millions of dollars in taxes to the American
            government. I already paid and I will keep paying whatever taxes I owe based on my time as a
            U.S. citizen.”`,
        occupation: "Co-founder of Facebook",
        img: "./../img/eduardo__saverin.jpg"

    },
    {
        name: "Elon Musk",
        quote: `“ I think it's very important to have a feedback loop, where you're constantly thinking about
            what you've done and how you could be doing it better. I think that's the single best piece of
            advice: constantly think about how you could be doing things better and questioning yourself.”`,
        occupation: "Founder of Tesla",
        img: "./../img/elon__mask.jpg"

    },
    {
        name: "Jeff Bezos",
        quote: `“ What we need to do is always lean into the future; when the world changes around you and when
            it changes against you - what used to be a tail wind is now a head wind - you have to lean into
            that and figure out what to do because complaining isn't a strategy.”`,
        occupation: "President and CEO of Amazon",
        img: "./../img/jeff__bezos.avif"

    }
]


let arrowLeft = document.querySelector(".arrow_left"),
    arrowRight = document.querySelector(".arrow_right");

let slider = document.querySelector(".slider");

let counter = 0;

function showSlide(counter) {
    slider.innerHTML = ''
    slider.innerHTML = `
        <div class="info">
        <p>
            ${people[counter].quote}
        </p>
        <div class="names">
            <span>${people[counter].name}</span>
            <span class="black">${people[counter].occupation}</span>
        </div>
        </div>
        <div class="person_img">
            <img src="${people[counter].img}" alt="steve jobs">
        </div>
    `
}

showSlide(counter)

arrowRight.addEventListener("click", () => {
    counter++;
    if (counter >= people.length) {
        counter = 0
    }
    showSlide(counter)
})

arrowLeft.addEventListener("click", () => {
    counter--;
    if (counter < 0) {
        counter = people.length - 1
    }
    showSlide(counter)
})