import NavDashboard from "../components/NavDashboard/NavDashboard";
import useSEO from "../hooks/useSEO";

const OtherPage = () => {

    useSEO({title: 'Dashboard Other Page'});

    return(
        <section className="flex">
            <NavDashboard />
            <h2>Other Page</h2>
        </section>
    )
}

export default OtherPage;