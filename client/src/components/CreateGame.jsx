import { useGameForm } from "../hooks/useGameForm";
import GameForm from "./GameForm";


function CreateGame() {
    const { formData, changeHandler, submitHandler, isLoading } = useGameForm();

    if (isLoading) return <p>...Loading</p>

    return (
        <GameForm
            formData={formData}
            changeHandler={changeHandler}
            submitHandler={submitHandler}
        />
    )
}

export default CreateGame