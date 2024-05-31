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
import { PageTitle, Footer, Navbar } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { useDispatch } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import InfoIcon from "@mui/icons-material/Info";
export function TemplateHome() {
  const dispatch = useDispatch();

  const routes = [
    {
      name: "home",
      path: "/home",
      icon: <HomeIcon />,
      element: <TemplateHome />,
    },
    {
      name: "Roles",
      href: "#RolesHome",
      icon: <AccessibilityIcon />,
      element: <TemplateHome />,
    },
    {
      name: "Informacion",
      href: "#RolesHome",
      icon: <InfoIcon />,
      element: <TemplateHome />,
    },
    {
      name: "Entrar",
      icon: <MeetingRoomIcon />,
      path: "/iniciarSesion",
      element: <TemplateHome />,
    },
  ];

  return (
    <>
      <div className="relative flex h-screen pt-16 pb-32">
        <div className="container absolute top-0 z-10 flex justify-between p-4">
          <Navbar routes={routes} />
        </div>
        <div className="absolute top-0 h-full w-full bg-[url('/Images/Home/image_1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />

        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <img className="w-auto h-[250px] m-auto" src="./Images/Home/logoWarrior.png" alt="logo" />
              <Typography
                variant="lead"
                color="white"
                className="opacity-80"
              >
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
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-[70px] w-full px-4 md:w-5/12">
              <Typography
                variant=""
                className="mb-3 font-bold text-[30px]"
                color="blue-gray"
              >
                La Fuerza del Trabajo en Equipo
              </Typography>
              <Typography className="mb-8 pt-10 font-normal text-[20px] text-blue-gray-500">
                El éxito de esta travesía depende de la colaboración entre el
                mentor y el héroe. Juntos, combinan la sabiduría y la
                experiencia del mentor con la energía y la innovación del héroe.
                Esta sinergia no solo facilita el aprendizaje y la resolución de
                problemas, sino que también impulsa la creatividad y la
                innovación.
                <br />
                <br />
                Al trabajar en equipo, se superan desafíos que serían imposibles
                de enfrentar individualmente. La clave está en la comunicación
                abierta, la confianza mutua y el compromiso compartido para
                alcanzar metas extraordinarias.
              </Typography>
            </div>

            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg box-border p-4 Working with us is a pleasure">
                <CardHeader floated={false} className="relative h-[330px]">
                  <img
                    alt="Card Image"
                    src="./Images/Home/imageHome1.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Consejo
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    El apoyo incondicional del mentor brinda al héroe la
                    confianza necesaria para explorar nuevas ideas y tomar
                    riesgos, acelerando su crecimiento y desarrollo personal.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section
        id="RolesHome"
        className="px-4 pt-20 pb-48 bg-[url('/Images/Home/FondoRoles.png')] bg-cover bg-center"
      >
        <div className="container mx-auto">
          <PageTitle section="Roles" heading="!Escoge tu rol favorito!">
            Tú eres el héroe. Como guerrero, lucharás con un hacha poderosa. Si
            eres caballero, usarás espada y escudo. Como mago, lanzarás hechizos
            mágicos. Y como arquero, dispararás flechas certeras. ¡Elige tu
            destino y salva el reino! ¿Qué héroe serás?
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name }) => (
              <TeamCard key={name} img={img} name={name} />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-white pt-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="¿Que gánaras con nostros?">
            <img className="w-auto h-auto m-auto" src="./Images/Home/imageHome2.png" alt="celebracion" />
            Tendras grandes beneficios en este viaje que estara lleno de
            aventuras y grandes desafios, algunos de estos beneficios son:
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-[1200px] grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900 bg-[url('/Images/Home/FondoRoles.png')] bg-cover w-[380px] h-[220px]"
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
