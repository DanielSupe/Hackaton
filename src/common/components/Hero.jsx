import React from 'react'
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-tailwind/react';
const Hero = ({boltTitle, normalTitle, paragraph, ButtonLink, urlImage}) => {
  return (
    <div className='h-full w-full box-border px-[5%] py-6'>
        <div className='w-full h-full  bg-gradient-to-r from-white to-gray-200 rounded-lg flex flex-col-reverse md:flex-row justify-center items-center'>
            <div className='w-full h-full md:w-[60%] flex flex-col justify-center items-start'>
                <h1 className=' text-start text-3xl py-8'><b>{boltTitle ? boltTitle:""}</b> {normalTitle}</h1>
                <p>{paragraph}</p>
                {ButtonLink ? (
                    <Link className=' my-4' to={ButtonLink.link}><Button className={ButtonLink.estilos}>{ButtonLink.textButton}</Button></Link>
                ):null}
            </div>
            <div className='w-full h-full md:w-[40%] flex justify-center items-center'>
                <Avatar src={urlImage}/>
            </div>
        </div>  
    </div>
  )
}

Hero.propTypes = {
    boltTitle: PropTypes.string,
    normalTitle: PropTypes.string.isRequired,
    paragraph: PropTypes.string,
    ButtonLink: PropTypes.any,
    urlImage: PropTypes.string.isRequired
  };

export default Hero