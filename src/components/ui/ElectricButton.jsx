const ElectricButton = ({ children, onClick, variant = "default" }) => {
    return (
      <button
        className={`electric-btn ${variant}`}
        onClick={onClick}
      >
        <span className="electric-btn-content">
          {children}
        </span>
      </button>
    );
  };
  
  export default ElectricButton;
  