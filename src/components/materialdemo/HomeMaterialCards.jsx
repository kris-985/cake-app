import { Box } from "@mui/material"
import SingleHomeCard from "../SingleHomeCard"

const HomeMaterialCards = () => {
  return (
    <Box sx={{ 
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: "blue",
        fontSize: '30px',
         }}>
    <SingleHomeCard />
    <SingleHomeCard />
    <SingleHomeCard />
    </Box>
  )
}

export default HomeMaterialCards