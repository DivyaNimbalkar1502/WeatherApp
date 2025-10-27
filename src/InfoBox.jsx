import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({info}){
    let INIT_URL = "https://images.unsplash.com/photo-1592849574943-c9bc0eba752b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMwfHxkdXN0eSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600";
    let COLD_URL="https://images.unsplash.com/photo-1674407866481-a39b2239f771?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000";
    let HOT_URL="https://images.unsplash.com/photo-1615286628718-4a4c8924d0eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VubnklMjBza3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000";
    let RAIN_URL="https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.webp?a=1&b=1&s=612x612&w=0&k=20&c=AqmeafeXtSEbnuq1mxdDr9nSrXunta3huhlXpLRMnes=";
  return (
    <div className="InfoBox">
        <div className='cardContainer'>
          
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}
            
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div>Temperature : {info.temp}&deg;C</div>
            <div>Humidity : {info.humidity}</div>
            <div>Min Temp : {info.tempMin}&deg;C</div>
            <div>Max Temp : {info.tempMax}&deg;C</div>
            <div>The weather can be described as <i>{info.weather}</i> and it feels like {info.feelslike}&deg;C</div>


        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    )
}