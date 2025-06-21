import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      avatar: "👩‍💼",
      rating: 5,
      text: "This platform has completely transformed how we manage our projects. The analytics are incredible and the team collaboration features are game-changing.",
      color: "var(--primary-blue)"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateCorp",
      avatar: "👨‍💻",
      rating: 5,
      text: "The automation features have saved us countless hours. Our productivity has increased by 40% since implementing this solution.",
      color: "var(--light-blue)"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthCo",
      avatar: "👩‍🎨",
      rating: 5,
      text: "The customer support is outstanding. They're always there when we need help, and the platform is incredibly intuitive to use.",
      color: "var(--dark-blue)"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CTO",
      company: "ScaleUp Solutions",
      avatar: "👨‍🔬",
      rating: 5,
      text: "The integration capabilities are impressive. We've connected all our existing tools seamlessly, and the API is well-documented.",
      color: "var(--lighter-blue)"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Operations Manager",
      company: "Efficient Systems",
      avatar: "👩‍⚖️",
      rating: 5,
      text: "The reporting features give us insights we never had before. It's like having a crystal ball for our business performance.",
      color: "var(--secondary-blue)"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Founder",
      company: "StartupXYZ",
      avatar: "👨‍🚀",
      rating: 5,
      text: "As a startup, we needed something that could grow with us. This platform scales perfectly and the pricing is transparent.",
      color: "var(--primary-blue)"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">
          Join thousands of satisfied customers who trust our platform
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card"
              style={{ '--card-color': testimonial.color }}
            >
              <div className="testimonial-header">
                <div className="avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
              
              <div className="testimonial-quote">
                <span>"</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-stats">
          <div className="stat-item">
            <h3>98%</h3>
            <p>Customer Satisfaction</p>
          </div>
          <div className="stat-item">
            <h3>10K+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h3>4.9/5</h3>
            <p>Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 