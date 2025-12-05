import { useParams } from "react-router";
import { useGameForm } from "../hooks/useGameForm";
import GameForm from "./GameForm";
import { useUserContext } from "../contexts/UserContext";

function EditGame() {
    const { _id } = useParams();
    const { user } = useUserContext();
    const { formData, changeHandler, submitHandler, isLoading } = useGameForm(_id, user);

    if (isLoading) return <p>...Loading</p>;

    return (
        <GameForm
            formData={formData}
            changeHandler={changeHandler}
            submitHandler={submitHandler}
        />
    );
}

export default EditGame;