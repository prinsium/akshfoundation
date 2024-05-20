export default function Testimonials() {
  const items = [
    {
      name: "Anshuman Priyadarshi",
      body: "an excelent app for test series and video classes",
    },
    {
      name: "Anupriya Sharma",
      body: "This is one of the best plateform for SSC JHT, Rajbhasha adhikari and all type of translator exam ....",
    },
    {
      name: "Rituraj Singh",
      body: "Best app for preparation of RAJBHASHA related exams.. Best Mock tests are available here.",
    },
    {
      name: "Anshuman, Privadarshi",
      body: "an excelent app for test series and video classes",
    },
    {
      name: "Anupriya Sharma",
      body: "This is one of the best plateform for SSC JHT, Rajbhasha adhikari and all type of translator exam ....",
    },
    {
      name: "Rituraj Singh",
      body: "Best app for preparation of RAJBHASHA related exams.. Best Mock tests are available here.",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto mt-24">
      <h2>Our App Reviews</h2>
      <div className="py-8 bg-gray-100 rounded-xl border-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className="overflow-hidden flex flex-row gap-12 my-4">
          {items.map((testimonial, index) => (
            <div key={index} className="inline-block animate-marquee">
              <div className="flex flex-col justify-between p-6 w-72 h-80 md:w-96 md:h-96 bg-gray-100 shadow-lg rounded-2xl">

                {/* star rating */}


                <div class="flex items-center">
                  <svg class="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
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
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
