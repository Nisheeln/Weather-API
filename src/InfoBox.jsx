import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox( {info} ){
    const INIT_IMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCBQcuv-O9FKiT96EaM1Z-0FNGm9sR5ASrw&s";
    let hot = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWElHQHt9_YM2wFfdJy3kgmvIya-hdFs32nw&s";
    let rainy = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrEHtJE7auHQtU__t3ru5prkMKfy2PzlP94w&s";
    return(
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 60 ? rainy : info.temp > 20 ? hot : cold}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Temperature = {info.temp}&deg;C<br></br>
            Humidity = {info.humidity}<br></br>
            Temp Max = {info.tempMax}&deg;C<br></br>
            Temp Min = {info.tempMin}&deg;C<br></br>
            The weather can be describe as <i>{info.description}</i>and it Feels Like {info.feelsLike}&deg;C<br></br>

        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}