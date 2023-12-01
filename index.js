
// Wait for the document to load before manipulating it
document.addEventListener("DOMContentLoaded", function () {
    // Create a new text element
    const overlayText = document.createElement("div");
    
    // Set the text content and styles
    overlayText.textContent = "SpaceForm @ Berkeley";
    
    overlayText.style.position = "absolute";
    overlayText.style.top = "40%"; // Adjust top positioning as needed
    overlayText.style.left = "10%"; // Adjust left positioning as needed
    overlayText.style.fontSize = "40px"; // Adjust the font size
    overlayText.style.color = "#ffffff"; // Text color
    //overlayText.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Background color with transparency
    overlayText.style.padding = "10px"; // Add padding for better visibility
    overlayText.style.borderRadius = "5px"; // Add rounded corners
    overlayText.style.zIndex = "1"; // Ensure it's above other content

    // Append the text element to the document body
    document.body.appendChild(overlayText);
});

document.addEventListener("DOMContentLoaded", function () {
    // Create a new subheading element
    const subheading = document.createElement("div");
    
    // Set the text content and styles for the subheading
    subheading.textContent = "SpaceForm is a student organization at UC Berkeley that aims to advance the frontiers of materials and structures in the aerospace world, a domain that will play a critical role in commercial space over the next decade. With a dedicated team of undergraduates, UC Berkeley faculty, and cutting-edge projects at the forefront of materials science and aerospace engineering, SpaceForm’s goal is to help lay the groundwork for the next hundred years of space innovation.";
    subheading.style.position = "absolute";
    subheading.style.top = "75%"; // Adjust top positioning as needed
    subheading.style.left = "10%"; // Adjust left positioning as needed
    subheading.style.fontSize = "16px"; // Adjust the font size
    subheading.style.color = "#ffffff"; // Text color
    // subheading.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Background color with transparency
    subheading.style.padding = "10px"; // Add padding for better visibility
    subheading.style.borderRadius = "5px"; // Add rounded corners
    subheading.style.zIndex = "1"; // Ensure it's above other content

    // Append the subheading element to the document body
    document.body.appendChild(subheading);
});


document.addEventListener("DOMContentLoaded", function () {
    // Create a new image element for your logo
    const logo = document.createElement("img");

    // Set the source (URL) for your logo image
    logo.src = "Spaceform_logo.png"; // Replace with the actual path to your logo image


    // Set the CSS styles for the logo's position
    logo.style.position = "absolute";
    logo.style.top = "20px"; // Adjust the top position as needed
    logo.style.left = "5px"; // Adjust the left position as needed

    // Apply any additional styles or attributes to the logo as needed
    logo.alt = "Your Logo"; // Add an alt text for accessibility

    // Get the logo container element by its ID
    const logoContainer = document.getElementById("logo-container");

    // Append the logo to the logo container
    logoContainer.appendChild(logo);
});





















// import AOS from 'aos'

// function isElementInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }
  
//   function handleScroll() {
//     const elements = document.querySelectorAll('.fade-in');
    
//     elements.forEach(element => {
//       if (isElementInViewport(element)) {
//         element.classList.add('fade-in-visible');
//       }
//     });
//   }
  
//   window.addEventListener('scroll', handleScroll);
//   window.addEventListener('load', handleScroll); // Trigger on page load
  
//   // Initial trigger in case some elements are already in view
//   handleScroll();
