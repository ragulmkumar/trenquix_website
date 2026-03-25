const tickerItems = [
  "Custom Web Development",
  "MERN Stack",
  "Fast Delivery",
  "Mobile Responsive",
  "SEO Optimized",
  "Scalable Apps",
  "React.js",
  "Node.js",
  "MongoDB",
];

const loopItems = [...tickerItems, ...tickerItems];

export default function Ticker() {
  return (
    <section className="ticker" aria-label="Capabilities ticker">
      <div className="ticker-track">
        {loopItems.map((item, index) => (
          <span key={`${item}-${index}`} className="ticker-item">
            {item}
            <span className="diamond">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
