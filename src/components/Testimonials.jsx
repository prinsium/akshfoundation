export default function Testimonials(){
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
        <div className="max-w-5xl mx-auto">
      <div className="overflow-hidden flex flex-row gap-4 ">
        {items.map((testimonial, index) => (
          <div key={index} className="inline-block animate-marquee">
            <div className="p-3 w-[30vw] bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <div className="w-full">
            <p className="text-gray-700">{testimonial.body}</p>
            </div>
            <p className="text-gray-700">- {testimonial.name}, {testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  };
  