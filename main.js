function setFullHeight() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}
window.addEventListener('resize', setFullHeight);
window.addEventListener('load', setFullHeight);

function toggleDetails(tile) {
  const details = tile.querySelector('.details');
  details.classList.toggle('visible');
}

function lockScroll() {
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.style.top = `-${window.scrollY}px`;
  document.body.dataset.scrollY = window.scrollY;
}

function unlockScroll() {
  const scrollY = document.body.dataset.scrollY || '0';
  document.body.style.position = '';
  document.body.style.width = '';
  document.body.style.top = '';
  document.body.removeAttribute('data-scroll-y');
  window.scrollTo(0, parseInt(scrollY));
}

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');

  if (navLinks.classList.contains('open')) {
    lockScroll();
  } else {
    unlockScroll();
  }
});

document.querySelectorAll('.color-choice').forEach(choice => {
  choice.addEventListener('click', () => {
    choice.classList.toggle('selected');
    choice.style.outline = choice.classList.contains('selected') ? '3px solid black' : 'none';
  });
});

// Reveal content after disclaimer is accepted
document.getElementById('accept-btn').addEventListener('click', function () {
  const mainContent = document.getElementById('main-content');
  mainContent.style.display = 'block';
  // Give the browser a tiny bit of time to apply display before transitioning opacity
  requestAnimationFrame(() => {
    mainContent.classList.add('visible');
  });

  document.querySelector('.disclaimer').style.display = 'none';
});

/*
const dropData = {
  yellow: {
    name: "Beta-blockers",
    color: "#FFFF00",
    examples: [
      "- Timolol (Timoptic, Istalol, Betimol)",
      "- Levobunolol (Betagan)",
      "- Carteolol (Ocupress)"
    ],
    mechanism: "Tells your eye to stop making so much fluid, which lowers the pressure inside!",
    analogy: "Your eye is like a bathtub with the faucet on. Beta-blockers are like turning that faucet way down—now only a trickle comes in, so the tub doesn’t overflow!"
  },
  teal: {
    name: "Prostaglandin Analogs",
    color: "#40E0D0",
    examples: [
      "- Latanoprost (Xalatan, Xelpros)",
      "- Travoprost (Travatan Z)",
      "- Bimatoprost (Lumigan)",
      "- Tafluprost (Zioptan)"
    ],
    mechanism: "Helps your eye drain fluid better, using an extra pathway!",
    analogy: "Imagine your eye is a house during a rainstorm. These drops build wide new gutters so the rain (eye fluid) can drain faster - no flooding, no pressure!"
  },
  purple: {
    name: "Alpha Agonists",
    color: "#800080",
    examples: [
      "- Brimonidine (Alphagan P)",
      "- Apraclonidine (Iopidine)"
    ],
    mechanism: "Lowers how much fluid your eye makes, and helps it drain better too!",
    analogy: "Think of a janitor with two jobs: one hand turns off a leaky faucet (less fluid in), while the other opens the back door to let water out. Two fixes in one!"
  },
  orange: {
    name: "Carbonic Anhydrase Inhibitors",
    color: "#FFA500",
    examples: [
      "- Dorzolamide (Trusopt)",
      "- Brinzolamide (Azopt)"
    ],
    mechanism: "Slows down the eye’s fluid-making machine by blocking a key ingredient!",
    analogy: "Imagine a soda machine running out of gas. No gas means no fizz - so less soda comes out! These drops cut the power to the machine, slowing everything down!"
  },
  white: {
    name: "ROCK Inhibitors or Combination Drops",
    color: "#FFFFFF",
    examples: [
      "- Netarsudil (Rhopressa)",
      "- Simbrinza (Brimonidine + Brinzolamide)",
      "- Rocklatan (Netarsudil + Latanoprost)"
    ],
    mechanism: "Relaxes part of the eye’s drainage system so fluid can escape more easily!",
    analogy: "Picture a traffic jam where nothing moves. ROCK inhibitors are like a traffic cop stepping in and suddenly, the cars start moving and the jam clears up!"
  },
  darkgreen: {
    name: "Miotics",
    color: "#008000",
    examples: [
      "- Pilocarpine"
    ],
    mechanism: "Squeezes part of your eye open so fluid can drain better!",
    analogy: "It’s like pulling a string to pop open a stuck drain. Now the water can finally leave the sink, and the pressure goes down!"
  },
  darkblue: {
    name: "Combination Drops",
    color: "#000080",
    examples: [
      "- Combigan (Brimonidine + Timolol)",
      "- Cosopt (Dorzolamide + Timolol)"
    ],
    mechanism: 
      "Uses two medicines at once—one lowers how much fluid is made, the other helps drain or blocks fluid-making enzymes.",
    analogy: 
      "Imagine a buddy-cop movie. One cop shuts off the water supply, the other either opens a secret drain tunnel or cuts off power to the pump! Working together, they bring the pressure down fast!"
  }
};
*/

const dropData = {
  yellow: {
    name: "Beta-blockers",
    color: "#FFFF00",
    examples: [
      "- Timolol (Timoptic, Istalol, Betimol)",
      "- Levobunolol (Betagan)",
      "- Carteolol (Ocupress)"
    ],
    howTheyWork: [
    "Beta-blockers tell your eye to make less fluid, like turning down a faucet so your eye doesn't overflow!"
    ]
  },
  teal: {
    name: "Prostaglandin Analogs",
    color: "#40E0D0",
    examples: [
      "- Latanoprost (Xalatan, Xelpros)",
      "- Travoprost (Travatan Z)",
      "- Bimatoprost (Lumigan)",
      "- Tafluprost (Zioptan)"
    ],
    howTheyWork: [
    "Prostaglandin analogs help your eye drain fluid better, like adding big new gutters during a rainstorm to prevent flooding!"
    ]
  },
  purple: {
    name: "Alpha Agonists",
    color: "#800080",
    examples: [
      "- Brimonidine (Alphagan P)",
      "- Apraclonidine (Iopidine)"
    ],
    howTheyWork: [
    "Alpha agonists do double duty - they slow down how much fluid your eye makes and also help open the drain, like a janitor fixing a leaky faucet and a clogged sink at once!"
    ]
  },
  orange: {
    name: "Carbonic Anhydrase Inhibitors (CAIs)",
    color: "#FFA500",
    examples: [
      "- Dorzolamide (Trusopt)",
      "- Brinzolamide (Azopt)"
    ],
    howTheyWork: [
    "CAIs block an enzyme inside your eye that helps make fluid, like cutting power to a machine so it stops producing extra liquid!"
    ]
  },
  white: {
    name: "ROCK Inhibitors or Combination Drops",
    color: "#FFFFFF",
    examples: [
      "- Netarsudil (Rhopressa)",
      "- Simbrinza (Brimonidine + Brinzolamide)",
      "- Rocklatan (Netarsudil + Latanoprost)"
    ],
    howTheyWork: [
      " Netarsudil (Rhopressa) relaxes the eye’s drainage pathway by softening the tissue, like loosening a stiff pipe so fluid can exit more easily!", 
      "In Simbrinza, brimonidine has a double duty - it slow down how much fluid your eye makes and also help open the drain, like a janitor fixing a leaky faucet and a clogged sink at once, while brinzolamide block an enzyme inside your eye that helps make fluid, like cutting power to a machine so it stops producing extra liquid!", 
      "In Rocklatan, netarsudil relaxes the eye’s drainage pathway by softening the tissue, like loosening a stiff pipe so fluid can exit more easily, while latanoprost help your eye drain fluid better, like adding big new gutters during a rainstorm to prevent flooding!"
    ]    
    },
  darkgreen: {
    name: "Miotics",
    color: "#008000",
    examples: [
      "- Pilocarpine"
    ],
    howTheyWork: [
      "Miotics like Pilocarpine shrink your pupil and pull on parts of the eye to open the drain—like tugging on a stuck pipe so fluid can finally escape."
    ]
  },
  darkblue: {
    name: "Combination Drops",
    color: "#000080",
    examples: [
      "- Combigan (Brimonidine + Timolol)",
      "- Cosopt (Dorzolamide + Timolol)"
    ],
    howTheyWork: [
      "In combigan, brimonidine has a double duty - it slow downs how much fluid your eye makes and also help open the drain, like a janitor fixing a leaky faucet and a clogged sink at once, while Timolol tell your eye to make less fluid, like turning down a faucet so your eye doesn't overflow!",
      "In cosopt, block an enzyme inside your eye that helps make fluid, like cutting power to a machine so it stops producing extra liquid, while Timolol tell your eye to make less fluid, like turning down a faucet so your eye doesn't overflow!"
    ] 
  }
};


const learnMoreBtn = document.getElementById('learn-more-btn');
const resultsSection = document.getElementById('results');
const detailsPage = document.getElementById('details-page');
const dropDetailsContainer = document.getElementById('drop-details-container');
const backBtn = document.getElementById('back-btn');

learnMoreBtn.addEventListener('click', () => {
  const selectedColors = Array.from(document.querySelectorAll('.color-choice.selected'))
    .map(el => el.getAttribute('data-color'));

  if (selectedColors.length === 0) return alert("Please select at least one drop cap color!");

  dropDetailsContainer.innerHTML = '';
  selectedColors.forEach(color => {
    const data = dropData[color];
    if (data) {
      const dropDiv = document.createElement('div');
      dropDiv.className = 'drop-row';
      dropDiv.innerHTML = `
        <div class="drop-box">
          <div class="color-box" style="background-color: ${data.color};"></div>
          <div class="drop-info">
            <h3>${data.name}</h3>
            <p><strong>Examples:</strong><br>${data.examples.join('<br>')}</p>
            <p><strong>How they work:</strong><br>${data.howTheyWork.join('<br>')}</p>
          </div>
        </div>
      `;
      dropDetailsContainer.appendChild(dropDiv);
    }
  });

  document.querySelector('.selector').style.display = 'none';
  resultsSection.style.display = 'none';
  detailsPage.style.display = 'block';
  requestAnimationFrame(() => {
  detailsPage.classList.add('visible');
});
});

backBtn.addEventListener('click', () => {
  detailsPage.classList.remove('visible');
setTimeout(() => {
  detailsPage.style.display = 'none';
}, 600); // Match the CSS transition duration
  document.querySelector('.selector').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', () => {
  const backBtn = document.getElementById('back-btn');
  const mainContent = document.getElementById('main-content');
  const detailsPage = document.getElementById('details-page');
  const dropDetailsContainer = document.getElementById('drop-details-container');
  const fadeElements = document.querySelectorAll('.fade-in-up');
  const colorChoices = document.querySelectorAll('.color-choice');

  backBtn.addEventListener('click', () => {
    // Immediately hide the details section
    detailsPage.style.display = 'none';
    
    // Clear any previous content to avoid flash of content
    dropDetailsContainer.innerHTML = '';

    // Immediately show main content and trigger opacity
    mainContent.style.display = 'block';
    
    // Trigger reflow so transition works
    void mainContent.offsetWidth;

    // Add 'visible' class for fade-in
    mainContent.classList.add('visible');
  });

  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('show');
    }, index * 150); // stagger effect: 150ms delay per element
  });

   colorChoices.forEach(choice => {
    choice.addEventListener('click', () => {
      const parent = choice.parentElement;
      const label = parent.querySelector('p');
      label.classList.toggle('selected');
    });
  });
});


