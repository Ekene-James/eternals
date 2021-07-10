import React from 'react'
 const OnScreenObserver =  (ref,threshold) => {
const [isInterceting, setIsInterceting] = React.useState(false);
const options = {
    threshold: threshold,
   
}


React.useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => setIsInterceting(entry.isIntersecting), options
    )
    observer.observe(ref.current)
    return () => {
        observer.disconnect()
    }
}, [])
return isInterceting

}
export default OnScreenObserver