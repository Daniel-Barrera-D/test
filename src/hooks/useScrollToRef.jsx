import { useNavigate } from "react-router-dom";

const useScrollToRef = () => {

    const navigate = useNavigate();

    const goToRef = (ref) => {
        const scroll = () => ref.current?.scrollIntoView({ behavior: 'smooth' });

        // eslint-disable-next-line no-restricted-globals
        if(location.pathname === '/') {
            scroll();
            return;
        }

        navigate('/');

        setTimeout(() => {
            if(ref.current.id === 'home') window.scrollTo(0, 0);
            else scroll();
        }, 500);
    }

    return {goToRef};
}

export default useScrollToRef;