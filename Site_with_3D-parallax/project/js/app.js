// Add an event listener for 'mousemove' to the document
document.addEventListener('mousemove', e => {
	 // Use Object.assign to modify the style of the root element
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})


    // Event Listener mousemove: Tracks mouse movement on the screen.
    // Updating Root Element Style: Uses mouse coordinates to compute rotation values for --move-x and --move-y CSS variables, updating them dynamically.
