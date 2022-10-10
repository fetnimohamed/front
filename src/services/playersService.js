import useHttpClient from '../../hooks/useHttpClient';
import { toast } from 'react-toastify';

const usePlayersService = () => {
    const { sendRequest } = useHttpClient();

    const getPlayers = async () => {
        try {
            const response = await sendRequest('api');
            if (response.status == 200) {
                return response.data;
            }
        } catch (err) {
            toast.error("Erreur lors de l'extraction des données ! ");
        }
    };

    const addPlayer = async (data) => {
        try {
            const response = await sendRequest('api', 'post', data);

            if (response.status == 201) {
                toast.success('Un nouveau joueur a été crée avec succèes !');
                return response.data;
            }
        } catch (err) {
            toast.error("Erreur lors de la création d`'un joueur");
        }
    };

    const updatePlayer = async (id, data) => {
        try {
            const response = await sendRequest('api' + id, 'put', data);
            if (response.status == 200) {
                toast.success('Votre modification a été effectuée avec succèes !');
                return response.data;
            }
        } catch (err) {
            toast.error("Erreur lors de la modification d`'un joueur");
        }
    };

    const deletePlayer = async (id, data) => {
        try {
            const response = await sendRequest('api' + id, 'delete', data);
            if (response.status == 204) {
                toast.success('Votre modification a été effectuée avec succèes !');
                return response.data;
            }
        } catch (err) {
            toast.error("Erreur lors de la modification d`'un joueur");
        }
    };

    return {
        deletePlayer,
        updatePlayer,
        addPlayer,
        getPlayers
    };
};

export default usePlayersService;
