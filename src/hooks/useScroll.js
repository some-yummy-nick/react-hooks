import {useRef, useEffect} from "react";

export const useScroll = (parentRef, childRef, callback) => {
    const observer = useRef();

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0 // если 0 то объект только появился, если 1 то видим его полностью
        };
        const current = childRef.current;

        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                callback()
            }
        }, options);

        observer.current.observe(current);

        return () => {
            observer.current.unobserve(current);
        }
    }, [parentRef, childRef, callback])
};

export default useScroll;
