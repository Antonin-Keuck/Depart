import {FaCartPlus, FaEnvelopeOpenText} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'
import {IoIosPaper, IoMdPeople, IoMdHelpCircle} from 'react-icons/io'
import {GiCommercialAirplane} from 'react-icons/gi'

export const RouterData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiFillHome />,
      cName: 'nav-text',
      about: 'A propos de la page home',      
    },
    {
      title: 'Travel',
      path: '/travel',
      icon: <GiCommercialAirplane />,
      cName: 'nav-text',
      about: 'A propos de la page travel'
    },
    {
      title: 'Reports',
      path: '/reports',
      icon: <IoIosPaper />,
      cName: 'nav-text',
      about: 'Ici sera bientot implementé une section avec des articles'

    },
    {
      title: 'Products',
      path: '/products',
      icon: <FaCartPlus />,
      cName: 'nav-text',
      about: 'Cette page n\'est pas connecté a une api, vu qu\'elle est hebergée par github.pages'
    },
    {
      title: 'Team',
      path: '/team',
      icon: <IoMdPeople />,
      cName: 'nav-text',
      about: 'Cette page n\'est pas connecté a une api, vu qu\'elle est hebergée par github.pages. Vous trouverez ici une team fictive'
    },
    {
      title: 'Messages',
      path: '/messages',
      icon: <FaEnvelopeOpenText />,
      cName: 'nav-text',
      about: 'Cette section sera a terme remplacé par une nouvelle idée'
    },
    {
      title: 'Support',
      path: '/support',
      icon: <IoMdHelpCircle />,
      cName: 'nav-text',
      about: 'Ici sera bientot implementé une section permettant le contact par mail'
    }
];