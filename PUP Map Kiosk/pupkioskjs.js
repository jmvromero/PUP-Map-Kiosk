	// Putting DOMContentLoaded will help the function be enable
	window.addEventListener("DOMContentLoaded", function() {
    // Areas (Hover Function)
	var gymarea = document.getElementById("gymarea");
    var gymnasiumcontainer = document.getElementById("gymnasiumcontainer");

    gymarea.addEventListener("mouseover", function() {
      gymnasiumcontainer.style.display = "block";
    });

    gymarea.addEventListener("mouseout", function() {
      gymnasiumcontainer.style.display = "none";
    });
	
	var chapelarea = document.getElementById("chapelarea");
    var chapelcontainer = document.getElementById("chapelcontainer");

    chapelarea.addEventListener("mouseover", function() {
      chapelcontainer.style.display = "block";
    });

    chapelarea.addEventListener("mouseout", function() {
      chapelcontainer.style.display = "none";
    });
	
	var freedomparkarea = document.getElementById("freedomparkarea");
    var freedomparkcontainer = document.getElementById("freedomparkcontainer");

    freedomparkarea.addEventListener("mouseover", function() {
    freedomparkcontainer.style.display = "block";
    });

    freedomparkarea.addEventListener("mouseout", function() {
    freedomparkcontainer.style.display = "none";
    });
	
	var libraryarea = document.getElementById("libraryarea");
    var librarycontainer = document.getElementById("librarycontainer");

    libraryarea.addEventListener("mouseover", function() {
    librarycontainer.style.display = "block";
    });

    libraryarea.addEventListener("mouseout", function() {
    librarycontainer.style.display = "none";
    });
	
	
	var fieldarea = document.getElementById("fieldarea");
    var fieldcontainer = document.getElementById("fieldcontainer");

    fieldarea.addEventListener("mouseover", function() {
    fieldcontainer.style.display = "block";
    });

    fieldarea.addEventListener("mouseout", function() {
    fieldcontainer.style.display = "none";
    });
	
	
	var lagoonarea = document.getElementById("lagoonarea");
    var lagooncontainer = document.getElementById("lagooncontainer");

    lagoonarea.addEventListener("mouseover", function() {
    lagooncontainer.style.display = "block";
    });

    lagoonarea.addEventListener("mouseout", function() {
    lagooncontainer.style.display = "none";
    });
	
	var amphitheaterarea = document.getElementById("amphitheaterarea");
    var amphitheatercontainer = document.getElementById("amphitheatercontainer");

    amphitheaterarea.addEventListener("mouseover", function() {
    amphitheatercontainer.style.display = "block";
    });

    amphitheaterarea.addEventListener("mouseout", function() {
    amphitheatercontainer.style.display = "none";
    });
	
	var linearparkarea = document.getElementById("linearparkarea");
    var linearparkcontainer = document.getElementById("linearparkcontainer");

    linearparkarea.addEventListener("mouseover", function() {
    linearparkcontainer.style.display = "block";
    });

    linearparkarea.addEventListener("mouseout", function() {
    linearparkcontainer.style.display = "none";
    });
	
	var pasigriverarea = document.getElementById("pasigriverarea");
    var pasigrivercontainer = document.getElementById("pasigrivercontainer");

    pasigriverarea.addEventListener("mouseover", function() {
    pasigrivercontainer.style.display = "block";
    });

    pasigriverarea.addEventListener("mouseout", function() {
    pasigrivercontainer.style.display = "none";
    });
	
	var charliearea = document.getElementById("charliearea");
    var charliecontainer = document.getElementById("charliecontainer");

    charliearea.addEventListener("mouseover", function() {
    charliecontainer.style.display = "block";
    });

    charliearea.addEventListener("mouseout", function() {
    charliecontainer.style.display = "none";
    });
	
		
	var nutritionarea = document.getElementById("nutritionarea");
    var nutritioncontainer = document.getElementById("nutritioncontainer");

    nutritionarea.addEventListener("mouseover", function() {
    nutritioncontainer.style.display = "block";
    });

    nutritionarea.addEventListener("mouseout", function() {
    nutritioncontainer.style.display = "none";
    });
	
	var swimmingpoolarea = document.getElementById("swimmingpoolarea");
    var swimmingpoolcontainer = document.getElementById("swimmingpoolcontainer");

    swimmingpoolarea.addEventListener("mouseover", function() {
    swimmingpoolcontainer.style.display = "block";
    });

    swimmingpoolarea.addEventListener("mouseout", function() {
    swimmingpoolcontainer.style.display = "none";
    });
	
	var swimmingpoolarea = document.getElementById("swimmingpoolarea");
    var swimmingpoolcontainer = document.getElementById("swimmingpoolcontainer");

    swimmingpoolarea.addEventListener("mouseover", function() {
    swimmingpoolcontainer.style.display = "block";
    });

    swimmingpoolarea.addEventListener("mouseout", function() {
    swimmingpoolcontainer.style.display = "none";
    });
	
	var courtarea = document.getElementById("courtarea");
    var courtcontainer = document.getElementById("courtcontainer");

    courtarea.addEventListener("mouseover", function() {
    courtcontainer.style.display = "block";
    });

    courtarea.addEventListener("mouseout", function() {
    courtcontainer.style.display = "none";
    });
	
	//For Smooth Scrolling
	const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

  });