import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PrimaryLayout = () => {
    const navigation = useNavigation();

    return (
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
        </>
      );
}
 
export default PrimaryLayout;