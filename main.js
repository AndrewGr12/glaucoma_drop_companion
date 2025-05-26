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

const dropData = {
  yellow: {
    name: "Beta-blockers",
    color: "#FFFF00",
    examples: [
      "- Timolol (Timoptic, Istalol, Betimol)",
      "- Levobunolol (Betagan)",
      "- Carteolol (Ocupress)"
    ],
    mechanism: "Block beta-adrenergic receptors in the ciliary body to decrease aqueous humor production!",
    analogy: "Turns the faucet way down in your eye’s plumbing! Less water gets made, so pressure drops! Or imagine your eye as a bathtub; beta-blockers twist the knob tighter so the water barely trickles in!"
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
    mechanism: "Bind to prostaglandin receptors and increase uveoscleral outflow!",
    analogy: "Adds extra-wide gutters around your house so rain drains faster and there is less overflow! Or think of a crowded exit in a concert hall - prostaglandins break open the side doors so everyone can exit quickly and smoothly!"
  },
  purple: {
    name: "Alpha Agonists",
    color: "#800080",
    examples: [
      "- Brimonidine (Alphagan P)",
      "- Apraclonidine (Iopidine)"
    ],
    mechanism: "Activate alpha-2 adrenergic receptors to both decrease aqueous humor production and increase uveoscleral outflow!",
    analogy: "Turning down the kitchen faucet while also opening a window to let steam out—less pressure coming in, and more ways for it to leave. Or picture a janitor with two jobs: one hand shuts off the leaky valve (less fluid made), while the other opens a back door to let water escape (more drainage)."
  },
  orange: {
    name: "Carbonic Anhydrase Inhibitors",
    color: "#FFA500",
    examples: [
      "- Dorzolamide (Trusopt)",
      "- Brinzolamide (Azopt)"
    ],
    mechanism: "Inhibit carbonic anhydrase in the ciliary epithelium, reducing bicarbonate formation and thus aqueous humor production.",
    analogy: "Cuts power to a water pump without energy, the fluid stops being made. Or imagine a soda machine losing its gas cartridge - no fizz, no flow, the pressure drops and everything slows down!"
  },
  white: {
    name: "ROCK Inhibitors / White Cap Drops",
    color: "#FFFFFF",
    examples: [
      "- Netarsudil (Rhopressa)",
      "- Simbrinza (Brimonidine + Brinzolamide)",
      "- Rocklatan (Netarsudil + Latanoprost)"
    ],
    mechanism: "Inhibit Rho kinase to relax trabecular meshwork cells, increasing conventional outflow through Schlemm’s canal.",
    analogy: "Clears the tree roots out of a pipe to restore flow. Or picture a traffic cop waving cars through a jammed intersection - the outflow route gets moving again!"
  },
  darkgreen: {
    name: "Miotics",
    color: "#008000",
    examples: [
      "- Pilocarpine"
    ],
    mechanism: "Stimulate muscarinic receptors to constrict the pupil, tightening the ciliary muscle and opening the trabecular meshwork.",
    analogy: "Pulls a string to pop open a stuck drain flap! Or like pulling the cord on a window blind to lift it up—opening a path for fresh air to flow out!."
  },
  darkblue: {
    name: "Combo Drops",
    color: "#000080",
    examples: [
      "- Combigan (Brimonidine + Timolol)",
      "- Cosopt (Dorzolamide + Timolol)"
    ],
    mechanism: 
      "Combigan combines Brimonidine, an alpha-2 agonist that decreases aqueous production and increases outflow,  with Timolol, a beta-blocker that suppresses aqueous production. " +
      "Cosopt combines Dorzolamide, a carbonic anhydrase inhibitor that blocks fluid production enzymatically, with Timolol.",
    analogy: 
      "A tag-team effort of one friend who turns off the water supply (Timolol) and and the other friend who either opens a backdoor drain (Brimonidine) or shuts down the factory (Dorzolamide). Or think of a heist movie: one disables the security system, while the other opens the escape tunnel."
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
            <p><strong>Mechanism:</strong> ${data.mechanism}</p>
            <p><strong>Analogy:</strong> ${data.analogy}</p>
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


