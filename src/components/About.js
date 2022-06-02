import { useEffect, useState } from "react";
import "./About.css";

function About() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/DogList.json")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setImages(result.images);
      });
  }, []);

  const imageList = images.map((image, index) => (
    <img className="chewie" key={index} src={image.img} />
  ));

  return (
    <>
      <div>
        <div className="text-box">
          <p>Detta är ett skolprojekt och skapades under min React kurs.</p>
          <p>
            Pga hälsa och komplikationer blev tyvärr inte sidan fräckare än
            såhär.
          </p>
          <p>
            Jag har använt mig av en API som heter{" "}
            <a href="https://openweathermap.org/">OpenWeather</a>. Denna har jag
            kopplat till ett event som fetchar när man har sökt i rutan.
          </p>
          <p>
            Jag insåg efter att jag kopplat min fetch till mitt event att jag
            inte använde useEffect eller map....... SUCK!!
          </p>
          <p>
            Detta löste jag dock med att fetcha en lokal json fil med bilder på
            anledningen till att jag inte varit i skolan den senaste tiden.
          </p>
          <h2>HERE IS CHEWBACCA! ENJOY!</h2>
        </div>
        <div className="img-box">{imageList}</div>
      </div>
    </>
  );
}
export default About;
