import { useGameForm } from "../hooks/useGameForm";
import GameForm from "./GameForm";
import { useUserContext } from "../contexts/UserContext";

function CreateGame() {
    const { user } = useUserContext();
    const { formData, changeHandler, submitHandler, isLoading } = useGameForm(undefined, user);

    if (isLoading) return <p>...Loading</p>;

    return (
        <GameForm
            formData={formData}
            changeHandler={changeHandler}
            submitHandler={submitHandler}
        />
    );
}

export default CreateGame;