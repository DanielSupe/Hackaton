import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { Navbar } from "@/widgets/layout";
import { useDispatch } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import InfoIcon from '@mui/icons-material/Info';
export function TemplateHome() {

  const dispatch = useDispatch();



   const routes = [
  {
    name: "home",
    path: "/home",
    icon: <HomeIcon/>,
    element: <TemplateHome />,
  },
  {
    name: "Roles",
    href: "#RolesHome",
    icon: <AccessibilityIcon/>,
    element: <TemplateHome />,
  },
  {
    name: "Informacion",
    href: "#RolesHome",
    icon: <InfoIcon/>,
    element: <TemplateHome />,
  },
  {
    name: "Entrar",
    icon: <MeetingRoomIcon/>,
    path: "/iniciarSesion",
    element: <TemplateHome />,
  },
  
];

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="container absolute top-0 z-10  p-4">
          <Navbar routes={routes} />
        </div>
        <div className="absolute top-0 h-full w-full bg-[url('/Images/Home/image_1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />

        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black text-[30px] pt-[40px]"
              >
                ¡Querido héroe inicia tu historia con nosotros!
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 pt-[40px]">
                Es un honor tenerte aquí en el comienzo de tu gran aventura. En
                este lugar, te preparamos para enfrentar desafíos, superar
                obstáculos y alcanzar logros asombrosos. Cada paso que tomes te
                acercará más a convertirte en el héroe que estás destinado a
                ser. Tu mentor estará a tu lado, guiándote y apoyándote en cada
                etapa de tu viaje. Juntos, aprenderán nuevas habilidades,
                descubrirán secretos y enfrentarán adversidades con valentía y
                determinación.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-black",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-black " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Dont let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and youre good to go.
                Just make sure you enable them first via JavaScript.
              </Typography>
              <Button
                className=" bg-black text-white px-4 py-2"
                variant="filled"
              >
                read more
              </Button>
            </div>

            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg box-border p-4 Working with us is a pleasure">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    Enterprise
                  </Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="RolesHome" className="px-4 pt-20 pb-48 bg-[url('/Images/Home/FondoRoles.png')] bg-cover bg-center">
        <div className="container mx-auto">
          <PageTitle section="Roles" heading="Escoge tu rol favorito!">
           Tú eres el héroe. Como guerrero, lucharás con un hacha poderosa. Si eres caballero, usarás espada y escudo. Como mago, lanzarás hechizos mágicos. Y como arquero, dispararás flechas certeras. ¡Elige tu destino y salva el reino! ¿Qué héroe serás?
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Co-Working" heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-black",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TemplateHome;
