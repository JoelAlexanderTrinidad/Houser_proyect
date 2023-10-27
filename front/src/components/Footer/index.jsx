import { Typography } from "@material-tailwind/react"

export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t-2 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <h3>Houser Proyect</h3>
        
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Made by Daiana Gonzales & Joel Alexander Trinidad
      </Typography>
    </footer>
  )
}
