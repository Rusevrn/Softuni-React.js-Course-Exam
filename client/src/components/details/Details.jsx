import DetailsComments from "./DetailsComments"
import DetailsHeader from "./DetailsHeader"
import DetailsSection from "./DetailsSection"

{/*useparams fetch game from url, url will change param from click on game */}
function Details() {
    return (
        <>
            <DetailsHeader />

            <DetailsSection />

            <DetailsComments />
        </>
    )
}

export default Details