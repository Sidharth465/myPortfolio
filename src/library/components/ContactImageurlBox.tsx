import { FC } from "react"
import { Link } from "react-router-dom"

const ContactImageurlBox:FC<{image:any,url:string,height?:number,width?:number,bgColor?:string}> = ({image,url,height=30,width=30,bgColor="#3d3a3a"}) => {
  return (
    <Link style={{backgroundColor:bgColor}} to={url} target="#" className="flex rounded-md  flex-col items-center hover:cursor-pointer">
        <img style={{height:height,width:width,borderRadius:6}} src={image} />
    </Link>
  )
}

export default ContactImageurlBox