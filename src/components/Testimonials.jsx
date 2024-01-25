export default function Testimonials() {
  const items = [
    {
      name: "Sophia Martinez",
      title: "Lead designer, Avalon",
      body: "I've been in the design game for a while now and this kit is one of the best. It's made me fall in love with designing all over again. It's just brilliant.",
    },
    {
      name: "Caroline Lee",
      title: "Senior Graphic Designer, Echo",
      body: "I'm a newbie designer and this kit is just perfect. I've learnt so much and my work looks amazing now. A big thumbs up!",
    },
    {
      name: "Tyler Otwell",
      title: "CTO, Apple",
      body: "This design kit is a game changer! My designs look better and I get things done faster. Totally recommending it to my mates!",
    },
    {
      name: "Tyler Otwell",
      title: "CTO, Apple",
      body: "This design kit is a game changer! My designs look better and I get things done faster. Totally recommending it to my mates!",
    },
    {
      name: "Tyler Otwell",
      title: "CTO, Apple",
      body: "This design kit is a game changer! My designs look better and I get things done faster. Totally recommending it to my mates!",
    },

  ]

  return (
    <div className="max-w-5xl mx-auto mt-24">
      <h2 className='text-4xl font-bold text-gray-800 flex justify-center mb-4'>Hear Us Loud</h2>
      <div className="py-8 bg-gray-100 rounded-xl border-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className="overflow-hidden flex flex-row gap-12 my-4">
          {items.map((testimonial, index) => (
            <div key={index} className="inline-block animate-marquee">
              <div className="flex flex-col justify-between p-6 w-72 h-80 md:w-96 md:h-96 bg-gray-100 shadow-lg rounded-2xl">

                {/* star rating */}


                <div class="flex items-center">
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>

                {/* star rating */}

                <div className="w-full">
                  <p className="text-gray-700">{testimonial.body}</p>
                </div>
                <div className="w-full h-[1px] bg-gray-400"></div>
                <div className="flex flex-col">
                  <p className="text-gray-800 font-semibold">{testimonial.name}</p>
                  <p className="text-gray-700">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
