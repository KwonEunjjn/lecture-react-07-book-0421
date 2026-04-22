import SearchBar from "../components/SearchBar";
import styles from "./Home.module.css";


const Wrap = styled.div''


function Home() {
    return (
        <div className={styles.wrap}>
            <h2>Google Books 검색</h2>
            <SearchBar />
        </div>
    );
}

export default Home;
