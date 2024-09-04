/* eslint-disable react/prop-types */
const Section = ({className, children, props}) => {
  return (
    <section className={`min-h-[100vh] px-4 sm:px-60 py-10 sm:py-[8rem] ${className}`} {...props}>
      {children}
    </section>
  )
}

export default Section