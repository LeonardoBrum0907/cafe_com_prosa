/* eslint-disable react/prop-types */
const Section = ({children}) => {
  return (
    <section className="min-h-[100vh] px-4 sm:px-60 py-10 sm:py-0">
      {children}
    </section>
  )
}

export default Section