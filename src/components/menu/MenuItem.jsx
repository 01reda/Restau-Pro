const MenuItem = ({ title, description, price }) => {
    return (
      <div className="menu-item">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {price && <span className="menu-price">{price}</span>}
      </div>
    );
  };
  
  export default MenuItem;
  