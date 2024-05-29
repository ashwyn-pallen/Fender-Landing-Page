import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { guitar1, guitar2, guitar3, customer1, customer2, guit4, guit5, guit6, guit7, thumbnailguitar1, thumbnailguitar2, thumbnailguitar3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const guitars = [
    {
        thumbnail: thumbnailguitar1,
        bigguit: guitar2,
        key:1
    },
    {
        thumbnail: thumbnailguitar2,
        bigguit: guitar1,
        key:2
    },
    {
        thumbnail: thumbnailguitar3,
        bigguit: guitar3,
        key:3
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: guit4,
        name: "American Ultra Telecaster",
        price: "£2,249.00",
    },
    {
        imgURL: guit5,
        name: "Paranormal Rascal Bass HH",
        price: "£405.00",
    },
    {
        imgURL: guit6,
        name: "Mike McCready Stratocaster",
        price: "£1,699.00",
    },
    {
        imgURL: guit7,
        name: "Squire Sonic Stratocaster",
        price: "£169.99",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.8,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.6,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Fender Electrics", link: "/" },
            { name: "Effects Pedals", link: "/" },
            { name: "Squire", link: "/" },
            { name: "Acoustics", link: "/" },
            { name: "Amps & Audio", link: "/" },
            { name: "Accessories", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@fender.com", link: "mailto:customer@fender.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];