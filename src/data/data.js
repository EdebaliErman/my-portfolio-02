import { BsGithub, BsMailbox } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { IoIosHome } from 'react-icons/io';
import { SiManageiq } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { TiContacts } from 'react-icons/ti';
export const data = {
    //banner data
    banner: {
        img: process.env.PUBLIC_URL + "/assets/logo.png",
        name: "Edebali",
        surname: "Erman"
    },
    //Navbar 
    navbar: {
        icon: {
            home: <IoIosHome className='home' size={52} />,
            info: <SiManageiq className='info' size={52} />,
            react: <GrReactjs className='react' size={52} />,
            contact: <TiContacts className='phone' size={52} />
        },
    },
    //home data
    profileKart: {
        img: process.env.PUBLIC_URL + "/assets/EdebaliErman2.png",
        profileHeadText: {
            name: "EDEBALİ ERMAN",
            paragraph: `Hi guys, I'm 23 years old and graduated from Computer Programmer.`,
            paragraph2: ` Myself Front-End I am developing as an end developer`,
        },
        social: {
            github: 'https://github.com/EdebaliErman',
            linkedin: "https://www.linkedin.com/in/edebali-erman-a38821239/",
            githubSvg: <BsGithub size={32} />,
            linkedinSvg: <AiFillLinkedin size={32} />,
            mailSvg: <BsMailbox size={32} />
        }
    },
    //about data
    about: {
        img: process.env.PUBLIC_URL + "/assets/EdebaliErman2.png",
        text: {
            head: "ABOUT",
            job: "I AM FRONT-END DEVELOPER",
            paragraph: `Hello, I am Edebali Erman I am 23 years old, 
            I graduated from Computer Programming in 2017-2019.`,
            paragraph2: `Military service After fulfilling my military service, I started working as a Front-End Developer.`,
            paragraph3: `Every day I try to keep myself updated on my github account and discover new things,`,
            paragraph4: `I try to I'm constantly striving for renewal.`
        },
        total: {
            totalPulus: {
                year: "+01",
                commit: "+207",
                project: "+71"
            },
            totalText: {
                yearText: " YEARS EXPERIENCE",
                commitText: "TOTAL COMMİTS",
                projectText: "TOTAL PROJECTS"
            }
        }
    },
    //Project data
    project: [
        {
            title: `Pokemon`,
            url: process.env.PUBLIC_URL + "/assets/Pokemon.png",
            link: `https://edebalierman.github.io/`,
        },
        {
            title: `Card Game`,
            url: process.env.PUBLIC_URL + "/assets/cardgame.png",
            link: `https://github.com/EdebaliErman/kodluyoruz-redux-11`,
        },
        {
            title: `Mor Gruop`,
            url: process.env.PUBLIC_URL + "/assets/morgroup.png",
            link: `#`
        },
        {
            title: `Rick And Morty App`,
            url: process.env.PUBLIC_URL + "/assets/rickandmorty.png",
            link: `https://github.com/EdebaliErman/kodluyoruz-redux-01`,

        },
        {
            title: `To Do App`,
            url: "https://media.licdn.com/dms/image/D4D22AQEJnxXVXOS0vA/feedshare-shrink_1280/0/1682255914090?e=1695859200&v=beta&t=J7mF087TDDLaSwiWcVa03934UXVcF27udKI-kmSFHX8",
            link: `https://github.com/EdebaliErman/kodluyoruz-redux-01`
        },
        {
            title: `Shoping App`,
            url: "https://media.licdn.com/dms/image/C5622AQHvwUWPiXzxnQ/feedshare-shrink_2048_1536/0/1678851131914?e=1695859200&v=beta&t=sSH4joLBTdGxz4Z-Hfa9gQLmN4YgRrgb0i_fJAyDyNo",
            link: `https://github.com/EdebaliErman/kodluyoruz-react-19/tree/master`
        }, {
            title: `Chat App`,
            url: "https://media.licdn.com/dms/image/C4D22AQHVsEUofY2D9w/feedshare-shrink_2048_1536/0/1678314269130?e=1695859200&v=beta&t=FTLG7w8iXN79YFUDmO7pz4j4EvDIm8DqXCSfEt8e6Jk",
            link: `https://github.com/EdebaliErman/kodluyoruz-react-14`
        },
        {
            title: `Weather App`,
            url: "https://user-images.githubusercontent.com/105870243/223570020-e7dcedb0-ba6b-44db-b8f8-c7839d428bb2.png",
            link: `https://github.com/EdebaliErman/kodluyoruz-react-12`

        }
        , {
            title: `Element App`,
            url: "https://media.licdn.com/dms/image/D4D22AQFq_qXTmKJKZQ/feedshare-shrink_1280/0/1692711798847?e=1695859200&v=beta&t=4weo8tdSfZmjnhey42r-wpcNFGSv6ulAEUhdHvPF7Ok",
            link: `https://chimerical-macaron-e6c1a1.netlify.app/`
        },
        {
            title: `Discord Bot App`,
            url: "https://media.licdn.com/dms/image/D4D22AQHHdn2ZVbmPzQ/feedshare-shrink_800/0/1692378268185?e=1695859200&v=beta&t=iPFUuhuP_GgRwuVzV2jQe5pThcT65eVtAFsuTqbG-GY",
            link: `https://github.com/EdebaliErman/DiscordBot`

        },
        {
            title: `Weather App`,

            url: "https://media.licdn.com/dms/image/D4D22AQF9Rfqul6sGJQ/feedshare-shrink_2048_1536/0/1691000644690?e=1695859200&v=beta&t=wsy-XpzJNazi0-5agOab1idPsgr0LCkmc1qsbN3k87o",
            link: `https://storied-malasada-bbaf6d.netlify.app/`

        },
        {
            title: `Makropreviewer App`,
            url: "https://user-images.githubusercontent.com/105870243/255211376-007a03a7-4729-4f1c-90c3-0821fb4dbf32.png",
            link: `https://github.com/EdebaliErman/kodluyoruz-redux-09`

        }, {
            title: `Phone App`,
            url: "https://media.licdn.com/dms/image/D4D22AQFp-o9DMwyHRA/feedshare-shrink_800/0/1683208620305?e=1695859200&v=beta&t=Z4l1QY0waID0Dyf0ZJmMDl-r7wg3FC3GU73JQTw6BT4",
            link: `https://github.com/EdebaliErman/kodluyoruz-redux-06`

        },
        {
            title: `Money App`,
            url: "https://media.licdn.com/dms/image/D4D22AQEREpXAIlbTPw/feedshare-shrink_2048_1536/0/1682849944595?e=1695859200&v=beta&t=UCwQAntTknMgpFG_FpluOd_Kbf3_xbQzk0FS3uFWJjI",
            link: `https://github.com/EdebaliErman/kodluyoruz-redux-05`

        }
    ]

}



