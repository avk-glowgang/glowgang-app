/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Testimonial {
    quote: string;
    author: string;
    role: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
        author: "Gladis Lennon",
        role: "Head of SEO",
        image: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
    },
    {
        quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.",
        author: "Gladis Lennon",
        role: "Head of SEO",
        image: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
    },
    {
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.",
        author: "Gladis Lennon",
        role: "Head of SEO",
        image: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
    },
    {
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
        author: "Gladis Lennon",
        role: "Head of SEO",
        image: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
    },
    {
        quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.",
        author: "Gladis Lennon",
        role: "Head of SEO",
        image: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
    },
    {
        quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.",
        author: "Gladis Lennon",
        role: "Head of SEO",
        image: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
    }
];

const Reviews: React.FC = () => {
    return (
        <section>
            <div className="mx-auto max-w-5xl px-8 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 md:mt-10 lg:columns-3 lg:gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.quote} className="mb-8 sm:break-inside-avoid">
                            <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                                <p className="leading-relaxed text-gray-700">{testimonial.quote}</p>
                            </blockquote>
                            <div className="mt-4 flex items-center gap-4">
                                <img alt="Woman" src={testimonial.image} className="h-12 w-12 rounded-full object-cover" />
                                <div className="text-sm">
                                    <p className="font-medium">{testimonial.author}</p>
                                    <p className="mt-1">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
