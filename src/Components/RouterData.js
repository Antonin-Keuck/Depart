import {FaCartPlus, FaEnvelopeOpenText} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'
import {IoIosPaper, IoMdPeople, IoMdHelpCircle} from 'react-icons/io'
import {GiCommercialAirplane} from 'react-icons/gi'
import Team from '../pages/Team'
import Contact from '../pages/Contact'
import HowLong from '../pages/HowLong'
import Home from '../pages/Home'
import Travel from '../pages/Travel'
import {FcHome} from 'react-icons/fc'
import {BiTimer} from 'react-icons/bi'


export const RouterData = [
    {
      title: 'Home',
      path: '/',
      icon: <FcHome />,
      cName: 'nav-text',
      about: 'Toutes les pages sont generées automatiquement grace a un template et un fichier d\'information avec leurs caractéristiques de base. Les pages \"Travel\", \"support\", \"How long\" et \"Team\" sont déjà un petit peu fournies. La Navbar est faite à la main, elle disparait lors d\'un scroll down et re-apparait lors d\'un scroll up' ,
      page: <Home/>
    },
    {
      title: 'Travel',
      path: '/travel',
      icon: <GiCommercialAirplane />,
      cName: 'nav-text',
      // about: 'A propos de la page travel',
      page: <Travel/>
    },
    {
      title: 'How long',
      path: '/time',
      icon: <BiTimer/>,
      cName: 'nav-text',
      about: 'Sur cette page vous pouvez rentrer une date (ex: anniversaire) le widget si dessous vous indiquera le nombre de jours restants avant celui-ci',
      page: <HowLong/>
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
      about: 'Cette page n\'est pas connectée à une api, vu qu\'elle est hebergée par github.pages'
    },
    {
      title: 'Team',
      path: '/team',
      icon: <IoMdPeople />,
      cName: 'nav-text',
      about: 'Cette page n\'est pas connectée à une api, vu qu\'elle est hebergée par github.pages. Vous trouverez ici une team fictive',
      page: <Team/>
    },
    {
      title: 'Messages',
      path: '/messages',
      icon: <FaEnvelopeOpenText />,
      cName: 'nav-text',
      about: 'Cette section sera à terme remplacé par une nouvelle idée'
    },
    {
      title: 'Support',
      path: '/support',
      icon: <IoMdHelpCircle />,
      cName: 'nav-text',
      about: 'Oups, pas encore fini toute la mise en forme de cette page',
      page: <Contact/>
    }
];