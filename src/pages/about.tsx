import Head from "next/head";
import Link from "next/link";
import { IconContext } from "react-icons";
import { CgArrowLongLeftR } from "react-icons/cg";

const About = () => {
    
  return (
    <>
      <Head>
        <title>About Kees</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <IconContext.Provider value={{size: "2.5em"}}>
        <div className="absolute flex flex-row w-full h-full justify-center">
            <div className="flex flex-col h-full justify-center">
                <p className="mx-8 text-center">
                    Hello! My name is Kees. I'm into maps, data science and the outdoors. If you want to chat, feel free to shoot me an email at keesvandenberg.dev@gmail.com.
                </p>
                <Link href="/" className="mt-8 w-full flex flex-row justify-center font-semibold font-bobs items-center cursor-pointer hover:underline">
                    <CgArrowLongLeftR />
                    <p className="text-4xl">Take Me Back to the Good Stuff</p>
                </Link>
            </div>
        </div>
        </IconContext.Provider>
      </main>
    </>
  );
};

export default About;