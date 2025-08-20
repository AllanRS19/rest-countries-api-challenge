import { RefreshCw } from "lucide-react";

const Loading = () => {
    return (
        <section className="loading-container">
            <div className="loading-wrapper">
                <RefreshCw className="loading-icon" />
                <p>Loading your data...</p>
            </div>
        </section>
    )
}

export default Loading;