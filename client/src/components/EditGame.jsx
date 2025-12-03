import { useParams } from "react-router"
import { useGameForm } from "../hooks/useGameForm";
import GameForm from "./GameForm";


function EditGame() {
    const { _id } = useParams();
    const { formData, changeHandler, submitHandler, isLoading } = useGameForm(_id);

    if (isLoading) return <p>...Loading</p>

    return (
        <GameForm
            formData={formData}
            changeHandler={changeHandler}
            submitHandler={submitHandler}
        />
    )
}

export default EditGame