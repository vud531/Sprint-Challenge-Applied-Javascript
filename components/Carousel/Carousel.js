class Carousel {
    constructor(item) {
        this.item = item;
        this.images = this.item.querySelectorAll(".carousel-img");
        this.imgIndex = 0;
        this.images[this.imgIndex].style = "display: block;";
        console.log("first img", this.images);
        this.leftButton = this.item.querySelector(".left-button");
        this.rightButton = this.item.querySelector(".right-button");
        this.leftButton.addEventListener('click', () => this.moveLeft());
        this.rightButton.addEventListener('click', () => this.moveRight());
    }

    moveLeft() {
        const prevIndex = this.imgIndex;
        this.imgIndex = this.imgIndex == 0 ? this.images.length - 1 : this.imgIndex - 1;
        this.images[prevIndex].style = "display: none;";
        this.images[this.imgIndex].style = "display: block;";
    }

    moveRight() {
        const prevIndex = this.imgIndex;
        this.imgIndex = this.imgIndex == this.images.length - 1 ? 0 : this.imgIndex + 1;
        this.images[prevIndex].style = "display: none;";
        this.images[this.imgIndex].style = "display: block;";
    }
}

let carousel = document.querySelector(".carousel");
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/