import React from 'react';

const Form: React.FC = ({ children }) => {
  return (
    <section className="form__container">
      { children }
    </section>
  )
}

export default Form