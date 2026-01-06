import MenuItem from "./MenuItem";

const MenuSection = ({ title, image, reverse, items }) => {
  return (
    <section className={`menu-section ${reverse ? "reverse" : ""}`}>
      <div className="menu-image">
        <img src={image} alt={title} />
      </div>

      <div className="menu-content">
        <h2>— {title} —</h2>

        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
