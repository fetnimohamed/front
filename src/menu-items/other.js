// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'Gestion des cartes',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'Liste des joueurs',
            type: 'item',
            url: '/players',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        }
    ]
};

export default other;
