export const tShirts = [];

const sizes = ['S', 'M', 'L', 'XL'];
const colors = ['Red', 'Blue', 'Green', 'Black', 'White'];
// const images = [
//     'https://images.unsplash.com/photo-1589996649173-9d7e5b1dbd0d',
//     'https://images.unsplash.com/photo-1598513438210-3c2a3e6e6b0d',
//     'https://images.unsplash.com/photo-1601757130007-9b3f9f1d4042',
// ];
for (let i = 1; i <= 100; i++) {
    const tShirt = {
        id: i,
        size: sizes[Math.floor(Math.random() * sizes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        price: (Math.random() * 20 + 10).toFixed(2), // Random price between 10 and 30
        image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T210A2PA4301PT17X108Y77D10373966W13622H13622/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2,modelId=6287,crop=list/preloader-mens-t-shirt.jpg',
    };
    tShirts.push(tShirt);
}

console.log(tShirts);
