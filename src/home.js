function loadHome() {
    const title = document.createElement("h1");
    const image1 = document.createElement("img");
    const paragraph1 = document.createElement("p");
    const image2 = document.createElement("img");
    const paragraph2 = document.createElement("p");
    title.textContent = "Prepare to feast";
    image1.src = "images/homepage1.jpg"
    image2.src  = "images/homepage2.jpg";
    paragraph1.textContent = "Our restaurant takes pride in its efficient service, skilled chefs and high-quality ingredients. Eating at one of our tables is a special experience since every guest is valued. We promise you a welcome as warm as your meal."
    paragraph2.textContent = "We take food seriously and your satisfaction is our business. But we are a friendly team and we try our best to create a relaxed atmosphere.";
    return [title, image1, paragraph1, image2, paragraph2];
}

export { loadHome }