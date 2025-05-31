
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

/*
document.querySelectorAll('.color-choice').forEach(choice => {
  choice.addEventListener('click', () => {
    choice.classList.toggle('selected');
    choice.style.outline = choice.classList.contains('selected') ? '3px solid black' : 'none';
  });
});
*/

document.querySelectorAll('.color-choice').forEach(choice => {
  choice.addEventListener('click', () => {
    document.querySelectorAll('.color-choice').forEach(c => {
      c.classList.remove('selected');
      c.style.outline = 'none';
      const prevLabel = c.parentElement.querySelector('p');
      if (prevLabel) prevLabel.style.fontWeight = 'normal';
    });

    choice.classList.add('selected');
    choice.style.outline = '3px solid black';
    const label = choice.parentElement.querySelector('p');
    if (label) label.style.fontWeight = 'bold';
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
      "- Timolol 0.25% or 0.5% (Timoptic, Istalol, Betimol)",
      "- Levobunolol 0.25% or 0.5% (Betagan)",
      "- Carteolol 1% (Ocupress)"
    ],
    howTheyWork: [
      "Beta-blockers help your eye make less fluid, like turning down a faucet so your eye doesn't overflow!"
    ]
  },
  teal: {
    name: "Prostaglandin Analogs",
    color: "#40E0D0",
    examples: [
      "- Latanoprost 0.005% (Xalatan, Xelpros)",
      "- Travoprost 0.004% (Travatan Z)",
      "- Bimatoprost 0.01% or 0.03% (Lumigan)",
      "- Tafluprost 0.0015% (Zioptan)"
    ],
    howTheyWork: [
      "Prostaglandin analogs help your eye drain fluid better, like adding big new gutters during a rainstorm to prevent flooding!"
    ]
  },
  purple: {
    name: "Alpha Agonists",
    color: "#800080",
    examples: [
      "- Brimonidine 0.1%, 0.15%, or 0.2% (Alphagan P)",
      "- Apraclonidine 0.5% or 1% (Iopidine)"
    ],
    howTheyWork: [
      "Alpha agonists do double duty - they slow down how much fluid your eye makes and also help open the drain, like a janitor fixing a leaky faucet and a clogged sink at once!"
    ]
  },
  orange: {
    name: "Carbonic Anhydrase Inhibitors (CAIs)",
    color: "#FFA500",
    examples: [
      "- Dorzolamide 2% (Trusopt)",
      "- Brinzolamide 1% (Azopt)"
    ],
    howTheyWork: [
      "CAIs block a protein inside your eye that helps make fluid, like cutting power to a machine so it stops producing extra liquid!"
    ]
  },
  white: {
    name: "ROCK Inhibitors or Combination Drops",
    color: "#FFFFFF",
    examples: [
      "- Netarsudil 0.02% (Rhopressa)",
      "- Simbrinza: Brimonidine 0.2% + Brinzolamide 1%",
      "- Rocklatan: Netarsudil 0.02% + Latanoprost 0.005%"
    ],
    howTheyWork: [
      "- Netarsudil (Rhopressa) relaxes the eye’s drainage pathway by softening the tissue, like loosening a stiff pipe so fluid can exit more easily!",
      "",  
      "- In Rocklatan, netarsudil relaxes the eye’s drainage pathway by softening the tissue, like loosening a stiff pipe so fluid can exit more easily, while latanoprost helps your eye drain fluid better, like adding big new gutters during a rainstorm to prevent flooding!"
    ]    
  },

  darkgreen: {
    name: "Miotics",
    color: "#008000",
    examples: [
      "- Pilocarpine 1%, 2%, 4%, or 6%"
    ],
    howTheyWork: [
      "Pilocarpine shrinks your pupil and pulls on parts of the eye to open the drain - like tugging on a stuck pipe so fluid can finally escape!"
    ]
  },
  darkblue: {
    name: "Combination Drops",
    color: "#000080",
    examples: [
      "- Combigan: Brimonidine 0.2% + Timolol 0.5%",
      "- Cosopt: Dorzolamide 2% + Timolol 0.5%"
    ],
    howTheyWork: [
      "- In Combigan, brimonidine has a double duty - it slows down how much fluid your eye makes and also helps open the drain, like a janitor fixing a leaky faucet and a clogged sink at once, while Timolol tells your eye to make less fluid, like turning down a faucet so your eye doesn't overflow!",
      "",
      "- In Cosopt, dorzolamide blocks a protein inside your eye that helps make fluid, like cutting power to a machine so it stops producing extra liquid, while Timolol tells your eye to make less fluid, like turning down a faucet so your eye doesn't overflow!"
    ] 
  },
    limegreen: {
    name: "Combination Drop",
    color: "#B9FF66",
    examples: [
      "- Simbrinza: Brimonidine 0.2% + Brinzolamide 1%",
    ],
    howTheyWork: [
      "- In Simbrinza, brimonidine has a double duty - it slows down how much fluid your eye makes and also helps open the drain, like a janitor fixing a leaky faucet and a clogged sink at once, while brinzolamide blocks a protein inside your eye that helps make fluid, like cutting power to a machine so it stops producing extra liquid!",
    ] 
  }
};

const learnMoreBtn = document.getElementById('learn-more-btn');
const resultsSection = document.getElementById('results');
const detailsPage = document.getElementById('details-page');
const dropDetailsContainer = document.getElementById('drop-details-container');
const backBtn = document.getElementById('back-btn');

if (learnMoreBtn) {
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
}

if (backBtn) {
backBtn.addEventListener('click', () => {
  detailsPage.classList.remove('visible');
setTimeout(() => {
  detailsPage.style.display = 'none';
}, 600); // Match the CSS transition duration
  document.querySelector('.selector').style.display = 'block';
});
}

document.addEventListener('DOMContentLoaded', () => {
  const backBtn = document.getElementById('back-btn');
  const mainContent = document.getElementById('main-content');
  const detailsPage = document.getElementById('details-page');
  const dropDetailsContainer = document.getElementById('drop-details-container');
  const fadeElements = document.querySelectorAll('.fade-in-up');
  const colorChoices = document.querySelectorAll('.color-choice');
  const singleDropDetailsContainer = document.getElementById('single-drop-details-container');

colorChoices.forEach(choice => {
  choice.addEventListener('click', () => {
    // Remove previously selected styles
    colorChoices.forEach(c => {
      c.classList.remove('selected');
      c.style.outline = 'none';
      const prevLabel = c.parentElement.querySelector('p');
      if (prevLabel) prevLabel.style.fontWeight = 'normal';
    });

    // Highlight current selection
    choice.classList.add('selected');
    choice.style.outline = '3px solid black';
    const label = choice.parentElement.querySelector('p');
    if (label) label.style.fontWeight = 'bold';

    // Load corresponding data into container
    const selectedColor = choice.getAttribute('data-color');
    const data = dropData[selectedColor];

    if (data) {
      singleDropDetailsContainer.innerHTML = `
        <div class="drop-row">
          <div class="drop-box">
            <div class="color-box" style="background-color: ${data.color};"></div>
            <div class="drop-info">
              <h3>${data.name}</h3>
              <p><strong>Examples:</strong><br>${data.examples.join('<br>')}</p>
              <p><strong>How they work:</strong><br>${data.howTheyWork.join('<br>')}</p>
            </div>
          </div>
        </div>
      `;
    }
  });
});


  if (backBtn) {
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
  }

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



