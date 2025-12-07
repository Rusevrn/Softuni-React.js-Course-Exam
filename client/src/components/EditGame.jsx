import { useParams } from "react-router";
import { useGameForm } from "../hooks/useGameForm";
import GameForm from "./GameForm";
import { useUserContext } from "../contexts/UserContext";
import RouteGuard from "./RouteGuard";
import useGame from "../hooks/useGame";

function EditGame() {
    const { _id } = useParams();
    const { user } = useUserContext();
    const { game } = useGame(_id);
    const { formData, changeHandler, submitHandler, isLoading } = useGameForm(_id, user);

    if (isLoading) return <p>...Loading</p>;

    return (
        <RouteGuard ownerId={game._ownerId}>
            <GameForm
                formData={formData}
                changeHandler={changeHandler}
                submitHandler={submitHandler}
            />
        </RouteGuard>
    );
}

export default EditGame;