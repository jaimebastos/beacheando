new Glide('.beacheando-gallery', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 5,
    autoplay: 3000,
    breakpoints: {
        1000: {
            perView: 4
        },
        1000: {
            perView: 3
        }
    }
}).mount()